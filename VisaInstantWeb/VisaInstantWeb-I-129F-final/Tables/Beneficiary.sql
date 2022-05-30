CREATE TABLE [dbo].[Beneficiary] (
    [Id]         BIGINT          IDENTITY (1, 1) NOT NULL,
    [FirstName]  NVARCHAR (1000) NULL,
    [MiddleName] NVARCHAR (1000) NULL,
    [LastName]   NVARCHAR (1000) NULL,
    [Deleted]    BIT             CONSTRAINT [DF_Beneficiary_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Beneficiary] PRIMARY KEY CLUSTERED ([Id] ASC)
);

