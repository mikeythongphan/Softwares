SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Language](
	[Id] [int] IDENTITY(1,1) NOT NULL,
    [Code] [nvarchar](1000) NULL,
	[Name] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Language] ADD  CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Language] ADD  CONSTRAINT [DF_Language_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO

CREATE TABLE [dbo].[Keyword](
	[Id] [int] IDENTITY(1,1) NOT NULL,
    [Code] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Keyword] ADD  CONSTRAINT [PK_Keyword] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Keyword] ADD  CONSTRAINT [DF_Keyword_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO

CREATE TABLE [dbo].[Dictionary](
    [Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [int] NOT NULL,
    [Keyword] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Value] [ntext] NULL,
    [Deleted] [bit] NOT NULL
) ON [PRIMARY] 
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Dictionary] ADD  CONSTRAINT [PK_Dictionary] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Dictionary] ADD  CONSTRAINT [DF_Dictionary_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO

ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Language_LanguageId] FOREIGN KEY([LanguageId])
REFERENCES [dbo].[Language] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Language_LanguageId]
GO

ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Keyword_Keyword] FOREIGN KEY([Keyword])
REFERENCES [dbo].[Keyword] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Keyword_Keyword]
GO
