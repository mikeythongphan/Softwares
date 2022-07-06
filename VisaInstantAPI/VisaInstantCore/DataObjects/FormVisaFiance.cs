namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FormVisaFiance")]
    public partial class FormVisaFiance
    {
        public long Id { get; set; }

        public long? AccountId { get; set; }

        [StringLength(1000)]
        public string Beneficiary1FullName { get; set; }

        [StringLength(1000)]
        public string Beneficiary1PlaceOfBirth { get; set; }

        public bool? Beneficiary1HasBeenUSYes { get; set; }

        public bool? Beneficiary1HasBeenUSNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary1NamesUsed { get; set; }

        [StringLength(1000)]
        public string Beneficiary1GreenCardNumber { get; set; }

        [StringLength(1000)]
        public string Beneficiary1SocialSecurityNumber { get; set; }

        [StringLength(1000)]
        public string Beneficiary1ConsularOfficeWishes { get; set; }

        [StringLength(1000)]
        public string Beneficiary1PrimaryLanguage { get; set; }

        [StringLength(1000)]
        public string Beneficiary1HomePhoneNumber { get; set; }

        [StringLength(1000)]
        public string Beneficiary1Mobile { get; set; }

        [StringLength(1000)]
        public string Beneficiary1OfficeTelephone { get; set; }

        [StringLength(1000)]
        public string Beneficiary1FaxNumber { get; set; }

        [StringLength(1000)]
        public string Beneficiary1EmailAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary1FatherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary1FatherDateOfBirth { get; set; }

        [StringLength(1000)]
        public string Beneficiary1FatherPlaceOfBirth { get; set; }

        [StringLength(1000)]
        public string Beneficiary1FatherCityCountryResidence { get; set; }

        [StringLength(1000)]
        public string Beneficiary1MotherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary1MotherDateOfBirth { get; set; }

        [StringLength(1000)]
        public string Beneficiary1MotherPlaceOfBirth { get; set; }

        [StringLength(1000)]
        public string Beneficiary1MotherCityCountryResidence { get; set; }

        [StringLength(1000)]
        public string Beneficiary11NameOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary11BirthDateOfExSpouse { get; set; }

        [StringLength(1000)]
        public string Beneficiary11BirthPlaceOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary11DateOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary11PlaceOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary12NameOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary12BirthDateOfExSpouse { get; set; }

        [StringLength(1000)]
        public string Beneficiary12BirthPlaceOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary12DateOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary12PlaceOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary13NameOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary13BirthDateOfExSpouse { get; set; }

        [StringLength(1000)]
        public string Beneficiary13BirthPlaceOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary13DateOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary13PlaceOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary14NameOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary14BirthDateOfExSpouse { get; set; }

        [StringLength(1000)]
        public string Beneficiary14BirthPlaceOfExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary14DateOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary14PlaceOfMarriage { get; set; }

        [StringLength(1000)]
        public string Beneficiary21CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Beneficiary21City { get; set; }

        [StringLength(1000)]
        public string Beneficiary21StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary21ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary21FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary21ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary22CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Beneficiary22City { get; set; }

        [StringLength(1000)]
        public string Beneficiary22StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary22ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary22FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary22ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary23CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Beneficiary23City { get; set; }

        [StringLength(1000)]
        public string Beneficiary23StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary23ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary23FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary23ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary24CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Beneficiary24City { get; set; }

        [StringLength(1000)]
        public string Beneficiary24StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary24ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary24FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary24ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary25CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Beneficiary25City { get; set; }

        [StringLength(1000)]
        public string Beneficiary25StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary25ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary25FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary25ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary3HouseStreetName { get; set; }

        [StringLength(1000)]
        public string Beneficiary3City { get; set; }

        [StringLength(1000)]
        public string Beneficiary3StateCounty { get; set; }

        [StringLength(1000)]
        public string Beneficiary3ZipCode { get; set; }

        [StringLength(1000)]
        public string Beneficiary3FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary3ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary41NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary41Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary41FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary41ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary42NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary42Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary42FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary42ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary43NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary43Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary43FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary43ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary44NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary44Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary44FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary44ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary45NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Beneficiary45Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary45FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary45ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary5NameAddressWork { get; set; }

        [StringLength(1000)]
        public string Beneficiary5Position { get; set; }

        [StringLength(1000)]
        public string Beneficiary5FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary5ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Beneficiary5AllPreviousVisaRefusals { get; set; }

        public bool? Beneficiary5HasAppliedWorkPermitYes { get; set; }

        public bool? Beneficiary5HasAppliedWorkPermitNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary5WhenAndWhere { get; set; }

        public bool? Beneficiary5ApprovedYes { get; set; }

        public bool? Beneficiary5ApprovedNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary5NamesOrganizationsMember { get; set; }

        [StringLength(1000)]
        public string Beneficiary5DescribePeopleMet { get; set; }

        public bool? Beneficiary5CanMatchmakingYes { get; set; }

        public bool? Beneficiary5CanMatchmakingNo { get; set; }

        public bool? Beneficiary5HaveEverViolatedYes { get; set; }

        public bool? Beneficiary5HaveEverViolatedNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary5ViolatedProvideDetails { get; set; }

        public bool? Beneficiary5HasEverSufferedYes { get; set; }

        public bool? Beneficiary5HasEverSufferedNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary5SufferedProvideDetails { get; set; }

        public bool? Beneficiary5HasInMilitaryYes { get; set; }

        public bool? Beneficiary5HasInMilitaryNo { get; set; }

        [StringLength(1000)]
        public string Beneficiary5NameOfOrganization { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Beneficiary5EnlistmentDate { get; set; }

        [StringLength(1000)]
        public string Beneficiary5WhereToEnlist { get; set; }

        [StringLength(1000)]
        public string Sponsor1Name { get; set; }

        [StringLength(1000)]
        public string Sponsor1BirthPlace { get; set; }

        public bool? Sponsor1IsFianceYes { get; set; }

        public bool? Sponsor1IsFianceNo { get; set; }

        [StringLength(1000)]
        public string Sponsor1NamesUsed { get; set; }

        [StringLength(1000)]
        public string Sponsor1GreenCardNumber { get; set; }

        [StringLength(1000)]
        public string Sponsor1SocialSecurityNumber { get; set; }

        [StringLength(1000)]
        public string Sponsor1HomePhoneNumber { get; set; }

        [StringLength(1000)]
        public string Sponsor1Mobile { get; set; }

        [StringLength(1000)]
        public string Sponsor1OfficePhone { get; set; }

        [StringLength(1000)]
        public string Sponsor1FaxNumber { get; set; }

        [StringLength(1000)]
        public string Sponsor1EmailAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor1FatherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor1FatherBirthDate { get; set; }

        [StringLength(1000)]
        public string Sponsor1FatherBirthPlace { get; set; }

        [StringLength(1000)]
        public string Sponsor1FatherCityCountry { get; set; }

        [StringLength(1000)]
        public string Sponsor1MotherName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor1MotherBirthDate { get; set; }

        [StringLength(1000)]
        public string Sponsor1MotherBirthPlace { get; set; }

        [StringLength(1000)]
        public string Sponsor1MotherCityCountry { get; set; }

        [StringLength(1000)]
        public string Sponsor11NameExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor11BirthDateExSpouse { get; set; }

        [StringLength(1000)]
        public string Sponsor11BirthplaceExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor11MarriageDate { get; set; }

        [StringLength(1000)]
        public string Sponsor11MarriagePlace { get; set; }

        [StringLength(1000)]
        public string Sponsor12NameExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor12BirthDateExSpouse { get; set; }

        [StringLength(1000)]
        public string Sponsor12BirthPlaceExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor12MarriageDate { get; set; }

        [StringLength(1000)]
        public string Sponsor12MarriagePlace { get; set; }

        [StringLength(1000)]
        public string Sponsor13NameExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor13BirthDateExSpouse { get; set; }

        [StringLength(1000)]
        public string Sponsor13BirthPlaceExSpouse { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Sponsor13MarriageDate { get; set; }

        [StringLength(1000)]
        public string Sponsor13MarriagePlace { get; set; }

        [StringLength(1000)]
        public string Sponsor21CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Sponsor21City { get; set; }

        [StringLength(1000)]
        public string Sponsor21StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor21ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor21FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor21ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor22CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Sponsor22City { get; set; }

        [StringLength(1000)]
        public string Sponsor22StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor22ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor22FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor22ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor23CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Sponsor23City { get; set; }

        [StringLength(1000)]
        public string Sponsor23StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor23ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor23FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor23ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor24CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Sponsor24City { get; set; }

        [StringLength(1000)]
        public string Sponsor24StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor24ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor24FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor24ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor25CurrentHouseStreet { get; set; }

        [StringLength(1000)]
        public string Sponsor25City { get; set; }

        [StringLength(1000)]
        public string Sponsor25StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor25ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor25FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor25ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor3HouseStreetName { get; set; }

        [StringLength(1000)]
        public string Sponsor3City { get; set; }

        [StringLength(1000)]
        public string Sponsor3StateCounty { get; set; }

        [StringLength(1000)]
        public string Sponsor3ZipCode { get; set; }

        [StringLength(1000)]
        public string Sponsor3FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor3ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor41NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor41Position { get; set; }

        [StringLength(1000)]
        public string Sponsor41FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor41ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor42NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor42Position { get; set; }

        [StringLength(1000)]
        public string Sponsor42FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor42ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor43NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor43Position { get; set; }

        [StringLength(1000)]
        public string Sponsor43FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor43ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor44NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor44Position { get; set; }

        [StringLength(1000)]
        public string Sponsor44FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor44ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor45NameWorkplaceAddress { get; set; }

        [StringLength(1000)]
        public string Sponsor45Position { get; set; }

        [StringLength(1000)]
        public string Sponsor45FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor45ToMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor5NameAddressWork { get; set; }

        [StringLength(1000)]
        public string Sponsor5Position { get; set; }

        [StringLength(1000)]
        public string Sponsor5FromMonthYear { get; set; }

        [StringLength(1000)]
        public string Sponsor5ToMonthYear { get; set; }

        public bool? BeneficiaryProfileFormI94 { get; set; }

        public bool? BeneficiaryProfileBirthCertificate { get; set; }

        public bool? BeneficiaryProfileI20Documents { get; set; }

        public bool? BeneficiaryProfileCriminalRecord { get; set; }

        public bool? BeneficiaryProfilePassportPhotos { get; set; }

        public bool? BeneficiaryProfilePreviousDivorce { get; set; }

        public bool? BeneficiaryProfilePapersRelated { get; set; }

        public bool? SponsorProfileLetterConfirmation { get; set; }

        public bool? SponsorProfileBankStatement { get; set; }

        public bool? SponsorProfileTaxReturns { get; set; }

        public bool? SponsorProfileW2PaystubsChecks { get; set; }

        public bool? SponsorProfileDocumentsShowing { get; set; }

        public bool? SponsorProfilePassportPhotos { get; set; }

        public bool? SponsorProfilePreviousDivorce { get; set; }

        public bool Deleted { get; set; }
    }
}
