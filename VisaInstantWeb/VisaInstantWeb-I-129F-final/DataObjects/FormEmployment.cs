namespace ConsoleApp1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FormEmployment")]
    public partial class FormEmployment
    {
        public long Id { get; set; }

        public long? AccountId { get; set; }

        [StringLength(1000)]
        public string NameFirstName { get; set; }

        [StringLength(1000)]
        public string NameMiddleName { get; set; }

        [StringLength(1000)]
        public string NameLastName { get; set; }

        public bool? NameOtherNamesYes { get; set; }

        public bool? NameOtherNamesNo { get; set; }

        [StringLength(1000)]
        public string NameDaytimePhone { get; set; }

        [StringLength(1000)]
        public string NameEmailAddress { get; set; }

        [StringLength(1000)]
        public string NameCityOfBirth { get; set; }

        [StringLength(1000)]
        public string NameProvinceStateOfBirth { get; set; }

        [StringLength(1000)]
        public string NameCountryOfBirth { get; set; }

        public bool? NameAppyingForInitial { get; set; }

        public bool? NameAppyingForReplacement { get; set; }

        public bool? NameAppyingForRenewal { get; set; }

        public bool? AddressMailingStreetAddressApt { get; set; }

        public bool? AddressMailingStreetAddressSte { get; set; }

        public bool? AddressMailingStreetAddressFlr { get; set; }

        public bool? AddressMailingStreetAddressYes { get; set; }

        [StringLength(1000)]
        public string AddressMailingStreetAddressText { get; set; }

        [StringLength(1000)]
        public string AddressCityOrTown { get; set; }

        [StringLength(1000)]
        public string AddressState { get; set; }

        [StringLength(1000)]
        public string AddressProvince { get; set; }

        [StringLength(1000)]
        public string AddressZipCode { get; set; }

        public bool? AddressDifferentPhysicalYes { get; set; }

        public bool? AddressDifferentPhysicalNo { get; set; }

        public bool? ContactGenderMale { get; set; }

        public bool? ContactGenderFemale { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? ContactDateOfBirth { get; set; }

        [StringLength(1000)]
        public string ContactCityOfBirth { get; set; }

        [StringLength(1000)]
        public string ContactProvinceOrStateOfBirth { get; set; }

        [StringLength(1000)]
        public string ContactCountryOfBirth { get; set; }

        public bool? ContactMaritalStatusSingle { get; set; }

        public bool? ContactMaritalStatusMarried { get; set; }

        public bool? ContactMaritalStatusDivorced { get; set; }

        public bool? ContactMaritalStatusWidowed { get; set; }

        [StringLength(1000)]
        public string ContactAlienRegistrationNumber { get; set; }

        public bool? ContactFormI765Yes { get; set; }

        public bool? ContactFormI765No { get; set; }

        public bool? ContactSocialSecurityYes { get; set; }

        public bool? ContactSocialSecurityNo { get; set; }

        public bool? ContactSSAYes { get; set; }

        public bool? ContactSSANo { get; set; }

        public bool? ContactConsentDisclosureYes { get; set; }

        public bool? ContactConsentDisclosureNo { get; set; }

        [StringLength(1000)]
        public string ParentFatherFirstName { get; set; }

        [StringLength(1000)]
        public string ParentFatherLastName { get; set; }

        [StringLength(1000)]
        public string ParentMotherFirstName { get; set; }

        [StringLength(1000)]
        public string ParentMotherLastName { get; set; }

        [StringLength(1000)]
        public string Parent1Country { get; set; }

        [StringLength(1000)]
        public string Parent2Country { get; set; }

        [StringLength(1000)]
        public string Parent3Country { get; set; }

        [StringLength(1000)]
        public string ParentArrivalDeparture { get; set; }

        [StringLength(1000)]
        public string ParentDateAuthorized { get; set; }

        [StringLength(1000)]
        public string ParentPassportNumber { get; set; }

        [StringLength(1000)]
        public string ParentTravelDocumentNumber { get; set; }

        [StringLength(1000)]
        public string ParentCountryIssuance { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? ParentDateLastArrival { get; set; }

        [StringLength(1000)]
        public string ParentPlaceLastArrival { get; set; }

        [StringLength(1000)]
        public string ParentImmigrationStatusLastArrival { get; set; }

        [StringLength(1000)]
        public string ParentImmigrationStatusCategory { get; set; }

        [StringLength(1000)]
        public string ParentSudentExchangeVisitor { get; set; }

        [StringLength(1000)]
        public string AuthorizationEligibilityCategory { get; set; }

        [StringLength(1000)]
        public string AuthorizationDegree { get; set; }

        [StringLength(1000)]
        public string AuthorizationEmployerName { get; set; }

        [StringLength(1000)]
        public string AuthorizationCompanyIdentification { get; set; }

        [StringLength(1000)]
        public string AuthorizationReceiptNumber { get; set; }

        public bool? Authorization1ArrestedYes { get; set; }

        public bool? Authorization1ArrestedNo { get; set; }

        public bool? AuthorizationLawfullyYes { get; set; }

        public bool? AuthorizationLawfullyNo { get; set; }

        public bool? AuthorizationSecretaryYes { get; set; }

        public bool? AuthorizationSecretaryNo { get; set; }

        public bool? Authorization1NoticeYes { get; set; }

        public bool? Authorization1NoticeNo { get; set; }

        public bool? Authorization2ArrestedYes { get; set; }

        public bool? Authorization2ArrestedNo { get; set; }

        public bool? Authorization2NoticeYes { get; set; }

        public bool? Authorization2NoticeNo { get; set; }

        [StringLength(1000)]
        public string InterpreterFirstName { get; set; }

        [StringLength(1000)]
        public string InterpreterLastName { get; set; }

        [StringLength(1000)]
        public string InterpreterBusinessName { get; set; }

        public bool? InterpreterMailingStreetAddressApt { get; set; }

        public bool? InterpreterMailingStreetAddressSte { get; set; }

        public bool? InterpreterMailingStreetAddressFlr { get; set; }

        public bool? InterpreterMailingStreetAddressNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterMailingStreetAddressText { get; set; }

        [StringLength(1000)]
        public string InterpreterCityOrTown { get; set; }

        [StringLength(1000)]
        public string InterpreterProvince { get; set; }

        [StringLength(1000)]
        public string InterpreterZipCode { get; set; }

        [StringLength(1000)]
        public string InterpreterCountry { get; set; }

        [StringLength(1000)]
        public string InterpreterDaytimeTelephoneNumber { get; set; }

        [StringLength(1000)]
        public string InterpreterEmail { get; set; }

        public bool Deleted { get; set; }
    }
}
