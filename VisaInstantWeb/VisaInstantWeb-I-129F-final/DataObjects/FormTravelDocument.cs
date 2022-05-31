namespace ConsoleApp1
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
        public string ApplicantFamilyName { get; set; }

        [StringLength(1000)]
        public string ApplicantGivenName { get; set; }

        [StringLength(1000)]
        public string ApplicantMiddleName { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressStreet { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressNumber { get; set; }

        public bool? ApplicantPhysicalAddressApt { get; set; }

        public bool? ApplicantPhysicalAddressSte { get; set; }

        public bool? ApplicantPhysicalAddressFr { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressCity { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressZipCode { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressPostCode { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressState { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressProvince { get; set; }

        [StringLength(1000)]
        public string ApplicantPhysicalAddressCountry { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber1 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber2 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber3 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber4 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber5 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber6 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber7 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber9 { get; set; }

        [StringLength(1000)]
        public string ApplicantAlienNumber8 { get; set; }

        [StringLength(1000)]
        public string ApplicantCitizen { get; set; }

        [StringLength(1000)]
        public string ApplicantClassOfAdmission { get; set; }

        public bool? ApplicantMale { get; set; }

        public bool? ApplicantFemale { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? ApplicantDateOfBirth { get; set; }

        [StringLength(1000)]
        public string ApplicantCountryOfBirth { get; set; }

        [StringLength(1000)]
        public string ApplicantCitizenship { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? ApplicantDateOfDepartment { get; set; }

        [StringLength(1000)]
        public string ApplicantLengthOfTrip { get; set; }

        [StringLength(1000)]
        public string PreparerGivenName { get; set; }

        [StringLength(1000)]
        public string PreparerFamilyName { get; set; }

        [StringLength(1000)]
        public string PreparerBusinessName { get; set; }

        [StringLength(1000)]
        public string PreparerAddressStreet { get; set; }

        [StringLength(1000)]
        public string PreparerAddress { get; set; }

        public bool? PreparerAddressSte { get; set; }

        public bool? PreparerAddressFr { get; set; }

        public bool? PreparerAddressApt { get; set; }

        [StringLength(1000)]
        public string PreparerAddressCity { get; set; }

        [StringLength(1000)]
        public string PreparerAddressState { get; set; }

        [StringLength(1000)]
        public string PreparerAddressZipCode { get; set; }

        [StringLength(1000)]
        public string PreparerAddressPostalCode { get; set; }

        [StringLength(1000)]
        public string PreparerAddressProvince { get; set; }

        [StringLength(1000)]
        public string PreparerAddressCountry { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber1 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber2 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber3 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber4 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber5 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber6 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber7 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber8 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber9 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhoneNumber10 { get; set; }

        [StringLength(1000)]
        public string PreparerEmail { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber1 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber2 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber3 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber4 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber5 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber6 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber7 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber8 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber9 { get; set; }

        [StringLength(1000)]
        public string PreparerPhoneNumber10 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone1 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone2 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone3 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone4 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone5 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone6 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone7 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone8 { get; set; }

        [StringLength(1000)]
        public string ApplicantPhone9 { get; set; }

        public bool? ApplicationTypeTravelDocument { get; set; }

        [StringLength(1000)]
        public string OtherPersonFamilyName { get; set; }

        [StringLength(1000)]
        public string OtherPersonGivenName { get; set; }

        [StringLength(1000)]
        public string OtherPersonGMiddleName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? OtherPersonDateOfBirth { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressStreet { get; set; }

        public bool? OtherPersonApt { get; set; }

        public bool? OtherPersonFlr { get; set; }

        public bool? OtherPersonSte { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressNumber { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressCity { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressState { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressZipCode { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressPostalCode { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressProvince { get; set; }

        [StringLength(1000)]
        public string OtherPersonAddressCountry { get; set; }

        public bool? OtherPersonRemovalYes { get; set; }

        public bool? OtherPersonRemovalNo { get; set; }

        public bool? RetryPermitYes { get; set; }

        public bool? RetryPermitNo { get; set; }

        [StringLength(1000)]
        public string RetryPermitDate { get; set; }

        [StringLength(1000)]
        public string RetryPermitDisposition { get; set; }

        public bool? ApplicationTypeReentryPermit { get; set; }

        public bool? ApplicationTypeAdvanceParole { get; set; }

        public bool? ApplicationTypeForOther { get; set; }

        public bool? ApplicationTypeRefugee { get; set; }

        public bool? ApplicationTypeForeignTravel { get; set; }

        public bool? DocumentSentToUsAddress { get; set; }

        public bool? DocumentSentToUsConsulate { get; set; }

        [StringLength(1000)]
        public string ConsulateAddressCity { get; set; }

        [StringLength(1000)]
        public string ConsulateAddressCountry { get; set; }

        [StringLength(1000)]
        public string NameOfDHS { get; set; }

        public bool? DHSOffice { get; set; }

        [StringLength(1000)]
        public string DHSOfficeAddressCity { get; set; }

        [StringLength(1000)]
        public string DHSOfficeAddressCountry { get; set; }

        public bool? AddressPart2 { get; set; }

        public bool? AddressPart3 { get; set; }

        public bool? AddressApt { get; set; }

        public bool? AddressFlr { get; set; }

        public bool? AddressSte { get; set; }

        [StringLength(1000)]
        public string AddressNumber { get; set; }

        [StringLength(1000)]
        public string AddressStreet { get; set; }

        [StringLength(1000)]
        public string AddressAddressCity { get; set; }

        [StringLength(1000)]
        public string AddressAddressState { get; set; }

        [StringLength(1000)]
        public string AddressAddressZipCode { get; set; }

        [StringLength(1000)]
        public string AddressAddressPostalCode { get; set; }

        [StringLength(1000)]
        public string AddressAddressCountry { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber1 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber2 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber3 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber4 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber5 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber6 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber7 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber8 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber9 { get; set; }

        [StringLength(1000)]
        public string AddressPhoneNumber10 { get; set; }

        [StringLength(1000)]
        public string PreparerExtension { get; set; }

        public bool? TimeOutsideLessThan6M { get; set; }

        public bool? TimeOutsideLessThan1Y { get; set; }

        public bool? TimeOutsideLessThan2Y { get; set; }

        public bool? TimeOutsideLessThan3Y { get; set; }

        public bool? TimeOutsideLessThan4Y { get; set; }

        public bool? TimeOutsideMoreThan4Y { get; set; }

        public bool? TaxFillYes { get; set; }

        public bool? TaxFillNo { get; set; }

        [StringLength(1000)]
        public string CountryFrom { get; set; }

        public bool? AdvanceParoleTripOne { get; set; }

        public bool? AdvanceParoleTripMore { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleDHSCity { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleDHSCountry { get; set; }

        public bool? AdvanceParoleDHSAddress { get; set; }

        public bool? AdvanceParoleHomeAddress { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleInCareOfName { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressStreet { get; set; }

        public bool? AdvanceParoleAddressApt { get; set; }

        public bool? AdvanceParoleAddressSte { get; set; }

        public bool? AdvanceParoleAddressFlr { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressNumber { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressCity { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressState { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressNumberZipCode { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressPostalCode { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressProvince { get; set; }

        [StringLength(1000)]
        public string AdvanceParoleAddressCountry { get; set; }

        [StringLength(1000)]
        public string AdvanceParolePhoneNumber { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber1 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber2 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber3 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber4 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber5 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber6 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber7 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber8 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber9 { get; set; }

        [StringLength(1)]
        public string AdvanceParolePhoneNumber10 { get; set; }

        public bool Deleted { get; set; }
    }
}
