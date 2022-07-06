namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Customer")]
    public partial class Customer
    {
        public long Id { get; set; }

        [StringLength(1000)]
        public string FirstName { get; set; }

        [StringLength(1000)]
        public string MiddleName { get; set; }

        [StringLength(1000)]
        public string LastName { get; set; }

        public bool Deleted { get; set; }
    }
}
