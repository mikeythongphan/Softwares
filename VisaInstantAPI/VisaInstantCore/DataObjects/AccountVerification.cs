namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AccountVerification")]
    public partial class AccountVerification
    {
        public long Id { get; set; }

        [Required]
        [StringLength(6)]
        public string VerificationCode { get; set; }

        public byte TargetTypeId { get; set; }

        [Required]
        [StringLength(100)]
        public string Target { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? ExpiredAt { get; set; }

        public bool Deleted { get; set; }
    }
}
