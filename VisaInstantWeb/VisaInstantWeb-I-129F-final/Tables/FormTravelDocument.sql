
CREATE TABLE [dbo].[FormTravelDocument] (
    [Id]			       BIGINT          IDENTITY (1, 1) NOT NULL,

PersonalInformation01FullName
PersonalInformation01GenderMale
PersonalInformation01GenderFemale
PersonalInformation01AnotherName
PersonalInformation01DateOfBirth
PersonalInformation01BirthPlace
PersonalInformation01CurrentNationality
PersonalInformation01IDNumber
PersonalInformation01IssueDate
PersonalInformation01PlaceOfIssue
PersonalInformation01PassportNumber
PersonalInformation01PlaceOfIssue
PersonalInformation01IssueDate
PersonalInformation01ExpirationDate
PersonalInformation02OtherNationality
PersonalInformation02PassportNumber
PersonalInformation02Address
PersonalInformation02CurrentAddress
PersonalInformation02HomePhone
PersonalInformation02CellPhone
PersonalInformation02Email
PersonalInformation02OtherPhoneEmailNo
PersonalInformation02OtherPhoneEmailYes
PersonalInformation02UseSocialMediaNo
PersonalInformation02UseSocialMediaYes
PersonalInformation02ListMoreSocialMedia
PersonalInformation02UserNameSocialMedia
PersonalInformation03MaritalStatusSingle
PersonalInformation03MaritalStatusMarried
PersonalInformation03MaritalStatusWidow
PersonalInformation03MaritalStatusDivorce
PersonalInformation03MaritalStatusSeparation
PersonalInformation03NameOfHusbandWife
PersonalInformation03DateOfBirth
PersonalInformation03BirthPlace
PersonalInformation03Nationality
PersonalInformation03Address
PersonalInformation03MarriageRegistrationDate
PersonalInformation03DivorceProcedureDate
PersonalInformation03EverLostPassportNo
PersonalInformation03EverLostPassportYes
PersonalInformation03PassportNumber
TripInformation04TripPurpose
TripInformation04IntendedDateArrival
TripInformation04IntendedArrivalCity
TripInformation04IntendedDateLeaving
TripInformation04IntendedLeavingCity
TripInformation04PlacesToVisit
TripInformation04WhereStayUS
TripInformation04SponsorTripNo
TripInformation04SponsorTripYes
TripInformation04FullName
TripInformation04Relationship
TripInformation04Address
TripInformation04PhoneNumber
TripInformation05EverEnteredUSNo
TripInformation05EverEnteredUSYes
TripInformation05EverFingerprintedNo
TripInformation05EverFingerprintedYes
TripInformation051VisaType
TripInformation051VisaNumber
TripInformation051DateOfIssue
TripInformation051ExpirationDate
TripInformation051LengthStayFrom
TripInformation051LengthStayTo
TripInformation052VisaType
TripInformation052VisaNumber
TripInformation052DateOfIssue
TripInformation052ExpirationDate
TripInformation052LengthStayFrom
TripInformation052LengthStayTo
TripInformation053VisaType
TripInformation053VisaNumber
TripInformation053DateOfIssue
TripInformation053ExpirationDate
TripInformation053LengthStayFrom
TripInformation053LengthStayTo
TripInformation06EverRefusedVisaNo
TripInformation06EverRefusedVisaYes
TripInformation061Time
TripInformation061Reason
TripInformation06EverRefusedPermissionNo
TripInformation06EverRefusedPermissionYes
TripInformation062Time
TripInformation062Reason
TripInformation06CountriesVisited5Years
TripInformation06LanguagesYouKnow
UsContactInformation07FullName
UsContactInformation07BelongsToOrganization
UsContactInformation07Address
UsContactInformation07PhoneNumber
UsContactInformation07Email
UsContactInformation07RelationshipApplicant
FamilyInformation08FatherName
FamilyInformation081DateOfBirth
FamilyInformation081CurrentAddress
FamilyInformation08MotherName
FamilyInformation082DateOfBirth
FamilyInformation082CurrentAddress
FamilyInformation09BloodRelativesNo
FamilyInformation09BloodRelativesYes
FamilyInformation091FullName
FamilyInformation091Relationship
FamilyInformation091StatusCitizen
FamilyInformation091StatusPermanentResident
FamilyInformation091StatusNonimmigrant
FamilyInformation091StatusOther
FamilyInformation091OtherStatus
FamilyInformation092FullName
FamilyInformation092Relationship
FamilyInformation092StatusCitizen
FamilyInformation092StatusPermanentResident
FamilyInformation092StatusNonimmigrant
FamilyInformation092StatusOther
FamilyInformation092OtherStatus
FamilyInformation10OtherRelativesNo
FamilyInformation10OtherRelativesYes
FamilyInformation101FullName
FamilyInformation101Relationship
FamilyInformation101StatusCitizen
FamilyInformation101StatusPermanentResident
FamilyInformation101StatusNonimmigrant
FamilyInformation101StatusOther
FamilyInformation101OtherStatus
FamilyInformation102FullName
FamilyInformation102Relationship
FamilyInformation102StatusCitizen
FamilyInformation102StatusPermanentResident
FamilyInformation102StatusNonimmigrant
FamilyInformation102StatusOther
FamilyInformation102OtherStatus
JobInformation11WorkUnit
JobInformation11Position
JobInformation11FromDate
JobInformation11ToDate
JobInformation11JobDescription
JobInformation11MonthlyIncome
JobInformation11CompanyAddress
JobInformation11CompanyPhone
JobInformation11FullNameDdirector
JobInformation12OtherJobNo
JobInformation12OtherJobYes
JobInformation12UnitOfWork
JobInformation12Position
JobInformation12FromDate
JobInformation12ToDate
JobInformation12JobDescription
JobInformation12CompanyAddress
JobInformation12CompanyPhoneN
JobInformation12FullNameDirector
JobInformation13School
JobInformation13Address
JobInformation13Courses
JobInformation13FromDate
JobInformation13ToDate

    [ApplicantFamilyName]              NVARCHAR (1000) NULL,
    [ApplicantGivenName]               NVARCHAR (1000) NULL,
    [ApplicantMiddleName]              NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressStreet]   NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressNumber]   NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressApt]      BIT             NULL,
    [ApplicantPhysicalAddressSte]      BIT             NULL,
    [ApplicantPhysicalAddressFr]       BIT             NULL,
    [ApplicantPhysicalAddressCity]     NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressZipCode]  NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressPostCode] NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressState]    NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressProvince] NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressCountry]  NVARCHAR (1000) NULL,
    [ApplicantAlienNumber]             NVARCHAR (1000) NULL,
    [ApplicantAlienNumber1]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber2]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber3]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber4]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber5]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber6]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber7]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber9]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber8]            NVARCHAR (1000) NULL,
    [ApplicantCitizen]                 NVARCHAR (1000) NULL,
    [ApplicantClassOfAdmission]        NVARCHAR (1000) NULL,
    [ApplicantMale]                    BIT             NULL,
    [ApplicantFemale]                  BIT             NULL,
    [ApplicantDateOfBirth]             DATETIME2 (7)   NULL,
    [ApplicantCountryOfBirth]          NVARCHAR (1000) NULL,
    [ApplicantCitizenship]             NVARCHAR (1000) NULL,
    [ApplicantDateOfDepartment]        DATETIME2 (7)   NULL,
    [ApplicantLengthOfTrip]            NVARCHAR (1000) NULL,
    [PreparerGivenName]                NVARCHAR (1000) NULL,
    [PreparerFamilyName]               NVARCHAR (1000) NULL,
    [PreparerBusinessName]             NVARCHAR (1000) NULL,
    [PreparerAddressStreet]            NVARCHAR (1000) NULL,
    [PreparerAddress]                  NVARCHAR (1000) NULL,
    [PreparerAddressSte]               BIT             NULL,
    [PreparerAddressFr]                BIT             NULL,
    [PreparerAddressApt]               BIT             NULL,
    [PreparerAddressCity]              NVARCHAR (1000) NULL,
    [PreparerAddressState]             NVARCHAR (1000) NULL,
    [PreparerAddressZipCode]           NVARCHAR (1000) NULL,
    [PreparerAddressPostalCode]        NVARCHAR (1000) NULL,
    [PreparerAddressProvince]          NVARCHAR (1000) NULL,
    [PreparerAddressCountry]           NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber]             NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber1]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber2]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber3]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber4]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber5]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber6]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber7]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber8]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber9]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber10]           NVARCHAR (1000) NULL,
    [PreparerEmail]                    NVARCHAR (1000) NULL,
    [PreparerPhoneNumber]              NVARCHAR (1000) NULL,
    [PreparerPhoneNumber1]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber2]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber3]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber4]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber5]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber6]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber7]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber8]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber9]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber10]            NVARCHAR (1000) NULL,
    [ApplicantPhone]                   NVARCHAR (1000) NULL,
    [ApplicantPhone1]                  NVARCHAR (1000) NULL,
    [ApplicantPhone2]                  NVARCHAR (1000) NULL,
    [ApplicantPhone3]                  NVARCHAR (1000) NULL,
    [ApplicantPhone4]                  NVARCHAR (1000) NULL,
    [ApplicantPhone5]                  NVARCHAR (1000) NULL,
    [ApplicantPhone6]                  NVARCHAR (1000) NULL,
    [ApplicantPhone7]                  NVARCHAR (1000) NULL,
    [ApplicantPhone8]                  NVARCHAR (1000) NULL,
    [ApplicantPhone9]                  NVARCHAR (1000) NULL,
    [ApplicationTypeTravelDocument]    BIT             NULL,
    [OtherPersonFamilyName]            NVARCHAR (1000) NULL,
    [OtherPersonGivenName]             NVARCHAR (1000) NULL,
    [OtherPersonGMiddleName]           NVARCHAR (1000) NULL,
    [OtherPersonDateOfBirth]           DATETIME2 (7)   NULL,
    [OtherPersonAddressStreet]         NVARCHAR (1000) NULL,
    [OtherPersonApt]                   BIT             NULL,
    [OtherPersonFlr]                   BIT             NULL,
    [OtherPersonSte]                   BIT             NULL,
    [OtherPersonAddressNumber]         NVARCHAR (1000) NULL,
    [OtherPersonAddressCity]           NVARCHAR (1000) NULL,
    [OtherPersonAddressState]          NVARCHAR (1000) NULL,
    [OtherPersonAddressZipCode]        NVARCHAR (1000) NULL,
    [OtherPersonAddressPostalCode]     NVARCHAR (1000) NULL,
    [OtherPersonAddressProvince]       NVARCHAR (1000) NULL,
    [OtherPersonAddressCountry]        NVARCHAR (1000) NULL,
    [OtherPersonRemovalYes]            BIT             NULL,
    [OtherPersonRemovalNo]             BIT             NULL,
    [RetryPermitYes]                   BIT             NULL,
    [RetryPermitNo]                    BIT             NULL,
    [RetryPermitDate]                  NVARCHAR (1000) NULL,
    [RetryPermitDisposition]           NVARCHAR (1000) NULL,
    [ApplicationTypeReentryPermit]     BIT             NULL,
    [ApplicationTypeAdvanceParole]     BIT             NULL,
    [ApplicationTypeForOther]          BIT             NULL,
    [ApplicationTypeRefugee]           BIT             NULL,
    [ApplicationTypeForeignTravel]     BIT             NULL,
    [DocumentSentToUsAddress]          BIT             NULL,
    [DocumentSentToUsConsulate]        BIT             NULL,
    [ConsulateAddressCity]             NVARCHAR (1000) NULL,
    [ConsulateAddressCountry]          NVARCHAR (1000) NULL,
    [NameOfDHS]                        NVARCHAR (1000) NULL,
    [DHSOffice]                        BIT             NULL,
    [DHSOfficeAddressCity]             NVARCHAR (1000) NULL,
    [DHSOfficeAddressCountry]          NVARCHAR (1000) NULL,
    [AddressPart2]                     BIT             NULL,
    [AddressPart3]                     BIT             NULL,
    [AddressApt]                       BIT             NULL,
    [AddressFlr]                       BIT             NULL,
    [AddressSte]                       BIT             NULL,
    [AddressNumber]                    NVARCHAR (1000) NULL,
    [AddressStreet]                    NVARCHAR (1000) NULL,
    [AddressAddressCity]               NVARCHAR (1000) NULL,
    [AddressAddressState]              NVARCHAR (1000) NULL,
    [AddressAddressZipCode]            NVARCHAR (1000) NULL,
    [AddressAddressPostalCode]         NVARCHAR (1000) NULL,
    [AddressAddressCountry]            NVARCHAR (1000) NULL,
    [AddressPhoneNumber]               NVARCHAR (1000) NULL,
    [AddressPhoneNumber1]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber2]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber3]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber4]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber5]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber6]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber7]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber8]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber9]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber10]             NVARCHAR (1000) NULL,
    [PreparerExtension]                NVARCHAR (1000) NULL,
    [TimeOutsideLessThan6M]            BIT             NULL,
    [TimeOutsideLessThan1Y]            BIT             NULL,
    [TimeOutsideLessThan2Y]            BIT             NULL,
    [TimeOutsideLessThan3Y]            BIT             NULL,
    [TimeOutsideLessThan4Y]            BIT             NULL,
    [TimeOutsideMoreThan4Y]            BIT             NULL,
    [TaxFillYes]                       BIT             NULL,
    [TaxFillNo]                        BIT             NULL,
    [CountryFrom]                      NVARCHAR (1000) NULL,
    [Deleted]                          BIT             CONSTRAINT [DF_FormTravelDocument_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_FormTravelDocument] PRIMARY KEY CLUSTERED ([Id] ASC)
);
