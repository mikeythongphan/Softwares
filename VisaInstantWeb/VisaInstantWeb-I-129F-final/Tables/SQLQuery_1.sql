SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Page](
	[Id] [int] IDENTITY(1,1) NOT NULL,
    [Code] [nvarchar](1000) NULL,
	[Name] [nvarchar](1000) NULL,
	[Deleted] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Page] ADD  CONSTRAINT [PK_Page] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Page] ADD  CONSTRAINT [DF_Page_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO

CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
    [Code] [nvarchar](1000) NULL,
	[Name] [nvarchar](1000) NULL,
    [Default] [bit] NOT NULL,
	[Deleted] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Languages] ADD  CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Languages] ADD  CONSTRAINT [DF_Languages_Default]  DEFAULT ((0)) FOR [Default]
GO
ALTER TABLE [dbo].[Languages] ADD  CONSTRAINT [DF_Languages_Deleted]  DEFAULT ((0)) FOR [Deleted]
GO

CREATE TABLE [dbo].[Dictionary](
    [Id] [int] IDENTITY(1,1) NOT NULL,
	[PageId] [int] NULL,
	[LanguagesId] [int] NULL,
    [Code] [nvarchar](1000) NOT NULL,
	[Name] [nvarchar](1000) NOT NULL,
	[Value] [nvarchar](max) NULL,
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

ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Page_PageId] FOREIGN KEY([PageId])
REFERENCES [dbo].[Page] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Page_PageId]
GO

ALTER TABLE [dbo].[Dictionary]  WITH CHECK ADD  CONSTRAINT [FK_Dictionary_Languages_PageId] FOREIGN KEY([LanguagesId])
REFERENCES [dbo].[Languages] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dictionary] CHECK CONSTRAINT [FK_Dictionary_Languages_PageId]
GO