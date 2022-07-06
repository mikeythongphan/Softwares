namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SiteContent")]
    public partial class SiteContent
    {
        public long Id { get; set; }

        public short? ContentTypeId { get; set; }

        [StringLength(255)]
        public string PageName { get; set; }

        [StringLength(100)]
        public string FieldName { get; set; }

        public string ENUS { get; set; }

        public string VN { get; set; }

        public bool Deleted { get; set; }
    }
}
