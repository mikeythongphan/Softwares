
CREATE TABLE [dbo].[FormTravelDocument] (
    [Id]			       BIGINT          IDENTITY (1, 1) NOT NULL,

PersonalInformation01 :
Họ tên
Giới tính
Nam
Nữ
Tên gọi khác (nếu có)
Ngày sinh
Nơi sinh
Quốc tịch hiện nay
Số CMND
Ngày cấp
Nơi cấp
Số hộ chiếu
Nơi cấp
Ngày cấp
Ngày hết hạn

PersonalInformation02 :
Quốc tịch khác (nếu có)
Số hộ chiếu
Địa chỉ (hộ khẩu)
Địa chỉ hiện tại (liên lạc)
Số ĐT nhà
ĐTDĐ
Email
Ngoài số điện thoại và email đã cung cấp ở trên, quý khách còn sử dụng số điện thoại và email nào khác?
Không
Có
Bạn có sử dụng mạng xã hội không
Không
Có
Nếu có vui long liệt kê thêm
Nếu có nêu tên người dùng

PersonalInformation03 :
Tình trạng hôn nhân
Độc thân
Kết hôn
Góa
Ly hôn
Ly thân
Họ tên chồng/vợ
Ngày sinh
Nơi sinh
Quốc tịch
Địa chỉ
Ngày đăng ký kết hôn
Ngày làm thủ tục ly hôn
Bạn đã từng bị mất hay bị đánh cắp hộ chiếu:
Không
Có
Số hộ chiếu:

TripInformation04 :
Mục đích chuyến đi (du lịch/ thăm thân/ công tác)
Ngày dự định đến Mỹ
Tại thành phố
Ngày dự định rời Mỹ
Tại thành phố
Các địa điểm sẽ tham quan
Địa chỉ ở khi đến Mỹ
Người bảo trợ cho chuyến đi của bạn (người thân, công ty, tổ chức)
Không
Có
Họ tên
Quan hệ với bạn
Địa chỉ
Số điện thoại

TripInformation05 :
Bạn đã từng nhập cảnh Mỹ
Không
Có
Bạn đã từng được lấy dấu vân tay
Không
Có
1. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):
Số visa (nếu biết):
Ngày cấp:
Ngày hết hạn:
Thời gian lưu trú (ngày/tháng/năm):
Từ:
Đến:
2. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):
Số visa (nếu biết):
Ngày cấp:
Ngày hết hạn:
Thời gian lưu trú (ngày/tháng/năm):
Từ:
Đến:
3. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):
Số visa (nếu biết):
Ngày cấp:
Ngày hết hạn:
Thời gian lưu trú (ngày/tháng/năm):
Từ:
Đến:

TripInformation06 :
Bạn đã từng bị từ chối visa, rút đơn xin visa, bị hủy hay thu hồi visa Mỹ
Không
Có
Thời gian
Lý do
Bạn đã từng bị từ chối cho phép nhập cảnh Mỹ
Không
Có
Thời gian
Lý do
Các quốc gia đã từng đến trong 5 năm gần đây
Các ngôn ngữ bạn biết

UsContactInformation07 
Họ tên:
Thuộc tổ chức
Địa chỉ
Số điện thoại:
Email
Quan hệ với đương đơn

FamilyInformation08 
Họ tên cha
Ngày sinh
Địa chỉ hiện tại
Họ tên mẹ
Ngày sinh
Địa chỉ hiện tạ

    [ApplicantFamilyName]              NVARCHAR (1000) NULL,
    [ApplicantGivenName]               NVARCHAR (1000) NULL,
    [ApplicantMiddleName]              NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressStreet]   NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressNumber]   NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressApt]      BIT             NULL,
    [ApplicantPhysicalAddressSte]      BIT             NULL,
    [ApplicantPhysicalAddressFr]       BIT             NULL,
    [ApplicantPhysicalAddressCity]     NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressZipCode]  NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressPostCode] NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressState]    NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressProvince] NVARCHAR (1000) NULL,
    [ApplicantPhysicalAddressCountry]  NVARCHAR (1000) NULL,
    [ApplicantAlienNumber]             NVARCHAR (1000) NULL,
    [ApplicantAlienNumber1]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber2]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber3]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber4]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber5]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber6]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber7]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber9]            NVARCHAR (1000) NULL,
    [ApplicantAlienNumber8]            NVARCHAR (1000) NULL,
    [ApplicantCitizen]                 NVARCHAR (1000) NULL,
    [ApplicantClassOfAdmission]        NVARCHAR (1000) NULL,
    [ApplicantMale]                    BIT             NULL,
    [ApplicantFemale]                  BIT             NULL,
    [ApplicantDateOfBirth]             DATETIME2 (7)   NULL,
    [ApplicantCountryOfBirth]          NVARCHAR (1000) NULL,
    [ApplicantCitizenship]             NVARCHAR (1000) NULL,
    [ApplicantDateOfDepartment]        DATETIME2 (7)   NULL,
    [ApplicantLengthOfTrip]            NVARCHAR (1000) NULL,
    [PreparerGivenName]                NVARCHAR (1000) NULL,
    [PreparerFamilyName]               NVARCHAR (1000) NULL,
    [PreparerBusinessName]             NVARCHAR (1000) NULL,
    [PreparerAddressStreet]            NVARCHAR (1000) NULL,
    [PreparerAddress]                  NVARCHAR (1000) NULL,
    [PreparerAddressSte]               BIT             NULL,
    [PreparerAddressFr]                BIT             NULL,
    [PreparerAddressApt]               BIT             NULL,
    [PreparerAddressCity]              NVARCHAR (1000) NULL,
    [PreparerAddressState]             NVARCHAR (1000) NULL,
    [PreparerAddressZipCode]           NVARCHAR (1000) NULL,
    [PreparerAddressPostalCode]        NVARCHAR (1000) NULL,
    [PreparerAddressProvince]          NVARCHAR (1000) NULL,
    [PreparerAddressCountry]           NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber]             NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber1]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber2]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber3]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber4]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber5]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber6]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber7]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber8]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber9]            NVARCHAR (1000) NULL,
    [ApplicantPhoneNumber10]           NVARCHAR (1000) NULL,
    [PreparerEmail]                    NVARCHAR (1000) NULL,
    [PreparerPhoneNumber]              NVARCHAR (1000) NULL,
    [PreparerPhoneNumber1]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber2]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber3]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber4]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber5]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber6]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber7]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber8]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber9]             NVARCHAR (1000) NULL,
    [PreparerPhoneNumber10]            NVARCHAR (1000) NULL,
    [ApplicantPhone]                   NVARCHAR (1000) NULL,
    [ApplicantPhone1]                  NVARCHAR (1000) NULL,
    [ApplicantPhone2]                  NVARCHAR (1000) NULL,
    [ApplicantPhone3]                  NVARCHAR (1000) NULL,
    [ApplicantPhone4]                  NVARCHAR (1000) NULL,
    [ApplicantPhone5]                  NVARCHAR (1000) NULL,
    [ApplicantPhone6]                  NVARCHAR (1000) NULL,
    [ApplicantPhone7]                  NVARCHAR (1000) NULL,
    [ApplicantPhone8]                  NVARCHAR (1000) NULL,
    [ApplicantPhone9]                  NVARCHAR (1000) NULL,
    [ApplicationTypeTravelDocument]    BIT             NULL,
    [OtherPersonFamilyName]            NVARCHAR (1000) NULL,
    [OtherPersonGivenName]             NVARCHAR (1000) NULL,
    [OtherPersonGMiddleName]           NVARCHAR (1000) NULL,
    [OtherPersonDateOfBirth]           DATETIME2 (7)   NULL,
    [OtherPersonAddressStreet]         NVARCHAR (1000) NULL,
    [OtherPersonApt]                   BIT             NULL,
    [OtherPersonFlr]                   BIT             NULL,
    [OtherPersonSte]                   BIT             NULL,
    [OtherPersonAddressNumber]         NVARCHAR (1000) NULL,
    [OtherPersonAddressCity]           NVARCHAR (1000) NULL,
    [OtherPersonAddressState]          NVARCHAR (1000) NULL,
    [OtherPersonAddressZipCode]        NVARCHAR (1000) NULL,
    [OtherPersonAddressPostalCode]     NVARCHAR (1000) NULL,
    [OtherPersonAddressProvince]       NVARCHAR (1000) NULL,
    [OtherPersonAddressCountry]        NVARCHAR (1000) NULL,
    [OtherPersonRemovalYes]            BIT             NULL,
    [OtherPersonRemovalNo]             BIT             NULL,
    [RetryPermitYes]                   BIT             NULL,
    [RetryPermitNo]                    BIT             NULL,
    [RetryPermitDate]                  NVARCHAR (1000) NULL,
    [RetryPermitDisposition]           NVARCHAR (1000) NULL,
    [ApplicationTypeReentryPermit]     BIT             NULL,
    [ApplicationTypeAdvanceParole]     BIT             NULL,
    [ApplicationTypeForOther]          BIT             NULL,
    [ApplicationTypeRefugee]           BIT             NULL,
    [ApplicationTypeForeignTravel]     BIT             NULL,
    [DocumentSentToUsAddress]          BIT             NULL,
    [DocumentSentToUsConsulate]        BIT             NULL,
    [ConsulateAddressCity]             NVARCHAR (1000) NULL,
    [ConsulateAddressCountry]          NVARCHAR (1000) NULL,
    [NameOfDHS]                        NVARCHAR (1000) NULL,
    [DHSOffice]                        BIT             NULL,
    [DHSOfficeAddressCity]             NVARCHAR (1000) NULL,
    [DHSOfficeAddressCountry]          NVARCHAR (1000) NULL,
    [AddressPart2]                     BIT             NULL,
    [AddressPart3]                     BIT             NULL,
    [AddressApt]                       BIT             NULL,
    [AddressFlr]                       BIT             NULL,
    [AddressSte]                       BIT             NULL,
    [AddressNumber]                    NVARCHAR (1000) NULL,
    [AddressStreet]                    NVARCHAR (1000) NULL,
    [AddressAddressCity]               NVARCHAR (1000) NULL,
    [AddressAddressState]              NVARCHAR (1000) NULL,
    [AddressAddressZipCode]            NVARCHAR (1000) NULL,
    [AddressAddressPostalCode]         NVARCHAR (1000) NULL,
    [AddressAddressCountry]            NVARCHAR (1000) NULL,
    [AddressPhoneNumber]               NVARCHAR (1000) NULL,
    [AddressPhoneNumber1]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber2]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber3]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber4]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber5]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber6]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber7]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber8]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber9]              NVARCHAR (1000) NULL,
    [AddressPhoneNumber10]             NVARCHAR (1000) NULL,
    [PreparerExtension]                NVARCHAR (1000) NULL,
    [TimeOutsideLessThan6M]            BIT             NULL,
    [TimeOutsideLessThan1Y]            BIT             NULL,
    [TimeOutsideLessThan2Y]            BIT             NULL,
    [TimeOutsideLessThan3Y]            BIT             NULL,
    [TimeOutsideLessThan4Y]            BIT             NULL,
    [TimeOutsideMoreThan4Y]            BIT             NULL,
    [TaxFillYes]                       BIT             NULL,
    [TaxFillNo]                        BIT             NULL,
    [CountryFrom]                      NVARCHAR (1000) NULL,
    [Deleted]                          BIT             CONSTRAINT [DF_FormTravelDocument_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_FormTravelDocument] PRIMARY KEY CLUSTERED ([Id] ASC)
);
