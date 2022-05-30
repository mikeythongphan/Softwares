CREATE TABLE [dbo].[Account] (
    [Id]                BIGINT          IDENTITY (1, 1) NOT NULL,
    [AspNetUserId]      NVARCHAR (450)  NULL,
    [FirstName]         NVARCHAR (100)  NULL,
    [LastName]          NVARCHAR (100)  NULL,
    [Address]           NVARCHAR (100)  NULL,
    [City]              NVARCHAR (100)  NULL,
    [StateProvince]     NVARCHAR (2)    NULL,
    [PostalCode]        NVARCHAR (10)   NULL,
    [PhoneNumber]       NVARCHAR (20)   NULL,
    [Email]             NVARCHAR (256)  NULL,
    [FirebaseChatToken] NVARCHAR (1000) NULL,
    [Deleted]           BIT             CONSTRAINT [DF_Account_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED ([Id] ASC)
);

