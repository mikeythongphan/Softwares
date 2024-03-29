USE [OneWits@VisaInstantLOCAL]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AspNetUserId] [nvarchar](450) NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Address] [nvarchar](100) NULL,
	[City] [nvarchar](100) NULL,
	[StateProvince] [nvarchar](2) NULL,
	[PostalCode] [nvarchar](10) NULL,
	[PhoneNumber] [nvarchar](20) NULL,
	[Email] [nvarchar](256) NULL,
	[FirebaseChatToken] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AccountVerification]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountVerification](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[VerificationCode] [nvarchar](6) NOT NULL,
	[TargetTypeId] [tinyint] NOT NULL,
	[Target] [nvarchar](100) NOT NULL,
	[ExpiredAt] [datetime2](7) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_AccountVerification] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AppSetting]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppSetting](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Category] [nvarchar](1000) NULL,
	[Name] [nvarchar](1000) NULL,
	[Value] [nvarchar](max) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_AppSetting] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Beneficiary]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Beneficiary](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](1000) NULL,
	[MiddleName] [nvarchar](1000) NULL,
	[LastName] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Beneficiary] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](1000) NULL,
	[MiddleName] [nvarchar](1000) NULL,
	[LastName] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeviceCodes]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeviceCodes](
	[UserCode] [nvarchar](200) NOT NULL,
	[DeviceCode] [nvarchar](200) NOT NULL,
	[SubjectId] [nvarchar](200) NULL,
	[SessionId] [nvarchar](100) NULL,
	[ClientId] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](200) NULL,
	[CreationTime] [datetime2](7) NOT NULL,
	[Expiration] [datetime2](7) NOT NULL,
	[Data] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_DeviceCodes] PRIMARY KEY CLUSTERED 
(
	[UserCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dictionary]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dictionary](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [int] NOT NULL,
	[Keyword] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Value] [ntext] NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Dictionary] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormEmployment]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormEmployment](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[NameFirstName] [nvarchar](1000) NULL,
	[NameMiddleName] [nvarchar](1000) NULL,
	[NameLastName] [nvarchar](1000) NULL,
	[NameOtherNamesYes] [bit] NULL,
	[NameOtherNamesNo] [bit] NULL,
	[NameDaytimePhone] [nvarchar](1000) NULL,
	[NameEmailAddress] [nvarchar](1000) NULL,
	[NameCityOfBirth] [nvarchar](1000) NULL,
	[NameProvinceStateOfBirth] [nvarchar](1000) NULL,
	[NameCountryOfBirth] [nvarchar](1000) NULL,
	[NameAppyingForInitial] [bit] NULL,
	[NameAppyingForReplacement] [bit] NULL,
	[NameAppyingForRenewal] [bit] NULL,
	[AddressMailingStreetAddressApt] [bit] NULL,
	[AddressMailingStreetAddressSte] [bit] NULL,
	[AddressMailingStreetAddressFlr] [bit] NULL,
	[AddressMailingStreetAddressYes] [bit] NULL,
	[AddressMailingStreetAddressText] [nvarchar](1000) NULL,
	[AddressCityOrTown] [nvarchar](1000) NULL,
	[AddressState] [nvarchar](1000) NULL,
	[AddressProvince] [nvarchar](1000) NULL,
	[AddressZipCode] [nvarchar](1000) NULL,
	[AddressDifferentPhysicalYes] [bit] NULL,
	[AddressDifferentPhysicalNo] [bit] NULL,
	[ContactGenderMale] [bit] NULL,
	[ContactGenderFemale] [bit] NULL,
	[ContactDateOfBirth] [datetime2](7) NULL,
	[ContactCityOfBirth] [nvarchar](1000) NULL,
	[ContactProvinceOrStateOfBirth] [nvarchar](1000) NULL,
	[ContactCountryOfBirth] [nvarchar](1000) NULL,
	[ContactMaritalStatusSingle] [bit] NULL,
	[ContactMaritalStatusMarried] [bit] NULL,
	[ContactMaritalStatusDivorced] [bit] NULL,
	[ContactMaritalStatusWidowed] [bit] NULL,
	[ContactAlienRegistrationNumber] [nvarchar](1000) NULL,
	[ContactFormI765Yes] [bit] NULL,
	[ContactFormI765No] [bit] NULL,
	[ContactSocialSecurityYes] [bit] NULL,
	[ContactSocialSecurityNo] [bit] NULL,
	[ContactSSAYes] [bit] NULL,
	[ContactSSANo] [bit] NULL,
	[ContactConsentDisclosureYes] [bit] NULL,
	[ContactConsentDisclosureNo] [bit] NULL,
	[ParentFatherFirstName] [nvarchar](1000) NULL,
	[ParentFatherLastName] [nvarchar](1000) NULL,
	[ParentMotherFirstName] [nvarchar](1000) NULL,
	[ParentMotherLastName] [nvarchar](1000) NULL,
	[Parent1Country] [nvarchar](1000) NULL,
	[Parent2Country] [nvarchar](1000) NULL,
	[Parent3Country] [nvarchar](1000) NULL,
	[ParentArrivalDeparture] [nvarchar](1000) NULL,
	[ParentDateAuthorized] [nvarchar](1000) NULL,
	[ParentPassportNumber] [nvarchar](1000) NULL,
	[ParentTravelDocumentNumber] [nvarchar](1000) NULL,
	[ParentCountryIssuance] [nvarchar](1000) NULL,
	[ParentDateLastArrival] [datetime2](7) NULL,
	[ParentPlaceLastArrival] [nvarchar](1000) NULL,
	[ParentImmigrationStatusLastArrival] [nvarchar](1000) NULL,
	[ParentImmigrationStatusCategory] [nvarchar](1000) NULL,
	[ParentSudentExchangeVisitor] [nvarchar](1000) NULL,
	[AuthorizationEligibilityCategory] [nvarchar](1000) NULL,
	[AuthorizationDegree] [nvarchar](1000) NULL,
	[AuthorizationEmployerName] [nvarchar](1000) NULL,
	[AuthorizationCompanyIdentification] [nvarchar](1000) NULL,
	[AuthorizationReceiptNumber] [nvarchar](1000) NULL,
	[Authorization1ArrestedYes] [bit] NULL,
	[Authorization1ArrestedNo] [bit] NULL,
	[AuthorizationLawfullyYes] [bit] NULL,
	[AuthorizationLawfullyNo] [bit] NULL,
	[AuthorizationSecretaryYes] [bit] NULL,
	[AuthorizationSecretaryNo] [bit] NULL,
	[Authorization1Notice] [nvarchar](1000) NULL,
	[Authorization2ArrestedYes] [bit] NULL,
	[Authorization2ArrestedNo] [bit] NULL,
	[Authorization2Notice] [nvarchar](1000) NULL,
	[InterpreterFirstName] [nvarchar](1000) NULL,
	[InterpreterLastName] [nvarchar](1000) NULL,
	[InterpreterBusinessName] [nvarchar](1000) NULL,
	[InterpreterMailingStreetAddressApt] [bit] NULL,
	[InterpreterMailingStreetAddressSte] [bit] NULL,
	[InterpreterMailingStreetAddressFlr] [bit] NULL,
	[InterpreterMailingStreetAddressNumber] [bit] NULL,
	[InterpreterMailingStreetAddressText] [nvarchar](1000) NULL,
	[InterpreterCityOrTown] [nvarchar](1000) NULL,
	[InterpreterProvince] [nvarchar](1000) NULL,
	[InterpreterZipCode] [nvarchar](1000) NULL,
	[InterpreterCountry] [nvarchar](1000) NULL,
	[InterpreterDaytimeTelephoneNumber] [nvarchar](1000) NULL,
	[InterpreterEmail] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormEmployment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormTravelDocument]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormTravelDocument](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[Personal01FullName] [nvarchar](1000) NULL,
	[Personal01GenderMale] [bit] NULL,
	[Personal01GenderFemale] [bit] NULL,
	[Personal01AnotherName] [nvarchar](1000) NULL,
	[Personal01DateOfBirth] [datetime2](7) NULL,
	[Personal01BirthPlace] [nvarchar](1000) NULL,
	[Personal01BirthNationality] [nvarchar](1000) NULL,
	[Personal01CurrentNationality] [nvarchar](1000) NULL,
	[Personal01IDNumber] [nvarchar](1000) NULL,
	[Personal011IssueDate] [datetime2](7) NULL,
	[Personal011PlaceOfIssue] [nvarchar](1000) NULL,
	[Personal01PassportNumber] [nvarchar](1000) NULL,
	[Personal012PlaceOfIssue] [nvarchar](1000) NULL,
	[Personal012IssueDate] [datetime2](7) NULL,
	[Personal01ExpirationDate] [datetime2](7) NULL,
	[Personal02OtherNationality] [nvarchar](1000) NULL,
	[Personal02PassportNumber] [nvarchar](1000) NULL,
	[Personal02Address] [nvarchar](1000) NULL,
	[Personal02CurrentAddress] [nvarchar](1000) NULL,
	[Personal02HomePhone] [nvarchar](1000) NULL,
	[Personal02CellPhone] [nvarchar](1000) NULL,
	[Personal02Email] [nvarchar](1000) NULL,
	[Personal02OtherPhoneEmailNo] [bit] NULL,
	[Personal02OtherPhoneEmailYes] [bit] NULL,
	[Personal02UseSocialMediaNo] [bit] NULL,
	[Personal02UseSocialMediaYes] [bit] NULL,
	[Personal02ListMoreSocialMedia] [nvarchar](1000) NULL,
	[Personal02UserNameSocialMedia] [nvarchar](1000) NULL,
	[Personal03MaritalStatusSingle] [bit] NULL,
	[Personal03MaritalStatusMarried] [bit] NULL,
	[Personal03MaritalStatusWidow] [bit] NULL,
	[Personal03MaritalStatusDivorce] [bit] NULL,
	[Personal03MaritalStatusSeparation] [bit] NULL,
	[Personal03NameOfHusbandWife] [nvarchar](1000) NULL,
	[Personal03DateOfBirth] [datetime2](7) NULL,
	[Personal03BirthPlace] [nvarchar](1000) NULL,
	[Personal03Nationality] [nvarchar](1000) NULL,
	[Personal03Address] [nvarchar](1000) NULL,
	[Personal03MarriageRegistrationDate] [datetime2](7) NULL,
	[Personal03DivorceProcedureDate] [datetime2](7) NULL,
	[Personal03EverLostPassportNo] [bit] NULL,
	[Personal03EverLostPassportYes] [bit] NULL,
	[Personal03PassportNumber] [nvarchar](1000) NULL,
	[Trip04TripPurpose] [nvarchar](1000) NULL,
	[Trip04IntendedDateArrival] [datetime2](7) NULL,
	[Trip04IntendedArrivalCity] [nvarchar](1000) NULL,
	[Trip04IntendedDateLeaving] [datetime2](7) NULL,
	[Trip04IntendedLeavingCity] [nvarchar](1000) NULL,
	[Trip04PlacesToVisit] [nvarchar](1000) NULL,
	[Trip04WhereStayUS] [nvarchar](1000) NULL,
	[Trip04SponsorTripNo] [bit] NULL,
	[Trip04SponsorTripYes] [bit] NULL,
	[Trip04FullName] [nvarchar](1000) NULL,
	[Trip04Relationship] [nvarchar](1000) NULL,
	[Trip04Address] [nvarchar](1000) NULL,
	[Trip04PhoneNumber] [nvarchar](1000) NULL,
	[Trip05EverEnteredUSNo] [bit] NULL,
	[Trip05EverEnteredUSYes] [bit] NULL,
	[Trip05EverFingerprintedNo] [bit] NULL,
	[Trip05EverFingerprintedYes] [bit] NULL,
	[Trip051VisaType] [nvarchar](1000) NULL,
	[Trip051VisaNumber] [nvarchar](1000) NULL,
	[Trip051DateOfIssue] [datetime2](7) NULL,
	[Trip051ExpirationDate] [datetime2](7) NULL,
	[Trip051LengthStayFrom] [datetime2](7) NULL,
	[Trip051LengthStayTo] [datetime2](7) NULL,
	[Trip052VisaType] [nvarchar](1000) NULL,
	[Trip052VisaNumber] [nvarchar](1000) NULL,
	[Trip052DateOfIssue] [datetime2](7) NULL,
	[Trip052ExpirationDate] [datetime2](7) NULL,
	[Trip052LengthStayFrom] [datetime2](7) NULL,
	[Trip052LengthStayTo] [datetime2](7) NULL,
	[Trip053VisaType] [nvarchar](1000) NULL,
	[Trip053VisaNumber] [nvarchar](1000) NULL,
	[Trip053DateOfIssue] [datetime2](7) NULL,
	[Trip053ExpirationDate] [datetime2](7) NULL,
	[Trip053LengthStayFrom] [datetime2](7) NULL,
	[Trip053LengthStayTo] [datetime2](7) NULL,
	[Trip06EverRefusedVisaNo] [bit] NULL,
	[Trip06EverRefusedVisaYes] [bit] NULL,
	[Trip061Time] [nvarchar](1000) NULL,
	[Trip061Reason] [nvarchar](1000) NULL,
	[Trip06EverRefusedPermissionNo] [bit] NULL,
	[Trip06EverRefusedPermissionYes] [bit] NULL,
	[Trip062Time] [nvarchar](1000) NULL,
	[Trip062Reason] [nvarchar](1000) NULL,
	[Trip06CountriesVisited5Years] [nvarchar](1000) NULL,
	[Trip06LanguagesYouKnow] [nvarchar](1000) NULL,
	[UsContact07FullName] [nvarchar](1000) NULL,
	[UsContact07BelongsToOrganization] [nvarchar](1000) NULL,
	[UsContact07Address] [nvarchar](1000) NULL,
	[UsContact07PhoneNumber] [nvarchar](1000) NULL,
	[UsContact07Email] [nvarchar](1000) NULL,
	[UsContact07RelationshipApplicant] [nvarchar](1000) NULL,
	[Family08FatherName] [nvarchar](1000) NULL,
	[Family081DateOfBirth] [datetime2](7) NULL,
	[Family081CurrentAddress] [nvarchar](1000) NULL,
	[Family08MotherName] [nvarchar](1000) NULL,
	[Family082DateOfBirth] [datetime2](7) NULL,
	[Family082CurrentAddress] [nvarchar](1000) NULL,
	[Family09BloodRelativesNo] [bit] NULL,
	[Family09BloodRelativesYes] [bit] NULL,
	[Family091FullName] [nvarchar](1000) NULL,
	[Family091Relationship] [nvarchar](1000) NULL,
	[Family091StatusCitizen] [bit] NULL,
	[Family091StatusPermanentResident] [bit] NULL,
	[Family091StatusNonimmigrant] [bit] NULL,
	[Family091StatusOther] [bit] NULL,
	[Family091OtherStatus] [nvarchar](1000) NULL,
	[Family092FullName] [nvarchar](1000) NULL,
	[Family092Relationship] [nvarchar](1000) NULL,
	[Family092StatusCitizen] [bit] NULL,
	[Family092StatusPermanentResident] [bit] NULL,
	[Family092StatusNonimmigrant] [bit] NULL,
	[Family092StatusOther] [bit] NULL,
	[Family092OtherStatus] [nvarchar](1000) NULL,
	[Family10OtherRelativesNo] [bit] NULL,
	[Family10OtherRelativesYes] [bit] NULL,
	[Family101FullName] [nvarchar](1000) NULL,
	[Family101Relationship] [nvarchar](1000) NULL,
	[Family101StatusCitizen] [bit] NULL,
	[Family101StatusPermanentResident] [bit] NULL,
	[Family101StatusNonimmigrant] [bit] NULL,
	[Family101StatusOther] [bit] NULL,
	[Family101OtherStatus] [nvarchar](1000) NULL,
	[Family102FullName] [nvarchar](1000) NULL,
	[Family102Relationship] [nvarchar](1000) NULL,
	[Family102StatusCitizen] [bit] NULL,
	[Family102StatusPermanentResident] [bit] NULL,
	[Family102StatusNonimmigrant] [bit] NULL,
	[Family102StatusOther] [bit] NULL,
	[Family102OtherStatus] [nvarchar](1000) NULL,
	[Job11WorkUnit] [nvarchar](1000) NULL,
	[Job11Position] [nvarchar](1000) NULL,
	[Job11FromDate] [datetime2](7) NULL,
	[Job11ToDate] [datetime2](7) NULL,
	[Job11JobDescription] [nvarchar](1000) NULL,
	[Job11MonthlyIncome] [nvarchar](1000) NULL,
	[Job11CompanyAddress] [nvarchar](1000) NULL,
	[Job11CompanyPhone] [nvarchar](1000) NULL,
	[Job11FullNameDdirector] [nvarchar](1000) NULL,
	[Job12OtherJobNo] [bit] NULL,
	[Job12OtherJobYes] [bit] NULL,
	[Job12UnitOfWork] [nvarchar](1000) NULL,
	[Job12Position] [nvarchar](1000) NULL,
	[Job12FromDate] [datetime2](7) NULL,
	[Job12ToDate] [datetime2](7) NULL,
	[Job12JobDescription] [nvarchar](1000) NULL,
	[Job12CompanyAddress] [nvarchar](1000) NULL,
	[Job12CompanyPhone] [nvarchar](1000) NULL,
	[Job12FullNameDirector] [nvarchar](1000) NULL,
	[Job13School] [nvarchar](1000) NULL,
	[Job13Address] [nvarchar](1000) NULL,
	[Job13Courses] [nvarchar](1000) NULL,
	[Job13FromDate] [datetime2](7) NULL,
	[Job13ToDate] [datetime2](7) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormTravelDocument] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormVisaFiance]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormVisaFiance](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[Beneficiary1FullName] [nvarchar](1000) NULL,
	[Beneficiary1PlaceOfBirth] [nvarchar](1000) NULL,
	[Beneficiary1HasBeenUSYes] [bit] NULL,
	[Beneficiary1HasBeenUSNo] [bit] NULL,
	[Beneficiary1NamesUsed] [nvarchar](1000) NULL,
	[Beneficiary1GreenCardNumber] [nvarchar](1000) NULL,
	[Beneficiary1SocialSecurityNumber] [nvarchar](1000) NULL,
	[Beneficiary1ConsularOfficeWishes] [nvarchar](1000) NULL,
	[Beneficiary1PrimaryLanguage] [nvarchar](1000) NULL,
	[Beneficiary1HomePhoneNumber] [nvarchar](1000) NULL,
	[Beneficiary1Mobile] [nvarchar](1000) NULL,
	[Beneficiary1OfficeTelephone] [nvarchar](1000) NULL,
	[Beneficiary1FaxNumber] [nvarchar](1000) NULL,
	[Beneficiary1EmailAddress] [nvarchar](1000) NULL,
	[Beneficiary1FatherName] [nvarchar](1000) NULL,
	[Beneficiary1FatherDateOfBirth] [datetime2](7) NULL,
	[Beneficiary1FatherPlaceOfBirth] [nvarchar](1000) NULL,
	[Beneficiary1FatherCityCountryResidence] [nvarchar](1000) NULL,
	[Beneficiary1MotherName] [nvarchar](1000) NULL,
	[Beneficiary1MotherDateOfBirth] [datetime2](7) NULL,
	[Beneficiary1MotherPlaceOfBirth] [nvarchar](1000) NULL,
	[Beneficiary1MotherCityCountryResidence] [nvarchar](1000) NULL,
	[Beneficiary11NameOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary11BirthDateOfExSpouse] [datetime2](7) NULL,
	[Beneficiary11BirthPlaceOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary11DateOfMarriage] [datetime2](7) NULL,
	[Beneficiary11PlaceOfMarriage] [nvarchar](1000) NULL,
	[Beneficiary12NameOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary12BirthDateOfExSpouse] [datetime2](7) NULL,
	[Beneficiary12BirthPlaceOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary12DateOfMarriage] [datetime2](7) NULL,
	[Beneficiary12PlaceOfMarriage] [nvarchar](1000) NULL,
	[Beneficiary13NameOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary13BirthDateOfExSpouse] [datetime2](7) NULL,
	[Beneficiary13BirthPlaceOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary13DateOfMarriage] [datetime2](7) NULL,
	[Beneficiary13PlaceOfMarriage] [nvarchar](1000) NULL,
	[Beneficiary14NameOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary14BirthDateOfExSpouse] [datetime2](7) NULL,
	[Beneficiary14BirthPlaceOfExSpouse] [nvarchar](1000) NULL,
	[Beneficiary14DateOfMarriage] [datetime2](7) NULL,
	[Beneficiary14PlaceOfMarriage] [nvarchar](1000) NULL,
	[Beneficiary21CurrentHouseStreet] [nvarchar](1000) NULL,
	[Beneficiary21City] [nvarchar](1000) NULL,
	[Beneficiary21StateCounty] [nvarchar](1000) NULL,
	[Beneficiary21ZipCode] [nvarchar](1000) NULL,
	[Beneficiary21FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary21ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary22CurrentHouseStreet] [nvarchar](1000) NULL,
	[Beneficiary22City] [nvarchar](1000) NULL,
	[Beneficiary22StateCounty] [nvarchar](1000) NULL,
	[Beneficiary22ZipCode] [nvarchar](1000) NULL,
	[Beneficiary22FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary22ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary23CurrentHouseStreet] [nvarchar](1000) NULL,
	[Beneficiary23City] [nvarchar](1000) NULL,
	[Beneficiary23StateCounty] [nvarchar](1000) NULL,
	[Beneficiary23ZipCode] [nvarchar](1000) NULL,
	[Beneficiary23FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary23ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary24CurrentHouseStreet] [nvarchar](1000) NULL,
	[Beneficiary24City] [nvarchar](1000) NULL,
	[Beneficiary24StateCounty] [nvarchar](1000) NULL,
	[Beneficiary24ZipCode] [nvarchar](1000) NULL,
	[Beneficiary24FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary24ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary25CurrentHouseStreet] [nvarchar](1000) NULL,
	[Beneficiary25City] [nvarchar](1000) NULL,
	[Beneficiary25StateCounty] [nvarchar](1000) NULL,
	[Beneficiary25ZipCode] [nvarchar](1000) NULL,
	[Beneficiary25FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary25ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary3HouseStreetName] [nvarchar](1000) NULL,
	[Beneficiary3City] [nvarchar](1000) NULL,
	[Beneficiary3StateCounty] [nvarchar](1000) NULL,
	[Beneficiary3ZipCode] [nvarchar](1000) NULL,
	[Beneficiary3FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary3ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary41NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Beneficiary41Position] [nvarchar](1000) NULL,
	[Beneficiary41FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary41ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary42NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Beneficiary42Position] [nvarchar](1000) NULL,
	[Beneficiary42FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary42ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary43NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Beneficiary43Position] [nvarchar](1000) NULL,
	[Beneficiary43FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary43ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary44NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Beneficiary44Position] [nvarchar](1000) NULL,
	[Beneficiary44FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary44ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary45NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Beneficiary45Position] [nvarchar](1000) NULL,
	[Beneficiary45FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary45ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary5NameAddressWork] [nvarchar](1000) NULL,
	[Beneficiary5Position] [nvarchar](1000) NULL,
	[Beneficiary5FromMonthYear] [nvarchar](1000) NULL,
	[Beneficiary5ToMonthYear] [nvarchar](1000) NULL,
	[Beneficiary5AllPreviousVisaRefusals] [nvarchar](1000) NULL,
	[Beneficiary5HasAppliedWorkPermitYes] [bit] NULL,
	[Beneficiary5HasAppliedWorkPermitNo] [bit] NULL,
	[Beneficiary5WhenAndWhere] [nvarchar](1000) NULL,
	[Beneficiary5ApprovedYes] [bit] NULL,
	[Beneficiary5ApprovedNo] [bit] NULL,
	[Beneficiary5NamesOrganizationsMember] [nvarchar](1000) NULL,
	[Beneficiary5DescribePeopleMet] [nvarchar](1000) NULL,
	[Beneficiary5CanMatchmakingYes] [bit] NULL,
	[Beneficiary5CanMatchmakingNo] [bit] NULL,
	[Beneficiary5HaveEverViolatedYes] [bit] NULL,
	[Beneficiary5HaveEverViolatedNo] [bit] NULL,
	[Beneficiary5ViolatedProvideDetails] [nvarchar](1000) NULL,
	[Beneficiary5HasEverSufferedYes] [bit] NULL,
	[Beneficiary5HasEverSufferedNo] [bit] NULL,
	[Beneficiary5SufferedProvideDetails] [nvarchar](1000) NULL,
	[Beneficiary5HasInMilitaryYes] [bit] NULL,
	[Beneficiary5HasInMilitaryNo] [bit] NULL,
	[Beneficiary5NameOfOrganization] [nvarchar](1000) NULL,
	[Beneficiary5EnlistmentDate] [datetime2](7) NULL,
	[Beneficiary5WhereToEnlist] [nvarchar](1000) NULL,
	[Sponsor1Name] [nvarchar](1000) NULL,
	[Sponsor1BirthPlace] [nvarchar](1000) NULL,
	[Sponsor1IsFianceYes] [bit] NULL,
	[Sponsor1IsFianceNo] [bit] NULL,
	[Sponsor1NamesUsed] [nvarchar](1000) NULL,
	[Sponsor1GreenCardNumber] [nvarchar](1000) NULL,
	[Sponsor1SocialSecurityNumber] [nvarchar](1000) NULL,
	[Sponsor1HomePhoneNumber] [nvarchar](1000) NULL,
	[Sponsor1Mobile] [nvarchar](1000) NULL,
	[Sponsor1OfficePhone] [nvarchar](1000) NULL,
	[Sponsor1FaxNumber] [nvarchar](1000) NULL,
	[Sponsor1EmailAddress] [nvarchar](1000) NULL,
	[Sponsor1FatherName] [nvarchar](1000) NULL,
	[Sponsor1FatherBirthDate] [datetime2](7) NULL,
	[Sponsor1FatherBirthPlace] [nvarchar](1000) NULL,
	[Sponsor1FatherCityCountry] [nvarchar](1000) NULL,
	[Sponsor1MotherName] [nvarchar](1000) NULL,
	[Sponsor1MotherBirthDate] [datetime2](7) NULL,
	[Sponsor1MotherBirthPlace] [nvarchar](1000) NULL,
	[Sponsor1MotherCityCountry] [nvarchar](1000) NULL,
	[Sponsor11NameExSpouse] [nvarchar](1000) NULL,
	[Sponsor11BirthDateExSpouse] [datetime2](7) NULL,
	[Sponsor11BirthplaceExSpouse] [nvarchar](1000) NULL,
	[Sponsor11MarriageDate] [datetime2](7) NULL,
	[Sponsor11MarriagePlace] [nvarchar](1000) NULL,
	[Sponsor12NameExSpouse] [nvarchar](1000) NULL,
	[Sponsor12BirthDateExSpouse] [datetime2](7) NULL,
	[Sponsor12BirthPlaceExSpouse] [nvarchar](1000) NULL,
	[Sponsor12MarriageDate] [datetime2](7) NULL,
	[Sponsor12MarriagePlace] [nvarchar](1000) NULL,
	[Sponsor13NameExSpouse] [nvarchar](1000) NULL,
	[Sponsor13BirthDateExSpouse] [datetime2](7) NULL,
	[Sponsor13BirthPlaceExSpouse] [nvarchar](1000) NULL,
	[Sponsor13MarriageDate] [datetime2](7) NULL,
	[Sponsor13MarriagePlace] [nvarchar](1000) NULL,
	[Sponsor21CurrentHouseStreet] [nvarchar](1000) NULL,
	[Sponsor21City] [nvarchar](1000) NULL,
	[Sponsor21StateCounty] [nvarchar](1000) NULL,
	[Sponsor21ZipCode] [nvarchar](1000) NULL,
	[Sponsor21FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor21ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor22CurrentHouseStreet] [nvarchar](1000) NULL,
	[Sponsor22City] [nvarchar](1000) NULL,
	[Sponsor22StateCounty] [nvarchar](1000) NULL,
	[Sponsor22ZipCode] [nvarchar](1000) NULL,
	[Sponsor22FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor22ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor23CurrentHouseStreet] [nvarchar](1000) NULL,
	[Sponsor23City] [nvarchar](1000) NULL,
	[Sponsor23StateCounty] [nvarchar](1000) NULL,
	[Sponsor23ZipCode] [nvarchar](1000) NULL,
	[Sponsor23FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor23ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor24CurrentHouseStreet] [nvarchar](1000) NULL,
	[Sponsor24City] [nvarchar](1000) NULL,
	[Sponsor24StateCounty] [nvarchar](1000) NULL,
	[Sponsor24ZipCode] [nvarchar](1000) NULL,
	[Sponsor24FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor24ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor25CurrentHouseStreet] [nvarchar](1000) NULL,
	[Sponsor25City] [nvarchar](1000) NULL,
	[Sponsor25StateCounty] [nvarchar](1000) NULL,
	[Sponsor25ZipCode] [nvarchar](1000) NULL,
	[Sponsor25FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor25ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor3HouseStreetName] [nvarchar](1000) NULL,
	[Sponsor3City] [nvarchar](1000) NULL,
	[Sponsor3StateCounty] [nvarchar](1000) NULL,
	[Sponsor3ZipCode] [nvarchar](1000) NULL,
	[Sponsor3FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor3ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor41NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Sponsor41Position] [nvarchar](1000) NULL,
	[Sponsor41FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor41ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor42NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Sponsor42Position] [nvarchar](1000) NULL,
	[Sponsor42FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor42ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor43NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Sponsor43Position] [nvarchar](1000) NULL,
	[Sponsor43FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor43ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor44NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Sponsor44Position] [nvarchar](1000) NULL,
	[Sponsor44FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor44ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor45NameWorkplaceAddress] [nvarchar](1000) NULL,
	[Sponsor45Position] [nvarchar](1000) NULL,
	[Sponsor45FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor45ToMonthYear] [nvarchar](1000) NULL,
	[Sponsor5NameAddressWork] [nvarchar](1000) NULL,
	[Sponsor5Position] [nvarchar](1000) NULL,
	[Sponsor5FromMonthYear] [nvarchar](1000) NULL,
	[Sponsor5ToMonthYear] [nvarchar](1000) NULL,
	[BeneficiaryProfileFormI94] [bit] NULL,
	[BeneficiaryProfileBirthCertificate] [bit] NULL,
	[BeneficiaryProfileI20Documents] [bit] NULL,
	[BeneficiaryProfileCriminalRecord] [bit] NULL,
	[BeneficiaryProfilePassportPhotos] [bit] NULL,
	[BeneficiaryProfilePreviousDivorce] [bit] NULL,
	[BeneficiaryProfilePapersRelated] [bit] NULL,
	[SponsorProfileLetterConfirmation] [bit] NULL,
	[SponsorProfileBankStatement] [bit] NULL,
	[SponsorProfileTaxReturns] [bit] NULL,
	[SponsorProfileW2PaystubsChecks] [bit] NULL,
	[SponsorProfileDocumentsShowing] [bit] NULL,
	[SponsorProfilePassportPhotos] [bit] NULL,
	[SponsorProfilePreviousDivorce] [bit] NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormVisaFiance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormVisaParent]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormVisaParent](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[PetitionerContactFirstName] [nvarchar](1000) NULL,
	[PetitionerContactMiddleName] [nvarchar](1000) NULL,
	[PetitionerContactLastName] [nvarchar](1000) NULL,
	[PetitionerContactDaytimeTelephoneNumber] [nvarchar](1000) NULL,
	[PetitionerContactEmailAddress] [nvarchar](1000) NULL,
	[PetitionerContactDateOfBirth] [datetime2](7) NULL,
	[PetitionerContactAlienRegistrationNumber] [nvarchar](1000) NULL,
	[PetitionerContactCountryOfCitizenship] [nvarchar](1000) NULL,
	[SponsorsContactMailingStreetAddressApt] [bit] NULL,
	[SponsorsContactMailingStreetAddressSte] [bit] NULL,
	[SponsorsContactMailingStreetAddressFlr] [bit] NULL,
	[SponsorsContactMailingStreetNumber] [nvarchar](1000) NULL,
	[SponsorsContactCityOrTown] [nvarchar](1000) NULL,
	[SponsorsContactState] [nvarchar](1000) NULL,
	[SponsorsContactProvince] [nvarchar](1000) NULL,
	[SponsorsContactZipCode] [nvarchar](1000) NULL,
	[SponsorsContactCountry] [nvarchar](1000) NULL,
	[SponsorsContactDifferentPhysicalYes] [bit] NULL,
	[SponsorsContactDifferentPhysicalNo] [bit] NULL,
	[SponsorInformationEmployedAs] [nvarchar](1000) NULL,
	[SponsorInformationNameOfEmployer1] [nvarchar](1000) NULL,
	[SponsorInformationNameOfEmployer2] [nvarchar](1000) NULL,
	[SponsorInformationSelfEmployed] [nvarchar](1000) NULL,
	[SponsorInformationRetiredSince] [datetime2](7) NULL,
	[SponsorInformationUnemployedSince] [datetime2](7) NULL,
	[SponsorInformationAnnualIncomeIs] [nvarchar](1000) NULL,
	[SponsorInformationAnnualHouseholdIs] [nvarchar](1000) NULL,
	[SponsorInformationTaxYearMostRecent] [nvarchar](1000) NULL,
	[SponsorInformation2ndMostRecent] [nvarchar](1000) NULL,
	[SponsorInformation3rdMostRecent] [nvarchar](1000) NULL,
	[SponsorInformationIRSRequiredLevelYes] [bit] NULL,
	[SponsorInformationIRSRequiredLevelNo] [bit] NULL,
	[SponsorStatusSocialSecurityNumber] [nvarchar](1000) NULL,
	[SponsorStatusMaritalStatusUSCitizen] [bit] NULL,
	[SponsorStatusMaritalStatusUSNational] [bit] NULL,
	[SponsorStatusMaritalStatusGreenCard] [bit] NULL,
	[SponsorStatusAlienNumber] [nvarchar](1000) NULL,
	[SponsorStatusCountryOfDomicile] [nvarchar](1000) NULL,
	[SponsorStatusUSArmedForcesYes] [bit] NULL,
	[SponsorStatusUSArmedForcesNo] [bit] NULL,
	[SponsorStatusCurrentlyMarriedYes] [bit] NULL,
	[SponsorStatusCurrentlyMarriedNo] [bit] NULL,
	[SponsorStatusDependentChildrenYes] [bit] NULL,
	[SponsorStatusDependentChildrenNo] [bit] NULL,
	[SponsorStatusPreviouslyMarriedYes] [bit] NULL,
	[SponsorStatusPreviouslyMarriedNo] [bit] NULL,
	[SponsorGenderPrincipalImmigrantMale] [bit] NULL,
	[SponsorGenderPrincipalImmigrantFemale] [bit] NULL,
	[SponsorGenderWithinSixMonthsImmigrantMale] [bit] NULL,
	[SponsorGenderWithinSixMonthsImmigrantFemale] [bit] NULL,
	[SponsorGenderMoreThanSixMonthsImmigrantMale] [bit] NULL,
	[SponsorGenderMoreThanSixMonthsImmigrantFemale] [bit] NULL,
	[SponsorAddressStreetApt] [bit] NULL,
	[SponsorAddressStreetSte] [bit] NULL,
	[SponsorAddressStreetFlr] [bit] NULL,
	[SponsorAddressStreetNumber] [nvarchar](1000) NULL,
	[SponsorAddressCityOrTown] [nvarchar](1000) NULL,
	[SponsorAddressState] [nvarchar](1000) NULL,
	[SponsorAddressProvince] [nvarchar](1000) NULL,
	[SponsorAddressZipCode] [nvarchar](1000) NULL,
	[SponsorAddressCountry] [nvarchar](1000) NULL,
	[SponsorNameFirstName] [nvarchar](1000) NULL,
	[SponsorNameMiddleName] [nvarchar](1000) NULL,
	[SponsorNameLastName] [nvarchar](1000) NULL,
	[SponsorName1DaytimeTelephoneNumber] [nvarchar](1000) NULL,
	[SponsorName2DaytimeTelephoneNumber] [nvarchar](1000) NULL,
	[SponsorNameEmailAddress] [nvarchar](1000) NULL,
	[SponsorNameDateOfBirth] [datetime2](7) NULL,
	[SponsorNameAlienRegistrationNumber] [nvarchar](1000) NULL,
	[SponsorNameCountry] [nvarchar](1000) NULL,
	[InterpreterNameFirstName] [nvarchar](1000) NULL,
	[InterpreterNameLastName] [nvarchar](1000) NULL,
	[InterpreterNameBusinessOrOrganization] [nvarchar](1000) NULL,
	[InterpreterNameStreetApt] [bit] NULL,
	[InterpreterNameStreetSte] [bit] NULL,
	[InterpreterNameStreetFlr] [bit] NULL,
	[InterpreterNameStreetNumber] [nvarchar](1000) NULL,
	[InterpreterNameCityOrTown] [nvarchar](1000) NULL,
	[InterpreterNameProvince] [nvarchar](1000) NULL,
	[InterpreterNameZipCode] [nvarchar](1000) NULL,
	[InterpreterNameCountry] [nvarchar](1000) NULL,
	[InterpreterNameDaytimeTelephoneNumber] [nvarchar](1000) NULL,
	[InterpreterNameEmailAddress] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormVisaParent] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormVisaSpouse]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormVisaSpouse](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[SponsorNameFirstName] [nvarchar](1000) NULL,
	[SponsorNameMiddleName] [nvarchar](1000) NULL,
	[SponsorNameDoesNotApply] [bit] NULL,
	[SponsorNameLastName] [nvarchar](1000) NULL,
	[SponsorNameDaytimePhoneNumber] [nvarchar](1000) NULL,
	[SponsorNameGenderMale] [bit] NULL,
	[SponsorNameGenderFemale] [bit] NULL,
	[SponsorNameAnotherNameYes] [bit] NULL,
	[SponsorNameAnotherNameNo] [bit] NULL,
	[SponsorContactEmailAddress] [nvarchar](1000) NULL,
	[SponsorContactMobileNumber] [nvarchar](1000) NULL,
	[SponsorContactSocialSecurityNumber] [nvarchar](1000) NULL,
	[SponsorContactAccountNumber] [nvarchar](1000) NULL,
	[SponsorContactDoesNotApply] [bit] NULL,
	[SponsorContactUncommon] [nvarchar](1000) NULL,
	[SponsorContactDifferentPhysicalYes] [bit] NULL,
	[SponsorContactDifferentPhysicalNo] [bit] NULL,
	[SponsorPlaceOfBirthDateOfBirth] [datetime2](7) NULL,
	[SponsorPlaceOfBirthCityOfBirth] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthCountryOfBirthText] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthCountryOfBirthId] [int] NULL,
	[SponsorPlaceOfBirthFatherLastName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthFatherFirstName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthFatherMiddleName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirth1DoesNotApply] [bit] NULL,
	[SponsorPlaceOfBirthFatherDateOfBirth] [datetime2](7) NULL,
	[SponsorPlaceOfBirth1Unknow] [bit] NULL,
	[SponsorPlaceOfBirthFatherCountryOfBirth] [int] NULL,
	[SponsorPlaceOfBirthFatherCityProvince] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthHeDeceasedYes] [bit] NULL,
	[SponsorPlaceOfBirthHeDeceasedNo] [bit] NULL,
	[SponsorPlaceOfBirthMotherMaidenLastName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthMotherFirstName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthMotherMiddleName] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirth2DoesNotApply] [bit] NULL,
	[SponsorPlaceOfBirthMotherDateOfBirth] [datetime2](7) NULL,
	[SponsorPlaceOfBirth2Unknow] [bit] NULL,
	[SponsorPlaceOfBirthMotherCountryOfBirth] [int] NULL,
	[SponsorPlaceOfBirthMotherCityOfBirth] [nvarchar](1000) NULL,
	[SponsorPlaceOfBirthSheDeceasedYes] [bit] NULL,
	[SponsorPlaceOfBirthSheDeceasedNo] [bit] NULL,
	[SponsorStatusUSCitizen] [bit] NULL,
	[SponsorStatusPermanentResident] [bit] NULL,
	[SponsorStatusAmericanSamoa] [bit] NULL,
	[SponsorStatusHeightFeet] [nvarchar](1000) NULL,
	[SponsorStatusHeightInches] [nvarchar](1000) NULL,
	[SponsorStatusWeightPounds] [nvarchar](1000) NULL,
	[SponsorStatusEthnicityNotHispanicOrLatino] [bit] NULL,
	[SponsorStatusEthnicityHispanicOrLatino] [bit] NULL,
	[SponsorStatusRaceWhite] [bit] NULL,
	[SponsorStatusRaceAsian] [bit] NULL,
	[SponsorStatusRaceBlack] [bit] NULL,
	[SponsorStatusRaceAmericanIndian] [bit] NULL,
	[SponsorStatusRaceNativeHawaiian] [bit] NULL,
	[SponsorStatusHairColorBlack] [bit] NULL,
	[SponsorStatusHairColorBrown] [bit] NULL,
	[SponsorStatusHairColorBlond] [bit] NULL,
	[SponsorStatusHairColorGray] [bit] NULL,
	[SponsorStatusHairColorWhite] [bit] NULL,
	[SponsorStatusHairColorRed] [bit] NULL,
	[SponsorStatusHairColorSandy] [bit] NULL,
	[SponsorStatusHairColorBald] [bit] NULL,
	[SponsorStatusHairColorOther] [bit] NULL,
	[SponsorStatusEyeColorBlack] [bit] NULL,
	[SponsorStatusEyeColorBlue] [bit] NULL,
	[SponsorStatusEyeColorBrown] [bit] NULL,
	[SponsorStatusEyeColorGray] [bit] NULL,
	[SponsorStatusEyeColorGreen] [bit] NULL,
	[SponsorStatusEyeColorHazel] [bit] NULL,
	[SponsorStatusEyeColorMaroon] [bit] NULL,
	[SponsorStatusEyeColorPink] [bit] NULL,
	[SponsorStatusEyeColorOther] [bit] NULL,
	[SponsorMaritalStatusMarried] [bit] NULL,
	[SponsorMaritalStatusSingle] [bit] NULL,
	[SponsorMaritalStatusWidowed] [bit] NULL,
	[SponsorMaritalStatusDivorced] [bit] NULL,
	[SponsorMaritalStatusChildrenUnder18Yes] [bit] NULL,
	[SponsorMaritalStatusChildrenUnder18No] [bit] NULL,
	[SponsorOtherFilingsI129FYes] [bit] NULL,
	[SponsorOtherFilingsI129FNo] [bit] NULL,
	[MilitaryAndConvictionsUnitedStatesArmedForcesYes] [bit] NULL,
	[MilitaryAndConvictionsUnitedStatesArmedForcesNo] [bit] NULL,
	[MilitaryAndConvictionsCivilOrCriminalYes] [bit] NULL,
	[MilitaryAndConvictionsCivilOrCriminalNo] [bit] NULL,
	[MilitaryAndConvictionsEitherCivilOrCriminalYes] [bit] NULL,
	[MilitaryAndConvictionsEitherCivilOrCriminalNo] [bit] NULL,
	[MilitaryAndConvictionsDomesticViolenceYes] [bit] NULL,
	[MilitaryAndConvictionsDomesticViolenceNo] [bit] NULL,
	[MilitaryAndConvictionsHomicideYes] [bit] NULL,
	[MilitaryAndConvictionsHomicideNo] [bit] NULL,
	[MilitaryAndConvictionsArrestsOrConvictionsYes] [bit] NULL,
	[MilitaryAndConvictionsArrestsOrConvictionsNo] [bit] NULL,
	[MilitaryAndConvictionsTrafficViolationsYes] [bit] NULL,
	[MilitaryAndConvictionsTrafficViolationsNo] [bit] NULL,
	[SponsorAddressInCareOfName] [nvarchar](1000) NULL,
	[SponsorAddress1DoesNotApply] [bit] NULL,
	[SponsorAddressNumberAndstreet] [nvarchar](1000) NULL,
	[SponsorAddressApartmentSuiteId] [int] NULL,
	[SponsorAddressApartmentSuiteNumber] [nvarchar](1000) NULL,
	[SponsorAddressTownOrCity] [nvarchar](1000) NULL,
	[SponsorAddressCountry] [int] NULL,
	[SponsorAddressUSState] [int] NULL,
	[SponsorAddressProvince] [nvarchar](1000) NULL,
	[SponsorAddress2DoesNotApply] [bit] NULL,
	[SponsorAddressPostalCode] [nvarchar](1000) NULL,
	[SponsorAddressLivedAddressSince] [datetime2](7) NULL,
	[SponsorAddressUSStateCountry] [int] NULL,
	[SponsorRelationshipCityFirstTime] [nvarchar](1000) NULL,
	[SponsorRelationshipUSCISYes] [bit] NULL,
	[SponsorRelationshipUSCISNo] [bit] NULL,
	[SponsorRelationshipIMBYes] [bit] NULL,
	[SponsorRelationshipIMBNo] [bit] NULL,
	[SponsorEmploymentNameEmployer] [nvarchar](1000) NULL,
	[SponsorEmploymentOccupation] [nvarchar](1000) NULL,
	[SponsorEmploymentNumberAndStreet] [nvarchar](1000) NULL,
	[SponsorEmploymentApartment] [int] NULL,
	[SponsorEmploymentApartmentNumber] [nvarchar](1000) NULL,
	[SponsorEmploymentTownOrCity] [nvarchar](1000) NULL,
	[SponsorEmploymentCountry] [int] NULL,
	[SponsorEmploymentUSState] [int] NULL,
	[SponsorEmploymentProvince] [nvarchar](1000) NULL,
	[SponsorEmploymentDoesNotApply] [bit] NULL,
	[SponsorEmploymentPostalCode] [nvarchar](1000) NULL,
	[SponsorEmploymentCategoryJob] [int] NULL,
	[SponsorEmploymentBeganThisJob] [datetime2](7) NULL,
	[SponsorImmigrationImmigrationProceedingsYes] [bit] NULL,
	[SponsorImmigrationImmigrationProceedingsNo] [bit] NULL,
	[SponsorImmigrationCityAndState] [nvarchar](1000) NULL,
	[SponsorImmigrationEstimateDate] [datetime2](7) NULL,
	[SponsorImmigrationTypeProceedingApplyRemoval] [bit] NULL,
	[SponsorImmigrationTypeProceedingApplyExclusion] [bit] NULL,
	[SponsorImmigrationTypeProceedingApplyRescission] [bit] NULL,
	[SponsorImmigrationTypeProceedingApplyJudicial] [bit] NULL,
	[SponsorLanguages1] [nvarchar](1000) NULL,
	[SponsorUSVisitsUSVisaYes] [bit] NULL,
	[SponsorUSVisitsUSVisaNo] [bit] NULL,
	[SponsorUSVisitsExplainDeniedAdmissions] [nvarchar](1000) NULL,
	[SponsorUSVisitsVisitedUnitedStatesYes] [bit] NULL,
	[SponsorUSVisitsVisitedUnitedStatesNo] [bit] NULL,
	[SponsorUSVisitsPrimaryCity] [nvarchar](1000) NULL,
	[SponsorUSVisitsTypeOfVisa] [int] NULL,
	[SponsorUSVisitsRegistrationNumber] [nvarchar](1000) NULL,
	[SponsorUSVisitsNone] [bit] NULL,
	[SponsorUSVisitsStartDateVisit] [datetime2](7) NULL,
	[SponsorUSVisitsEndDateVisit] [datetime2](7) NULL,
	[SponsorRelativesChildInUSYes] [bit] NULL,
	[SponsorRelativesChildInUSNo] [bit] NULL,
	[SponsorRelativesFirstAndMiddleNames] [nvarchar](1000) NULL,
	[SponsorRelativesLastName] [nvarchar](1000) NULL,
	[SponsorRelativesSuffixAfterName] [int] NULL,
	[SponsorRelativesStatus] [int] NULL,
	[SponsorQuestion1ParamilitaryUnitYes] [bit] NULL,
	[SponsorQuestion1ParamilitaryUnitNo] [bit] NULL,
	[SponsorQuestion1ExplainQuestion] [nvarchar](1000) NULL,
	[SponsorQuestion1HealthSignificanceYes] [bit] NULL,
	[SponsorQuestion1HealthSignificanceNo] [bit] NULL,
	[SponsorQuestion1SafetyOrWelfareYes] [bit] NULL,
	[SponsorQuestion1SafetyOrWelfareNo] [bit] NULL,
	[SponsorQuestion1DrugAbuserYes] [bit] NULL,
	[SponsorQuestion1DrugAbuserNo] [bit] NULL,
	[SponsorQuestion1NecessaryVaccinationsYes] [bit] NULL,
	[SponsorQuestion1NecessaryVaccinationsNo] [bit] NULL,
	[SponsorQuestion1ArrestedOffenseYes] [bit] NULL,
	[SponsorQuestion1ArrestedOffenseNo] [bit] NULL,
	[SponsorQuestion1ViolatedYes] [bit] NULL,
	[SponsorQuestion1ViolatedNo] [bit] NULL,
	[SponsorQuestion1EngageInProstitutionYes] [bit] NULL,
	[SponsorQuestion1EngageInProstitutionNo] [bit] NULL,
	[SponsorQuestion1MoneyLaunderingYes] [bit] NULL,
	[SponsorQuestion1MoneyLaunderingNo] [bit] NULL,
	[SponsorQuestion1HumanTraffickingOffenseYes] [bit] NULL,
	[SponsorQuestion1HumanTraffickingOffenseNo] [bit] NULL,
	[SponsorQuestion1KnowinglyAidedYes] [bit] NULL,
	[SponsorQuestion1KnowinglyAidedNo] [bit] NULL,
	[SponsorQuestion2KnowinglyAidedYes] [bit] NULL,
	[SponsorQuestion2KnowinglyAidedNo] [bit] NULL,
	[SponsorQuestion2ExplainQuestion] [nvarchar](1000) NULL,
	[SponsorQuestion2TraffickingOffenseYes] [bit] NULL,
	[SponsorQuestion2TraffickingOffenseNo] [bit] NULL,
	[SponsorQuestion2IdentifiedPresidentYes] [bit] NULL,
	[SponsorQuestion2IdentifiedPresidentNo] [bit] NULL,
	[SponsorQuestion2ViolatedYes] [bit] NULL,
	[SponsorQuestion2ViolatedNo] [bit] NULL,
	[SponsorQuestion2EngageEspionageYes] [bit] NULL,
	[SponsorQuestion2EngageEspionageNo] [bit] NULL,
	[SponsorQuestion2TerroristActivitiesYes] [bit] NULL,
	[SponsorQuestion2TerroristActivitiesNo] [bit] NULL,
	[SponsorQuestion2FinancialAssistanceYes] [bit] NULL,
	[SponsorQuestion2FinancialAssistanceNo] [bit] NULL,
	[SponsorQuestion2TerroristOrganizationYes] [bit] NULL,
	[SponsorQuestion2TerroristOrganizationNo] [bit] NULL,
	[SponsorQuestion2GenocideYes] [bit] NULL,
	[SponsorQuestion2GenocideNo] [bit] NULL,
	[SponsorQuestion2TortureYes] [bit] NULL,
	[SponsorQuestion2TortureNo] [bit] NULL,
	[SponsorQuestion2IntentionallyAssistedYes] [bit] NULL,
	[SponsorQuestion2IntentionallyAssistedNo] [bit] NULL,
	[SponsorQuestion3JudicialKillingsYes] [bit] NULL,
	[SponsorQuestion3JudicialKillingsNo] [bit] NULL,
	[SponsorQuestion3ExplainQuestion] [nvarchar](1000) NULL,
	[SponsorQuestion3EngagedRecruitmentYes] [bit] NULL,
	[SponsorQuestion3EngagedRecruitmentNo] [bit] NULL,
	[SponsorQuestion3ReligiousFreedomYes] [bit] NULL,
	[SponsorQuestion3ReligiousFreedomNo] [bit] NULL,
	[SponsorQuestion3TotalitarianPartyYes] [bit] NULL,
	[SponsorQuestion3TotalitarianPartyNo] [bit] NULL,
	[SponsorQuestion3IndirectlyAssistedYes] [bit] NULL,
	[SponsorQuestion3IndirectlyAssistedNo] [bit] NULL,
	[SponsorQuestion31ClaimOwnershipYes] [bit] NULL,
	[SponsorQuestion31ClaimOwnershipNo] [bit] NULL,
	[SponsorQuestion32ClaimOwnershipYes] [bit] NULL,
	[SponsorQuestion32ClaimOwnershipNo] [bit] NULL,
	[SponsorQuestion31ChemicalWeaponsYes] [bit] NULL,
	[SponsorQuestion31ChemicalWeaponsNo] [bit] NULL,
	[SponsorQuestion32ChemicalWeaponsYes] [bit] NULL,
	[SponsorQuestion32ChemicalWeaponsNo] [bit] NULL,
	[SponsorQuestion3EstablishmentYes] [bit] NULL,
	[SponsorQuestion3EstablishmentNo] [bit] NULL,
	[SponsorQuestion3ReimbursingSchoolYes] [bit] NULL,
	[SponsorQuestion3ReimbursingSchoolNo] [bit] NULL,
	[SponsorQuestion4BodilyTissueYes] [bit] NULL,
	[SponsorQuestion4BodilyTissueNo] [bit] NULL,
	[SponsorQuestion4ExplainQuestion] [nvarchar](1000) NULL,
	[SponsorQuestion4INA274CYes] [bit] NULL,
	[SponsorQuestion4INA274CNo] [bit] NULL,
	[SponsorQuestion4RemovedUS5YearsYes] [bit] NULL,
	[SponsorQuestion4RemovedUS5YearsNo] [bit] NULL,
	[SponsorQuestion4RemovedUS20YearsYes] [bit] NULL,
	[SponsorQuestion4RemovedUS20YearsNo] [bit] NULL,
	[SponsorQuestion4RemovedUS10YearsYes] [bit] NULL,
	[SponsorQuestion4RemovedUS10YearsNo] [bit] NULL,
	[SponsorQuestion4ConvictedRemovedUSYes] [bit] NULL,
	[SponsorQuestion4ConvictedRemovedUSNo] [bit] NULL,
	[SponsorQuestion4Unlawfully180DaysYes] [bit] NULL,
	[SponsorQuestion4Unlawfully180DaysNo] [bit] NULL,
	[SponsorQuestion4Unlawfully1YearYes] [bit] NULL,
	[SponsorQuestion4Unlawfully1YearNo] [bit] NULL,
	[SponsorQuestion4WithheldCustodyYes] [bit] NULL,
	[SponsorQuestion4WithheldCustodyNo] [bit] NULL,
	[SponsorQuestion4ViolationLawYes] [bit] NULL,
	[SponsorQuestion4ViolationLawNo] [bit] NULL,
	[SponsorQuestion5AvoidingTaxationYes] [bit] NULL,
	[SponsorQuestion5AvoidingTaxationNo] [bit] NULL,
	[SponsorQuestion5ExplainQuestion] [nvarchar](1000) NULL,
	[SponsorQuestion5FormerExchangeVisitorYes] [bit] NULL,
	[SponsorQuestion5FormerExchangeVisitorNo] [bit] NULL,
	[SponsorQuestion5SecretaryLaborYes] [bit] NULL,
	[SponsorQuestion5SecretaryLaborNo] [bit] NULL,
	[SponsorQuestion5ForeignMedicalSchoolYes] [bit] NULL,
	[SponsorQuestion5ForeignMedicalSchoolNo] [bit] NULL,
	[SponsorQuestion5HealthCareWorkerYes] [bit] NULL,
	[SponsorQuestion5HealthCareWorkerNo] [bit] NULL,
	[SponsorQuestion5PermanentlyIneligibleYes] [bit] NULL,
	[SponsorQuestion5PermanentlyIneligibleNo] [bit] NULL,
	[SponsorQuestion5EvadeMilitaryServiceYes] [bit] NULL,
	[SponsorQuestion5EvadeMilitaryServiceNo] [bit] NULL,
	[SponsorQuestion5PracticePolygamyYes] [bit] NULL,
	[SponsorQuestion5PracticePolygamyNo] [bit] NULL,
	[SponsorQuestion5SecretaryHomelandYes] [bit] NULL,
	[SponsorQuestion5SecretaryHomelandNo] [bit] NULL,
	[SponsorQuestion5ObtainVisaYes] [bit] NULL,
	[SponsorQuestion5ObtainVisaNo] [bit] NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormVisaSpouse] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Keyword]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Keyword](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Keyword] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Language]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Language](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](1000) NULL,
	[Name] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageForm]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageForm](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[NameAbbr] [varchar](2) NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_LanguageForm] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageFormDict]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageFormDict](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LanguageId] [bigint] NOT NULL,
	[Keyword] [nvarchar](50) NOT NULL,
	[Value] [nvarchar](max) NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_LanguageFormDict] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageUI]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageUI](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[NameAbbr] [varchar](2) NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_LanguageUI] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageUIDict]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageUIDict](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LanguageId] [bigint] NOT NULL,
	[Keyword] [nvarchar](50) NOT NULL,
	[Value] [nvarchar](max) NOT NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_LanguageUIDict] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersistedGrants]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersistedGrants](
	[Key] [nvarchar](200) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[SubjectId] [nvarchar](200) NULL,
	[SessionId] [nvarchar](100) NULL,
	[ClientId] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](200) NULL,
	[CreationTime] [datetime2](7) NOT NULL,
	[Expiration] [datetime2](7) NULL,
	[ConsumedTime] [datetime2](7) NULL,
	[Data] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_PersistedGrants] PRIMARY KEY CLUSTERED 
(
	[Key] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SiteContent]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SiteContent](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ContentTypeId] [smallint] NULL,
	[PageName] [varchar](255) NULL,
	[FieldName] [nvarchar](100) NULL,
	[ENUS] [nvarchar](max) NULL,
	[VN] [nvarchar](max) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_SiteContent] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sponsor]    Script Date: 7/14/2022 4:44:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sponsor](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SponsorFirstName] [nvarchar](1000) NULL,
	[SponsorMiddleName] [nvarchar](1000) NULL,
	[SponsorLastName] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Sponsor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'00000000000000_CreateIdentitySchema', N'5.0.10')
GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([Id], [AspNetUserId], [FirstName], [LastName], [Address], [City], [StateProvince], [PostalCode], [PhoneNumber], [Email], [FirebaseChatToken], [Deleted]) VALUES (1, N'5e68b140-40e9-4392-a8ec-1c8269ed6cea', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[Account] ([Id], [AspNetUserId], [FirstName], [LastName], [Address], [City], [StateProvince], [PostalCode], [PhoneNumber], [Email], [FirebaseChatToken], [Deleted]) VALUES (6, N'bf61e2fc-c575-4a52-9e53-512d4ed5f171', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[Account] ([Id], [AspNetUserId], [FirstName], [LastName], [Address], [City], [StateProvince], [PostalCode], [PhoneNumber], [Email], [FirebaseChatToken], [Deleted]) VALUES (7, N'a7df4927-02cd-47f8-a375-9368ce8b7f7d', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
SET IDENTITY_INSERT [dbo].[Account] OFF
GO
SET IDENTITY_INSERT [dbo].[AccountVerification] ON 

INSERT [dbo].[AccountVerification] ([Id], [VerificationCode], [TargetTypeId], [Target], [ExpiredAt], [Deleted]) VALUES (1, N'352649', 1, N'sdao@onewits.com', NULL, 0)
INSERT [dbo].[AccountVerification] ([Id], [VerificationCode], [TargetTypeId], [Target], [ExpiredAt], [Deleted]) VALUES (6, N'981572', 1, N'test01@onewits.com', NULL, 0)
INSERT [dbo].[AccountVerification] ([Id], [VerificationCode], [TargetTypeId], [Target], [ExpiredAt], [Deleted]) VALUES (7, N'748653', 1, N'dev01@onewits.com', NULL, 0)
SET IDENTITY_INSERT [dbo].[AccountVerification] OFF
GO
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'5e68b140-40e9-4392-a8ec-1c8269ed6cea', N'sdao@onewits.com', N'SDAO@ONEWITS.COM', N'sdao@onewits.com', N'SDAO@ONEWITS.COM', 0, N'AQAAAAEAACcQAAAAEAl+37O+8zL1N5LbaopwQeofLfe0l+QZYHHh8nyjbp9MeW11u+PMBlx8wMzA4GBZRg==', N'HLJRO7U2I7TUAQDYTSJYYXI45Q7U6AVS', N'c90cc37d-71ed-41ff-b2b6-2b8acc161f32', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'a7df4927-02cd-47f8-a375-9368ce8b7f7d', N'dev01@onewits.com', N'DEV01@ONEWITS.COM', N'dev01@onewits.com', N'DEV01@ONEWITS.COM', 1, N'AQAAAAEAACcQAAAAECj+dVX4LI0nA0k8ryG954WnGc+sf2+RJfyEX9cqegW/zs3O/uFhsMundkDaO5+bVQ==', N'NMRTLVNRDUSMJD4YSUMX6SEJ7TDNOCJQ', N'4bbe5f83-0577-41c8-8429-7819baaa5866', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'bf61e2fc-c575-4a52-9e53-512d4ed5f171', N'test01@onewits.com', N'TEST01@ONEWITS.COM', N'test01@onewits.com', N'TEST01@ONEWITS.COM', 1, N'AQAAAAEAACcQAAAAEBBvRwpB4Ia7nF/hq/23DrxasskaZB7PsySigX7JTmVDw1IbeXDmFS2VE9cP9FlPeQ==', N'SMZLFDWGYHPNG77BG6IB74CAYJZZERBD', N'32934080-017b-4d3f-ac4c-169af6010c9a', NULL, 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[FormTravelDocument] ON 

INSERT [dbo].[FormTravelDocument] ([Id], [AccountId], [Personal01FullName], [Personal01GenderMale], [Personal01GenderFemale], [Personal01AnotherName], [Personal01DateOfBirth], [Personal01BirthPlace], [Personal01BirthNationality], [Personal01CurrentNationality], [Personal01IDNumber], [Personal011IssueDate], [Personal011PlaceOfIssue], [Personal01PassportNumber], [Personal012PlaceOfIssue], [Personal012IssueDate], [Personal01ExpirationDate], [Personal02OtherNationality], [Personal02PassportNumber], [Personal02Address], [Personal02CurrentAddress], [Personal02HomePhone], [Personal02CellPhone], [Personal02Email], [Personal02OtherPhoneEmailNo], [Personal02OtherPhoneEmailYes], [Personal02UseSocialMediaNo], [Personal02UseSocialMediaYes], [Personal02ListMoreSocialMedia], [Personal02UserNameSocialMedia], [Personal03MaritalStatusSingle], [Personal03MaritalStatusMarried], [Personal03MaritalStatusWidow], [Personal03MaritalStatusDivorce], [Personal03MaritalStatusSeparation], [Personal03NameOfHusbandWife], [Personal03DateOfBirth], [Personal03BirthPlace], [Personal03Nationality], [Personal03Address], [Personal03MarriageRegistrationDate], [Personal03DivorceProcedureDate], [Personal03EverLostPassportNo], [Personal03EverLostPassportYes], [Personal03PassportNumber], [Trip04TripPurpose], [Trip04IntendedDateArrival], [Trip04IntendedArrivalCity], [Trip04IntendedDateLeaving], [Trip04IntendedLeavingCity], [Trip04PlacesToVisit], [Trip04WhereStayUS], [Trip04SponsorTripNo], [Trip04SponsorTripYes], [Trip04FullName], [Trip04Relationship], [Trip04Address], [Trip04PhoneNumber], [Trip05EverEnteredUSNo], [Trip05EverEnteredUSYes], [Trip05EverFingerprintedNo], [Trip05EverFingerprintedYes], [Trip051VisaType], [Trip051VisaNumber], [Trip051DateOfIssue], [Trip051ExpirationDate], [Trip051LengthStayFrom], [Trip051LengthStayTo], [Trip052VisaType], [Trip052VisaNumber], [Trip052DateOfIssue], [Trip052ExpirationDate], [Trip052LengthStayFrom], [Trip052LengthStayTo], [Trip053VisaType], [Trip053VisaNumber], [Trip053DateOfIssue], [Trip053ExpirationDate], [Trip053LengthStayFrom], [Trip053LengthStayTo], [Trip06EverRefusedVisaNo], [Trip06EverRefusedVisaYes], [Trip061Time], [Trip061Reason], [Trip06EverRefusedPermissionNo], [Trip06EverRefusedPermissionYes], [Trip062Time], [Trip062Reason], [Trip06CountriesVisited5Years], [Trip06LanguagesYouKnow], [UsContact07FullName], [UsContact07BelongsToOrganization], [UsContact07Address], [UsContact07PhoneNumber], [UsContact07Email], [UsContact07RelationshipApplicant], [Family08FatherName], [Family081DateOfBirth], [Family081CurrentAddress], [Family08MotherName], [Family082DateOfBirth], [Family082CurrentAddress], [Family09BloodRelativesNo], [Family09BloodRelativesYes], [Family091FullName], [Family091Relationship], [Family091StatusCitizen], [Family091StatusPermanentResident], [Family091StatusNonimmigrant], [Family091StatusOther], [Family091OtherStatus], [Family092FullName], [Family092Relationship], [Family092StatusCitizen], [Family092StatusPermanentResident], [Family092StatusNonimmigrant], [Family092StatusOther], [Family092OtherStatus], [Family10OtherRelativesNo], [Family10OtherRelativesYes], [Family101FullName], [Family101Relationship], [Family101StatusCitizen], [Family101StatusPermanentResident], [Family101StatusNonimmigrant], [Family101StatusOther], [Family101OtherStatus], [Family102FullName], [Family102Relationship], [Family102StatusCitizen], [Family102StatusPermanentResident], [Family102StatusNonimmigrant], [Family102StatusOther], [Family102OtherStatus], [Job11WorkUnit], [Job11Position], [Job11FromDate], [Job11ToDate], [Job11JobDescription], [Job11MonthlyIncome], [Job11CompanyAddress], [Job11CompanyPhone], [Job11FullNameDdirector], [Job12OtherJobNo], [Job12OtherJobYes], [Job12UnitOfWork], [Job12Position], [Job12FromDate], [Job12ToDate], [Job12JobDescription], [Job12CompanyAddress], [Job12CompanyPhone], [Job12FullNameDirector], [Job13School], [Job13Address], [Job13Courses], [Job13FromDate], [Job13ToDate], [Deleted]) VALUES (1, 7, N'A', 1, NULL, N'A', CAST(N'2022-06-01T14:07:01.0000000' AS DateTime2), N'A', N'A', N'A', N'A', CAST(N'2022-06-01T14:07:14.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:07:19.0000000' AS DateTime2), CAST(N'2022-06-30T14:07:22.0000000' AS DateTime2), N'A', N'A', N'A', N'A', N'A', N'A', N'A', NULL, 1, NULL, 1, N'A', N'A', 1, NULL, NULL, NULL, NULL, N'A', CAST(N'2022-06-01T14:07:59.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:08:06.0000000' AS DateTime2), CAST(N'2022-06-01T14:08:09.0000000' AS DateTime2), NULL, 1, N'A', N'A', CAST(N'2022-06-01T14:08:50.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:08:54.0000000' AS DateTime2), N'A', N'A', N'A', NULL, 1, N'A', N'A', N'A', N'A', NULL, 1, NULL, 1, N'A', N'A', CAST(N'2022-06-01T14:09:17.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:24.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:27.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:30.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:09:34.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:39.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:42.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:44.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:09:48.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:53.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:56.0000000' AS DateTime2), CAST(N'2022-06-01T14:09:58.0000000' AS DateTime2), NULL, 1, N'A', N'A', NULL, 1, N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', CAST(N'2022-06-01T14:12:13.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:12:18.0000000' AS DateTime2), N'A', NULL, 1, N'A', N'A', NULL, NULL, NULL, 1, N'A', N'A', N'A', NULL, NULL, NULL, 1, N'A', NULL, 1, N'A', N'A', NULL, NULL, NULL, 1, N'A', N'A', N'A', NULL, NULL, NULL, 1, N'A', N'A', N'A', CAST(N'2022-06-01T14:14:12.0000000' AS DateTime2), CAST(N'2022-06-01T14:14:16.0000000' AS DateTime2), N'A', N'A', N'A', N'A', N'A', NULL, 1, N'A', N'A', CAST(N'2022-06-01T14:14:40.0000000' AS DateTime2), CAST(N'2022-06-30T14:14:44.0000000' AS DateTime2), N'A', N'A', N'A', N'A', N'A', N'A', N'A', CAST(N'2022-06-01T14:14:55.0000000' AS DateTime2), CAST(N'2022-06-01T14:14:58.0000000' AS DateTime2), 0)
SET IDENTITY_INSERT [dbo].[FormTravelDocument] OFF
GO
SET IDENTITY_INSERT [dbo].[FormVisaFiance] ON 

INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (1, 7, N'A', N'A', NULL, 1, N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (2, 7, N'A', N'A', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (3, 7, N'A', N'A', NULL, 1, N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', CAST(N'2022-06-01T13:45:58.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T13:46:07.0000000' AS DateTime2), N'A', N'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (4, 7, N'A', N'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (5, 7, N'A', N'A', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[FormVisaFiance] ([Id], [AccountId], [Beneficiary1FullName], [Beneficiary1PlaceOfBirth], [Beneficiary1HasBeenUSYes], [Beneficiary1HasBeenUSNo], [Beneficiary1NamesUsed], [Beneficiary1GreenCardNumber], [Beneficiary1SocialSecurityNumber], [Beneficiary1ConsularOfficeWishes], [Beneficiary1PrimaryLanguage], [Beneficiary1HomePhoneNumber], [Beneficiary1Mobile], [Beneficiary1OfficeTelephone], [Beneficiary1FaxNumber], [Beneficiary1EmailAddress], [Beneficiary1FatherName], [Beneficiary1FatherDateOfBirth], [Beneficiary1FatherPlaceOfBirth], [Beneficiary1FatherCityCountryResidence], [Beneficiary1MotherName], [Beneficiary1MotherDateOfBirth], [Beneficiary1MotherPlaceOfBirth], [Beneficiary1MotherCityCountryResidence], [Beneficiary11NameOfExSpouse], [Beneficiary11BirthDateOfExSpouse], [Beneficiary11BirthPlaceOfExSpouse], [Beneficiary11DateOfMarriage], [Beneficiary11PlaceOfMarriage], [Beneficiary12NameOfExSpouse], [Beneficiary12BirthDateOfExSpouse], [Beneficiary12BirthPlaceOfExSpouse], [Beneficiary12DateOfMarriage], [Beneficiary12PlaceOfMarriage], [Beneficiary13NameOfExSpouse], [Beneficiary13BirthDateOfExSpouse], [Beneficiary13BirthPlaceOfExSpouse], [Beneficiary13DateOfMarriage], [Beneficiary13PlaceOfMarriage], [Beneficiary14NameOfExSpouse], [Beneficiary14BirthDateOfExSpouse], [Beneficiary14BirthPlaceOfExSpouse], [Beneficiary14DateOfMarriage], [Beneficiary14PlaceOfMarriage], [Beneficiary21CurrentHouseStreet], [Beneficiary21City], [Beneficiary21StateCounty], [Beneficiary21ZipCode], [Beneficiary21FromMonthYear], [Beneficiary21ToMonthYear], [Beneficiary22CurrentHouseStreet], [Beneficiary22City], [Beneficiary22StateCounty], [Beneficiary22ZipCode], [Beneficiary22FromMonthYear], [Beneficiary22ToMonthYear], [Beneficiary23CurrentHouseStreet], [Beneficiary23City], [Beneficiary23StateCounty], [Beneficiary23ZipCode], [Beneficiary23FromMonthYear], [Beneficiary23ToMonthYear], [Beneficiary24CurrentHouseStreet], [Beneficiary24City], [Beneficiary24StateCounty], [Beneficiary24ZipCode], [Beneficiary24FromMonthYear], [Beneficiary24ToMonthYear], [Beneficiary25CurrentHouseStreet], [Beneficiary25City], [Beneficiary25StateCounty], [Beneficiary25ZipCode], [Beneficiary25FromMonthYear], [Beneficiary25ToMonthYear], [Beneficiary3HouseStreetName], [Beneficiary3City], [Beneficiary3StateCounty], [Beneficiary3ZipCode], [Beneficiary3FromMonthYear], [Beneficiary3ToMonthYear], [Beneficiary41NameWorkplaceAddress], [Beneficiary41Position], [Beneficiary41FromMonthYear], [Beneficiary41ToMonthYear], [Beneficiary42NameWorkplaceAddress], [Beneficiary42Position], [Beneficiary42FromMonthYear], [Beneficiary42ToMonthYear], [Beneficiary43NameWorkplaceAddress], [Beneficiary43Position], [Beneficiary43FromMonthYear], [Beneficiary43ToMonthYear], [Beneficiary44NameWorkplaceAddress], [Beneficiary44Position], [Beneficiary44FromMonthYear], [Beneficiary44ToMonthYear], [Beneficiary45NameWorkplaceAddress], [Beneficiary45Position], [Beneficiary45FromMonthYear], [Beneficiary45ToMonthYear], [Beneficiary5NameAddressWork], [Beneficiary5Position], [Beneficiary5FromMonthYear], [Beneficiary5ToMonthYear], [Beneficiary5AllPreviousVisaRefusals], [Beneficiary5HasAppliedWorkPermitYes], [Beneficiary5HasAppliedWorkPermitNo], [Beneficiary5WhenAndWhere], [Beneficiary5ApprovedYes], [Beneficiary5ApprovedNo], [Beneficiary5NamesOrganizationsMember], [Beneficiary5DescribePeopleMet], [Beneficiary5CanMatchmakingYes], [Beneficiary5CanMatchmakingNo], [Beneficiary5HaveEverViolatedYes], [Beneficiary5HaveEverViolatedNo], [Beneficiary5ViolatedProvideDetails], [Beneficiary5HasEverSufferedYes], [Beneficiary5HasEverSufferedNo], [Beneficiary5SufferedProvideDetails], [Beneficiary5HasInMilitaryYes], [Beneficiary5HasInMilitaryNo], [Beneficiary5NameOfOrganization], [Beneficiary5EnlistmentDate], [Beneficiary5WhereToEnlist], [Sponsor1Name], [Sponsor1BirthPlace], [Sponsor1IsFianceYes], [Sponsor1IsFianceNo], [Sponsor1NamesUsed], [Sponsor1GreenCardNumber], [Sponsor1SocialSecurityNumber], [Sponsor1HomePhoneNumber], [Sponsor1Mobile], [Sponsor1OfficePhone], [Sponsor1FaxNumber], [Sponsor1EmailAddress], [Sponsor1FatherName], [Sponsor1FatherBirthDate], [Sponsor1FatherBirthPlace], [Sponsor1FatherCityCountry], [Sponsor1MotherName], [Sponsor1MotherBirthDate], [Sponsor1MotherBirthPlace], [Sponsor1MotherCityCountry], [Sponsor11NameExSpouse], [Sponsor11BirthDateExSpouse], [Sponsor11BirthplaceExSpouse], [Sponsor11MarriageDate], [Sponsor11MarriagePlace], [Sponsor12NameExSpouse], [Sponsor12BirthDateExSpouse], [Sponsor12BirthPlaceExSpouse], [Sponsor12MarriageDate], [Sponsor12MarriagePlace], [Sponsor13NameExSpouse], [Sponsor13BirthDateExSpouse], [Sponsor13BirthPlaceExSpouse], [Sponsor13MarriageDate], [Sponsor13MarriagePlace], [Sponsor21CurrentHouseStreet], [Sponsor21City], [Sponsor21StateCounty], [Sponsor21ZipCode], [Sponsor21FromMonthYear], [Sponsor21ToMonthYear], [Sponsor22CurrentHouseStreet], [Sponsor22City], [Sponsor22StateCounty], [Sponsor22ZipCode], [Sponsor22FromMonthYear], [Sponsor22ToMonthYear], [Sponsor23CurrentHouseStreet], [Sponsor23City], [Sponsor23StateCounty], [Sponsor23ZipCode], [Sponsor23FromMonthYear], [Sponsor23ToMonthYear], [Sponsor24CurrentHouseStreet], [Sponsor24City], [Sponsor24StateCounty], [Sponsor24ZipCode], [Sponsor24FromMonthYear], [Sponsor24ToMonthYear], [Sponsor25CurrentHouseStreet], [Sponsor25City], [Sponsor25StateCounty], [Sponsor25ZipCode], [Sponsor25FromMonthYear], [Sponsor25ToMonthYear], [Sponsor3HouseStreetName], [Sponsor3City], [Sponsor3StateCounty], [Sponsor3ZipCode], [Sponsor3FromMonthYear], [Sponsor3ToMonthYear], [Sponsor41NameWorkplaceAddress], [Sponsor41Position], [Sponsor41FromMonthYear], [Sponsor41ToMonthYear], [Sponsor42NameWorkplaceAddress], [Sponsor42Position], [Sponsor42FromMonthYear], [Sponsor42ToMonthYear], [Sponsor43NameWorkplaceAddress], [Sponsor43Position], [Sponsor43FromMonthYear], [Sponsor43ToMonthYear], [Sponsor44NameWorkplaceAddress], [Sponsor44Position], [Sponsor44FromMonthYear], [Sponsor44ToMonthYear], [Sponsor45NameWorkplaceAddress], [Sponsor45Position], [Sponsor45FromMonthYear], [Sponsor45ToMonthYear], [Sponsor5NameAddressWork], [Sponsor5Position], [Sponsor5FromMonthYear], [Sponsor5ToMonthYear], [BeneficiaryProfileFormI94], [BeneficiaryProfileBirthCertificate], [BeneficiaryProfileI20Documents], [BeneficiaryProfileCriminalRecord], [BeneficiaryProfilePassportPhotos], [BeneficiaryProfilePreviousDivorce], [BeneficiaryProfilePapersRelated], [SponsorProfileLetterConfirmation], [SponsorProfileBankStatement], [SponsorProfileTaxReturns], [SponsorProfileW2PaystubsChecks], [SponsorProfileDocumentsShowing], [SponsorProfilePassportPhotos], [SponsorProfilePreviousDivorce], [Deleted]) VALUES (6, 7, N'A', N'A', NULL, 1, N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', CAST(N'2022-06-01T14:35:51.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:35:59.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:36:07.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:36:11.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:36:19.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:36:26.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:36:33.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:36:38.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:36:45.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:36:51.0000000' AS DateTime2), N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', 1, NULL, NULL, 1, NULL, N'A', N'A', 1, NULL, 1, NULL, N'A', 1, NULL, N'A', 1, NULL, N'A', CAST(N'2022-06-01T14:34:48.0000000' AS DateTime2), N'A', N'A', N'A', 1, NULL, N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', CAST(N'2022-06-01T14:38:34.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:38:42.0000000' AS DateTime2), N'A', N'A', N'A', CAST(N'2022-06-01T14:38:50.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:38:56.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:39:04.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:39:09.0000000' AS DateTime2), N'A', N'A', CAST(N'2022-06-01T14:39:19.0000000' AS DateTime2), N'A', CAST(N'2022-06-01T14:39:25.0000000' AS DateTime2), N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', N'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0)
SET IDENTITY_INSERT [dbo].[FormVisaFiance] OFF
GO
SET IDENTITY_INSERT [dbo].[LanguageForm] ON 

INSERT [dbo].[LanguageForm] ([Id], [Name], [NameAbbr], [Deleted]) VALUES (1, N'English', N'en', 0)
INSERT [dbo].[LanguageForm] ([Id], [Name], [NameAbbr], [Deleted]) VALUES (2, N'Vietnam', N'vn', 0)
SET IDENTITY_INSERT [dbo].[LanguageForm] OFF
GO
SET IDENTITY_INSERT [dbo].[LanguageFormDict] ON 

INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (1, 1, N'customerInformation', N'CUSTOMER INFORMATION SHEET', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (2, 1, N'usaTravel', N'USA TRAVEL', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (3, 1, N'personalInformation', N'PERSONAL INFORMATION', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (4, 1, N'fullName', N'Full Name', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (5, 1, N'gender', N'Gender', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (6, 1, N'genderMale', N'Male', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (7, 1, N'genderFemale', N'Female', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (8, 1, N'otherNames', N'Other Names (if any)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (9, 1, N'dateOfBirth', N'Date Of Birth', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (10, 1, N'placeOfBirth', N'Place Of Birth', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (11, 1, N'nationalityAtBirth', N'Nationality At Birth', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (12, 1, N'currentNationality', N'Current Nationality', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (13, 1, N'idNumber', N'ID Number', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (14, 1, N'issueDate', N'Issue Date', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (15, 1, N'issuedBy', N'Issued By', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (16, 1, N'passport', N'Passport', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (17, 1, N'expirationDate', N'Expiration Date', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (18, 2, N'customerInformation', N'PHIẾU THÔNG TIN KHÁCH HÀNG', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (19, 2, N'usaTravel', N'DU LỊCH MỸ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (20, 2, N'personalInformation', N'THÔNG TIN CÁ NHÂN', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (21, 2, N'fullName', N'Họ tên', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (22, 2, N'gender', N'Giới tính', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (23, 2, N'genderMale', N'Nam', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (24, 2, N'genderFemale', N'Nữ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (25, 2, N'otherNames', N'Tên gọi khác (nếu có)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (26, 2, N'dateOfBirth', N'Ngày sinh', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (27, 2, N'placeOfBirth', N'Nơi sinh', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (28, 2, N'nationalityAtBirth', N'Quốc tịch khi sinh', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (29, 2, N'currentNationality', N'Quốc tịch hiện nay', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (30, 2, N'idNumber', N'Số CMND', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (31, 2, N'issueDate', N'Ngày cấp', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (32, 2, N'issuedBy', N'Nơi cấp', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (33, 2, N'passport', N'Số hộ chiếu', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (34, 2, N'expirationDate', N'Ngày hết hạn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (35, 1, N'yes', N'Yes', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (36, 1, N'no', N'No', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (37, 1, N'otherNationalities', N'Other nationality (if any)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (38, 1, N'addressPassport', N'Address (passport)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (39, 1, N'currentAddress', N'Current address (contact)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (40, 1, N'homePhone', N'Home phone number', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (41, 1, N'cellPhone', N'Mobile phone', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (42, 1, N'email', N'Email', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (43, 1, N'otherPhone', N'In addition to the phone number and email provided above, what other phone number and email do you use', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (44, 1, N'socialNetworks', N'Do you use social networks', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (45, 1, N'ifDivorced', N'If divorced, please provide more', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (46, 1, N'maritalStatus', N'Marital status', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (47, 1, N'husbandWifeName', N'Name of husband/wife', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (48, 1, N'marriageDate', N'Date of marriage registration', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (49, 1, N'divorceDate', N'Divorce filing date', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (50, 1, N'nationality', N'Nationality', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (51, 1, N'address', N'Address', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (52, 1, N'lostPassport', N'Have you ever lost or stolen your passport', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (53, 1, N'single', N'Single', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (54, 1, N'getMarried', N'Married', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (55, 1, N'widow', N'Widow', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (56, 1, N'divorce', N'Divorce', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (57, 1, N'deparated', N'Deparated', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (58, 1, N'ifMarried', N'If married/separated/divorced, please provide', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (59, 1, N'relationship', N'Relationship with you', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (60, 1, N'phoneNumber', N'Phone number', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (61, 1, N'listMore', N'If yes, please list more', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (62, 1, N'specifiedName', N'If yes, state username', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (63, 1, N'tripInformation', N'TRIP INFORMATION', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (64, 1, N'tripPurpose', N'Purpose of the trip (travel / visit relatives / work)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (65, 1, N'arrivalDate', N'Intended date of arrival in the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (66, 1, N'inCity', N'In the city', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (67, 1, N'departureDate', N'Intended date of departure from the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (68, 1, N'placesVisit', N'Places to visit', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (69, 1, N'addressArrival', N'Address when coming to the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (70, 1, N'sponsorTrip', N'Sponsor for your trip (relative, company, organization)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (71, 1, N'enteredUS', N'Have you ever entered the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (72, 1, N'everFingerprinted', N'Have you ever been fingerprinted', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (73, 1, N'informationUSVisas', N'Information on all US visas issued in the past years: (according to the information on the passport)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (74, 1, N'visaType', N'Visa type (student/tourist/other, specify what)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (75, 1, N'visaNumber', N'Visa number (if known)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (76, 1, N'from', N'From', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (77, 1, N'to', N'To', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (78, 1, N'everRefusedVisa', N'Have you ever been refused a visa, withdrawn your visa application, canceled or revoked your US visa', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (79, 1, N'time', N'Time', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (80, 1, N'reason', N'Reason', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (81, 1, N'deniedEntryUS', N'Have you ever been denied entry to the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (82, 1, N'countriesVisited5Years', N'Countries visited in the last 5 years', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (83, 1, N'languagesKnow', N'The languages you know', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (84, 1, N'usInformation', N'US CONTACT INFORMATION (if visiting relatives or working)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (85, 1, N'belongingOrganization', N'Belonging to the organization', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (86, 1, N'relationshipApplicant', N'Relationship with the applicant', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (87, 1, N'fatherName', N'Father full name', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (88, 1, N'motherName', N'Mother full name', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (89, 1, N'citizen', N'Citizen', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (90, 1, N'permanentResident', N'Permanent resident', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (91, 1, N'noImmigration', N'No immigration', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (92, 1, N'other', N'Other', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (93, 1, N'status', N'Status', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (94, 1, N'familyInformation', N'FAMILY INFORMATION', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (95, 1, N'bloodRelatives', N'Blood relatives in the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (96, 1, N'otherRelatives', N'Other relatives in the US', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (97, 1, N'jobInformation', N'JOB INFORMATION / EDUCATIONAL QUALIFICATIONS', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (98, 1, N'workingUnit', N'Work unit', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (99, 1, N'position', N'Position', 0)
GO
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (100, 1, N'byEnglish', N'write in English', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (101, 1, N'fromDate', N'From Date', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (102, 1, N'toDate', N'To Date', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (103, 1, N'workingStudyingPeriod', N'Working/studying period (day month year)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (104, 1, N'jobDescription', N'Job description', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (105, 1, N'monthlyIncome', N'Monthly income', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (106, 1, N'companyAddress', N'Company address', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (107, 1, N'companyPhone', N'Company Phone', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (108, 1, N'companyDirector', N'Name of company director', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (109, 1, N'otherJobs5Years', N'In the past 5 years, have you had any other jobs', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (110, 1, N'educationProvide', N'Education: Provide your highest level of education (in the case of a student, provide the level before your current one)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (111, 1, N'school', N'School', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (112, 1, N'majors', N'Majors', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (113, 1, N'thankYouInformation', N'Thank you for your information!', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (114, 2, N'yes', N'Có', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (115, 2, N'no', N'Không', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (116, 2, N'otherNationalities', N'Quốc tịch khác (nếu có)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (117, 2, N'addressPassport', N'Địa chỉ (hộ khẩu)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (118, 2, N'currentAddress', N'Địa chỉ hiện tại (liên lạc)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (119, 2, N'homePhone', N'Số ĐT nhà', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (120, 2, N'cellPhone', N'ĐTDĐ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (121, 2, N'email', N'Email', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (122, 2, N'otherPhone', N'Ngoài số điện thoại và email đã cung cấp ở trên, quý khách còn sử dụng số điện thoại và email nào khác', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (123, 2, N'socialNetworks', N'Bạn có sử dụng mạng xã hội không', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (124, 2, N'ifDivorced', N'Nếu đã ly hôn, xin cung cấp thêm', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (125, 2, N'maritalStatus', N'Tình trạng hôn nhân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (126, 2, N'husbandWifeName', N'Họ tên chồng/vợ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (127, 2, N'marriageDate', N'Ngày đăng ký kết hôn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (128, 2, N'divorceDate', N'Ngày làm thủ tục ly hôn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (129, 2, N'nationality', N'Quốc tịch', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (130, 2, N'address', N'Địa chỉ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (131, 2, N'lostPassport', N'Bạn đã từng bị mất hay bị đánh cắp hộ chiếu', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (132, 2, N'single', N'Độc thân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (133, 2, N'getMarried', N'Kết hôn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (134, 2, N'widow', N'Góa', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (135, 2, N'divorce', N'Ly hôn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (136, 2, N'deparated', N'Ly thân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (137, 2, N'ifMarried', N'Nếu đã kết hôn/ ly thân/ ly hôn, xin cung cấp', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (138, 2, N'relationship', N'Quan hệ với bạn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (139, 2, N'phoneNumber', N'Số điện thoại', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (140, 2, N'listMore', N'Nếu có vui long liệt kê thêm', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (141, 2, N'specifiedName', N'Nếu có nêu tên người dùng', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (142, 2, N'tripInformation', N'THÔNG TIN CHUYẾN ĐI', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (143, 2, N'tripPurpose', N'Mục đích chuyến đi (du lịch/ thăm thân/ công tác)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (144, 2, N'arrivalDate', N'Ngày dự định đến Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (145, 2, N'inCity', N'Tại thành phố', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (146, 2, N'departureDate', N'Ngày dự định rời Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (147, 2, N'placesVisit', N'Các địa điểm sẽ tham quan', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (148, 2, N'addressArrival', N'Địa chỉ ở khi đến Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (149, 2, N'sponsorTrip', N'Người bảo trợ cho chuyến đi của bạn (người thân, công ty, tổ chức)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (150, 2, N'enteredUS', N'Bạn đã từng nhập cảnh Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (151, 2, N'everFingerprinted', N'Bạn đã từng được lấy dấu vân tay', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (152, 2, N'informationUSVisas', N'Thông tin về tất cả visa Mỹ được cấp trong các năm qua: (chính xác theo thông tin trên hộ chiếu)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (153, 2, N'visaType', N'Loại visa (du học/ du lịch/ khác, ghi rõ là gì)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (154, 2, N'visaNumber', N'Số visa (nếu biết)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (155, 2, N'from', N'Từ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (156, 2, N'to', N'Đến', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (157, 2, N'everRefusedVisa', N'Bạn đã từng bị từ chối visa, rút đơn xin visa, bị hủy hay thu hồi visa Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (158, 2, N'time', N'Thời gian', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (159, 2, N'reason', N'Lý do', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (160, 2, N'deniedEntryUS', N'Bạn đã từng bị từ chối cho phép nhập cảnh Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (161, 2, N'countriesVisited5Years', N'Các quốc gia đã từng đến trong 5 năm gần đây', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (162, 2, N'languagesKnow', N'Các ngôn ngữ bạn biết', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (163, 2, N'usInformation', N'THÔNG TIN NGƯỜI LIÊN HỆ Ở MỸ (nếu đi thăm thân, công tác)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (164, 2, N'belongingOrganization', N'Thuộc tổ chức', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (165, 2, N'relationshipApplicant', N'Quan hệ với đương đơn', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (166, 2, N'fatherName', N'Họ tên cha', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (167, 2, N'motherName', N'Họ tên mẹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (168, 2, N'citizen', N'Công dân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (169, 2, N'permanentResident', N'Thường trú nhân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (170, 2, N'noImmigration', N'Không di dân', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (171, 2, N'other', N'Khác', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (172, 2, N'status', N'Tình trạng', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (173, 2, N'familyInformation', N'THÔNG TIN GIA ĐÌNH', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (174, 2, N'bloodRelatives', N'Người thân ruột thịt ở Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (175, 2, N'otherRelatives', N'Họ hàng bà con khác ở Mỹ', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (176, 2, N'jobInformation', N'THÔNG TIN CÔNG VIỆC/ TRÌNH ĐỘ HỌC VẤN', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (177, 2, N'workingUnit', N'Đơn vị công tác', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (178, 2, N'position', N'Chức vụ:', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (179, 2, N'byEnglish', N'viết bằng tiếng anh', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (180, 2, N'fromDate', N'Từ ngày', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (181, 2, N'toDate', N'Đến ngày', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (182, 2, N'workingStudyingPeriod', N'Thời gian công tác/ học (ngày tháng năm)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (183, 2, N'jobDescription', N'Mô tả công việc', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (184, 2, N'monthlyIncome', N'Mức thu nhập hàng tháng', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (185, 2, N'companyAddress', N'Địa chỉ công ty', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (186, 2, N'companyPhone', N'Số ĐT công ty', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (187, 2, N'companyDirector', N'Họ tên giám đốc công ty', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (188, 2, N'otherJobs5Years', N'Trong 5 năm trở lại đây, bạn có làm công việc nào khác không', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (189, 2, N'educationProvide', N'Học vấn: Cung cấp bậc học cao nhất của bạn (trường hợp là hoc sinh thì cung cấp bậc học trước bậc học hiện tại)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (190, 2, N'school', N'Trường', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (191, 2, N'majors', N'Ngành học', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (192, 2, N'thankYouInformation', N'Cám ơn quý khách hàng đã cung cấp thông tin!', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (193, 1, N'studyPeriod', N'Study period (day/month/year)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (194, 1, N'workingTime', N'Working time (day month year)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (195, 1, N'ifAny', N'If Any', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (196, 2, N'studyPeriod', N'Thời gian học (ngày/tháng/năm)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (197, 2, N'workingTime', N'Thời gian công tác (ngày tháng năm)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (198, 2, N'ifAny', N'Nếu có', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (199, 1, N'lengthStay', N'Length of stay (day/month/year)', 0)
GO
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (201, 2, N'lengthStay', N'Thời gian lưu trú (ngày/tháng/năm)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (202, 1, N'workingSchool', N'Working unit/School', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (203, 2, N'workingSchool', N'Đơn vị công tác/ Trường', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (204, 1, N'positionSpecialization', N'Position/Specialization (written in English)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (205, 2, N'positionSpecialization', N'Chức vụ/ Ngành học (viết bằng tiếng anh)', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (206, 1, N'companySchoolAdd', N'Company/School Address', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (207, 2, N'companySchoolAdd', N'Địa chỉ công ty/Trường', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (208, 1, N'companySchoolPhone', N'Company/School phone number', 0)
INSERT [dbo].[LanguageFormDict] ([Id], [LanguageId], [Keyword], [Value], [Deleted]) VALUES (209, 2, N'companySchoolPhone', N'  Số ĐT công ty/ Trường', 0)
SET IDENTITY_INSERT [dbo].[LanguageFormDict] OFF
GO
SET IDENTITY_INSERT [dbo].[LanguageUI] ON 

INSERT [dbo].[LanguageUI] ([Id], [Name], [NameAbbr], [Deleted]) VALUES (1, N'English', N'en', 0)
INSERT [dbo].[LanguageUI] ([Id], [Name], [NameAbbr], [Deleted]) VALUES (2, N'Vietnam', N'vn', 0)
SET IDENTITY_INSERT [dbo].[LanguageUI] OFF
GO
SET IDENTITY_INSERT [dbo].[SiteContent] ON 

INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (1, 1, NULL, N'AboutUs', N'About Us', N'Giới thiệu Visa Instant', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (2, 1, NULL, N'TermCondition', N'Terms & Conditions', N'Điều khoản sử dụng', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (3, 1, NULL, N'Privacy', N'Privacy', N'Chính sách bảo mật', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (4, 1, NULL, N'Contact', N'Contact', N'Liên hệ', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (5, 1, NULL, N'Account', N'Account', N'Tài khoản', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (6, 1, NULL, N'Logout', N'Logout', N'Logout', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (7, 1, NULL, N'Home', N'Home', N'Home', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (8, 1, NULL, N'Login', N'Login', N'Đăng nhập', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (9, 1, NULL, N'Register', N'Register', N'Đăng ký', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (11, 2, N'AboutUs', N'AboutUsContent', N'<p><strong>Our Mission</strong></p>
<p>Achieve the highest level of professional excellence in servicing our clients to navigate the complexities of the U.S. immigration system. Provide promote and responsive services. Adhere to the highest ethical, moral, and legal standards in our business.</p>
<p><strong>Who We Are</strong></p>
<p>We&rsquo;re a team of immigrants and experts who have struggled with our own journeys through the complex, high-stakes U.S. immigration system. Just like millions of other families, we&rsquo;ve had to choose between paying thousands of dollars in legal fees or spending months trying to figure out how to do everything ourselves. We knew there had to be a better way. That&rsquo;s what we&rsquo;re building, after hundreds of conversations with families, immigration lawyers, and government officials &mdash; a trusted partner and guide for your entire immigration journey.</p>
<p>Our goal is to provide you with access to all the tools that you need in order to get from your home country into the United States legally.</p>
<p>We bring to bear all our resources for your benefit including our professional and accredited staff, who will provide you with the best personalized service to ensure that you have the best chance of fulfilling your goals and ambitions for visiting or living in the United States.</p>
<p>Visa Instant is not a law firm and is not a substitute for the advice of an attorney. VisaInstant is not affiliated with or endorsed by United States Citizenship and Immigration Services (USCIS) or any other government agency. Blank immigration forms with written instructions, including for spousal visas, are available for free at the USCIS website. Use of the VisaInstant website and its services are subject to our Privacy Policy and Terms of Use. Attorney services are provided by independent attorneys and are subject to a separate Attorney Agreement.</p>', N'AboutUs Tiếng Việt', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (12, 2, N'Privacy', N'PrivacyContent', N'<p><strong>How Visa Instant Protects You and Your Data</strong></p>
<p>Learn about our privacy policy and data security measures</p>
<p>Visa Instant is serious about safeguarding your privacy.</p>
<p>Our team includes many immigrants who have stood in your shoes. We have made our own journeys through the complex, high-stakes U.S. immigration system. And we are dedicated to delivering the confidence and confidentiality you have every right to expect.</p>
<p>That&rsquo;s why we have designed the entire Visa Instant experience to defend your privacy, secure your data, and deliver extra legal protections.</p>
<p>Visa Instant, LLC, provide this Privacy Notice to inform you about our practices concerning the collection, use and disclosure of your information. By using the websites located at www.visainstant.com (including all subdomains) (the &ldquo;Sites&rdquo;), all portals, applications, interactive features, or the services provided by Visa Instant (collectively the &ldquo;Services&rdquo;), you agree to the information practices described in this Privacy Notice. If you do not agree to the terms of this Privacy Notice, you may not access or use the Sites or Services. If you purchase Services that include independent attorney review, your relationship with the independent attorney will be governed by the Attorney Agreement.</p>
<p>VISA INSTANT IS NOT A LAW FIRM, DOES NOT PROVIDE LEGAL ADVICE AND IS NOT A SUBSTITUTE FOR THE ADVICE OF AN ATTORNEY. YOUR USE OF THE SITE AND SERVICES, AND YOUR COMMUNICATION WITH VISA INSTANT, DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP. YOUR COMMUNICATIONS WITH VISA INSTANT ARE NOT PROTECTED BY THE ATTORNEY-CLIENT PRIVILEGE. YOUR COMMUNICATIONS WITH THE INDEPENDENT ATTORNEY ARE GOVERNED BY THE ATTORNEY AGREEMENT.</p>
<ol>
<li><strong> Information We Collect</strong></li>
</ol>
<p>1.1. Personal Information</p>
<p>When you use the Sites or Services, we collect certain information from you which can be used to contact or identify you, including, but not limited to, your name, gender, date of birth, telephone number, postal address, and email address (&ldquo;Identity Information&rdquo;). If you place an order for Services and/or pay a fee, we will collect additional payment and billing information from you, including, but not limited to, your credit/debit card information or bank account information (&ldquo;Billing Information&rdquo;). If you place an order for Services, you may also be required to provide information or documents necessary for preparation or filing of forms or applications to be submitted to government agencies, and if you file an application, we may receive from the government a unique receipt number assigned to your application (&ldquo;Application Information&rdquo;). Together, your Identity Information, Billing Information, Application Information, and Usage Data (defined below) are referred to as &ldquo;Personal Information.&rdquo;</p>
<p>1.2. Usage Data</p>
<p>We also automatically collect certain information regarding your access to and use of the Sites and Services. This information includes your computer or device hardware and software, IP address, browser type, referring website URLs, domain names, access times, log files, pages on the Sites that you visit, and links you click on (&ldquo;Usage Data&rdquo;).</p>
<p>More simply</p>
<p>We automatically collect certain information when you access and navigate our websites, such as your browser type and the pages you visit.</p>
<p>1.3. Cookies</p>
<p>Like many websites, we utilize devices to recognize you when you visit the Sites, track your interactions with the Sites, and personalize your experience. These include devices such as cookies, web beacons, pixels and similar devices. Cookies are small data files we transfer to your computer hard drive. We utilize some cookies that remain on your computer after you leave the Site so that we can recognize you when you return and provide a more personalized and helpful experience. We also utilize session cookies to enable certain features of the Sites, to better understand how you interact with the Sites and to monitor use of the Sites by Visa Instant users and web traffic routing on the Sites. Session cookies are deleted from your computer when you log off from the Sites and close your browser. You maintain control over some of the information we collect through the use of cookies, and you can set your preferences regarding the use of cookies through your browser settings. If you choose not to accept cookies, you may not be able to access portions of the Sites or all functionality of the Services.</p>
<p>More simply</p>
<p>We use small data files placed on your computer called &ldquo;cookies,&rdquo; and similar software, so that we can recognize you when you return to our websites and personalize and improve your user experience. You can manage the use of cookies through your browser settings.</p>
<p>1.4. EU Lawful Grounds</p>
<p>If you reside in the European Economic Area or Switzerland (collectively the &ldquo;EU&rdquo;), we rely on the following lawful grounds under the General Data Protection Regulation (&ldquo;GDPR&rdquo;) to process (collect, store, and use) your personal data contained in Personal Information and Usage Data: (a) it is necessary for the performance of a contract with you; (b) our legitimate interests; and (c) your consent. If you are a customer, the lawful ground for processing your personal data is necessary in performing our contract to provide the Services to you; our legitimate interest in understanding, improving, and promoting our services; and your consent. If you visit or use our websites, the lawful ground for processing your personal data is our legitimate interest in understanding how users interact with our websites to improve our websites and Services, and your consent.</p>
<ol start="2">
<li><strong> Use of Information We Collect</strong></li>
</ol>
<p>2.1. Account Creation</p>
<p>We use information you submit to us at the time of account registration, such as your name and email address, and any updated information you subsequently submit, such as a new email address, to create and maintain your account.</p>
<p>2.2. Operation and Improvement of Our Business</p>
<p>We use your information, including Personal Information, primarily to operate our business and provide the Services to you, including the completion of immigration forms. We use such information to personalize the Services we provide to you. We may use your information to verify your identity, for fraud prevention, to enforce the applicable terms of use and to protect the integrity of the Site. We may also use your information to develop new features or Services and to improve the quality of our Services.</p>
<p>2.3. Customer Service and Technical Support</p>
<p>We may use your information, including Personal Information, to respond to questions you have regarding use of our Services or to provide technical assistance.</p>
<p>2.4. Communications with You</p>
<p>We may contact you using the contact information you provide in order to respond to inquiries you send to us, to communicate with you regarding our Services and the services of our partners, and to market our Services, or those of our partners, to you. If you are in the EU, we will only use your contact information to communicate with you regarding our partners&rsquo; services with your prior consent. We may send you emails advertising or promoting our Services or those of our partners. If you do not wish to receive such emails, you can choose to opt-out of receipt using the unsubscribe link within each email, or by sending an unsubscribe request to help@visasinstant.com.</p>
<p>We also may use information about you, including Personal Information, to improve the effectiveness of our marketing and advertising efforts.</p>
<p>2.5. Internal Research</p>
<p>We may use information about you, including Personal Information, and other users, in aggregate form, for our own internal research and analytical purposes. For example, we may use certain types of your information to understand which features of our Services are being used most frequently.</p>
<p>2.6. Application Status</p>
<p>We may use your government receipt number from time to time to check your application status, so that we may provide you with pertinent general information about the steps in the application process. If, at any time, you do not want Visa Instant to retain your government receipt number or to check your application status, let us know by contacting our customer service department at <a href="mailto:help@visainstant.com">help@visainstant.com</a>.</p>
<ol start="3">
<li><strong> Information Sharing and Disclosure</strong></li>
</ol>
<p>3.1. Your Privacy Rights</p>
<p>Visa Instant does not share your Personal Information with third parties for their marketing purposes without your consent. Visa Instant does not sell, rent, or lease its customer lists to third parties.</p>
<p>3.2. Upon Consent</p>
<p>We may share your information, including Personal Information, with third parties if you provide us with authorization to do so. For example, if you include Personal Information in a review or testimonial of our Services for posting to social media platforms, such information will be publicly disclosed upon posting.</p>
<p>3.3. Service Providers</p>
<p>We may share your Personal Information with third-party service providers, but only to the extent necessary for them to assist us in providing our Services. For example, if you purchase Services, we will share your Billing Information with third-party payment processors to the extent necessary to process your payment. We use written contracts to require all third-party service providers to protect the security of your Personal Information, to keep your Personal Information confidential, and to use such information for no other purposes.</p>
<p>3.4. Responses to Legal Process, Subpoenas or Court Orders</p>
<p>We will not voluntarily disclose your Personal Information. However, we may disclose your Personal Information as required by law, such as in response to a court order, subpoena, or similar legal process legally requiring us to produce the information. If legally permitted and feasible, we will give you notice of our receipt of a demand for your Personal Information and provide you a reasonable time in which to seek to quash such demand in court, or otherwise obtain a withdrawal or modification of the demand, before complying with the demand.</p>
<p>3.5. Business Transfers</p>
<p>Your Personal Information may be included in the event that some or all of our assets are sold, assigned or transferred in connection with a merger, acquisition, reorganization or sale of assets, or in the event of bankruptcy. As a general matter, however, an acquiring party cannot retroactively change the Privacy Notice that was in place when Visa Instant collected your Personal Information.</p>
<p>3.6. Academic Research</p>
<p>We may share non-personally identifiable and non-privileged information about you and other users, in aggregate form, to third-party academic researchers. We require all third-party researchers to use such anonymized information for no purposes other than academic research. For example, we may use certain types of non-personally identifiable and non-privileged information to help researchers study factors that reduce barriers facing applicants navigating the immigration system. If you are in the EU, we will only share your non-privileged information with such academic researchers with your consent.</p>
<p>3.7 Third Party Cookies</p>
<p>We use Google AdWords Conversion tracker and other Google services (collectively &ldquo;Google Cookies&rdquo;) that place cookies on a browser. These cookies help us increase our Sites effectiveness for our visitors. These cookies are set and read by Google. To learn more about Google Cookies and how to opt out, please visit https://policies.google.com/technologies/ads.</p>
<p>We also use AdWords remarketing to market our Sites across the web. It places cookies on a browser that are then read by Google or other third parties, such as advertising networks, which may then serve you an ad on a third party website. You may opt out of this type of ad serving using the link to Google. You can also visit the Network Advertising Initiative opt-out page at https://www.networkadvertising.org/choices/.</p>
<ol start="4">
<li><strong> Policy Regarding Children</strong></li>
</ol>
<p>Our Sites and Services are not intended for persons under 18 years of age, and we do not knowingly collect Personal Information from persons under 18 years of age. If you are a parent or guardian and believe that your child has provided us with Personal Information without your consent, please contact us at help@visainstant.com. If we become aware that a person under 18 years of age has provided us with Personal Information, we will delete such information from our files.</p>
<ol start="5">
<li><strong> EU Data Transfer and Individual Rights</strong></li>
</ol>
<p>5.1. Data Transfer Notice</p>
<p>We are located in the United States and transfer your personal data for processing in the United States. We make the transfer to the United States in the absence of an adequacy decision because it is necessary for the performance of a contract with you, or with your explicit consent. We may transfer your personal data to a processor located outside of the EU to assist us in providing our Services. We enter standard contractual clauses with the processor for such transfers.</p>
<p>5.2. Individual Rights</p>
<p>If you are located in the EU, you may use your account to access, correct, or change Personal Information that you have provided to us. You may also email us at euprivacy@visainstant.com to request access to, transfer of, and rectification or erasure of your Personal Information or restriction of processing; and to object to processing. In the email, specify the nature of your request and the information that is the subject of your request. We will respond to your request within 30 days.</p>
<p>If we are processing your personal data based upon the lawful ground of your consent, you have the right to withdraw your consent for such processing at any time without affecting the lawfulness of the processing based on consent before it is withdrawn. To withdraw consent, email us at euprivacy@visainstant.com.</p>
<ol start="6">
<li><strong> Security</strong></li>
</ol>
<p>We have put in place physical, electronic and managerial procedures to protect the security of the information we collect, both during transmission and once received. This includes, but is not limited to, encryption, access control and audit logging on Personal Information. However, no method of transmission over the internet or method of storage is 100% secure. We cannot guarantee that our security measures will prevent our computer systems from being accessed illegally, nor can we guarantee that the information on our computer systems will not be viewed or stolen. ACCORDINGLY, VISA INSTANT DISCLAIMS ALL LIABILITY FOR THE THEFT, INTERCEPTION, LOSS, OR UNAUTHORIZED ACCESS TO DAMAGE TO YOUR INFORMATION. YOU ACKNOWLEDGE THAT USE OF THE SITES AND SERVICES IS AT YOUR OWN RISK.</p>
<ol start="7">
<li><strong> Google Analytics</strong></li>
</ol>
<p>We use Google Analytics to collect information about use of the Sites. Google Analytics collects information such as how often users visit the Site, what pages they visit when they do so, and what other websites they used prior to coming to the Site. We use the information we get from Google Analytics to improve the Sites and Services. Google Analytics collects only the IP address assigned to you on the date you visit this site, rather than your name or other Personal Information. We do not combine the information collected through the use of Google Analytics with personally identifiable information. Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. Google&rsquo;s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. You can prevent Google Analytics from recognizing you on return visits to the Sites by disabling cookies on your browser.</p>
<ol start="8">
<li><strong> Changes to Privacy Notice</strong></li>
</ol>
<p>Visa Instant may make changes to this Privacy Notice at any time. If we make any material changes we will notify you via email (sent to the e-mail address specified in your account) or by posting the revised Privacy Notice on the Sites prior to any changes becoming effective. You should review our Privacy Notice each time you access the Sites or use the Services. Your continued use of the Sites or Services following the posting of any changes or notice to you of the changes constitutes your agreement to such changes.</p>
<ol start="9">
<li><strong> Retention of Personal Information</strong></li>
</ol>
<p>At a minimum, we will retain your Personal Information for as long as it may be needed to provide you Service and as needed to comply with our legal obligations. Unless you request deletion of your Personal Information sooner, we may hold any of your Personal Information which may be used to provide future Services for up to ten years. Upon request, Visa Instant will inform you about whether we hold any of your Personal Information. You may terminate your account and request deletion of your Personal Information by contacting us at help@visainstant.com. In some situations, we may be legally required to retain your Personal Information or for other reasons will not be able to comply with a request to delete data.</p>
', N'Privacy Tiếng Việt', 0)
INSERT [dbo].[SiteContent] ([Id], [ContentTypeId], [PageName], [FieldName], [ENUS], [VN], [Deleted]) VALUES (13, 2, N'TermCondition', N'TermConditionContent', N'<p><strong>Terms of Use Agreement</strong></p>

<p>THIS AGREEMENT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES BETWEEN YOU AND VISA INSTANT, AND BOTH YOU AND VISA INSTANT WAIVE THE RIGHT TO A JURY TRIAL OR CLASS ACTION. PLEASE READ SECTION 14 CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS AND REMEDIES AND WILL HAVE A SUBSTANTIAL EFFECT ON HOW DISPUTES BETWEEN YOU AND VISA INSTANT WILL BE RESOLVED.</p>

<ol>
<li><strong> Scope of Agreement</strong></li>
</ol>

<p>This Terms of Use Agreement (&ldquo;Agreement&rdquo;) is between you and Visa Instant, LLC (&ldquo;Visa Instant&rdquo;), and governs your use of the website located at www.visainstant.com (including all subdomains) (the &ldquo;Site&rdquo;) and the services provided by Visa Instant (the &ldquo;Services&rdquo;). By accessing or using the Site or the Services, you agree to be legally bound by this Agreement. Your use of the Site and Services is also subject to the terms of the Visa Instant Privacy Policy. If you purchase Services that include independent attorney review, your relationship with the independent attorney will be governed by the Attorney Agreement. If you do not agree to the terms of this Agreement and the Privacy Policy, you may not access or use the Site or Services. The Site and Services are intended for use by persons 18 years of age or older. If you are under 18 years of age, you may not access or use the Site or Services.</p>

<ol start="2">
<li><strong> Description of Services; No Affiliation with USCIS</strong></li>
</ol>

<p>Visa Instant is a platform designed to assist you in completing United States Citizenship and Immigration Services (USCIS) forms as well as forms required by other governmental agencies. Visa Instant provides information and step-by-step instructions intended to make the completion of such forms less confusing. Visa Instant is not affiliated with or endorsed by USCIS or any United States government agency. All USCIS and other forms are available without cost from USCIS and other applicable agencies. Use of the Visa Instant Site and Services is not required to complete and file such forms.</p>

<ol start="3">
<li><strong> Visa Instant is Not a Law Firm and Does Not Provide Legal Advice</strong></li>
</ol>

<p>VISA INSTANT IS NOT A LAW FIRM AND IS NOT A SUBSTITUTE FOR THE ADVICE OF AN ATTORNEY AND ITS SERVICES SHOULD NOT BE CONFUSED WITH LEGAL ADVICE. YOUR AGREEMENT TO THE TERMS OF THIS AGREEMENT AND YOUR ACCESS AND USE OF THE VISA INSTANT SITE AND SERVICES DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP BETWEEN YOU AND VISA INSTANT. IF YOU PURCHASE SERVICES THAT INCLUDE INDEPENDENT ATTORNEY REVIEW, YOUR RELATIONSHIP WITH THE INDEPENDENT ATTORNEY WILL BE GOVERNED BY THE ATTORNEY AGREEMENT. IF YOU HAVE QUESTIONS REGARDING LEGAL MATTERS OR NEED LEGAL ADVICE YOU ARE ADVISED TO CONSULT A LICENSED ATTORNEY.</p>


<ol start="4">
<li><strong> Accounts and Information</strong></li>
</ol>

<p>4.1. Your Visa Instant Account. In order to access and use some aspects of the Site and Services, you will be required to create an account and establish a username and password. If you create a Visa Instant Account, you agree to submit only accurate information about yourself and to keep the information you submit up-to-date. You agree not to impersonate anyone else. You are responsible for maintaining the security and confidentiality of your username and password, and you agree not to authorize anyone else to use your username and password. You are solely responsible for all actions taken under your account. You agree to notify Visa Instant promptly in the event you learn of any unauthorized use of your account. By creating an account, you agree that you may receive electronic communications from Visa Instant and its affiliates, including offers, newsletters, account notices and updates. If at any time you no longer wish to receive such electronic communications, you may opt-out by clicking the designated link in the communication.</p>

<p>4.2. Your Application. If you purchase a service from us and file an application, we may assign a unique email address to your account for the sole purpose of enabling Visa Instant to receive directly from USCIS the receipt number assigned to your application. You agree that Visa Instant may use your receipt number to check your application status from time to time so that we may provide you pertinent general information about the steps in the application process. If, at any time, you do not want Visa Instant to retain your receipt number or to check your application status, let us know by contacting our customer service department at support.team@VisaInstant.com.</p>

<ol start="5">
<li><strong> Access to and Use of Site and Services</strong></li>
</ol>

<p>5.1. License Grant to You. Subject to your complete compliance with the provisions of this Agreement, you are granted a limited, non-exclusive, non-transferable, revocable license to use the Site and Services solely in the manner authorized and intended by Visa Instant. Any rights not expressly granted in this Agreement are expressly reserved by Visa Instant. The resale or distribution of materials made available on the Site without the express, written consent of Visa Instant is prohibited. All such materials are authorized only for your own personal use.</p>

<p>5.2. Restrictions on Your Access To and Use of Site and Services</p>

<p>In connection with your access to or use of the Site or Services, you are prohibited from:</p>

<ul>
<li>accessing data not intended for you or logging onto a server or an account which you are not authorized to access;</li>
<li>using any engine, software, tool, agent or other device or mechanism (including without limitation browsers, spiders, robots, avatars or intelligent agents) to access, navigate, or search the Site, other than generally available third-party web browsers (e.g., Mozilla Firefox, Google Chrome and Microsoft Explorer);</li>
<li>using any device, software or routine to interfere or attempt to interfere with the proper working of the Site or any activity being conducted on the Site;</li>
</ul>
<ul>
<li>attempting to probe, scan or test the vulnerability of a Visa Instant system or network or to breach security or authentication measures without proper authorization;</li>
<li>attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to the Site or through the Service, overloading, &ldquo;flooding,&rdquo; &ldquo;spamming,&rdquo; &ldquo;mailbombing&rdquo; or &ldquo;crashing&rdquo;;</li>
<li>sending unsolicited email, including promotions and/or advertising of products or services;</li>
<li>forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting;</li>
<li>copying, modifying, adapting, reproducing, reverse engineering, decompiling, disassembling, or preparing derivative works from Visa Instant software, Visa Instant Content or User Content that is not your own;</li>
<li>distributing viruses, malicious code, malware or any other technologies that may harm Visa Instant, the Site, the Services or a user;</li>
<li>violating or circumventing any applicable laws, regulations or Visa Instant technical measures, security measures or policies;</li>
<li>violating, infringing, or breaching the rights of Visa Instant or a third-party, including, but not limited to any copyrights, trademark rights, patent rights, trade secrets rights, rights of publicity or personality, moral rights, or any other proprietary rights;</li>
<li>submitting to the Site or through the Services any false, inaccurate, misleading, deceptive, defamatory, or libelous materials or User Content; or</li>
<li>knowingly withholding or failing to disclose information requested by Visa Instant or required to be included or disclosed on a USCIS form or other government form or engaging in any action that constitutes fraud.</li>
</ul>

<p>Submitting false, inaccurate, misleading or deceptive information, or failing to disclose information requested by Visa Instant or required to be included or disclosed on a USCIS form or other government form may result in your application being denied by the applicable government agency and Visa Instant will not have any liability to you as a result of such actions.</p>

<p>Violations of system or network security may result in civil or criminal liability. Visa Instant will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.</p>

<p>5.3. License Grant by You. When you transmit any information, content, materials or data to or through the Site or Services, other than information, content, materials or data submitted for the purpose of creating your account or for preparing applications and/or forms (&ldquo;User Content&rdquo;), you hereby grant Visa Instant and its affiliates a non-exclusive, royalty-free, perpetual, irrevocable and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such User Content, including throughout the world in any media. Visa Instant shall have no obligation to: (a) maintain any User Content you submit; (b) pay you any compensation of any kind for any User Content; or (c) respond to any User Content you submit. You represent and warrant that you own or have obtained all necessary rights and/or licenses to User Content that you submit, and that Visa Instant&rsquo; use of such User Content does not violate or infringe upon the rights of any person or entity.</p>

<ol start="6">
<li><strong> Service Fees</strong></li>
</ol>

<p>6.1. Service Fees. While Visa Instant makes a large amount of information available without cost, it charges fees for some of its services (&ldquo;Service Fees&rdquo;). All Service Fees will be set forth on the Site. USCIS and other agencies charge fees for the filing and processing of various government forms (&ldquo;Government Fees&rdquo;). Government Fees are separate from our Service Fees and must be paid to the applicable government agency at the time of filing. Unless we indicate otherwise, you remain responsible for paying Government Fees directly to the applicable government agency.</p>

<p>6.2. Payment of Service Fees. When you purchase services for which Service Fees apply, you will be required to provide Visa Instant with valid, up-to-date credit card or other payment information. You authorize Visa Instant to charge your credit card or other payment method for all Service Fees you incur as they become due and payable. You are responsible for maintaining up-to-date payment information. If we cannot charge you for Service Fees when due because your payment information is incorrect or no longer valid, or if we do not receive your payment when due, Visa Instant will have no obligation to provide the services associated with those Service Fees.</p>

<p>6.3. Refunds/Credits. Please refer to our 30-Day 100% Satisfaction Guarantee for our refund policy. The determination of whether to issue a refund or credit more than 30 days after your purchase of services, other than a refund due to a billing error by Visa Instant, shall be made in Visa Instant&rsquo; sole discretion, in good faith, and we reserve the right to deny a request a refund or credit.</p>

<ol start="7">
<li><strong> Ownership and Intellectual Property Rights</strong></li>
</ol>

<p>All materials, including text, images, videos, illustrations, designs, icons, photographs, software, programs and written and other materials that are part of the Site or accessible through the Services, other than User Content (collectively, &ldquo;Visa Instant Content&rdquo;), is the property of Visa Instant or its licensors. Visa Instant Content is intended solely for personal, non-commercial use. No right, title or interest in any Visa Instant Content is transferred to you by way of this Agreement or otherwise. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, any of the Visa Instant Content, the Site or any related software. VISA INSTANT and the Visa Instant Logo are trademarks of Visa Instant Immigration Inc.</p>

<ol start="8">
<li><strong> Copyright Infringement (Digital Millennium Copyright Act)</strong></li>
</ol>

<p>Visa Instant respects the intellectual property of others. We strive to respond promptly to proper notices of copyright infringement by removing or disabling access to allegedly infringing material. It is Visa Instant&rsquo; policy to terminate the access privileges of those who repeatedly infringe the copyrights of others.</p>
<p>Submitting a Copyright Infringement Notification. If you believe that any material appears on the Site in a way that infringes the copyright in a work owned by you, please send a notification containing the following information to Visa Instant&rsquo; Copyright Agent:</p>

<ul>
<li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</li>
<li>a description of the work in which you hold a copyright interest which you believe is being infringed;</li>
<li>a description of the location on this website where the allegedly infringing material is located (preferably including a URL address);</li>
<li>your address, telephone number, and email address;</li>
<li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</li>
<li>a statement by you, made under penalty of perjury, that the above information in your notification is accurate and that you are the copyright owner or authorized to act on the copyright owner&rsquo;s behalf.</li>
</ul>

<p>Visa Instant&rsquo;s Copyright Agent can be reached at the following address:</p>

<p>Visa Instant, LLC</p>

<p>Attn: Copyright Agent</p>

<p>2825 Wilcrest Drive, Ste 559</p>

<p>Houston, Texas 77042</p>

<p>copyright@VisaInstant.com</p>

<p>When Visa Instant removes material or disables access to material in response to an infringement notification, Visa Instant will make a reasonable attempt to contact the allegedly infringing party, provide information about the notification and removal, and provide information about submitting a counter-notification. Visa Instant may also provide a copy of the infringement notification to the allegedly infringing party.</p>

<p>Submitting a Counter-Notification. If you believe that any material identified in a copyright infringement notification is not infringing, or that you have the authorization from the copyright owner, from the copyright owner&rsquo;s agent, or pursuant to the law, to post and use the material complained of, you may send a counter-notification containing the following information to Visa Instant&rsquo; Copyright Agent (identified above):</p>

<ul>
<li>your physical or electronic signature;</li>
<li>identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or disabled;</li>
<li>a statement that you have a good faith belief that the material was removed or disabled as a result of mistake or a misidentification of the material; and</li>
<li>your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in the Southern District of Texas, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
</ul>

<p>If Visa Instant receives a counter-notification, we may send a copy of the counter-notification to the original complaining party informing that person that we may replace the removed material or cease disabling it in 10 business days. Unless the original complaining party files an action seeking a court order against the person who provided the allegedly infringing material, the removed material may be replaced, or access to it restored, 14 business days or more after receipt of the counter-notification, at Visa Instant&rsquo; sole discretion.</p>

<ol start="9">
<li><strong> Third Parties; Third Party Content and Services</strong></li>
</ol>

<p>References on the Site to any third parties, including persons or companies, and to any products or services of such third parties, are provided solely as a convenience to you. Visa Instant does not endorse, recommend, approve of or make any representations or warranties regarding any third parties or their products or services. Without limiting the foregoing, Visa Instant is not a lawyer referral service, and makes no representations or warranties regarding any law firms or attorneys that may be referenced on the Site, including whether any such law firm or attorney is licensed, qualified, competent or otherwise capable of providing adequate legal advice regarding your specific legal issues. Visa Instant may provide links to third-party websites. Visa Instant is not responsible for the content of any third-party websites and does not make any representations regarding the content or accuracy of material on such websites. If you decide to follow a link to any third-party website, you do so entirely at your own risk.</p>

<ol start="10">
<li><strong> Disclaimer of Warranty</strong></li>
</ol>

<p>THE SITE AND THE SERVICES ARE PROVIDED BY VISA INSTANT ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. VISA INSTANT MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE SITE, SERVICES, OR INFORMATION, CONTENT, OR MATERIALS OFFERED ON THE SITE OR THROUGH THE SERVICES. TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, VISA INSTANT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE. VISA INSTANT DOES NOT WARRANT THAT THE SITE OR SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU AGREE THAT YOUR USE OF THE SITE AND THE SERVICES IS AT YOUR SOLE RISK. THIS DISCLAIMER CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT, AND YOU ACKNOWLEDGE THAT VISA INSTANT WOULD NOT HAVE ENTERED INTO THIS AGREEMENT WITH YOU WITHOUT YOUR AGREEMENT TO THE TERMS OF THIS DISCLAIMER. THIS DISCLAIMER OF WARRANTY DOES NOT APPLY TO THE PURCHASE OF SERVICES BY NORTH CAROLINA CONSUMERS.</p>
<ol start="11">
<li><strong> Limitation of Liability</strong></li>
</ol>

<p>UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL OR EQUITABLE THEORY, WHETHER IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE, SHALL VISA INSTANT, ITS AFFILIATES, AND THEIR RESPECTIVE EMPLOYEES, DIRECTORS, OFFICERS, AND AGENTS BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES OF ANY NATURE ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE SITE OR SERVICES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF VISA INSTANT, ITS AFFILIATES, OR THEIR RESPECTIVE EMPLOYEES, DIRECTORS, OFFICERS, AND AGENTS HAVE BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES. IN NO EVENT WILL VISA INSTANT BE LIABLE FOR ANY DAMAGES IN EXCESS OF THE FEES PAID BY YOU IN CONNECTION WITH YOUR USE OF THE SITE OR SERVICES DURING THE SIX MONTH PERIOD PRECEDING THE DATE ON WHICH THE CLAIM AROSE.</p>

<p>CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS. THIS LIMITATION OF LIABILITY DOES NOT APPLY TO NORTH CAROLINA CONSUMERS.</p>

<ol start="12">
<li><strong> Indemnification</strong></li>
</ol>

<p>You agree to defend, indemnify and hold harmless Visa Instant, its affiliates, and their respective directors, officers and employees from and against any and all claims, damages, costs and expenses, including attorneys&rsquo; fees, arising from or related to your breach of this Agreement, your improper use of the Site or Services, or your breach of any applicable law or infringement of the rights of a third party. Visa Instant shall have the right to participate in the defense of any such claim, at its own cost. You may not settle or negotiate any claim that results in liability to, or imposes any obligation upon, Visa Instant, financial or otherwise, without the written consent of Visa Instant.</p>

<ol start="13">
<li><strong> Termination</strong></li>
</ol>

<p>This Agreement shall remain in force and effective unless and until terminated as provided in this Section 13. You may terminate this Agreement at any time by providing written notice to Visa Instant, via email to support.team@VisaInstant.com. Except where you terminate this Agreement due to an uncured material breach of this Agreement by Visa Instant or where you terminate this Agreement pursuant to our Satisfaction Guarantee within 30 days of purchasing Services, Visa Instant will have no obligation to refund you any Service Fees previously paid to Visa Instant for the Services. Visa Instant may terminate this Agreement immediately with or without notice, and/or may deny you access to the Site or Services, in Visa Instant&rsquo; sole discretion, in the event you breach, or threaten to breach, any term of this Agreement. If you have already paid for Services and have been found to be in violation of this Agreement, your account will be deleted without notice and no refund of Service Fees will be made. Unless otherwise agreed to by Visa Instant in writing, this Agreement shall terminate automatically on that date which is 12 months (or 24 months for petition combos) following the date on which you initially purchased Services and no Service Fees will be refunded.</p>

<p>Upon any termination of this Agreement, you must immediately discontinue use of the Site and Services. Sections 7 and 10-15 shall survive any termination of this Agreement.</p>

<ol start="14">
<li><strong> Dispute Resolution by Binding Arbitration</strong></li>
</ol>

<p>Please read this carefully. It affects your rights.</p>

<p>Summary:</p>

<p>We believe customer concerns can be resolved quickly by emailing our Customer Care Center at support.team@VisaInstant.com. If Visa Instant is unable to resolve your complaint to your satisfaction (or if we have not been able to resolve a dispute with you after trying to do so informally), we each agree to resolve such disputes through binding arbitration or in small claims court, rather than in a court of general jurisdiction. Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, limits discovery, and is subject to very limited review by courts. Any arbitration under this Agreement will take place on an individual basis; class arbitrations and class actions are not permitted.</p>

<p>For any non-frivolous claim that does not exceed $75,000, Visa Instant will pay all costs of the arbitration. Under certain circumstances as explained below, we will pay you more than the amount of the arbitrator&rsquo;s award. If you prevail in arbitration, you may recover attorney&rsquo;s fees from Visa Instant to the same extent or more as you would in court. The arbitrator shall apply the same limitations period that would apply in court.</p>

<p>Arbitration Agreement:</p>

<p>14.1. Visa Instant and you agree to arbitrate all disputes and claims between us before a single arbitrator. The types of disputes and claims we agree to arbitrate are intended to be broadly interpreted and include, without limitation:</p>

<ul>
<li>claims arising out of or relating to any aspect of the relationship between us, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory;</li>
<li>claims that arose before these or any prior Agreement (including, but not limited to, claims relating to advertising);</li>
<li>claims currently the subject of purported class action litigation in which you are not a member of a certified class; and</li>
<li>claims that may arise after the termination of this Agreement.</li>
</ul>

<p>For the purposes of this Arbitration Agreement, references to &ldquo;Visa Instant,&rdquo; &ldquo;you,&rdquo; and &ldquo;us&rdquo; include our respective subsidiaries, affiliates, agents, employees, business partners, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or products under this Agreement or any prior agreements between us. Beneficiaries include, but are not limited to, those seeking to change immigration status and any relatives.</p>

<p>Notwithstanding the foregoing, either party may bring an individual action in small claims court or in a court of proper jurisdiction seeking injunctive relief ancillary to arbitration. This Arbitration Agreement does not preclude your bringing issues to the attention of federal, state, or local agencies. Such agencies can, if the law allows, seek relief against us on your behalf. You agree that, by entering into this Agreement, you and Visa Instant are each waiving the right to a trial by jury or to participate in a class action or class or mass arbitration. This Agreement evidences a transaction or website use in interstate commerce, and thus the Federal Arbitration Act (&ldquo;FAA&rdquo;) governs the interpretation and enforcement of this provision. This arbitration provision will survive termination of this Agreement.</p>

<p>14.2. A party who intends to seek arbitration must first send, by U.S. certified mail, a written Notice of Dispute (&ldquo;Notice&rdquo;) to the other party. A Notice to Visa Instant should be addressed to: Notice of Dispute, John Truong, C/O, Visa Instant, LLC, 2825 Wilcrest Drive, Ste 559, Houston, Texas 77942 (the &ldquo;Notice Address&rdquo;). The Notice must (a) describe the nature and basis of the claim or dispute and (b) set forth the specific relief sought (&ldquo;Demand&rdquo;). If Visa Instant and you do not resolve the claim within 30 days after the Notice is received, you or Visa Instant may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by Visa Instant or you shall not be disclosed to the arbitrator until after the arbitrator determines the amount, if any, to which you or Visa Instant is entitled.</p>

<p>You may download or copy a form to initiate arbitration from the AAA website, including for California residents, at https://www.adr.org.</p>

<p>14.3. After we receive notice at the Notice Address that you have commenced arbitration, we will promptly reimburse you for your payment of the filing fee, unless your claim is for more than $75,000 (excluding attorney&rsquo;s fees and expenses). (Currently, the filing fee for consumer-initiated arbitrations is $200, but this is subject to change by the arbitration provider. If you are unable to pay this fee, Visa Instant will pay it directly after receiving a written request at the Notice Address.) If, however, the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all such fees will be governed by the AAA Rules. In such case, you agree to reimburse Visa Instant for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. The arbitration will be governed by the Consumer Arbitration Rules (the &ldquo;AAA Rules&rdquo;) of the American Arbitration Association (the &ldquo;AAA&rdquo;), as modified by this Agreement, and will be administered by the AAA. The AAA Rules are available online at www.adr.org or by calling the AAA at 1-800-778-7879. The arbitrator is bound by this Agreement. All issues are for the arbitrator to decide, except that issues relating to the scope, enforceability, and interpretation of the arbitration provision and the scope, enforceability, and interpretation of paragraph (f) are for the court to decide. Unless Visa Instant and you agree otherwise, any arbitration hearing(s) will take place in the county (or parish) of your contact address. If your claim is for $10,000 or less, you may choose whether to conduct the arbitration solely on the basis of documents submitted to the arbitrator, by a telephonic hearing, or by an in-person hearing as established by the AAA Rules. If you choose to proceed either in person or by telephone, we may choose to respond only by telephone or submission. If your claim exceeds $10,000, the AAA Rules will determine whether you have a right to a hearing. The parties agree that in any arbitration of a dispute or claim, neither party will rely for preclusive effect on any award or finding of fact or conclusion of law made in any other arbitration of any dispute or claim to which Visa Instant was a party.</p>

<p>14.4. If the arbitrator issues an award in your favor that is greater than the value of our last written settlement offer made before an arbitrator was selected, Visa Instant will:</p>

<ul>
<li>pay you either the amount of the award or $2,000 (&ldquo;the Alternative Payment&rdquo;), whichever is greater; and</li>
<li>pay your attorney, if any, the amount of attorney&rsquo;s fees, and reimburse any expenses (including expert witness fees and costs), that your attorney reasonably accrues for investigating, preparing, and pursuing your claim in arbitration (the &ldquo;Attorney&rsquo;s Payment&rdquo;).</li>
</ul>

<p>If Visa Instant did not make a written offer to settle the dispute before an arbitrator was selected, you and your attorney will be entitled to receive the Alternative Payment and the Attorney&rsquo;s Payment, respectively, if the arbitrator awards you any relief on the merits. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees, expenses, and the alternative payment and the attorney&rsquo;s fees at any time during the proceeding and upon request from either party made within 14 days of the arbitrator&rsquo;s ruling on the merits. In assessing whether an award that includes attorney&rsquo;s fees or expenses is greater than the value of our last written settlement offer, the arbitrator shall include in his or her calculations only the value of any attorney&rsquo;s fees or expenses you reasonably incurred in connection with the arbitration proceeding before our settlement offer.</p>

<p>14.5. The right to attorney&rsquo;s fees and expenses discussed in paragraph (d) supplements any right to attorney&rsquo;s fees and expenses you may have under applicable law. Thus, if you would be entitled to a larger amount under applicable law, this provision does not preclude the arbitrator from awarding you that amount. However, you may not recover duplicative awards of attorney&rsquo;s fees or costs. Although under some laws we may have a right to an award of attorney&rsquo;s fees and expenses from you if we prevail in an arbitration proceeding, we will not seek such an award.</p>

<p>14.6. YOU AND VISA INSTANT AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITIES AND NOT AS PLAINTIFFS OR CLASS MEMBERS IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING OR IN THE CAPACITY OF A PRIVATE ATTORNEY GENERAL, INCLUDING IN ARBITRATION. Unless both you and Visa Instant agree otherwise, the arbitrator may not consolidate more than one person&rsquo;s claims, and may not otherwise preside over any form of a representative or class proceeding. The arbitrator may award any relief that a court could award that is individualized to the claimant and would not</p>
<p>affect other customers. Neither you nor we may seek non-individualized relief that would affect other customers. If a court decides that applicable law precludes enforcement of any of this paragraph&rsquo;s limitations as to a particular claim for relief, then that claim (and only that claim) may be severed from the arbitration and brought in court.</p>

<p>14.7. If the amount in dispute exceeds $75,000 (excluding attorney&rsquo;s fees and expenses) either party may appeal the award to a three-arbitrator panel administered by AAA by a written notice of appeal within thirty (30) days from the date of entry of the written arbitration award. The members of the three-arbitrator panel will be selected according to AAA rules. The three-arbitrator panel will issue its decision within one hundred and twenty (120) days of the date of the appealing party&rsquo;s notice of appeal. The decision of the three-arbitrator panel shall be final and binding, subject to any right of judicial review that exists under the FAA.</p>

<p>14.8. Notwithstanding any provision in this Agreement or elsewhere to the contrary, Visa Instant agrees that if we make any changes to this arbitration provision (other than a change to any notice address, website link or telephone number provided herein), that change will not apply to any dispute of which we had written notice on the effective date of the change. Moreover, if we seek to terminate this Agreement, any such termination will not be effective as to this Arbitration Agreement until at least thirty (30) days after written notice of such termination is provided to you, and shall not be effective as to disputes which arose prior to the date of termination.</p>

<ol start="15">
<li><strong> Miscellaneous Terms</strong></li>
</ol>

<p>15.1. Consent to Electronic Communications. You consent to receive communications from Visa Instant electronically, and you agree that all agreements, notices, disclosures and other communications that Visa Instant provides to you electronically, via email, or on the Site, satisfy any legal requirement that such communications or agreements be in writing.</p>

<p>15.2. Assignment. You may not assign your rights under this Agreement without the prior written permission of Visa Instant and any attempt by you to do so shall be null and void.</p>

<p>15.3. Waiver. The waiver of a breach of any provision of this Agreement will not operate or be interpreted as a waiver of any other or subsequent breach.</p>

<p>15.4. Severability. If any provision of this Agreement is held to be invalid or unenforceable for any reason, the remaining provisions will continue in full force without being impaired or invalidated in any way.</p>

<p>15.5. Changes to Agreement. Visa Instant may make changes to this Agreement at any time. If we make any material changes we will notify you via email if you have created an account (sent to the e-mail address specified in your account) or by posting the revised Agreement on the Site prior to any changes becoming effective. You should review our Agreement each time you access the Site or use the Services. Your continued use of the Site or Services following the posting of any changes or notice to you of the changes constitutes your agreement to such changes.</p>

<p>15.6. Governing Law. This Agreement will be construed in accordance with and governed exclusively by the laws of the State of Texas applicable to agreements made among Texas residents and to be performed wholly within such jurisdiction, regardless of the parties&rsquo; actual domiciles.</p>

<p>15.7. Entire Agreement. This Agreement, including all agreements referred to and incorporated herein, sets forth the entire understanding and agreement between you and Visa Instant, and supersedes any and all other oral or written agreements or understandings between the parties.</p>
', N'Terms and Conditions Tiếng Việt', 0)
SET IDENTITY_INSERT [dbo].[SiteContent] OFF
GO
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [DF_Account_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[AccountVerification] ADD  CONSTRAINT [DF_AccountVerification_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[AppSetting] ADD  CONSTRAINT [DF_AppSetting_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Beneficiary] ADD  CONSTRAINT [DF_Beneficiary_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF_Customer_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Dictionary] ADD  CONSTRAINT [DF_Dictionary_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[FormEmployment] ADD  CONSTRAINT [DF_FormEmployment_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[FormTravelDocument] ADD  CONSTRAINT [DF_FormTravelDocument_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[FormVisaFiance] ADD  CONSTRAINT [DF_FormVisaFiance_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[FormVisaParent] ADD  CONSTRAINT [DF_FormVisaParent_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[FormVisaSpouse] ADD  CONSTRAINT [DF_FormVisaSpouse_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Keyword] ADD  CONSTRAINT [DF_Keyword_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Language] ADD  CONSTRAINT [DF_Language_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[LanguageForm] ADD  CONSTRAINT [DF_LanguageForm_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[LanguageFormDict] ADD  CONSTRAINT [DF_LanguageFormDict_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[LanguageUI] ADD  CONSTRAINT [DF_LanguageUI_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[LanguageUIDict] ADD  CONSTRAINT [DF_LanguageUIDict_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[SiteContent] ADD  CONSTRAINT [DF_SiteContent_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Sponsor] ADD  CONSTRAINT [DF_Sponsor_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Keyword_Keyword] FOREIGN KEY([Keyword])
REFERENCES [dbo].[Keyword] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Keyword_Keyword]
GO
ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Language_LanguageId] FOREIGN KEY([LanguageId])
REFERENCES [dbo].[Language] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Language_LanguageId]
GO
