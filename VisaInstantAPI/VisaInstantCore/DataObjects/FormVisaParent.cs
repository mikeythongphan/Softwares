namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FormVisaParent")]
    public partial class FormVisaParent
    {
        public long Id { get; set; }

        public long? AccountId { get; set; }

        [StringLength(1000)]
        public string PetitionerContactFirstName { get; set; }

        [StringLength(1000)]
        public string PetitionerContactMiddleName { get; set; }

        [StringLength(1000)]
        public string PetitionerContactLastName { get; set; }

        [StringLength(1000)]
        public string PetitionerContactDaytimeTelephoneNumber { get; set; }

        [StringLength(1000)]
        public string PetitionerContactEmailAddress { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerContactDateOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerContactAlienRegistrationNumber { get; set; }

        [StringLength(1000)]
        public string PetitionerContactCountryOfCitizenship { get; set; }

        public bool? SponsorsContactMailingStreetAddressApt { get; set; }

        public bool? SponsorsContactMailingStreetAddressSte { get; set; }

        public bool? SponsorsContactMailingStreetAddressFlr { get; set; }

        [StringLength(1000)]
        public string SponsorsContactMailingStreetNumber { get; set; }

        [StringLength(1000)]
        public string SponsorsContactCityOrTown { get; set; }

        [StringLength(1000)]
        public string SponsorsContactState { get; set; }

        [StringLength(1000)]
        public string SponsorsContactProvince { get; set; }

        [StringLength(1000)]
        public string SponsorsContactZipCode { get; set; }

        [StringLength(1000)]
        public string SponsorsContactCountry { get; set; }

        public bool? SponsorsContactDifferentPhysicalYes { get; set; }

        public bool? SponsorsContactDifferentPhysicalNo { get; set; }

        [StringLength(1000)]
        public string SponsorInformationEmployedAs { get; set; }

        [StringLength(1000)]
        public string SponsorInformationNameOfEmployer1 { get; set; }

        [StringLength(1000)]
        public string SponsorInformationNameOfEmployer2 { get; set; }

        [StringLength(1000)]
        public string SponsorInformationSelfEmployed { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorInformationRetiredSince { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorInformationUnemployedSince { get; set; }

        [StringLength(1000)]
        public string SponsorInformationAnnualIncomeIs { get; set; }

        [StringLength(1000)]
        public string SponsorInformationAnnualHouseholdIs { get; set; }

        [StringLength(1000)]
        public string SponsorInformationTaxYearMostRecent { get; set; }

        [StringLength(1000)]
        public string SponsorInformation2ndMostRecent { get; set; }

        [StringLength(1000)]
        public string SponsorInformation3rdMostRecent { get; set; }

        public bool? SponsorInformationIRSRequiredLevelYes { get; set; }

        public bool? SponsorInformationIRSRequiredLevelNo { get; set; }

        [StringLength(1000)]
        public string SponsorStatusSocialSecurityNumber { get; set; }

        public bool? SponsorStatusMaritalStatusUSCitizen { get; set; }

        public bool? SponsorStatusMaritalStatusUSNational { get; set; }

        public bool? SponsorStatusMaritalStatusGreenCard { get; set; }

        [StringLength(1000)]
        public string SponsorStatusAlienNumber { get; set; }

        [StringLength(1000)]
        public string SponsorStatusCountryOfDomicile { get; set; }

        public bool? SponsorStatusUSArmedForcesYes { get; set; }

        public bool? SponsorStatusUSArmedForcesNo { get; set; }

        public bool? SponsorStatusCurrentlyMarriedYes { get; set; }

        public bool? SponsorStatusCurrentlyMarriedNo { get; set; }

        public bool? SponsorStatusDependentChildrenYes { get; set; }

        public bool? SponsorStatusDependentChildrenNo { get; set; }

        public bool? SponsorStatusPreviouslyMarriedYes { get; set; }

        public bool? SponsorStatusPreviouslyMarriedNo { get; set; }

        public bool? SponsorGenderPrincipalImmigrantMale { get; set; }

        public bool? SponsorGenderPrincipalImmigrantFemale { get; set; }

        public bool? SponsorGenderWithinSixMonthsImmigrantMale { get; set; }

        public bool? SponsorGenderWithinSixMonthsImmigrantFemale { get; set; }

        public bool? SponsorGenderMoreThanSixMonthsImmigrantMale { get; set; }

        public bool? SponsorGenderMoreThanSixMonthsImmigrantFemale { get; set; }

        public bool? SponsorAddressStreetApt { get; set; }

        public bool? SponsorAddressStreetSte { get; set; }

        public bool? SponsorAddressStreetFlr { get; set; }

        [StringLength(1000)]
        public string SponsorAddressStreetNumber { get; set; }

        [StringLength(1000)]
        public string SponsorAddressCityOrTown { get; set; }

        [StringLength(1000)]
        public string SponsorAddressState { get; set; }

        [StringLength(1000)]
        public string SponsorAddressProvince { get; set; }

        [StringLength(1000)]
        public string SponsorAddressZipCode { get; set; }

        [StringLength(1000)]
        public string SponsorAddressCountry { get; set; }

        [StringLength(1000)]
        public string SponsorNameFirstName { get; set; }

        [StringLength(1000)]
        public string SponsorNameMiddleName { get; set; }

        [StringLength(1000)]
        public string SponsorNameLastName { get; set; }

        [StringLength(1000)]
        public string SponsorName1DaytimeTelephoneNumber { get; set; }

        [StringLength(1000)]
        public string SponsorName2DaytimeTelephoneNumber { get; set; }

        [StringLength(1000)]
        public string SponsorNameEmailAddress { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorNameDateOfBirth { get; set; }

        [StringLength(1000)]
        public string SponsorNameAlienRegistrationNumber { get; set; }

        [StringLength(1000)]
        public string SponsorNameCountry { get; set; }

        [StringLength(1000)]
        public string InterpreterNameFirstName { get; set; }

        [StringLength(1000)]
        public string InterpreterNameLastName { get; set; }

        [StringLength(1000)]
        public string InterpreterNameBusinessOrOrganization { get; set; }

        public bool? InterpreterNameStreetApt { get; set; }

        public bool? InterpreterNameStreetSte { get; set; }

        public bool? InterpreterNameStreetFlr { get; set; }

        [StringLength(1000)]
        public string InterpreterNameStreetNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterNameCityOrTown { get; set; }

        [StringLength(1000)]
        public string InterpreterNameProvince { get; set; }

        [StringLength(1000)]
        public string InterpreterNameZipCode { get; set; }

        [StringLength(1000)]
        public string InterpreterNameCountry { get; set; }

        [StringLength(1000)]
        public string InterpreterNameDaytimeTelephoneNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterNameEmailAddress { get; set; }

        public bool Deleted { get; set; }
    }
}
