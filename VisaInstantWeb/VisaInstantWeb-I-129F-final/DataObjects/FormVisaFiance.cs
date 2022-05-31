namespace ConsoleApp1
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
        public string PetitionerContactFirstName { get; set; }

        [StringLength(1000)]
        public string PetitionerContactMiddleName { get; set; }

        [StringLength(1000)]
        public string PetitionerContactLastName { get; set; }

        public bool? PetitionerContactOtherNamesUsedYes { get; set; }

        public bool? PetitionerContactOtherNamesUsedNo { get; set; }

        [StringLength(1000)]
        public string PetitionerContactEmailAddress { get; set; }

        public bool? PetitionerContactRelatedFianceYes { get; set; }

        public bool? PetitionerContactRelatedFianceNo { get; set; }

        public bool? PetitionerAddress1MailingStreetAddressApt { get; set; }

        public bool? PetitionerAddress1MailingStreetAddressSte { get; set; }

        public bool? PetitionerAddress1MailingStreetAddressFlr { get; set; }

        [StringLength(1000)]
        public string PetitionerAddressCityOrTown { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress1State { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress1Province { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress1ZipCode { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress1Country { get; set; }

        public bool? PetitionerAddressDifferentPhysicalAddressYes { get; set; }

        public bool? PetitionerAddressDifferentPhysicalAddressNo { get; set; }

        public bool? PetitionerAddress2MailingStreetAddressApt { get; set; }

        public bool? PetitionerAddress2MailingStreetAddressSte { get; set; }

        public bool? PetitionerAddress2MailingStreetAddressFlr { get; set; }

        public bool? PetitionerAddressMailingStreetAddressYes { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress2State { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress2Province { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress2ZipCode { get; set; }

        [StringLength(1000)]
        public string PetitionerAddress2Country { get; set; }

        [StringLength(1000)]
        public string PetitionerAddressResidence1State { get; set; }

        [StringLength(1000)]
        public string PetitionerAddressResidence1Country { get; set; }

        [StringLength(1000)]
        public string PetitionerAddressResidence2State { get; set; }

        [StringLength(1000)]
        public string PetitionerAddressResidence2Country { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentNameOfEmployer { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentStreetAddress { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentCityOrTown { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentState { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentProvince { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentZipCode { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentCountry { get; set; }

        [StringLength(1000)]
        public string PetitionerEmploymentOccupationName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerEmploymentStartDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerEmploymentEndDate { get; set; }

        public bool? PetitionerBackgroundGenderMale { get; set; }

        public bool? PetitionerBackgroundGenderFemale { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerBackgroundDateOfBirth { get; set; }

        public bool? PetitionerBackgroundMaritalStatusSingle { get; set; }

        public bool? PetitionerBackgroundMaritalStatusMarried { get; set; }

        public bool? PetitionerBackgroundMaritalStatusDivorced { get; set; }

        public bool? PetitionerBackgroundMaritalStatusWidowed { get; set; }

        [StringLength(1000)]
        public string PetitionerBackgroundCityOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerBackgroundStateOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerBackgroundCountryOfBirth { get; set; }

        public bool? PetitionerBackgroundPreviouslyMarriedYes { get; set; }

        public bool? PetitionerBackgroundPreviouslyMarriedNo { get; set; }

        [StringLength(1000)]
        public string PetitionerParent1FirstName { get; set; }

        [StringLength(1000)]
        public string PetitionerParent1MiddleName { get; set; }

        [StringLength(1000)]
        public string PetitionerParent1LastName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerParent1DateOfBirth { get; set; }

        public bool? PetitionerParent1GenderMale { get; set; }

        public bool? PetitionerParent1GenderFemale { get; set; }

        public int? PetitionerParent1CountryOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerParent1CityOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerParent1CountryOfResidence { get; set; }

        [StringLength(1000)]
        public string PetitionerParent2FirstName { get; set; }

        [StringLength(1000)]
        public string PetitionerParent2MiddleName { get; set; }

        [StringLength(1000)]
        public string PetitionerParent2LastName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? PetitionerParent2DateOfBirth { get; set; }

        public bool? PetitionerParent2GenderMale { get; set; }

        public bool? PetitionerParent2GenderFemale { get; set; }

        public int? PetitionerParent2CountryOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerParent2CityOfBirth { get; set; }

        [StringLength(1000)]
        public string PetitionerParent2CountryOfResidence { get; set; }

        public bool? PetitionerBiographicEthnicityNotHispanic { get; set; }

        public bool? PetitionerBiographicEthnicityHispanic { get; set; }

        public bool? PetitionerBiographicRaceWhite { get; set; }

        public bool? PetitionerBiographicRaceAsian { get; set; }

        public bool? PetitionerBiographicRaceBlack { get; set; }

        public bool? PetitionerBiographicRaceIndian { get; set; }

        public bool? PetitionerBiographicRaceHawaiian { get; set; }

        [StringLength(1000)]
        public string PetitionerBiographicFeet { get; set; }

        [StringLength(1000)]
        public string PetitionerBiographicInches { get; set; }

        [StringLength(1000)]
        public string PetitionerBiographicPound { get; set; }

        public bool? PetitionerBiographicHairColorBlack { get; set; }

        public bool? PetitionerBiographicHairColorBrown { get; set; }

        public bool? PetitionerBiographicHairColorBlond { get; set; }

        public bool? PetitionerBiographicHairColorGray { get; set; }

        public bool? PetitionerBiographicHairColorWhite { get; set; }

        public bool? PetitionerBiographicHairColorRed { get; set; }

        public bool? PetitionerBiographicHairColorSandy { get; set; }

        public bool? PetitionerBiographicHairColorBald { get; set; }

        public bool? PetitionerBiographicHairColorOther { get; set; }

        public bool? PetitionerBiographicEyeColorBlack { get; set; }

        public bool? PetitionerBiographicEyeColorBlue { get; set; }

        public bool? PetitionerBiographicEyeColorBrown { get; set; }

        public bool? PetitionerBiographicEyeColorGray { get; set; }

        public bool? PetitionerBiographicEyeColorGreen { get; set; }

        public bool? PetitionerBiographicEyeColorHazel { get; set; }

        public bool? PetitionerBiographicEyeColorMaroon { get; set; }

        public bool? PetitionerBiographicEyeColorPink { get; set; }

        public bool? PetitionerBiographicEyeColorOther { get; set; }

        public bool? PetitionerBiographicCivilCriminalYes { get; set; }

        [Column("PetitionerBiographicCivilCriminalNo)")]
        public bool? PetitionerBiographicCivilCriminalNo_ { get; set; }

        public bool? PetitionerBiographicDomesticViolenceYes { get; set; }

        public bool? PetitionerBiographicDomesticViolenceNo { get; set; }

        public bool? PetitionerBiographicHomicideYes { get; set; }

        public bool? PetitionerBiographicHomicideNo { get; set; }

        public bool? PetitionerBiographicConvictionsYes { get; set; }

        public bool? PetitionerBiographicConvictionsNo { get; set; }

        [StringLength(1000)]
        public string PetitionerStatusSocialSecurityNumber { get; set; }

        public bool? PetitionerStatusThroughBirthUS { get; set; }

        public bool? PetitionerStatusThroughUSCitizenParents { get; set; }

        public bool? PetitionerStatusThroughNaturalization { get; set; }

        public bool? PetitionerStatusCitizenshipYes { get; set; }

        public bool? PetitionerStatusCitizenshipNo { get; set; }

        public bool? PetitionerStatusI129FYes { get; set; }

        public bool? PetitionerStatusI129FNo { get; set; }

        public bool? PetitionerStatusIMBYes { get; set; }

        public bool? PetitionerStatusIMBNo { get; set; }

        [StringLength(1000)]
        public string PetitionerStatusCity { get; set; }

        [StringLength(1000)]
        public string PetitionerStatusCountry { get; set; }

        [StringLength(1000)]
        public string BeneficiaryContactFirstName { get; set; }

        [StringLength(1000)]
        public string BeneficiaryContactMiddleName { get; set; }

        [StringLength(1000)]
        public string BeneficiaryContactLastName { get; set; }

        public bool? BeneficiaryContactOtherNamesUsedYes { get; set; }

        public bool? BeneficiaryContactOtherNamesUsedNo { get; set; }

        [StringLength(1000)]
        public string BeneficiaryContactDaytimePhoneNumber { get; set; }

        [StringLength(1000)]
        public string BeneficiaryContactEmailAddress { get; set; }

        public bool? BeneficiaryAddress1MailingStreetAddressApt { get; set; }

        public bool? BeneficiaryAddress1MailingStreetAddressSte { get; set; }

        public bool? BeneficiaryAddress1MailingStreetAddressFlr { get; set; }

        public bool? BeneficiaryAddress1MailingStreetAddressYes { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress1CityOrTown { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress1State { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress1Province { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress1ZipCode { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress1Country { get; set; }

        public bool? BeneficiaryAddressDifferentPhysicalYes { get; set; }

        public bool? BeneficiaryAddressDifferentPhysicalNo { get; set; }

        public bool? BeneficiaryAddress2MailingStreetAddressApt { get; set; }

        public bool? BeneficiaryAddress2MailingStreetAddressSte { get; set; }

        public bool? BeneficiaryAddress2MailingStreetAddressFlr { get; set; }

        public bool? BeneficiaryAddress2MailingStreetAddressYes { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress2CityOrTown { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress2State { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress2Province { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress2ZipCode { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddress2Country { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddressResidence1State { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddressResidence1Country { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddressResidence2State { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAddressResidence2Country { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentNameOfEmployer { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentStreetAddress { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentCityOrTown { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentState { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentProvince { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentZipCode { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentCountry { get; set; }

        [StringLength(1000)]
        public string BeneficiaryEmploymentOccupationName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? BeneficiaryEmploymentStartDate { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? BeneficiaryEmploymentEndDate { get; set; }

        public bool? BeneficiaryBackgroundGenderMale { get; set; }

        public bool? BeneficiaryBackgroundGenderFemale { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? BeneficiaryBackgroundDateOfBirth { get; set; }

        public bool? BeneficiaryBackgroundMaritalStatusSingle { get; set; }

        public bool? BeneficiaryBackgroundMaritalStatusMarried { get; set; }

        public bool? BeneficiaryBackgroundMaritalStatusDivorced { get; set; }

        public bool? BeneficiaryBackgroundMaritalStatusWidowed { get; set; }

        [StringLength(1000)]
        public string BeneficiaryBackgroundCityOfBirth { get; set; }

        [StringLength(1000)]
        public string BeneficiaryBackgroundProvinceOfBirth { get; set; }

        [StringLength(1000)]
        public string BeneficiaryBackgroundCountryOfBirth { get; set; }

        public bool? BeneficiaryBackgroundPreviouslyMarriedYes { get; set; }

        public bool? BeneficiaryBackgroundPreviouslyMarriedNo { get; set; }

        public bool? BeneficiaryBackgroundEverBeenInTheUSYes { get; set; }

        public bool? BeneficiaryBackgroundEverBeenInTheUSNo { get; set; }

        public bool? BeneficiaryBackgroundCurrentlyInUSYes { get; set; }

        public bool? BeneficiaryBackgroundCurrentlyInUSNo { get; set; }

        public bool? BeneficiaryAbroadStreetAddressApt { get; set; }

        public bool? BeneficiaryAbroadStreetAddressSte { get; set; }

        public bool? BeneficiaryAbroadStreetAddressFlo { get; set; }

        public bool? BeneficiaryAbroadStreetAddressNumber { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadStreetAddressText { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadCityOrTown { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadState { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadProvince { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadZipCode { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadCountry { get; set; }

        [StringLength(1000)]
        public string BeneficiaryAbroadDaytimePhoneNumber { get; set; }

        public bool? BeneficiaryAbroadLatinAlphabetYes { get; set; }

        public bool? BeneficiaryAbroadLatinAlphabetNo { get; set; }

        public bool? BeneficiaryAbroadOtherNamesUsedYes { get; set; }

        public bool? BeneficiaryAbroadOtherNamesUsedNo { get; set; }

        [StringLength(1000)]
        public string InterpreterFirstName { get; set; }

        [StringLength(1000)]
        public string InterpreterLastName { get; set; }

        [StringLength(1000)]
        public string InterpreterBusinessName { get; set; }

        public bool? InterpreterStreetAddressApt { get; set; }

        public bool? InterpreterStreetAddressSte { get; set; }

        public bool? InterpreterStreetAddressFlo { get; set; }

        public bool? InterpreterStreetAddressNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterStreetAddressText { get; set; }

        [StringLength(1000)]
        public string InterpreterCityOrTown { get; set; }

        [StringLength(1000)]
        public string InterpreterProvince { get; set; }

        [StringLength(1000)]
        public string InterpreterZipCode { get; set; }

        [StringLength(1000)]
        public string InterpreterCountry { get; set; }

        [StringLength(1000)]
        public string InterpreterDaytimePhoneNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterEmailAddress { get; set; }

        public bool Deleted { get; set; }
    }
}
