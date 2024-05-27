USE [TALENT]
GO
/****** Object:  User [auth_talentmgt]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE USER [auth_talentmgt] FOR LOGIN [auth_talentmgt] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [CMSDEV]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE USER [CMSDEV] FOR LOGIN [CMSDEV] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [GCSMI]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE USER [GCSMI] FOR LOGIN [GCSMI] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [usr_bi_team]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE USER [usr_bi_team] FOR LOGIN [usr_bi_team] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [VACGROUP\thong.phan.duy]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE USER [VACGROUP\thong.phan.duy] FOR LOGIN [VACGROUP\thong.phan.duy] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [auth_talentmgt]
GO
ALTER ROLE [db_datareader] ADD MEMBER [auth_talentmgt]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [auth_talentmgt]
GO
ALTER ROLE [db_owner] ADD MEMBER [CMSDEV]
GO
ALTER ROLE [db_datareader] ADD MEMBER [GCSMI]
GO
ALTER ROLE [db_owner] ADD MEMBER [usr_bi_team]
GO
ALTER ROLE [db_datareader] ADD MEMBER [VACGROUP\thong.phan.duy]
GO
/****** Object:  Schema [HangFire]    Script Date: 5/27/2024 9:14:42 AM ******/
CREATE SCHEMA [HangFire]
GO
/****** Object:  Table [dbo].[talent_booking]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_booking](
	[id] [uniqueidentifier] NOT NULL,
	[root_booking_id] [uniqueidentifier] NULL,
	[booking_code] [nvarchar](max) NOT NULL,
	[booking_code_reference] [nvarchar](max) NOT NULL,
	[start_date] [datetime2](7) NOT NULL,
	[end_date] [datetime2](7) NOT NULL,
	[content_consolidate_id] [varchar](255) NOT NULL,
	[location_id] [int] NOT NULL,
	[total_budget] [money] NOT NULL,
	[shooting_plan_id] [uniqueidentifier] NOT NULL,
	[numericalorder_year] [int] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[step_code] [nvarchar](100) NULL,
	[status_booking_id] [int] NOT NULL,
	[is_additional_booking] [bit] NOT NULL,
	[is_approve_booking] [bit] NOT NULL,
	[note_booking] [nvarchar](max) NULL,
	[in_charge_by] [nvarchar](100) NULL,
	[in_charge_update_time] [datetime2](7) NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
	[is_active] [bit] NOT NULL,
 CONSTRAINT [PK__talent_b__3213E83F55F05DF8] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_booking_detail]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_booking_detail](
	[id] [uniqueidentifier] NOT NULL,
	[booking_id] [uniqueidentifier] NOT NULL,
	[talent_id] [int] NOT NULL,
	[role_program_id] [int] NOT NULL,
	[location_id] [int] NOT NULL,
	[scope_of_work] [nvarchar](max) NULL,
	[unit_id] [int] NOT NULL,
	[unit_price] [money] NOT NULL,
	[quantity] [int] NOT NULL,
	[amount_non_vat] [money] NOT NULL,
	[amount_vat] [money] NOT NULL,
	[talent_tax_id] [int] NOT NULL,
	[amount_tax] [money] NOT NULL,
	[budget_non_vat] [money] NOT NULL,
	[budget_vat] [money] NOT NULL,
	[step_code] [nvarchar](100) NOT NULL,
	[is_approve_talent] [bit] NULL,
	[note_booking_talent] [nvarchar](max) NULL,
	[manager_contact_info_id] [int] NULL,
	[unit_price_deal] [money] NULL,
	[amount_deal_non_vat] [money] NULL,
	[amount_deal_vat] [money] NULL,
	[is_approve_booking] [bit] NULL,
	[in_charge_by] [nvarchar](100) NULL,
	[in_charge_update_time] [datetime2](7) NULL,
	[status_booking_id] [int] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_b__3213E83FC3594608] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[v_booking_status]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_booking_status] AS SELECT
		DISTINCT
		a.id AS booking_id,
		COALESCE(b.step_code, 1) AS step_code,
		CASE WHEN b.id IS NULL THEN 1 
					WHEN b.id IS NOT NULL THEN
						CASE 	WHEN b.is_approve_booking = 0 THEN 6
									WHEN b.step_code = 1 THEN 2
									WHEN b.step_code = 2 THEN 3
									WHEN b.step_code = 3 THEN 4
									WHEN b.step_code = 4 THEN 5
									WHEN b.step_code = 5 THEN 7
									END								
										END status_booking_id,
		c.name AS status_booking_name
FROM 
	[TALENT].[dbo].[talent_booking] a
LEFT JOIN
	[TALENT].[dbo].[talent_booking_detail] b
	ON a.id = b.booking_id
	AND b.is_active = 1
	AND b.is_deleted = 0
LEFT JOIN
	[GCS_CATEGORY].[dbo].[cate_status_booking] c
	ON CASE WHEN b.id IS NULL THEN 1 
					WHEN b.id IS NOT NULL THEN
						CASE 	WHEN b.is_approve_booking = 0 THEN 6
									WHEN b.step_code = 1 THEN 2
									WHEN b.step_code = 2 THEN 3
									WHEN b.step_code = 3 THEN 4
									WHEN b.step_code = 4 THEN 5
									WHEN b.step_code = 5 THEN 7
									END								
										END = c.id
	AND c.is_active = 1
	AND c.is_deleted = 0
WHERE
	a.is_active = 1
	AND a.is_deleted = 0
GO
/****** Object:  Table [dbo].[talent_stagename]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_stagename](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[type_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_s__3213E83FFAC44A04] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_marketplace]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_marketplace](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[marketplace_id] [int] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_occupation]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_occupation](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[occupation_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_language]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_language](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[language_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_link_img]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_link_img](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[url] [nvarchar](max) NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_info]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_info](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code] [varchar](500) NULL,
	[code_reference] [varchar](500) NULL,
	[name] [nvarchar](500) NULL,
	[avatar] [nvarchar](max) NULL,
	[ranking_id] [int] NULL,
	[sex_id] [int] NULL,
	[day_of_birth] [datetime2](7) NULL,
	[country_of_origin_id] [int] NULL,
	[province_of_origin_id] [int] NULL,
	[height] [float] NULL,
	[weight] [float] NULL,
	[email] [nvarchar](500) NULL,
	[phone] [nvarchar](500) NULL,
	[tax_code] [nvarchar](500) NULL,
	[marital_status_id] [int] NULL,
	[ethnie_id] [int] NULL,
	[nationality_id] [int] NULL,
	[address] [nvarchar](max) NULL,
	[country_id] [int] NULL,
	[province_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[place_of_residence] [nvarchar](max) NULL,
	[country_of_residence_id] [int] NULL,
	[province_of_residence_id] [int] NULL,
	[district_of_residence_id] [int] NULL,
	[ward_of_residence_id] [int] NULL,
	[numericalorder_year] [int] NULL,
	[note] [nvarchar](max) NULL,
	[is_mgmt] [bit] NULL,
	[is_deleted] [bit] NULL,
	[is_active] [bit] NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_i__3213E83F79932E1D] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[black_list]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[black_list](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[proposed_opcos_id] [int] NOT NULL,
	[relationship_with_group_id] [int] NULL,
	[relationship_with_proposed_opcos_id] [int] NULL,
	[transaction_type_id] [int] NULL,
	[asses_risk_id] [int] NULL,
	[sanction_transaction_type_id] [int] NULL,
	[limited_level_id] [int] NULL,
	[sanction_id] [int] NULL,
	[reasons] [nvarchar](max) NULL,
	[start_date] [datetime2](7) NOT NULL,
	[end_date] [datetime2](7) NULL,
	[note] [nvarchar](max) NULL,
	[is_approve] [bit] NOT NULL,
	[bom_approval_by] [nvarchar](max) NULL,
	[md_approval_by] [nvarchar](max) NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__black_li__3213E83FF8703F52] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_religion]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_religion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[religion_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[v_talent_info]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_talent_info] AS WITH total_booking AS
(
SELECT
			a.talent_id,
			SUM(a.quantity) AS total_booking
FROM 
			[TALENT].[dbo].[talent_booking_detail] a WITH (NOLOCK)
LEFT JOIN
			[TALENT].[dbo].[talent_booking] b WITH (NOLOCK)
			ON a.booking_id = b.id
			AND b.is_active = 1
			AND b.is_deleted = 0
LEFT JOIN
			[GCS_CATEGORY].[dbo].[cate_status_booking] c WITH (NOLOCK)
			ON b.status_booking_id = c.id
			AND c.is_active = 1
			AND c.is_deleted = 0
WHERE 
		YEAR(b.start_date) = YEAR(GETDATE())
		AND c.name= N'Thành công'
		AND a.is_active = 1
		AND a.is_deleted = 0
GROUP BY
		a.talent_id
)
, name AS
(
SELECT
		a.talent_id,
		a.name,
		a.type_id,
		b.code,
		b.name AS type_name
FROM
		[TALENT].[dbo].[talent_stagename] a WITH (NOLOCK)
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_type] b WITH (NOLOCK)
		ON a.type_id = b.id
		AND b.is_active = 1
		AND b.is_deleted = 0
WHERE
		a.is_active = 1
		AND a.is_deleted = 0
)
SELECT
			a.id,
			a.avatar,
			f.url,
			a.code,
			a.code_reference,
			a.name AS talent_info_name,
			b.name AS stage_name,
			c.name AS name_en,
			d.name AS other_name,
			e.name AS nick_name,
			a.day_of_birth,
			a.country_of_origin_id,
			ae.name AS country_of_origin_name,
			a.province_of_origin_id,
			af.name AS province_of_origin_name,
			a.sex_id,
			g.name AS sex_name,
			a.ethnie_id,
			h.name AS ethnie_name,
			a.nationality_id,
			i.name AS nation_name,
			ag.religion_id,
			k.name as religion_name,
			a.address AS address_line,
			a.country_id AS country_line_id,
			j.name AS country_line_name,
			a.province_id AS province_line_id,
			l.name AS province_line_name,
			a.district_id AS district_line_id,
			m.name AS district_line_name,
			a.ward_id AS ward_line_id,
			n.name AS ward_line_name,
			a.place_of_residence AS address_residence,
			a.country_of_residence_id,
			aa.name AS country_residence_name,
			a.province_of_residence_id,
			ab.name AS province_residence_name,
			a.district_of_residence_id,
			ac.name AS district_residence_name,
			a.ward_of_residence_id,
			ad.name AS ward_residence_name,
			a.phone,
			a.email,
			a.tax_code,
			a.height,
			a.weight,
			a.marital_status_id,
			o.name AS marital_status_name,
			p.language_id,
			q.name AS lauguage_name,
			u.occupation_id,
			v.name AS occupation_name,
			a.ranking_id,
			r.name AS ranking_name,
			s.marketplace_id,
			t.name AS marketplace_name,
			w.total_booking,
			y.is_approve AS black_list_is_approve,
			y.reasons AS black_list_reasons,
			a.note
			
FROM
		[TALENT].[dbo].[talent_info] a WITH (NOLOCK)
----------------STAGE NAME------------------
LEFT JOIN
		name b 
		ON a.id = b.talent_id
		AND b.code = 6
----------------- NAME EN-------------------
LEFT JOIN
		name c 
		ON a.id = c.talent_id
		AND c.code = 8
-----------------OTHER NAME-------------------
LEFT JOIN
		name d
		ON a.id = d.talent_id
		AND d.code = 9
-----------------NICK NAME-------------------
LEFT JOIN
		name e
		ON a.id = e.talent_id
		AND e.code = 7
-----------------LINK IMGES-------------------
LEFT JOIN
		[TALENT].[dbo].[talent_link_img] f WITH (NOLOCK)
		ON a.id = f.talent_id
		AND f.is_active = 1
		AND f.is_deleted = 0
----------------SEX---------------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_sex] g WITH (NOLOCK)
		ON a.sex_id = g.id
		AND g.is_active = 1
----------------ETHNIE------------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_ethnie] h WITH (NOLOCK)
		ON a.ethnie_id = h.id
		AND h.is_active = 1
		AND h.is_deleted = 0
------------------NAIONALITY------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] i WITH (NOLOCK)
		ON a.nationality_id = i.id
		AND i.is_active = 1
------------------COUNTRY--------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] j WITH (NOLOCK)
		ON a.country_id = j.id
		AND j.is_active = 1
-------------------RELIGION------------------
LEFT JOIN
		[TALENT].[dbo].[talent_religion] ag WITH (NOLOCK)
		ON a.id = ag.talent_id
		AND ag.is_active = 1
		AND ag.is_deleted = 0
		
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_religion] k WITH (NOLOCK)
		ON ag.religion_id = k.id
		AND k.is_active = 1
		AND k.is_deleted = 0
-------------------PROVINCE-----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_province] l WITH (NOLOCK)
		ON a.province_id = l.id
		AND l.is_active = 1
-------------------DISTRICT----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_district] m WITH (NOLOCK)
		ON a.district_id = m.id
		AND m.is_active = 1
-----------------WARD-------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_ward] n WITH (NOLOCK)
		ON a.ward_id = n.id
		AND n.is_active = 1
-----------------MARITAL STATUS-----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_marital_status] o WITH (NOLOCK)
		ON a.marital_status_id = o.id
		AND o.is_active = 1
		AND o.is_deleted = 0
----------------LANGUAGE------------------------
LEFT JOIN
		[TALENT].[dbo].[talent_language] p WITH (NOLOCK)
		ON a.id = p.talent_id
		AND p.is_active = 1
		AND p.is_deleted = 0
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_gcm_language] q WITH (NOLOCK)
		ON p.language_id = q.id
		AND q.is_active = 1
-------------------RANKING-------------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_ranking] r WITH (NOLOCK)
		ON a.ranking_id = r.id
		AND r.is_active = 1
		
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_type] ah WITH (NOLOCK)
		ON r.type_id = ah.id
		AND ah.code = 11
		AND ah.is_active = 1
		AND ah.is_deleted = 0
-------------------MARKETPLACE---------------------
LEFT JOIN
		[TALENT].[dbo].[talent_marketplace] s WITH (NOLOCK)
		ON a.id = s.talent_id
		AND s.is_active = 1
		AND s.is_deleted = 0
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_marketplace] t WITH (NOLOCK)
		ON s.marketplace_id = t.id
		AND t.is_active = 1
		AND t.is_deleted = 0
-----------------OCCUPATION----------------------
LEFT JOIN
		[TALENT].[dbo].[talent_occupation] u WITH (NOLOCK)
		ON a.id = u.talent_id
		AND u.is_active = 1
		AND u.is_deleted = 0
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_occupation] v WITH (NOLOCK)
		ON u.occupation_id = v.id
		AND v.is_active = 1
		AND v.is_deleted = 0
-----------------TOTAL BOOKING -----------------
LEFT JOIN
		total_booking w
		ON a.id = w.talent_id
-----------------BLACK LIST--------------------
LEFT JOIN
		[TALENT].[dbo].[black_list] y WITH (NOLOCK)
		ON a.id = y.talent_id
		AND y.is_approve = 1
		AND CAST(GETDATE() AS DATE) BETWEEN CAST(y.start_date AS DATE) AND CAST(y.end_date AS DATE)
		AND y.is_active = 1
		AND y.is_deleted = 0
		
-----------------ADDRESS RESIDENCE----------------------

------------------COUNTRY--------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] aa WITH (NOLOCK)
		ON a.country_of_residence_id = aa.id
		AND aa.is_active = 1

-------------------PROVINCE-----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_province] ab WITH (NOLOCK)
		ON a.province_of_residence_id = ab.id
		AND ab.is_active = 1
-------------------DISTRICT----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_district] ac WITH (NOLOCK)
		ON a.district_of_residence_id = ac.id
		AND ac.is_active = 1
		-----------------WARD-------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_ward] ad WITH (NOLOCK)
		ON a.ward_of_residence_id = ad.id
		AND ad.is_active = 1

		
		
------------- ADDRESS ORIGIN ------------------------
-----------------COUNTRY--------------------

LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] ae WITH (NOLOCK)
		ON a.country_of_origin_id = ae.id
		AND ae.is_active = 1


-----------------PROVINCE--------------------

LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] af WITH (NOLOCK)
		ON a.province_of_origin_id = af.id
		AND af.is_active = 1



WHERE

		a.is_active = 1
		AND a.is_deleted = 0
GO
/****** Object:  Table [dbo].[social_info]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[social_info](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[channel_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[social_performance]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[social_performance](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[channel_id_social] [nvarchar](max) NOT NULL,
	[subscribers_followers] [bigint] NOT NULL,
	[likes] [bigint] NULL,
	[post_likes] [bigint] NULL,
	[post_comments] [bigint] NULL,
	[post_shares] [bigint] NULL,
	[video_uploads] [bigint] NULL,
	[video_views] [bigint] NULL,
	[date] [datetime2](7) NOT NULL,
	[run_date] [datetime2](7) NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__social_p__3213E83FA1A1AFDE] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[v_social_network]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_social_network] AS WITH channel_performance AS
(
SELECT
			t.channel_id_social,
			t.subscribers_followers,
			t.likes,
			row_number() OVER (PARTITION BY channel_id_social ORDER BY [date] DESC) last_day
FROM
		[TALENT].[dbo].[social_performance] t WITH (NOLOCK)
)
SELECT
		a.id, 
		a.channel_id,
		e.id AS platform_id,
		e.name AS platform_name,
		b.channel_id_social,
		c.code AS channel_code,
		b.channel_name_social,
		b.url AS channel_url,
		f.subscribers_followers,
		f.likes,
		a.talent_id,
		g.name AS talent_name,
		g.code AS talent_code
		
		
FROM
		[TALENT].[dbo].[social_info] a WITH (NOLOCK)
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_channel]  b WITH (NOLOCK)
		ON a.channel_id = b.id
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_channel_general] c WITH (NOLOCK)
		ON b.channel_general_id = c.id
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_platform_channel_general] d WITH (NOLOCK)
		ON c.id = d.channel_general_id
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_platform] e WITH (NOLOCK)
		ON d.platform_id = e.id
LEFT JOIN
		channel_performance f
		ON b.channel_id_social = f.channel_id_social
		AND f.last_day = 1
LEFT JOIN
		[TALENT].[dbo].[talent_info] g WITH (NOLOCK)
		ON a.talent_id = g.id

WHERE
		a.is_active = 1
		AND a.is_deleted = 0
GO
/****** Object:  View [dbo].[v_booking_history]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_booking_history] AS SELECT

			a.id AS booking_id,
			a.content_consolidate_id,
			b.name AS content_name,
			n.talent_id,
			o.name AS talent_name,
			o.code AS talent_code,
			a.shooting_plan_id,
			c.[ShootingSession] AS shooting_session,
			c.[TotalEpisode] AS total_episode,
			c.[FirstShootingDate] AS first_shooting_date,
			c.[EndShootingDate] AS end_shooting_date,
			e.id AS channel_id,
			e.name AS channel_name,
			h.id AS platform_id,
			h.name AS platform_name,
			c.[Producer] AS producer,
			i.id AS location_id,
			i.name AS location_name,
			i.address AS location_address,
			i.country_id,
			j.name AS country_name,
			i.province_id,
			k.name AS province_name,
			i.district_id,
			l.name AS district_name,
			i.ward_id,
			m.name AS ward_name,
			n.role_program_id,
			p.name AS role_program_name
			
			
			
			
FROM
		[TALENT].[dbo].[talent_booking] a WITH (NOLOCK)
		
------------------------CONTENT CONSOLIDATE------------------		

LEFT JOIN
		[GCS_CONTENT].[dbo].[ct_content_consolidate] b WITH (NOLOCK)
		ON a.content_consolidate_id = b.id
		
-------------------------SHOOTING PLAN-----------------------

LEFT JOIN
		[PMS_GCS].[dbo].[shooting_plan] c WITH (NOLOCK)
		ON a.shooting_plan_id = b.id
		
		
----------------------CHANNEL & PLATFORM-----------------------
LEFT JOIN
		[PMS_GCS].[dbo].[airing_plan] d WITH (NOLOCK)
		ON b.id = d.[ContentId]

LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_channel] e WITH (NOLOCK)
		ON d.[ChannelId] = e.id

LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_channel_general] f WITH (NOLOCK)
		ON d.[ChannelId] = f.id

LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_platform_channel_general] g
		ON  f.id  = g.channel_general_id


LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_platform] h WITH (NOLOCK)
		ON  g.platform_id  = h.id

---------------------LOCATION-------------------------------
LEFT JOIN 
		[GCS_CATEGORY].[dbo].[cate_location] i WITH (NOLOCK)
		ON  a.location_id  = i.id

------------------COUNTRY--------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_nation] j  WITH (NOLOCK)
		ON i.country_id = j.id
-------------------PROVINCE-----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_province] k WITH (NOLOCK)
		ON i.province_id = k.id
-------------------DISTRICT----------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_district] l WITH (NOLOCK)
		ON i.district_id = l.id
-----------------WARD-------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_ward] m WITH (NOLOCK)
		ON i.ward_id = m.id
------------------TALENT INFO---------------
LEFT JOIN
		[TALENT].[dbo].[talent_booking_detail] n WITH (NOLOCK)
		ON a.id = n.booking_id
LEFT JOIN
		[TALENT].[dbo].[talent_info] o WITH (NOLOCK)
		ON n.talent_id = o.id
----------------ROLE-----------------------
LEFT JOIN
		[GCS_CATEGORY].[dbo].[cate_gcm_role_program] p
		ON n.role_program_id = p.id
GO
/****** Object:  Table [dbo].[booking_limit]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[booking_limit](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[description] [nvarchar](max) NULL,
	[year] [int] NOT NULL,
	[unit_price] [money] NULL,
	[number_of_booking] [int] NOT NULL,
	[total_amount] [money] NOT NULL,
	[note] [nvarchar](max) NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[v_booking_limit]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_booking_limit] AS WITH detail_booking_succeed AS
(
SELECT
			a.talent_id,
			YEAR(b.start_date) year_booked,
			SUM(a.quantity) AS total_booked,
			SUM(a.amount_deal_non_vat) AS total_amount_booked
FROM 
			[TALENT].[dbo].[talent_booking_detail] a WITH (NOLOCK)
LEFT JOIN
			[TALENT].[dbo].[talent_booking] b WITH (NOLOCK)
			ON a.booking_id = b.id
LEFT JOIN
			[GCS_CATEGORY].[dbo].[cate_status_booking] c WITH (NOLOCK)
			ON b.status_booking_id = c.id
WHERE c.name= N'Thành công'
GROUP BY
		a.talent_id,
		YEAR(b.start_date)
)
SELECT
		a.id, 
		a.[year],
		a.talent_id,
		c.name AS talent_name,
		c.code AS talent_code,
		a.number_of_booking,
		b.total_booked,
		COALESCE(a.number_of_booking,0) - COALESCE(b.total_booked,0) AS remaning_booking,
		a.total_amount,
		b.total_amount_booked,
		COALESCE(a.total_amount,0) - COALESCE(b.total_amount_booked,0) AS remaning_amount_booking,
		a.note
		
FROM
		[TALENT].[dbo].[booking_limit] a WITH (NOLOCK)
LEFT JOIN
		detail_booking_succeed b WITH (NOLOCK)
		ON a.talent_id = b.talent_id
		AND a.[year] = b.year_booked
LEFT JOIN
		[TALENT].[dbo].[talent_info] c WITH (NOLOCK)
		ON a.talent_id = c.id
GO
/****** Object:  Table [dbo].[bi_import_data]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bi_import_data](
	[created_time] [datetime] NULL,
	[created_by] [nvarchar](4000) NULL,
	[talent_code] [nvarchar](4000) NULL,
	[talent_name] [nvarchar](4000) NULL,
	[full_name] [nvarchar](4000) NULL,
	[level] [nvarchar](4000) NULL,
	[gender] [nvarchar](4000) NULL,
	[birthday] [date] NULL,
	[job_title] [nvarchar](4000) NULL,
	[award] [nvarchar](4000) NULL,
	[street] [nvarchar](4000) NULL,
	[ward] [nvarchar](4000) NULL,
	[district] [nvarchar](4000) NULL,
	[province] [nvarchar](4000) NULL,
	[region] [nvarchar](4000) NULL,
	[talent_country] [nvarchar](4000) NULL,
	[agent] [nvarchar](4000) NULL,
	[height] [nvarchar](4000) NULL,
	[weight] [bigint] NULL,
	[size_shoes] [nvarchar](4000) NULL,
	[phone] [nvarchar](4000) NULL,
	[urls] [nvarchar](4000) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[booking_detail_shift]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[booking_detail_shift](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[booking_detail_id] [uniqueidentifier] NOT NULL,
	[shift_id] [int] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [varchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [varchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__booking___3213E83F0F5E5F28] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[booking_shift]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[booking_shift](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[booking_id] [uniqueidentifier] NOT NULL,
	[shift_id] [uniqueidentifier] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__booking___3213E83FB3C11731] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[citizen_identify_card]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[citizen_identify_card](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[identity_type_id] [int] NOT NULL,
	[identify_number] [nvarchar](200) NOT NULL,
	[date_of_issue] [datetime2](7) NOT NULL,
	[issuing_authority] [nvarchar](max) NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__citizen___3213E83FA6DBC0C2] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[manager_contact_info]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[manager_contact_info](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[contact_id] [int] NOT NULL,
	[role_id] [int] NOT NULL,
	[relationship_id] [int] NOT NULL,
	[country_calling_code_id] [int] NOT NULL,
	[phone] [nvarchar](500) NOT NULL,
	[start_date] [datetime2](7) NOT NULL,
	[end_date] [datetime2](7) NULL,
	[note] [nvarchar](max) NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__manager___3213E83F8D25BCDB] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rate_card]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rate_card](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ranking_id] [int] NOT NULL,
	[unit_price] [money] NOT NULL,
	[start_date] [datetime2](7) NOT NULL,
	[end_date] [datetime2](7) NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [varchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [varchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[session_history]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[session_history](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[entity] [varchar](200) NULL,
	[action] [varchar](100) NULL,
	[data_old] [nvarchar](max) NULL,
	[data] [nvarchar](max) NULL,
	[result] [bit] NOT NULL,
	[entity_id] [nvarchar](max) NULL,
	[create_by] [varchar](200) NOT NULL,
	[create_time] [datetime2](7) NOT NULL,
 CONSTRAINT [PK__session___3213E83F6A59A17A] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_agency]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_agency](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[talent_agency_id] [int] NOT NULL,
	[start_date] [datetime2](7) NOT NULL,
	[end_date] [datetime2](7) NULL,
	[is_deleted] [bit] NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_a__3213E83FA29F455A] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_bank]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_bank](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[bank_id] [int] NOT NULL,
	[account_name] [nvarchar](max) NOT NULL,
	[account_code] [nvarchar](500) NOT NULL,
	[note] [nvarchar](max) NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_booking_detail_history]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_booking_detail_history](
	[id] [uniqueidentifier] NOT NULL,
	[booking_id] [uniqueidentifier] NOT NULL,
	[talent_id] [int] NOT NULL,
	[role_grogram_id] [int] NOT NULL,
	[location_id] [int] NOT NULL,
	[scope_of_work] [nvarchar](max) NULL,
	[unit_id] [int] NOT NULL,
	[unit_price] [money] NOT NULL,
	[quantity] [int] NOT NULL,
	[amount_non_vat] [money] NOT NULL,
	[amount_vat] [money] NOT NULL,
	[talent_tax_id] [int] NOT NULL,
	[amount_tax] [money] NOT NULL,
	[budget_non_vat] [money] NOT NULL,
	[budget_vat] [money] NOT NULL,
	[step_code] [nvarchar](100) NOT NULL,
	[is_approve_talent] [bit] NULL,
	[note_booking_talent] [nvarchar](max) NULL,
	[manager_contact_info_id] [int] NULL,
	[unit_price_deal] [money] NULL,
	[amount_deal_non_vat] [money] NULL,
	[amount_deal_vat] [money] NULL,
	[is_approve_booking] [bit] NULL,
	[note_booking] [nvarchar](max) NULL,
	[in_charge_by] [nvarchar](100) NULL,
	[in_charge_update_time] [datetime2](7) NULL,
	[status_booking_id] [int] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_info_20240508]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_info_20240508](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code] [varchar](500) NOT NULL,
	[code_reference] [varchar](500) NOT NULL,
	[name] [nvarchar](500) NOT NULL,
	[avatar] [nvarchar](max) NULL,
	[ranking_id] [int] NULL,
	[sex_id] [int] NULL,
	[day_of_birth] [datetime2](7) NULL,
	[country_of_origin_id] [int] NOT NULL,
	[province_of_origin_id] [int] NOT NULL,
	[height] [float] NULL,
	[weight] [float] NULL,
	[email] [nvarchar](500) NULL,
	[phone] [nvarchar](500) NULL,
	[tax_code] [nvarchar](500) NULL,
	[marital_status_id] [int] NULL,
	[ethnie_id] [int] NULL,
	[nationality_id] [int] NOT NULL,
	[address] [nvarchar](max) NULL,
	[country_id] [int] NULL,
	[province_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[place_of_residence] [nvarchar](max) NULL,
	[country_of_residence_id] [int] NULL,
	[province_of_residence_id] [int] NULL,
	[district_of_residence_id] [int] NULL,
	[ward_of_residence_id] [int] NULL,
	[numericalorder_year] [int] NOT NULL,
	[note] [nvarchar](max) NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_i__3213E83F79932E1D_copy1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_info_20240513]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_info_20240513](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code] [varchar](500) NOT NULL,
	[code_reference] [varchar](500) NOT NULL,
	[name] [nvarchar](500) NOT NULL,
	[avatar] [nvarchar](max) NULL,
	[ranking_id] [int] NULL,
	[sex_id] [int] NULL,
	[day_of_birth] [datetime2](7) NULL,
	[country_of_origin_id] [int] NOT NULL,
	[province_of_origin_id] [int] NOT NULL,
	[height] [float] NULL,
	[weight] [float] NULL,
	[email] [nvarchar](500) NULL,
	[phone] [nvarchar](500) NULL,
	[tax_code] [nvarchar](500) NULL,
	[marital_status_id] [int] NULL,
	[ethnie_id] [int] NULL,
	[nationality_id] [int] NOT NULL,
	[address] [nvarchar](max) NULL,
	[country_id] [int] NULL,
	[province_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[place_of_residence] [nvarchar](max) NULL,
	[country_of_residence_id] [int] NULL,
	[province_of_residence_id] [int] NULL,
	[district_of_residence_id] [int] NULL,
	[ward_of_residence_id] [int] NULL,
	[numericalorder_year] [int] NOT NULL,
	[note] [nvarchar](max) NULL,
	[is_deleted] [bit] NOT NULL,
	[is_active] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_i__3213E83F79932E1D_copy2] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_role]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[role_id] [int] NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[created_by] [nvarchar](100) NULL,
	[created_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_stagename_20240508]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_stagename_20240508](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[type] [nvarchar](500) NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
 CONSTRAINT [PK__talent_s__3213E83FFAC44A04_copy1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[talent_tax]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[talent_tax](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[talent_id] [int] NOT NULL,
	[cate_tax_id] [int] NOT NULL,
	[from_date] [datetime2](7) NOT NULL,
	[to_date] [datetime2](7) NULL,
	[is_active] [bit] NOT NULL,
	[is_deleted] [bit] NOT NULL,
	[create_by] [nvarchar](100) NULL,
	[create_time] [datetime2](7) NULL,
	[update_by] [nvarchar](100) NULL,
	[update_time] [datetime2](7) NULL,
	[note] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[AggregatedCounter]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[AggregatedCounter](
	[Key] [nvarchar](100) NOT NULL,
	[Value] [bigint] NOT NULL,
	[ExpireAt] [datetime] NULL,
 CONSTRAINT [PK_HangFire_CounterAggregated] PRIMARY KEY CLUSTERED 
(
	[Key] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Counter]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Counter](
	[Key] [nvarchar](100) NOT NULL,
	[Value] [int] NOT NULL,
	[ExpireAt] [datetime] NULL,
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_HangFire_Counter] PRIMARY KEY CLUSTERED 
(
	[Key] ASC,
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Hash]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Hash](
	[Key] [nvarchar](100) NOT NULL,
	[Field] [nvarchar](100) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[ExpireAt] [datetime2](7) NULL,
 CONSTRAINT [PK_HangFire_Hash] PRIMARY KEY CLUSTERED 
(
	[Key] ASC,
	[Field] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = ON, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Job]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Job](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[StateId] [bigint] NULL,
	[StateName] [nvarchar](20) NULL,
	[InvocationData] [nvarchar](max) NOT NULL,
	[Arguments] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
	[ExpireAt] [datetime] NULL,
 CONSTRAINT [PK_HangFire_Job] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[JobParameter]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[JobParameter](
	[JobId] [bigint] NOT NULL,
	[Name] [nvarchar](40) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_HangFire_JobParameter] PRIMARY KEY CLUSTERED 
(
	[JobId] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[JobQueue]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[JobQueue](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobId] [bigint] NOT NULL,
	[Queue] [nvarchar](50) NOT NULL,
	[FetchedAt] [datetime] NULL,
 CONSTRAINT [PK_HangFire_JobQueue] PRIMARY KEY CLUSTERED 
(
	[Queue] ASC,
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[List]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[List](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Key] [nvarchar](100) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[ExpireAt] [datetime] NULL,
 CONSTRAINT [PK_HangFire_List] PRIMARY KEY CLUSTERED 
(
	[Key] ASC,
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Schema]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Schema](
	[Version] [int] NOT NULL,
 CONSTRAINT [PK_HangFire_Schema] PRIMARY KEY CLUSTERED 
(
	[Version] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Server]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Server](
	[Id] [nvarchar](200) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[LastHeartbeat] [datetime] NOT NULL,
 CONSTRAINT [PK_HangFire_Server] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[Set]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[Set](
	[Key] [nvarchar](100) NOT NULL,
	[Score] [float] NOT NULL,
	[Value] [nvarchar](256) NOT NULL,
	[ExpireAt] [datetime] NULL,
 CONSTRAINT [PK_HangFire_Set] PRIMARY KEY CLUSTERED 
(
	[Key] ASC,
	[Value] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = ON, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [HangFire].[State]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [HangFire].[State](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobId] [bigint] NOT NULL,
	[Name] [nvarchar](20) NOT NULL,
	[Reason] [nvarchar](100) NULL,
	[CreatedAt] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
 CONSTRAINT [PK_HangFire_State] PRIMARY KEY CLUSTERED 
(
	[JobId] ASC,
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [HangFire].[JobParameter]  WITH CHECK ADD  CONSTRAINT [FK_HangFire_JobParameter_Job] FOREIGN KEY([JobId])
REFERENCES [HangFire].[Job] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [HangFire].[JobParameter] CHECK CONSTRAINT [FK_HangFire_JobParameter_Job]
GO
ALTER TABLE [HangFire].[State]  WITH CHECK ADD  CONSTRAINT [FK_HangFire_State_Job] FOREIGN KEY([JobId])
REFERENCES [HangFire].[Job] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [HangFire].[State] CHECK CONSTRAINT [FK_HangFire_State_Job]
GO
/****** Object:  StoredProcedure [dbo].[update_booking_status]    Script Date: 5/27/2024 9:14:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE	PROCEDURE [dbo].[update_booking_status]
	(
		@booking_id nvarchar(max),
		@update_by nvarchar(max)
	)
AS
	DECLARE @parameter2 INT;
	
	DECLARE @sql1 nvarchar(max); 
	DECLARE @sql2 nvarchar(max);

BEGIN

	--SET @parameter1  = '9BAFF9AE-F923-4076-B7B1-5FB591194F62'

	SET @sql1 = 
			'SELECT

				@res = COALESCE(a.status_booking_id, 1)
			FROM
					[TALENT].[dbo].[talent_booking] t
			LEFT JOIN
								(
							SELECT
									t.id,
									t.booking_id,
									t.status_booking_id,
									row_number() OVER (PARTITION BY t.booking_id ORDER BY t.update_time DESC ) last_status
							FROM
									[TALENT].[dbo].[talent_booking_detail] t
							WHERE 
									t.booking_id =' +  ''''+ @booking_id + '''' + '

							)	a
					ON a.booking_id = t.id
					AND last_status = 1
			WHERE
					t.id =' + ''''+ @booking_id + '''' 

			;
	EXEC sys.sp_executesql @sql1, N'@res int out', @parameter2 out;

	SET @sql2 = '
			UPDATE [TALENT].[dbo].[talent_booking]
			SET
 				status_booking_id = ' + CONVERT(varchar(max),@parameter2) + ',
 				update_time = GETDATE(),
 				update_by = ' + ''''+ @update_by + '''' + 
 			'
			WHERE
 				id =' + ''''+ @booking_id + '''' + ';'

	EXEC sys.sp_executesql @sql2;

END;
GO
