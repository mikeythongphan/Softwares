CREATE TABLE [dbo].[Sponsor] (
    [Id]                BIGINT          IDENTITY (1, 1) NOT NULL,
    [SponsorFirstName]  NVARCHAR (1000) NULL,
    [SponsorMiddleName] NVARCHAR (1000) NULL,
    [SponsorLastName]   NVARCHAR (1000) NULL,
    [Deleted]           BIT             CONSTRAINT [DF_Sponsor_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Sponsor] PRIMARY KEY CLUSTERED ([Id] ASC)
);

