CREATE TABLE [dbo].[FormVisaFiance] (
    	[Id] BIGINT IDENTITY (1, 1) NOT NULL,
    	[AccountId] BIGINT NULL,    
	
	Họ tên
	Nơi sinh
	Người được bảo lãnh từng ở Mỹ chưa?
	label="Tất cả tên đã sử dụng (kể cả tên trước hôn nhân)"
        label="Số thẻ xanh (nếu có)"
        label="Số an sinh xã hội (nếu có)"
        label="Văn phòng lãnh sự mong muốn"
        label="Tên và địa chỉ bằng ngôn ngữ chính (Nếu ngôn ngữ chính không có ký tự alphabet"
        label="Số điện thoại nhà"
        label="Di động"
        label="Điện thoại văn phòng"
        label="Số Fax"
        label="Địa chỉ E-mail"
        label="Tên cha"
        label={"Ngày sinh, nơi sinh của cha"}
        label="Thành phố hoặc quốc gia cư trú"
        label="Tên Mẹ (tên trước hôn nhân)"
        label={"Ngày sinh, nơi sinh của mẹ"}
        label="Thành phố hoặc quốc gia cư trú"
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
	label="4. Tên của vợ/chồng cũ"
        label={"Ngày sinh của vợ/chồng cũ"}
	label="Nơi sinh của vợ/chồng cũ"
        label={"Ngày kết hôn"}
        label="Nơi kết hôn"
	
	<InputLabel> Địa chỉ của người thụ hưởng trong 5 năm qua. Liệt kê địa chỉ hiện tại trước</InputLabel>

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
	
      <InputLabel>Địa chỉ cuối cùng của người thụ hưởng bên ngoài Hoa Kỳ</InputLabel>

        label="Số nhà và tên đường"
        label="Thành phố"
        label="Tiểu bang/quận"
        label="Zip Code"
        label="Từ Tháng/năm"
        label="Đến Tháng/năm"

      <InputLabel>Nơi làm việc của người thụ hưởng trong vòng 5 năm qua. Liệt kê nơi làm việc hiện tại trước</InputLabel>

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
        label="Liệt kê tất cả những lần bị từ chối Visa trước đây"
        <FormLabel id="petitionerAddressDifferentPhysicalAddress">Người thụ hưởng đã từng nộp đơn xin giấy phép lao động trước đây?</FormLabel>
        label="Tên các tổ chức hoặc câu lạc bộ mà người thụ hưởng đã và đang tham gia"
        label="Mô tả quá trình hai người gặp nhau"
        <FormLabel id="">Có được mai mối hay không?</FormLabel>
        <FormLabel id="petitionerContactRelatedFiance">Một trong hai người đã từng vi phạm các quy định về di trú hay không?</FormLabel>
        <FormLabel id="petitionerBackgroundPreviouslyMarried">Một trong hai người có từng bị các chứng về thần kinh hoặc các bệnh liên quan đến sử dụng chất kích thích?</FormLabel>
        <FormLabel id="petitionerBiographicCivilCriminal">Người thụ hưởng đã từng làm việc trong quân đội?</FormLabel>

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

    	[Deleted] BIT CONSTRAINT [DF_FormVisaFiance_Deleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_FormVisaFiance] PRIMARY KEY CLUSTERED ([Id] ASC)
);
