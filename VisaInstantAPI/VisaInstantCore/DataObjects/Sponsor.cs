namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Sponsor")]
    public partial class Sponsor
    {
        public long Id { get; set; }

        [StringLength(1000)]
        public string SponsorFirstName { get; set; }

        [StringLength(1000)]
        public string SponsorMiddleName { get; set; }

        [StringLength(1000)]
        public string SponsorLastName { get; set; }

        public bool Deleted { get; set; }
    }
}
