USE [OneWits@VisaInstantLOCAL]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/25/2022 8:57:46 PM ******/
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
/****** Object:  Table [dbo].[Account]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AccountVerification]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AppSetting]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[Beneficiary]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[Customer]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[DeviceCodes]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[FormTravelDocument]    Script Date: 5/25/2022 8:57:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormTravelDocument](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountId] [bigint] NULL,
	[ApplicantFamilyName] [nvarchar](1000) NULL,
	[ApplicantGivenName] [nvarchar](1000) NULL,
	[ApplicantMiddleName] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressStreet] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressNumber] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressApt] [bit] NULL,
	[ApplicantPhysicalAddressSte] [bit] NULL,
	[ApplicantPhysicalAddressFr] [bit] NULL,
	[ApplicantPhysicalAddressCity] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressZipCode] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressPostCode] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressState] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressProvince] [nvarchar](1000) NULL,
	[ApplicantPhysicalAddressCountry] [nvarchar](1000) NULL,
	[ApplicantAlienNumber] [nvarchar](1000) NULL,
	[ApplicantAlienNumber1] [nvarchar](1000) NULL,
	[ApplicantAlienNumber2] [nvarchar](1000) NULL,
	[ApplicantAlienNumber3] [nvarchar](1000) NULL,
	[ApplicantAlienNumber4] [nvarchar](1000) NULL,
	[ApplicantAlienNumber5] [nvarchar](1000) NULL,
	[ApplicantAlienNumber6] [nvarchar](1000) NULL,
	[ApplicantAlienNumber7] [nvarchar](1000) NULL,
	[ApplicantAlienNumber9] [nvarchar](1000) NULL,
	[ApplicantAlienNumber8] [nvarchar](1000) NULL,
	[ApplicantCitizen] [nvarchar](1000) NULL,
	[ApplicantClassOfAdmission] [nvarchar](1000) NULL,
	[ApplicantMale] [bit] NULL,
	[ApplicantFemale] [bit] NULL,
	[ApplicantDateOfBirth] [datetime2](7) NULL,
	[ApplicantCountryOfBirth] [nvarchar](1000) NULL,
	[ApplicantCitizenship] [nvarchar](1000) NULL,
	[ApplicantDateOfDepartment] [datetime2](7) NULL,
	[ApplicantLengthOfTrip] [nvarchar](1000) NULL,
	[PreparerGivenName] [nvarchar](1000) NULL,
	[PreparerFamilyName] [nvarchar](1000) NULL,
	[PreparerBusinessName] [nvarchar](1000) NULL,
	[PreparerAddressStreet] [nvarchar](1000) NULL,
	[PreparerAddress] [nvarchar](1000) NULL,
	[PreparerAddressSte] [bit] NULL,
	[PreparerAddressFr] [bit] NULL,
	[PreparerAddressApt] [bit] NULL,
	[PreparerAddressCity] [nvarchar](1000) NULL,
	[PreparerAddressState] [nvarchar](1000) NULL,
	[PreparerAddressZipCode] [nvarchar](1000) NULL,
	[PreparerAddressPostalCode] [nvarchar](1000) NULL,
	[PreparerAddressProvince] [nvarchar](1000) NULL,
	[PreparerAddressCountry] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber1] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber2] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber3] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber4] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber5] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber6] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber7] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber8] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber9] [nvarchar](1000) NULL,
	[ApplicantPhoneNumber10] [nvarchar](1000) NULL,
	[PreparerEmail] [nvarchar](1000) NULL,
	[PreparerPhoneNumber] [nvarchar](1000) NULL,
	[PreparerPhoneNumber1] [nvarchar](1000) NULL,
	[PreparerPhoneNumber2] [nvarchar](1000) NULL,
	[PreparerPhoneNumber3] [nvarchar](1000) NULL,
	[PreparerPhoneNumber4] [nvarchar](1000) NULL,
	[PreparerPhoneNumber5] [nvarchar](1000) NULL,
	[PreparerPhoneNumber6] [nvarchar](1000) NULL,
	[PreparerPhoneNumber7] [nvarchar](1000) NULL,
	[PreparerPhoneNumber8] [nvarchar](1000) NULL,
	[PreparerPhoneNumber9] [nvarchar](1000) NULL,
	[PreparerPhoneNumber10] [nvarchar](1000) NULL,
	[ApplicantPhone] [nvarchar](1000) NULL,
	[ApplicantPhone1] [nvarchar](1000) NULL,
	[ApplicantPhone2] [nvarchar](1000) NULL,
	[ApplicantPhone3] [nvarchar](1000) NULL,
	[ApplicantPhone4] [nvarchar](1000) NULL,
	[ApplicantPhone5] [nvarchar](1000) NULL,
	[ApplicantPhone6] [nvarchar](1000) NULL,
	[ApplicantPhone7] [nvarchar](1000) NULL,
	[ApplicantPhone8] [nvarchar](1000) NULL,
	[ApplicantPhone9] [nvarchar](1000) NULL,
	[ApplicationTypeTravelDocument] [bit] NULL,
	[OtherPersonFamilyName] [nvarchar](1000) NULL,
	[OtherPersonGivenName] [nvarchar](1000) NULL,
	[OtherPersonGMiddleName] [nvarchar](1000) NULL,
	[OtherPersonDateOfBirth] [datetime2](7) NULL,
	[OtherPersonAddressStreet] [nvarchar](1000) NULL,
	[OtherPersonApt] [bit] NULL,
	[OtherPersonFlr] [bit] NULL,
	[OtherPersonSte] [bit] NULL,
	[OtherPersonAddressNumber] [nvarchar](1000) NULL,
	[OtherPersonAddressCity] [nvarchar](1000) NULL,
	[OtherPersonAddressState] [nvarchar](1000) NULL,
	[OtherPersonAddressZipCode] [nvarchar](1000) NULL,
	[OtherPersonAddressPostalCode] [nvarchar](1000) NULL,
	[OtherPersonAddressProvince] [nvarchar](1000) NULL,
	[OtherPersonAddressCountry] [nvarchar](1000) NULL,
	[OtherPersonRemovalYes] [bit] NULL,
	[OtherPersonRemovalNo] [bit] NULL,
	[RetryPermitYes] [bit] NULL,
	[RetryPermitNo] [bit] NULL,
	[RetryPermitDate] [nvarchar](1000) NULL,
	[RetryPermitDisposition] [nvarchar](1000) NULL,
	[ApplicationTypeReentryPermit] [bit] NULL,
	[ApplicationTypeAdvanceParole] [bit] NULL,
	[ApplicationTypeForOther] [bit] NULL,
	[ApplicationTypeRefugee] [bit] NULL,
	[ApplicationTypeForeignTravel] [bit] NULL,
	[DocumentSentToUsAddress] [bit] NULL,
	[DocumentSentToUsConsulate] [bit] NULL,
	[ConsulateAddressCity] [nvarchar](1000) NULL,
	[ConsulateAddressCountry] [nvarchar](1000) NULL,
	[NameOfDHS] [nvarchar](1000) NULL,
	[DHSOffice] [bit] NULL,
	[DHSOfficeAddressCity] [nvarchar](1000) NULL,
	[DHSOfficeAddressCountry] [nvarchar](1000) NULL,
	[AddressPart2] [bit] NULL,
	[AddressPart3] [bit] NULL,
	[AddressApt] [bit] NULL,
	[AddressFlr] [bit] NULL,
	[AddressSte] [bit] NULL,
	[AddressNumber] [nvarchar](1000) NULL,
	[AddressStreet] [nvarchar](1000) NULL,
	[AddressAddressCity] [nvarchar](1000) NULL,
	[AddressAddressState] [nvarchar](1000) NULL,
	[AddressAddressZipCode] [nvarchar](1000) NULL,
	[AddressAddressPostalCode] [nvarchar](1000) NULL,
	[AddressAddressCountry] [nvarchar](1000) NULL,
	[AddressPhoneNumber] [nvarchar](1000) NULL,
	[AddressPhoneNumber1] [nvarchar](1000) NULL,
	[AddressPhoneNumber2] [nvarchar](1000) NULL,
	[AddressPhoneNumber3] [nvarchar](1000) NULL,
	[AddressPhoneNumber4] [nvarchar](1000) NULL,
	[AddressPhoneNumber5] [nvarchar](1000) NULL,
	[AddressPhoneNumber6] [nvarchar](1000) NULL,
	[AddressPhoneNumber7] [nvarchar](1000) NULL,
	[AddressPhoneNumber8] [nvarchar](1000) NULL,
	[AddressPhoneNumber9] [nvarchar](1000) NULL,
	[AddressPhoneNumber10] [nvarchar](1000) NULL,
	[PreparerExtension] [nvarchar](1000) NULL,
	[TimeOutsideLessThan6M] [bit] NULL,
	[TimeOutsideLessThan1Y] [bit] NULL,
	[TimeOutsideLessThan2Y] [bit] NULL,
	[TimeOutsideLessThan3Y] [bit] NULL,
	[TimeOutsideLessThan4Y] [bit] NULL,
	[TimeOutsideMoreThan4Y] [bit] NULL,
	[TaxFillYes] [bit] NULL,
	[TaxFillNo] [bit] NULL,
	[CountryFrom] [nvarchar](1000) NULL,
	[AdvanceParoleTripOne] [bit] NULL,
	[AdvanceParoleTripMore] [bit] NULL,
	[AdvanceParoleDHSCity] [nvarchar](1000) NULL,
	[AdvanceParoleDHSCountry] [nvarchar](1000) NULL,
	[AdvanceParoleDHSAddress] [bit] NULL,
	[AdvanceParoleHomeAddress] [bit] NULL,
	[AdvanceParoleInCareOfName] [nvarchar](1000) NULL,
	[AdvanceParoleAddressStreet] [nvarchar](1000) NULL,
	[AdvanceParoleAddressApt] [bit] NULL,
	[AdvanceParoleAddressSte] [bit] NULL,
	[AdvanceParoleAddressFlr] [bit] NULL,
	[AdvanceParoleAddressNumber] [nvarchar](1000) NULL,
	[AdvanceParoleAddressCity] [nvarchar](1000) NULL,
	[AdvanceParoleAddressState] [nvarchar](1000) NULL,
	[AdvanceParoleAddressNumberZipCode] [nvarchar](1000) NULL,
	[AdvanceParoleAddressPostalCode] [nvarchar](1000) NULL,
	[AdvanceParoleAddressProvince] [nvarchar](1000) NULL,
	[AdvanceParoleAddressCountry] [nvarchar](1000) NULL,
	[AdvanceParolePhoneNumber] [nvarchar](1000) NULL,
	[AdvanceParolePhoneNumber1] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber2] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber3] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber4] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber5] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber6] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber7] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber8] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber9] [nvarchar](1) NULL,
	[AdvanceParolePhoneNumber10] [nvarchar](1) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_FormTravelDocument] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersistedGrants]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[SiteContent]    Script Date: 5/25/2022 8:57:47 PM ******/
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
/****** Object:  Table [dbo].[Sponsor]    Script Date: 5/25/2022 8:57:47 PM ******/
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
ALTER TABLE [dbo].[FormTravelDocument] ADD  CONSTRAINT [DF_FormTravelDocument_Deleted]  DEFAULT ((0)) FOR [Deleted]
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
