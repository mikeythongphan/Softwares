CREATE TABLE [dbo].[FormVisaFiance] (
    	[Id] BIGINT IDENTITY (1, 1) NOT NULL,
    	[AccountId] BIGINT NULL,    
	
Beneficiary1FullName
Beneficiary1PlaceOfBirth
Beneficiary1HasBeenUSYes
Beneficiary1HasBeenUSNo
Beneficiary1NamesUsed
Beneficiary1GreenCardNumber
Beneficiary1SocialSecurityNumber
Beneficiary1ConsularOfficeWishes
Beneficiary1NameAddressPrimaryLanguage
Beneficiary1HomePhoneNumber
Beneficiary1Mobile
Beneficiary1OfficeTelephone
Beneficiary1FaxNumber
Beneficiary1EmailAddress
Beneficiary1FatherName
Beneficiary1FatherDateOfBirth
Beneficiary1FatherPlaceOfBirth
Beneficiary1FatherCityCountryResidence
Beneficiary1MotherName
Beneficiary1MotherDateOfBirth
Beneficiary1MotherPlaceOfBirth
Beneficiary1MotherCityCountryResidence
Beneficiary11NameOfExSpouse
Beneficiary11BirthDateOfExSpouse
Beneficiary11BirthPlaceOfExSpouse
Beneficiary11DateOfMarriage
Beneficiary11PlaceOfMarriage
Beneficiary12NameOfExSpouse
Beneficiary12BirthDateOfExSpouse
Beneficiary12BirthPlaceOfExSpouse
Beneficiary12DateOfMarriage
Beneficiary12PlaceOfMarriage
Beneficiary13NameOfExSpouse
Beneficiary13BirthDateOfExSpouse
Beneficiary13BirthPlaceOfExSpouse
Beneficiary13DateOfMarriage
Beneficiary13PlaceOfMarriage
Beneficiary14NameOfExSpouse
Beneficiary14BirthDateOfExSpouse
Beneficiary14BirthPlaceOfExSpouse
Beneficiary14DateOfMarriage
Beneficiary14PlaceOfMarriage
Beneficiary21CurrentHouseStreet
Beneficiary21City
Beneficiary21StateCounty
Beneficiary21ZipCode
Beneficiary21FromMonthYear
Beneficiary21ToMonthYear
Beneficiary22CurrentHouseStreet
Beneficiary22City
Beneficiary22StateCounty
Beneficiary22ZipCode
Beneficiary22FromMonthYear
Beneficiary22ToMonthYear
Beneficiary23CurrentHouseStreet
Beneficiary23City
Beneficiary23StateCounty
Beneficiary23ZipCode
Beneficiary23FromMonthYear
Beneficiary23ToMonthYear
Beneficiary24CurrentHouseStreet
Beneficiary24City
Beneficiary24StateCounty
Beneficiary24ZipCode
Beneficiary24FromMonthYear
Beneficiary24ToMonthYear
Beneficiary25CurrentHouseStreet
Beneficiary25City
Beneficiary25StateCounty
Beneficiary25ZipCode
Beneficiary25FromMonthYear
Beneficiary25ToMonthYear
Beneficiary3HouseStreetName
Beneficiary3City
Beneficiary3StateCounty
Beneficiary3ZipCode
Beneficiary3FromMonthYear
Beneficiary3ToMonthYear
Beneficiary41NameWorkplaceAddress
Beneficiary41Position
Beneficiary41FromMonthYear
Beneficiary41ToMonthYear
Beneficiary42NameWorkplaceAddress
Beneficiary42Position
Beneficiary42FromMonthYear
Beneficiary42ToMonthYear
Beneficiary43NameWorkplaceAddress
Beneficiary43Position
Beneficiary43FromMonthYear
Beneficiary43ToMonthYear
Beneficiary44NameWorkplaceAddress
Beneficiary44Position
Beneficiary44FromMonthYear
Beneficiary44ToMonthYear
Beneficiary45NameWorkplaceAddress
Beneficiary45Position
Beneficiary45FromMonthYear
Beneficiary45ToMonthYear
Beneficiary5NameAddressWork
Beneficiary5Position
Beneficiary5FromMonthYear
Beneficiary5ToMonthYear
Beneficiary5AllPreviousVisaRefusals
Beneficiary5HasAppliedWorkPermitYes
Beneficiary5HasAppliedWorkPermitNo
Beneficiary5WhenAndWhere
Beneficiary5ApprovedYes
Beneficiary5ApprovedNo
Beneficiary5NamesOrganizationsMember
Beneficiary5DescribePeopleMet
Beneficiary5CanMatchmakingYes
Beneficiary5CanMatchmakingNo
Beneficiary5HaveEverViolatedYes
Beneficiary5HaveEverViolatedNo
Beneficiary5ViolatedProvideDetails
Beneficiary5HasEverSufferedYes
Beneficiary5HasEverSufferedNo
Beneficiary5SufferedProvideDetails
Beneficiary5HasInMilitaryYes
Beneficiary5HasInMilitaryNo
Beneficiary5NameOfOrganization
Beneficiary5EnlistmentDate
Beneficiary5WhereToEnlist

      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>Phần B - Đương đơn</InputLabel></h5>

        label="Họ tên:"
        label="Nơi sinh:"
        <FormLabel id=""> Có phải là hôn phu/hôn thê?</FormLabel>
        label="Các tên đã sử dụng (bao gồm cả tên trước hôn nhân)"
        label="Số thẻ xanh (nếu có)"
        label="Số an sinh xã hội"
        label="Số điện thoại nhà"
        label="Di động"
        label="Điện thoại văn phòng"
        label="Số Fax"
        label="Địa chỉ E-mail"
        label="Tên cha"
        label={"Ngày sinh của cha"}
        label="Nơi sinh của cha"
        label="Thành phố và quốc gia cư trú"
        label="Tên mẹ (tên trước hôn nhân)"
        label={"Ngày sinh của mẹ"}
        label="Nơi sinh của mẹ"
        label="Thành phố và quốc gia cư trú"
        label="1. Tên của vợ/chồng cũ"
        label={"Ngày sinh của vợ/chồng cũ"}
        label="Nơi sinh của vợ/chồng cũ"
        label={"Ngày kết hôn"}
        label="Nơi kết hôn"
        label="2. Tên của vợ/chồng cũ"
        label={"Ngày sinh của vợ/chồng cũ"}
        label="Nơi sinh của vợ/chồng cũ"
        label={"Ngày kết hôn"}
        label="Nơi kết hôn"
	label="3. Tên của vợ/chồng cũ"
        label={"Ngày sinh của vợ/chồng cũ"}
        label="Nơi sinh của vợ/chồng cũ"
        label={"Ngày kết hôn"}
        label="Nơi kết hôn"
	
      <InputLabel> Địa chỉ của đương đơn trong 5 năm qua. Liệt kê địa chỉ hiện tại trước</InputLabel>

        label="1. Số nhà và tên đường hiện tại"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
        label="2. Số nhà và tên đường hiện tại"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="3. Số nhà và tên đường hiện tại"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="4. Số nhà và tên đường hiện tại"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="5. Số nhà và tên đường hiện tại"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	
      <InputLabel>Địa chỉ của đương đơn bên ngoài Hoa Kỳ trên một năm</InputLabel>

        label="Số nhà và tên đường"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"

      <InputLabel>Nơi làm việc của đương đơn trong vòng 5 năm qua. Liệt kê nơi làm việc hiện tại trước</InputLabel>

        label="1. Tên và địa chỉ nơi làm việc hện tại"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
        label="2. Tên và địa chỉ nơi làm việc hện tại"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="3. Tên và địa chỉ nơi làm việc hện tại"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="4. Tên và địa chỉ nơi làm việc hện tại"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	label="5. Tên và địa chỉ nơi làm việc hện tại"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"
	
      <InputLabel>Chức vụ công việc ở nước ngoài nếu không có ở trên</InputLabel>

        label="Tên và địa chỉ nơi làm việc"
        label="Chức vụ"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"

      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>Part C - Hồ sơ cần thiết:</InputLabel></h5>

        <FormLabel id="">Người thụ hưởng (và con cái):</FormLabel>
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="1. Form I-94 và bản sao hộ chiếu của từng người" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="2. Giấy khai sinh (hoặc bất kỳ giấy tờ nào thay thế) của từng người" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="3. Tất cả những biên nhận, quyết định từ chối hồ sơ, giấy tờ i-20… trước đây của từng người" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="4. Hồ sơ phạm tội (nếu có) của từng người" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="5. 02 tấm hình passport của từng người" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="6. Giấy tờ ly hôn trước đây của người thụ hưởng" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="7. Giấy tờ liên quan đến việc đổi tên (nếu có)" />
	  
	          <FormLabel id="">Đương đơn:</FormLabel>
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="8. Thư xác nhận của nơi làm việc về việc đương đơn đang làm việc" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="9. Sao kê tài khoản ngân hàng trong 3 năm gần nhất" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="10. Giấy tờ khai thuế trong 3 năm gần nhất" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="11. W-2, Paystubs, và Checks trong vòng 3 tháng" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="12. Giấy tờ thể hiện là công dân Mỹ (hộ chiếu Mỹ, giấy chứng nhận quốc tịch)" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="13. 02 tấm hình hộ chiếu" />
          <FormControlLabel value="" checked={true} control={<Checkbox />} label="14. Giấy tờ ly hôn trước đây" />
	  
    	[Deleted] BIT CONSTRAINT [DF_FormVisaFiance_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_FormVisaFiance] PRIMARY KEY CLUSTERED ([Id] ASC)
);
