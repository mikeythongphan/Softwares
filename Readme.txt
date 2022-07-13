webmail.onewits.com
dev01@onewits.com
q97$szF91
-=====================================================
https://onewits.slack.com/archives/D03FAUR0H5Z/p1652687030521629
https://OneWits@dev.azure.com/OneWits/VisaInstantOne/_git/VisaInstantOne
https://dev.azure.com/OneWits/_git/OneWitsAPI
-=====================================================
REACT_APP_API_URL=http://localhost:5000/api/
REACT_APP_API_URL=https://visainstantapidev.onewits.com/api/
-=====================================================
https://visainstantapidev.onewits.com/swagger/index.html

insert Keyword([Code],[Name],[Deleted])
select N'yes',NULL,0 UNION ALL--Yes
select N'no',NULL,0 UNION ALL--No
select N'otherNationalities',NULL,0 UNION ALL--Quốc tịch khác (nếu có)
select N'addressPassport',NULL,0 UNION ALL--Địa chỉ (hộ khẩu)
select N'currentAddress',NULL,0 UNION ALL--Địa chỉ hiện tại (liên lạc)
select N'homePhone',NULL,0 UNION ALL--Số ĐT nhà
select N'cellPhone:',NULL,0 UNION ALL--ĐTDĐ
select N'email',NULL,0 UNION ALL--Email
select N'otherPhone',NULL,0 UNION ALL--Ngoài số điện thoại và email đã cung cấp ở trên, quý khách còn sử dụng số điện thoại và email nào khác ?
select N'socialNetworks',NULL,0 UNION ALL--Bạn có sử dụng mạng xã hội không?
select N'ifDivorced',NULL,0 UNION ALL--Nếu đã ly hôn, xin cung cấp thêm
select N'maritalStatus',NULL,0 UNION ALL--Tình trạng hôn nhân
select N'husbandWifeName',NULL,0 UNION ALL--Họ tên chồng/vợ
select N'marriageDate',NULL,0 UNION ALL--Ngày đăng ký kết hôn
select N'divorceDate',NULL,0 UNION ALL--Ngày làm thủ tục ly hôn
select N'nationality',NULL,0 UNION ALL--Quốc tịch
select N'address',NULL,0 UNION ALL--Địa chỉ
select N'lostPassport',NULL,0 UNION ALL--Bạn đã từng bị mất hay bị đánh cắp hộ chiếu
select N'single',NULL,0 UNION ALL--Độc thân
select N'getMarried',NULL,0 UNION ALL--Kết hôn
select N'widow',NULL,0 UNION ALL--Góa
select N'divorce',NULL,0 UNION ALL--Ly hôn
select N'deparated',NULL,0 UNION ALL--Ly thân
select N'ifMarried',NULL,0 UNION ALL--Nếu đã kết hôn/ ly thân/ ly hôn, xin cung cấp
select N'relationship',NULL,0 UNION ALL--Quan hệ với bạn
select N'phoneNumber',NULL,0 UNION ALL--Số điện thoại

-- listMore : Nếu có vui long liệt kê thêm:
-- specifiedName : Nếu có nêu tên người dùng:

select N'tripInformation',NULL,0 UNION ALL--THÔNG TIN CHUYẾN ĐI
select N'tripPurpose',NULL,0 UNION ALL--Mục đích chuyến đi (du lịch/ thăm thân/ công tác)
select N'arrivalDate',NULL,0 UNION ALL--Ngày dự định đến Mỹ
select N'inCity',NULL,0 UNION ALL--Tại thành phố
select N'departureDate',NULL,0 UNION ALL--Ngày dự định rời Mỹ
select N'placesVisit:',NULL,0 UNION ALL--Các địa điểm sẽ tham quan
select N'addressArrival',NULL,0 UNION ALL--Địa chỉ ở khi đến Mỹ
select N'sponsorTrip',NULL,0 UNION ALL--Người bảo trợ cho chuyến đi của bạn (người thân, công ty, tổ chức)
select N'enteredUS:',NULL,0 UNION ALL--Bạn đã từng nhập cảnh Mỹ
select N'everFingerprinted:',NULL,0 UNION ALL--Bạn đã từng được lấy dấu vân tay
select N'informationUSVisas',NULL,0 UNION ALL--Thông tin về tất cả visa Mỹ được cấp trong các năm qua: (chính xác theo thông tin trên hộ chiếu)

select N'visaType',NULL,0 UNION ALL--Loại visa (du học/ du lịch/ khác, ghi rõ là gì)
select N'visaNumber',NULL,0 UNION ALL--Số visa (nếu biết)
select N'from',NULL,0 UNION ALL--Từ:
select N'to',NULL,0 UNION ALL--Đến:
select N'everRefusedVisa',NULL,0 UNION ALL--Bạn đã từng bị từ chối visa, rút đơn xin visa, bị hủy hay thu hồi visa Mỹ:
select N'time',NULL,0 UNION ALL--Thời gian
select N'reason',NULL,0 UNION ALL--Lý do:
select N'deniedEntryUS:',NULL,0 UNION ALL--Bạn đã từng bị từ chối cho phép nhập cảnh Mỹ
select N'countriesVisited5Years',NULL,0 UNION ALL--Các quốc gia đã từng đến trong 5 năm gần đây
select N'languagesKnow',NULL,0 UNION ALL--Các ngôn ngữ bạn biết

select N'usInformation',NULL,0 UNION ALL--THÔNG TIN NGƯỜI LIÊN HỆ Ở MỸ (nếu đi thăm thân, công tác)
select N'belongingOrganization:',NULL,0 UNION ALL--Thuộc tổ chức
select N'relationshipApplicant',NULL,0 UNION ALL--Quan hệ với đương đơn
select N'fatherName',NULL,0 UNION ALL--Họ tên cha
select N'motherName',NULL,0 UNION ALL--Họ tên mẹ
select N'Citizen',NULL,0 UNION ALL--Công dân
select N'permanentResident',NULL,0 UNION ALL--Thường trú nhân
select N'noImmigration',NULL,0 UNION ALL--Không di dân
select N'other',NULL,0 UNION ALL--Khác
select N'status',NULL,0 UNION ALL--Tình trạng

select N'familyInformation:',NULL,0 UNION ALL--THÔNG TIN GIA ĐÌNH
select N'bloodRelatives',NULL,0 UNION ALL--Người thân ruột thịt ở Mỹ
select N'otherRelatives',NULL,0 UNION ALL--Họ hàng bà con khác ở Mỹ
select N'jobInformation',NULL,0 UNION ALL--THÔNG TIN CÔNG VIỆC/ TRÌNH ĐỘ HỌC VẤN
select N'workingUnit',NULL,0 UNION ALL--Đơn vị công tác
select N'position',NULL,0 UNION ALL--Chức vụ
select N'byEnglish',NULL,0 UNION ALL--viết bằng tiếng anh
select N'fromDate',NULL,0 UNION ALL--Từ ngày
select N'toDate',NULL,0 UNION ALL--Đến ngày
select N'workingStudyingPeriod',NULL,0 UNION ALL--Thời gian công tác/ học (ngày tháng năm)
select N'jobDescription:',NULL,0 UNION ALL--Mô tả công việc
select N'monthlyIncome',NULL,0 UNION ALL--Mức thu nhập hàng tháng
select N'companyAddress',NULL,0 UNION ALL--Địa chỉ công ty
select N'companyPhone',NULL,0 UNION ALL--Số ĐT công ty
select N'companyDirector',NULL,0 UNION ALL--Họ tên giám đốc công ty
select N'otherJobs5Years',NULL,0 UNION ALL--Trong 5 năm trở lại đây, bạn có làm công việc nào khác không
select N'educationProvide',NULL,0 UNION ALL--Học vấn: Cung cấp bậc học cao nhất của bạn (trường hợp là hoc sinh thì cung cấp bậc học trước bậc học hiện tại)
select N'school',NULL,0 UNION ALL--Trường
select N'majors',NULL,0 UNION ALL--Ngành học
select N'thankYouInformation',NULL,0;--Cám ơn quý khách hàng đã cung cấp thông tin!
