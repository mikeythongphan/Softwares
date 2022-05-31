using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace ConsoleApp1
{
    public partial class Model2 : DbContext
    {
        public Model2()
            : base("name=Model2")
        {
        }

        public virtual DbSet<FormEmployment> FormEmployments { get; set; }
        public virtual DbSet<FormVisaFiance> FormVisaFiances { get; set; }
        public virtual DbSet<FormVisaParent> FormVisaParents { get; set; }
        public virtual DbSet<FormVisaSpouse> FormVisaSpouses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
