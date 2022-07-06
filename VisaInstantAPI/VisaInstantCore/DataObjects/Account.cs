namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Account")]
    public partial class Account
    {
        public long Id { get; set; }

        [StringLength(450)]
        public string AspNetUserId { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }

        [StringLength(100)]
        public string LastName { get; set; }

        [StringLength(100)]
        public string Address { get; set; }

        [StringLength(100)]
        public string City { get; set; }

        [StringLength(2)]
        public string StateProvince { get; set; }

        [StringLength(10)]
        public string PostalCode { get; set; }

        [StringLength(20)]
        public string PhoneNumber { get; set; }

        [StringLength(256)]
        public string Email { get; set; }

        [StringLength(1000)]
        public string FirebaseChatToken { get; set; }

        public bool Deleted { get; set; }
    }
}
