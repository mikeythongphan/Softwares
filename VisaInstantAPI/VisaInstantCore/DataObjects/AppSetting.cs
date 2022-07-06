namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AppSetting")]
    public partial class AppSetting
    {
        public long Id { get; set; }

        [StringLength(1000)]
        public string Category { get; set; }

        [StringLength(1000)]
        public string Name { get; set; }

        public string Value { get; set; }

        public bool Deleted { get; set; }
    }
}
