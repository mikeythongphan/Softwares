namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Dictionary")]
    public partial class Dictionary
    {
        public int Id { get; set; }

        public int LanguageId { get; set; }

        [Required]
        [StringLength(100)]
        public string Keyword { get; set; }

        [StringLength(1000)]
        public string Name { get; set; }

        [Column(TypeName = "ntext")]
        public string Value { get; set; }

        public bool Deleted { get; set; }

        public virtual Keyword Keyword1 { get; set; }

        public virtual Language Language { get; set; }
    }
}
