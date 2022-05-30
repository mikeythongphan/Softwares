CREATE TABLE [dbo].[SiteContent] (
    [Id]            BIGINT         IDENTITY (1, 1) NOT NULL,
    [ContentTypeId] SMALLINT       NULL,
    [PageName]      VARCHAR (255)  NULL,
    [FieldName]     NVARCHAR (100) NULL,
    [ENUS]          NVARCHAR (MAX) NULL,
    [VN]            NVARCHAR (MAX) NULL,
    [Deleted]       BIT            CONSTRAINT [DF_SiteContent_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_SiteContent] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IDX_SiteContent_FieldName]
    ON [dbo].[SiteContent]([FieldName] ASC);

