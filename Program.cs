// See https://aka.ms/new-console-template for more information


using iTextSharp.text.pdf;
using System.IO;
using System;
using System.Data.Entity;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Linq;
using VisaInstantLibrary;
using static iTextSharp.text.pdf.AcroFields;
using System.Reflection;

int formId = 1;
string formName = "FormVisaFiance";

using (var dbcontext = new VisaInstantEntities())
{
    var formXRefs = dbcontext.FormXRefs.Where(x => x.FormName == formName).ToList();
    var templateFiles = dbcontext.TemplateFiles.Where(x => x.FormName == formName).FirstOrDefault();

    if (formXRefs != null && formXRefs.Count > 0 && templateFiles != null)
    {
        byte[]? btPdfSrc = templateFiles.FileContent;

        //string src = @"C:\Users\thong\Downloads\Documents\I-129F-form.pdf";
        //string dest = @"C:\Users\thong\Downloads\Documents\I-129F-form-filled.pdf";

        //if (File.Exists(dest))
        //    File.Delete(dest);

        MemoryStream outputStream = new MemoryStream();

        var reader = new iTextSharp.text.pdf.PdfReader(btPdfSrc);
        //PdfStamper stamper = new PdfStamper(reader, new FileStream(dest, FileMode.Create));
        PdfStamper stamper = new PdfStamper(reader, outputStream);
        AcroFields form = stamper.AcroFields;

        foreach (var formRef in formXRefs)
        {
            var results = dbcontext.Set("VisaInstantLibrary." + formRef.FormName)
            .Find(6);

            if (results != null)
            {
                System.Reflection.PropertyInfo? pi = results.GetType().GetProperty(formRef.DBField);

                if (pi != null)
                {
                    if (pi.PropertyType == typeof(string))
                        form.SetField(formRef.PDFField, (String)pi.GetValue(results, null));
                    else if (pi.PropertyType == typeof(DateTime))
                        form.SetField(formRef.PDFField, ((DateTime)(pi.GetValue(results, null))).ToShortDateString());
                }
            }
        }

        var downloadFile = new DownloadFile()
        {
            FormId = formId,
            FormName = formName,
            FileContent = outputStream.GetBuffer(),
            FileExtension = templateFiles.FileExtension,
            FileName = templateFiles.FileName
        };

        dbcontext.DownloadFiles.Add(downloadFile);
        dbcontext.SaveChanges();

        stamper.Close();
        reader.Close();

        Console.WriteLine("Done!");
        Console.ReadLine();
    }
}

void StoreTemplateFileToDB(string filePath, string formName)
{
    try
    {
        using (var dbcontext = new VisaInstantEntities())
        {
            var templateFile = new TemplateFile()
            {
                FormName = formName,
                FileContent = File.ReadAllBytes(filePath),
                FileExtension = Path.GetExtension(filePath),
                FileName = Path.GetFileName(filePath)
            };

            dbcontext.TemplateFiles.Add(templateFile);
            dbcontext.SaveChanges();
        }
    }
    catch(Exception ex)
    {
        throw ex;
    }
}
