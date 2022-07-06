namespace ConsoleApp.VisaInstant
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FormVisaSpouse")]
    public partial class FormVisaSpouse
    {
        public long Id { get; set; }

        public long? AccountId { get; set; }

        [StringLength(1000)]
        public string SponsorNameFirstName { get; set; }

        [StringLength(1000)]
        public string SponsorNameMiddleName { get; set; }

        public bool? SponsorNameDoesNotApply { get; set; }

        [StringLength(1000)]
        public string SponsorNameLastName { get; set; }

        [StringLength(1000)]
        public string SponsorNameDaytimePhoneNumber { get; set; }

        public bool? SponsorNameGenderMale { get; set; }

        public bool? SponsorNameGenderFemale { get; set; }

        public bool? SponsorNameAnotherNameYes { get; set; }

        public bool? SponsorNameAnotherNameNo { get; set; }

        [StringLength(1000)]
        public string SponsorContactEmailAddress { get; set; }

        [StringLength(1000)]
        public string SponsorContactMobileNumber { get; set; }

        [StringLength(1000)]
        public string SponsorContactSocialSecurityNumber { get; set; }

        [StringLength(1000)]
        public string SponsorContactAccountNumber { get; set; }

        public bool? SponsorContactDoesNotApply { get; set; }

        [StringLength(1000)]
        public string SponsorContactUncommon { get; set; }

        public bool? SponsorContactDifferentPhysicalYes { get; set; }

        public bool? SponsorContactDifferentPhysicalNo { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorPlaceOfBirthDateOfBirth { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthCityOfBirth { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthCountryOfBirthText { get; set; }

        public int? SponsorPlaceOfBirthCountryOfBirthId { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthFatherLastName { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthFatherFirstName { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthFatherMiddleName { get; set; }

        public bool? SponsorPlaceOfBirth1DoesNotApply { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorPlaceOfBirthFatherDateOfBirth { get; set; }

        public bool? SponsorPlaceOfBirth1Unknow { get; set; }

        public int? SponsorPlaceOfBirthFatherCountryOfBirth { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthFatherCityProvince { get; set; }

        public bool? SponsorPlaceOfBirthHeDeceasedYes { get; set; }

        public bool? SponsorPlaceOfBirthHeDeceasedNo { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthMotherMaidenLastName { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthMotherFirstName { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthMotherMiddleName { get; set; }

        public bool? SponsorPlaceOfBirth2DoesNotApply { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorPlaceOfBirthMotherDateOfBirth { get; set; }

        public bool? SponsorPlaceOfBirth2Unknow { get; set; }

        public int? SponsorPlaceOfBirthMotherCountryOfBirth { get; set; }

        [StringLength(1000)]
        public string SponsorPlaceOfBirthMotherCityOfBirth { get; set; }

        public bool? SponsorPlaceOfBirthSheDeceasedYes { get; set; }

        public bool? SponsorPlaceOfBirthSheDeceasedNo { get; set; }

        public bool? SponsorStatusUSCitizen { get; set; }

        public bool? SponsorStatusPermanentResident { get; set; }

        public bool? SponsorStatusAmericanSamoa { get; set; }

        [StringLength(1000)]
        public string SponsorStatusHeightFeet { get; set; }

        [StringLength(1000)]
        public string SponsorStatusHeightInches { get; set; }

        [StringLength(1000)]
        public string SponsorStatusWeightPounds { get; set; }

        public bool? SponsorStatusEthnicityNotHispanicOrLatino { get; set; }

        public bool? SponsorStatusEthnicityHispanicOrLatino { get; set; }

        public bool? SponsorStatusRaceWhite { get; set; }

        public bool? SponsorStatusRaceAsian { get; set; }

        public bool? SponsorStatusRaceBlack { get; set; }

        public bool? SponsorStatusRaceAmericanIndian { get; set; }

        public bool? SponsorStatusRaceNativeHawaiian { get; set; }

        public bool? SponsorStatusHairColorBlack { get; set; }

        public bool? SponsorStatusHairColorBrown { get; set; }

        public bool? SponsorStatusHairColorBlond { get; set; }

        public bool? SponsorStatusHairColorGray { get; set; }

        public bool? SponsorStatusHairColorWhite { get; set; }

        public bool? SponsorStatusHairColorRed { get; set; }

        public bool? SponsorStatusHairColorSandy { get; set; }

        public bool? SponsorStatusHairColorBald { get; set; }

        public bool? SponsorStatusHairColorOther { get; set; }

        public bool? SponsorStatusEyeColorBlack { get; set; }

        public bool? SponsorStatusEyeColorBlue { get; set; }

        public bool? SponsorStatusEyeColorBrown { get; set; }

        public bool? SponsorStatusEyeColorGray { get; set; }

        public bool? SponsorStatusEyeColorGreen { get; set; }

        public bool? SponsorStatusEyeColorHazel { get; set; }

        public bool? SponsorStatusEyeColorMaroon { get; set; }

        public bool? SponsorStatusEyeColorPink { get; set; }

        public bool? SponsorStatusEyeColorOther { get; set; }

        public bool? SponsorMaritalStatusMarried { get; set; }

        public bool? SponsorMaritalStatusSingle { get; set; }

        public bool? SponsorMaritalStatusWidowed { get; set; }

        public bool? SponsorMaritalStatusDivorced { get; set; }

        public bool? SponsorMaritalStatusChildrenUnder18Yes { get; set; }

        public bool? SponsorMaritalStatusChildrenUnder18No { get; set; }

        public bool? SponsorOtherFilingsI129FYes { get; set; }

        public bool? SponsorOtherFilingsI129FNo { get; set; }

        public bool? MilitaryAndConvictionsUnitedStatesArmedForcesYes { get; set; }

        public bool? MilitaryAndConvictionsUnitedStatesArmedForcesNo { get; set; }

        public bool? MilitaryAndConvictionsCivilOrCriminalYes { get; set; }

        public bool? MilitaryAndConvictionsCivilOrCriminalNo { get; set; }

        public bool? MilitaryAndConvictionsEitherCivilOrCriminalYes { get; set; }

        public bool? MilitaryAndConvictionsEitherCivilOrCriminalNo { get; set; }

        public bool? MilitaryAndConvictionsDomesticViolenceYes { get; set; }

        public bool? MilitaryAndConvictionsDomesticViolenceNo { get; set; }

        public bool? MilitaryAndConvictionsHomicideYes { get; set; }

        public bool? MilitaryAndConvictionsHomicideNo { get; set; }

        public bool? MilitaryAndConvictionsArrestsOrConvictionsYes { get; set; }

        public bool? MilitaryAndConvictionsArrestsOrConvictionsNo { get; set; }

        public bool? MilitaryAndConvictionsTrafficViolationsYes { get; set; }

        public bool? MilitaryAndConvictionsTrafficViolationsNo { get; set; }

        [StringLength(1000)]
        public string SponsorAddressInCareOfName { get; set; }

        public bool? SponsorAddress1DoesNotApply { get; set; }

        [StringLength(1000)]
        public string SponsorAddressNumberAndstreet { get; set; }

        public int? SponsorAddressApartmentSuiteId { get; set; }

        [StringLength(1000)]
        public string SponsorAddressApartmentSuiteNumber { get; set; }

        [StringLength(1000)]
        public string SponsorAddressTownOrCity { get; set; }

        public int? SponsorAddressCountry { get; set; }

        public int? SponsorAddressUSState { get; set; }

        [StringLength(1000)]
        public string SponsorAddressProvince { get; set; }

        public bool? SponsorAddress2DoesNotApply { get; set; }

        [StringLength(1000)]
        public string SponsorAddressPostalCode { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorAddressLivedAddressSince { get; set; }

        public int? SponsorAddressUSStateCountry { get; set; }

        [StringLength(1000)]
        public string SponsorRelationshipCityFirstTime { get; set; }

        public bool? SponsorRelationshipUSCISYes { get; set; }

        public bool? SponsorRelationshipUSCISNo { get; set; }

        public bool? SponsorRelationshipIMBYes { get; set; }

        public bool? SponsorRelationshipIMBNo { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentNameEmployer { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentOccupation { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentNumberAndStreet { get; set; }

        public int? SponsorEmploymentApartment { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentApartmentNumber { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentTownOrCity { get; set; }

        public int? SponsorEmploymentCountry { get; set; }

        public int? SponsorEmploymentUSState { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentProvince { get; set; }

        public bool? SponsorEmploymentDoesNotApply { get; set; }

        [StringLength(1000)]
        public string SponsorEmploymentPostalCode { get; set; }

        public int? SponsorEmploymentCategoryJob { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorEmploymentBeganThisJob { get; set; }

        public bool? SponsorImmigrationImmigrationProceedingsYes { get; set; }

        public bool? SponsorImmigrationImmigrationProceedingsNo { get; set; }

        [StringLength(1000)]
        public string SponsorImmigrationCityAndState { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorImmigrationEstimateDate { get; set; }

        public bool? SponsorImmigrationTypeProceedingApplyRemoval { get; set; }

        public bool? SponsorImmigrationTypeProceedingApplyExclusion { get; set; }

        public bool? SponsorImmigrationTypeProceedingApplyRescission { get; set; }

        public bool? SponsorImmigrationTypeProceedingApplyJudicial { get; set; }

        [StringLength(1000)]
        public string SponsorLanguages1 { get; set; }

        public bool? SponsorUSVisitsUSVisaYes { get; set; }

        public bool? SponsorUSVisitsUSVisaNo { get; set; }

        [StringLength(1000)]
        public string SponsorUSVisitsExplainDeniedAdmissions { get; set; }

        public bool? SponsorUSVisitsVisitedUnitedStatesYes { get; set; }

        public bool? SponsorUSVisitsVisitedUnitedStatesNo { get; set; }

        [StringLength(1000)]
        public string SponsorUSVisitsPrimaryCity { get; set; }

        public int? SponsorUSVisitsTypeOfVisa { get; set; }

        [StringLength(1000)]
        public string SponsorUSVisitsRegistrationNumber { get; set; }

        public bool? SponsorUSVisitsNone { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorUSVisitsStartDateVisit { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? SponsorUSVisitsEndDateVisit { get; set; }

        public bool? SponsorRelativesChildInUSYes { get; set; }

        public bool? SponsorRelativesChildInUSNo { get; set; }

        [StringLength(1000)]
        public string SponsorRelativesFirstAndMiddleNames { get; set; }

        [StringLength(1000)]
        public string SponsorRelativesLastName { get; set; }

        public int? SponsorRelativesSuffixAfterName { get; set; }

        public int? SponsorRelativesStatus { get; set; }

        public bool? SponsorQuestion1ParamilitaryUnitYes { get; set; }

        public bool? SponsorQuestion1ParamilitaryUnitNo { get; set; }

        [StringLength(1000)]
        public string SponsorQuestion1ExplainQuestion { get; set; }

        public bool? SponsorQuestion1HealthSignificanceYes { get; set; }

        public bool? SponsorQuestion1HealthSignificanceNo { get; set; }

        public bool? SponsorQuestion1SafetyOrWelfareYes { get; set; }

        public bool? SponsorQuestion1SafetyOrWelfareNo { get; set; }

        public bool? SponsorQuestion1DrugAbuserYes { get; set; }

        public bool? SponsorQuestion1DrugAbuserNo { get; set; }

        public bool? SponsorQuestion1NecessaryVaccinationsYes { get; set; }

        public bool? SponsorQuestion1NecessaryVaccinationsNo { get; set; }

        public bool? SponsorQuestion1ArrestedOffenseYes { get; set; }

        public bool? SponsorQuestion1ArrestedOffenseNo { get; set; }

        public bool? SponsorQuestion1ViolatedYes { get; set; }

        public bool? SponsorQuestion1ViolatedNo { get; set; }

        public bool? SponsorQuestion1EngageInProstitutionYes { get; set; }

        public bool? SponsorQuestion1EngageInProstitutionNo { get; set; }

        public bool? SponsorQuestion1MoneyLaunderingYes { get; set; }

        public bool? SponsorQuestion1MoneyLaunderingNo { get; set; }

        public bool? SponsorQuestion1HumanTraffickingOffenseYes { get; set; }

        public bool? SponsorQuestion1HumanTraffickingOffenseNo { get; set; }

        public bool? SponsorQuestion1KnowinglyAidedYes { get; set; }

        public bool? SponsorQuestion1KnowinglyAidedNo { get; set; }

        public bool? SponsorQuestion2KnowinglyAidedYes { get; set; }

        public bool? SponsorQuestion2KnowinglyAidedNo { get; set; }

        [StringLength(1000)]
        public string SponsorQuestion2ExplainQuestion { get; set; }

        public bool? SponsorQuestion2TraffickingOffenseYes { get; set; }

        public bool? SponsorQuestion2TraffickingOffenseNo { get; set; }

        public bool? SponsorQuestion2IdentifiedPresidentYes { get; set; }

        public bool? SponsorQuestion2IdentifiedPresidentNo { get; set; }

        public bool? SponsorQuestion2ViolatedYes { get; set; }

        public bool? SponsorQuestion2ViolatedNo { get; set; }

        public bool? SponsorQuestion2EngageEspionageYes { get; set; }

        public bool? SponsorQuestion2EngageEspionageNo { get; set; }

        public bool? SponsorQuestion2TerroristActivitiesYes { get; set; }

        public bool? SponsorQuestion2TerroristActivitiesNo { get; set; }

        public bool? SponsorQuestion2FinancialAssistanceYes { get; set; }

        public bool? SponsorQuestion2FinancialAssistanceNo { get; set; }

        public bool? SponsorQuestion2TerroristOrganizationYes { get; set; }

        public bool? SponsorQuestion2TerroristOrganizationNo { get; set; }

        public bool? SponsorQuestion2GenocideYes { get; set; }

        public bool? SponsorQuestion2GenocideNo { get; set; }

        public bool? SponsorQuestion2TortureYes { get; set; }

        public bool? SponsorQuestion2TortureNo { get; set; }

        public bool? SponsorQuestion2IntentionallyAssistedYes { get; set; }

        public bool? SponsorQuestion2IntentionallyAssistedNo { get; set; }

        public bool? SponsorQuestion3JudicialKillingsYes { get; set; }

        public bool? SponsorQuestion3JudicialKillingsNo { get; set; }

        [StringLength(1000)]
        public string SponsorQuestion3ExplainQuestion { get; set; }

        public bool? SponsorQuestion3EngagedRecruitmentYes { get; set; }

        public bool? SponsorQuestion3EngagedRecruitmentNo { get; set; }

        public bool? SponsorQuestion3ReligiousFreedomYes { get; set; }

        public bool? SponsorQuestion3ReligiousFreedomNo { get; set; }

        public bool? SponsorQuestion3TotalitarianPartyYes { get; set; }

        public bool? SponsorQuestion3TotalitarianPartyNo { get; set; }

        public bool? SponsorQuestion3IndirectlyAssistedYes { get; set; }

        public bool? SponsorQuestion3IndirectlyAssistedNo { get; set; }

        public bool? SponsorQuestion31ClaimOwnershipYes { get; set; }

        public bool? SponsorQuestion31ClaimOwnershipNo { get; set; }

        public bool? SponsorQuestion32ClaimOwnershipYes { get; set; }

        public bool? SponsorQuestion32ClaimOwnershipNo { get; set; }

        public bool? SponsorQuestion31ChemicalWeaponsYes { get; set; }

        public bool? SponsorQuestion31ChemicalWeaponsNo { get; set; }

        public bool? SponsorQuestion32ChemicalWeaponsYes { get; set; }

        public bool? SponsorQuestion32ChemicalWeaponsNo { get; set; }

        public bool? SponsorQuestion3EstablishmentYes { get; set; }

        public bool? SponsorQuestion3EstablishmentNo { get; set; }

        public bool? SponsorQuestion3ReimbursingSchoolYes { get; set; }

        public bool? SponsorQuestion3ReimbursingSchoolNo { get; set; }

        public bool? SponsorQuestion4BodilyTissueYes { get; set; }

        public bool? SponsorQuestion4BodilyTissueNo { get; set; }

        [StringLength(1000)]
        public string SponsorQuestion4ExplainQuestion { get; set; }

        public bool? SponsorQuestion4INA274CYes { get; set; }

        public bool? SponsorQuestion4INA274CNo { get; set; }

        public bool? SponsorQuestion4RemovedUS5YearsYes { get; set; }

        public bool? SponsorQuestion4RemovedUS5YearsNo { get; set; }

        public bool? SponsorQuestion4RemovedUS20YearsYes { get; set; }

        public bool? SponsorQuestion4RemovedUS20YearsNo { get; set; }

        public bool? SponsorQuestion4RemovedUS10YearsYes { get; set; }

        public bool? SponsorQuestion4RemovedUS10YearsNo { get; set; }

        public bool? SponsorQuestion4ConvictedRemovedUSYes { get; set; }

        public bool? SponsorQuestion4ConvictedRemovedUSNo { get; set; }

        public bool? SponsorQuestion4Unlawfully180DaysYes { get; set; }

        public bool? SponsorQuestion4Unlawfully180DaysNo { get; set; }

        public bool? SponsorQuestion4Unlawfully1YearYes { get; set; }

        public bool? SponsorQuestion4Unlawfully1YearNo { get; set; }

        public bool? SponsorQuestion4WithheldCustodyYes { get; set; }

        public bool? SponsorQuestion4WithheldCustodyNo { get; set; }

        public bool? SponsorQuestion4ViolationLawYes { get; set; }

        public bool? SponsorQuestion4ViolationLawNo { get; set; }

        public bool? SponsorQuestion5AvoidingTaxationYes { get; set; }

        public bool? SponsorQuestion5AvoidingTaxationNo { get; set; }

        [StringLength(1000)]
        public string SponsorQuestion5ExplainQuestion { get; set; }

        public bool? SponsorQuestion5FormerExchangeVisitorYes { get; set; }

        public bool? SponsorQuestion5FormerExchangeVisitorNo { get; set; }

        public bool? SponsorQuestion5SecretaryLaborYes { get; set; }

        public bool? SponsorQuestion5SecretaryLaborNo { get; set; }

        public bool? SponsorQuestion5ForeignMedicalSchoolYes { get; set; }

        public bool? SponsorQuestion5ForeignMedicalSchoolNo { get; set; }

        public bool? SponsorQuestion5HealthCareWorkerYes { get; set; }

        public bool? SponsorQuestion5HealthCareWorkerNo { get; set; }

        public bool? SponsorQuestion5PermanentlyIneligibleYes { get; set; }

        public bool? SponsorQuestion5PermanentlyIneligibleNo { get; set; }

        public bool? SponsorQuestion5EvadeMilitaryServiceYes { get; set; }

        public bool? SponsorQuestion5EvadeMilitaryServiceNo { get; set; }

        public bool? SponsorQuestion5PracticePolygamyYes { get; set; }

        public bool? SponsorQuestion5PracticePolygamyNo { get; set; }

        public bool? SponsorQuestion5SecretaryHomelandYes { get; set; }

        public bool? SponsorQuestion5SecretaryHomelandNo { get; set; }

        public bool? SponsorQuestion5ObtainVisaYes { get; set; }

        public bool? SponsorQuestion5ObtainVisaNo { get; set; }

        public bool Deleted { get; set; }
    }
}
