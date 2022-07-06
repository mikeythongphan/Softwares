namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FormTravelDocument")]
    public partial class FormTravelDocument
    {
        public long Id { get; set; }

        public long? AccountId { get; set; }

        [StringLength(1000)]
        public string Personal01FullName { get; set; }

        public bool? Personal01GenderMale { get; set; }

        public bool? Personal01GenderFemale { get; set; }

        [StringLength(1000)]
        public string Personal01AnotherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal01DateOfBirth { get; set; }

        [StringLength(1000)]
        public string Personal01BirthPlace { get; set; }

        [StringLength(1000)]
        public string Personal01BirthNationality { get; set; }

        [StringLength(1000)]
        public string Personal01CurrentNationality { get; set; }

        [StringLength(1000)]
        public string Personal01IDNumber { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal011IssueDate { get; set; }

        [StringLength(1000)]
        public string Personal011PlaceOfIssue { get; set; }

        [StringLength(1000)]
        public string Personal01PassportNumber { get; set; }

        [StringLength(1000)]
        public string Personal012PlaceOfIssue { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal012IssueDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal01ExpirationDate { get; set; }

        [StringLength(1000)]
        public string Personal02OtherNationality { get; set; }

        [StringLength(1000)]
        public string Personal02PassportNumber { get; set; }

        [StringLength(1000)]
        public string Personal02Address { get; set; }

        [StringLength(1000)]
        public string Personal02CurrentAddress { get; set; }

        [StringLength(1000)]
        public string Personal02HomePhone { get; set; }

        [StringLength(1000)]
        public string Personal02CellPhone { get; set; }

        [StringLength(1000)]
        public string Personal02Email { get; set; }

        public bool? Personal02OtherPhoneEmailNo { get; set; }

        public bool? Personal02OtherPhoneEmailYes { get; set; }

        public bool? Personal02UseSocialMediaNo { get; set; }

        public bool? Personal02UseSocialMediaYes { get; set; }

        [StringLength(1000)]
        public string Personal02ListMoreSocialMedia { get; set; }

        [StringLength(1000)]
        public string Personal02UserNameSocialMedia { get; set; }

        public bool? Personal03MaritalStatusSingle { get; set; }

        public bool? Personal03MaritalStatusMarried { get; set; }

        public bool? Personal03MaritalStatusWidow { get; set; }

        public bool? Personal03MaritalStatusDivorce { get; set; }

        public bool? Personal03MaritalStatusSeparation { get; set; }

        [StringLength(1000)]
        public string Personal03NameOfHusbandWife { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal03DateOfBirth { get; set; }

        [StringLength(1000)]
        public string Personal03BirthPlace { get; set; }

        [StringLength(1000)]
        public string Personal03Nationality { get; set; }

        [StringLength(1000)]
        public string Personal03Address { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal03MarriageRegistrationDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Personal03DivorceProcedureDate { get; set; }

        public bool? Personal03EverLostPassportNo { get; set; }

        public bool? Personal03EverLostPassportYes { get; set; }

        [StringLength(1000)]
        public string Personal03PassportNumber { get; set; }

        [StringLength(1000)]
        public string Trip04TripPurpose { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip04IntendedDateArrival { get; set; }

        [StringLength(1000)]
        public string Trip04IntendedArrivalCity { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip04IntendedDateLeaving { get; set; }

        [StringLength(1000)]
        public string Trip04IntendedLeavingCity { get; set; }

        [StringLength(1000)]
        public string Trip04PlacesToVisit { get; set; }

        [StringLength(1000)]
        public string Trip04WhereStayUS { get; set; }

        public bool? Trip04SponsorTripNo { get; set; }

        public bool? Trip04SponsorTripYes { get; set; }

        [StringLength(1000)]
        public string Trip04FullName { get; set; }

        [StringLength(1000)]
        public string Trip04Relationship { get; set; }

        [StringLength(1000)]
        public string Trip04Address { get; set; }

        [StringLength(1000)]
        public string Trip04PhoneNumber { get; set; }

        public bool? Trip05EverEnteredUSNo { get; set; }

        public bool? Trip05EverEnteredUSYes { get; set; }

        public bool? Trip05EverFingerprintedNo { get; set; }

        public bool? Trip05EverFingerprintedYes { get; set; }

        [StringLength(1000)]
        public string Trip051VisaType { get; set; }

        [StringLength(1000)]
        public string Trip051VisaNumber { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip051DateOfIssue { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip051ExpirationDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip051LengthStayFrom { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip051LengthStayTo { get; set; }

        [StringLength(1000)]
        public string Trip052VisaType { get; set; }

        [StringLength(1000)]
        public string Trip052VisaNumber { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip052DateOfIssue { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip052ExpirationDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip052LengthStayFrom { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip052LengthStayTo { get; set; }

        [StringLength(1000)]
        public string Trip053VisaType { get; set; }

        [StringLength(1000)]
        public string Trip053VisaNumber { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip053DateOfIssue { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip053ExpirationDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip053LengthStayFrom { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Trip053LengthStayTo { get; set; }

        public bool? Trip06EverRefusedVisaNo { get; set; }

        public bool? Trip06EverRefusedVisaYes { get; set; }

        [StringLength(1000)]
        public string Trip061Time { get; set; }

        [StringLength(1000)]
        public string Trip061Reason { get; set; }

        public bool? Trip06EverRefusedPermissionNo { get; set; }

        public bool? Trip06EverRefusedPermissionYes { get; set; }

        [StringLength(1000)]
        public string Trip062Time { get; set; }

        [StringLength(1000)]
        public string Trip062Reason { get; set; }

        [StringLength(1000)]
        public string Trip06CountriesVisited5Years { get; set; }

        [StringLength(1000)]
        public string Trip06LanguagesYouKnow { get; set; }

        [StringLength(1000)]
        public string UsContact07FullName { get; set; }

        [StringLength(1000)]
        public string UsContact07BelongsToOrganization { get; set; }

        [StringLength(1000)]
        public string UsContact07Address { get; set; }

        [StringLength(1000)]
        public string UsContact07PhoneNumber { get; set; }

        [StringLength(1000)]
        public string UsContact07Email { get; set; }

        [StringLength(1000)]
        public string UsContact07RelationshipApplicant { get; set; }

        [StringLength(1000)]
        public string Family08FatherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Family081DateOfBirth { get; set; }

        [StringLength(1000)]
        public string Family081CurrentAddress { get; set; }

        [StringLength(1000)]
        public string Family08MotherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Family082DateOfBirth { get; set; }

        [StringLength(1000)]
        public string Family082CurrentAddress { get; set; }

        public bool? Family09BloodRelativesNo { get; set; }

        public bool? Family09BloodRelativesYes { get; set; }

        [StringLength(1000)]
        public string Family091FullName { get; set; }

        [StringLength(1000)]
        public string Family091Relationship { get; set; }

        public bool? Family091StatusCitizen { get; set; }

        public bool? Family091StatusPermanentResident { get; set; }

        public bool? Family091StatusNonimmigrant { get; set; }

        public bool? Family091StatusOther { get; set; }

        [StringLength(1000)]
        public string Family091OtherStatus { get; set; }

        [StringLength(1000)]
        public string Family092FullName { get; set; }

        [StringLength(1000)]
        public string Family092Relationship { get; set; }

        public bool? Family092StatusCitizen { get; set; }

        public bool? Family092StatusPermanentResident { get; set; }

        public bool? Family092StatusNonimmigrant { get; set; }

        public bool? Family092StatusOther { get; set; }

        [StringLength(1000)]
        public string Family092OtherStatus { get; set; }

        public bool? Family10OtherRelativesNo { get; set; }

        public bool? Family10OtherRelativesYes { get; set; }

        [StringLength(1000)]
        public string Family101FullName { get; set; }

        [StringLength(1000)]
        public string Family101Relationship { get; set; }

        public bool? Family101StatusCitizen { get; set; }

        public bool? Family101StatusPermanentResident { get; set; }

        public bool? Family101StatusNonimmigrant { get; set; }

        public bool? Family101StatusOther { get; set; }

        [StringLength(1000)]
        public string Family101OtherStatus { get; set; }

        [StringLength(1000)]
        public string Family102FullName { get; set; }

        [StringLength(1000)]
        public string Family102Relationship { get; set; }

        public bool? Family102StatusCitizen { get; set; }

        public bool? Family102StatusPermanentResident { get; set; }

        public bool? Family102StatusNonimmigrant { get; set; }

        public bool? Family102StatusOther { get; set; }

        [StringLength(1000)]
        public string Family102OtherStatus { get; set; }

        [StringLength(1000)]
        public string Job11WorkUnit { get; set; }

        [StringLength(1000)]
        public string Job11Position { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job11FromDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job11ToDate { get; set; }

        [StringLength(1000)]
        public string Job11JobDescription { get; set; }

        [StringLength(1000)]
        public string Job11MonthlyIncome { get; set; }

        [StringLength(1000)]
        public string Job11CompanyAddress { get; set; }

        [StringLength(1000)]
        public string Job11CompanyPhone { get; set; }

        [StringLength(1000)]
        public string Job11FullNameDdirector { get; set; }

        public bool? Job12OtherJobNo { get; set; }

        public bool? Job12OtherJobYes { get; set; }

        [StringLength(1000)]
        public string Job12UnitOfWork { get; set; }

        [StringLength(1000)]
        public string Job12Position { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job12FromDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job12ToDate { get; set; }

        [StringLength(1000)]
        public string Job12JobDescription { get; set; }

        [StringLength(1000)]
        public string Job12CompanyAddress { get; set; }

        [StringLength(1000)]
        public string Job12CompanyPhone { get; set; }

        [StringLength(1000)]
        public string Job12FullNameDirector { get; set; }

        [StringLength(1000)]
        public string Job13School { get; set; }

        [StringLength(1000)]
        public string Job13Address { get; set; }

        [StringLength(1000)]
        public string Job13Courses { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job13FromDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Job13ToDate { get; set; }

        public bool Deleted { get; set; }
    }
}
