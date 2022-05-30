CREATE TABLE [dbo].[AccountVerification] (
    [Id]               BIGINT         IDENTITY (1, 1) NOT NULL,
    [VerificationCode] NVARCHAR (6)   NOT NULL,
    [TargetTypeId]     TINYINT        NOT NULL,
    [Target]           NVARCHAR (100) NOT NULL,
    [ExpiredAt]        DATETIME2 (7)  NULL,
    [Deleted]          BIT            CONSTRAINT [DF_AccountVerification_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_AccountVerification] PRIMARY KEY CLUSTERED ([Id] ASC)
);

