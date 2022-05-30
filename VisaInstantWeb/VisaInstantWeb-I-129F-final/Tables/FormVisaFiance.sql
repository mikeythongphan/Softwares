CREATE TABLE [dbo].[FormTravelDocument] (
    [Id]                               BIGINT          IDENTITY (1, 1) NOT NULL,
    
    
    
    [Deleted]                          BIT             CONSTRAINT [DF_FormTravelDocument_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_FormTravelDocument] PRIMARY KEY CLUSTERED ([Id] ASC)
);

