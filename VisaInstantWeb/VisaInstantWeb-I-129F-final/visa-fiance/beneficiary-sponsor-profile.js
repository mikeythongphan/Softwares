import React from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import {
  Grow,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextareaAutosize,
  FormGroup,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Check,
  Checkbox
} from "@mui/material";
import { color } from "@mui/system";

export const BeneficiaryInformation01 = (props) => {
  const { values, handleInputChange, convertToEventParam } = props;

  const extent_option_1 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary5WhenAndWhere"
        label="Nếu có, đã khi nào và ở đâu?"
        value={values.beneficiary5WhenAndWhere}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary5Approved">
          {" "}
          Đã được chấp thuận không?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5Approved"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5ApprovedNo"
            checked={values.beneficiary5ApprovedNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5ApprovedYes"
            checked={values.beneficiary5ApprovedYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );

  const extent_option_2 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary5ViolatedProvideDetails"
        label="Nếu có, cung cấp thông tin chi tiết"
        value={values.beneficiary5ViolatedProvideDetails}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_3 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary5SufferedProvideDetails"
        label="Nếu có, cung cấp thông tin chi tiết"
        value={values.beneficiary5SufferedProvideDetails}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_4 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary5NameOfOrganization"
        label="Nếu có, tên của tổ chức đó"
        value={values.beneficiary5NameOfOrganization}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày nhập ngũ"}
          value={values.beneficiary5EnlistmentDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary5WhereToEnlist"
        label="Nơi nhập ngũ"
        value={values.beneficiary5WhereToEnlist}
        onChange={handleInputChange}
      />
    </Box>
  );

  return (
    <>
      <h5>
        <InputLabel
          style={{
            textDecorationLine: "underline",
            fontWeight: "bold",
            color: "blue"
          }}
        >
          Phần A - Người thụ hưởng (Người được bảo lãnh)
        </InputLabel>
      </h5>

      <TextField
        variant="outlined"
        name="beneficiary1FullName"
        label="Họ tên:"
        value={values.beneficiary1FullName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1PlaceOfBirth"
        label="Nơi sinh:"
        value={values.beneficiary1PlaceOfBirth}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary1HasBeenUS">
          Người được bảo lãnh từng ở Mỹ chưa?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary1HasBeenUS"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary1HasBeenUSNo"
            checked={values.beneficiary1HasBeenUSNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary1HasBeenUSYes"
            checked={values.beneficiary1HasBeenUSYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        variant="outlined"
        name="beneficiary1NamesUsed"
        label="Tất cả tên đã sử dụng (kể cả tên trước hôn nhân)"
        value={values.beneficiary1NamesUsed}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1GreenCardNumber"
        label="Số thẻ xanh (nếu có)"
        value={values.beneficiary1GreenCardNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1SocialSecurityNumber"
        label="Số an sinh xã hội (nếu có)"
        value={values.beneficiary1SocialSecurityNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1ConsularOfficeWishes"
        label="Văn phòng lãnh sự mong muốn"
        value={values.beneficiary1ConsularOfficeWishes}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1PrimaryLanguage"
        label="Tên và địa chỉ bằng ngôn ngữ chính (Nếu ngôn ngữ chính không có ký tự alphabet"
        value={values.beneficiary1PrimaryLanguage}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1HomePhoneNumber"
        label="Số điện thoại nhà"
        value={values.beneficiary1HomePhoneNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1Mobile"
        label="Di động"
        value={values.beneficiary1Mobile}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1OfficeTelephone"
        label="Điện thoại văn phòng"
        value={values.beneficiary1OfficeTelephone}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1FaxNumber"
        label="Số Fax"
        value={values.beneficiary1FaxNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1EmailAddress"
        label="Địa chỉ E-mail"
        value={values.beneficiary1EmailAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1FatherName"
        label="Tên cha"
        value={values.beneficiary1FatherName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của cha"}
          value={values.beneficiary1FatherDateOfBirth}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary1FatherPlaceOfBirth"
        label="Nơi sinh của cha"
        value={values.beneficiary1FatherPlaceOfBirth}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1FatherCityCountryResidence"
        label="Thành phố hoặc quốc gia cư trú"
        value={values.beneficiary1FatherCityCountryResidence}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1MotherName"
        label="Tên Mẹ (tên trước hôn nhân)"
        value={values.beneficiary1MotherName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của mẹ"}
          value={values.beneficiary1MotherDateOfBirth}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary1MotherPlaceOfBirth"
        label="Nơi sinh của mẹ"
        value={values.beneficiary1MotherPlaceOfBirth}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary1MotherCityCountryResidence"
        label="Thành phố hoặc quốc gia cư trú"
        value={values.beneficiary1MotherCityCountryResidence}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary11NameOfExSpouse"
        label="1. Tên của vợ/chồng cũ"
        value={values.beneficiary11NameOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.beneficiary11BirthDateOfExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary11BirthPlaceOfExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.beneficiary11BirthPlaceOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary11DateOfMarriage}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary11PlaceOfMarriage"
        label="Nơi kết hôn"
        value={values.beneficiary11PlaceOfMarriage}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary12NameOfExSpouse"
        label="2. Tên của vợ/chồng cũ"
        value={values.beneficiary12NameOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.beneficiary12BirthDateOfExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary12BirthPlaceOfExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.beneficiary12BirthPlaceOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary12DateOfMarriage}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary12PlaceOfMarriage"
        label="Nơi kết hôn"
        value={values.beneficiary12PlaceOfMarriage}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary13NameOfExSpouse"
        label="3. Tên của vợ/chồng cũ"
        value={values.beneficiary13NameOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.beneficiary13BirthDateOfExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary13BirthPlaceOfExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.beneficiary13BirthPlaceOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary13DateOfMarriage}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary13PlaceOfMarriage"
        label="Nơi kết hôn"
        value={values.beneficiary13PlaceOfMarriage}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary14NameOfExSpouse"
        label="4. Tên của vợ/chồng cũ"
        value={values.beneficiary14NameOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.beneficiary14BirthDateOfExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary14BirthPlaceOfExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.beneficiary14BirthPlaceOfExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary14DateOfMarriage}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary14PlaceOfMarriage"
        label="Nơi kết hôn"
        value={values.beneficiary14PlaceOfMarriage}
        onChange={handleInputChange}
      />

      <InputLabel>
        Địa chỉ của người thụ hưởng trong 5 năm qua. Liệt kê địa chỉ hiện tại trước
      </InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary21CurrentHouseStreet"
        label="1. Số nhà và tên đường hiện tại"
        value={values.beneficiary21CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21City"
        label="Thành phố"
        value={values.beneficiary21City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary21StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21ZipCode"
        label="Zip Code"
        value={values.beneficiary21ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary21FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary21ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22CurrentHouseStreet"
        label="2. Số nhà và tên đường"
        value={values.beneficiary22CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22City"
        label="Thành phố"
        value={values.beneficiary22City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary22StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22ZipCode"
        label="Zip Code"
        value={values.beneficiary22ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary22FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary22ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23CurrentHouseStreet"
        label="3. Số nhà và tên đường"
        value={values.beneficiary23CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23City"
        label="Thành phố"
        value={values.beneficiary23City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary23StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23ZipCode"
        label="Zip Code"
        value={values.beneficiary23ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary23FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary23ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24CurrentHouseStreet"
        label="4. Số nhà và tên đường"
        value={values.beneficiary24CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24City"
        label="Thành phố"
        value={values.beneficiary24City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary24StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24ZipCode"
        label="Zip Code"
        value={values.beneficiary24ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary24FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary24ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25CurrentHouseStreet"
        label="5. Số nhà và tên đường"
        value={values.beneficiary25CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25City"
        label="Thành phố"
        value={values.beneficiary25City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary25StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25ZipCode"
        label="Zip Code"
        value={values.beneficiary25ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary25FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary25ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Địa chỉ cuối cùng của người thụ hưởng bên ngoài Hoa Kỳ
      </InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary3HouseStreetName"
        label="Số nhà và tên đường"
        value={values.beneficiary3HouseStreetName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary3City"
        label="Thành phố"
        value={values.beneficiary3City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary3StateCounty"
        label="Tiểu bang/quận"
        value={values.beneficiary3StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary3ZipCode"
        label="Zip Code"
        value={values.beneficiary3ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary3FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary3FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary3ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary3ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Nơi làm việc của người thụ hưởng trong vòng 5 năm qua. Liệt kê nơi làm
        việc hiện tại trước
      </InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary41NameWorkplaceAddress"
        label="1. Tên và địa chỉ nơi làm việc hện tại"
        value={values.beneficiary41NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41Position"
        label="Chức vụ"
        value={values.beneficiary41Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary41FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary41ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42NameWorkplaceAddress"
        label="2. Tên và địa chỉ nơi làm việc"
        value={values.beneficiary42NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42Position"
        label="Chức vụ"
        value={values.beneficiary42Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary42FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary42ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43NameWorkplaceAddress"
        label="3. Tên và địa chỉ nơi làm việc"
        value={values.beneficiary43NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43Position"
        label="Chức vụ"
        value={values.beneficiary43Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary43FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary43ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44NameWorkplaceAddress"
        label="4. Tên và địa chỉ nơi làm việc"
        value={values.beneficiary44NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44Position"
        label="Chức vụ"
        value={values.beneficiary44Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary44FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary44ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45NameWorkplaceAddress"
        label="5. Tên và địa chỉ nơi làm việc"
        value={values.beneficiary45NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45Position"
        label="Chức vụ"
        value={values.beneficiary45Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary45FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary45ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Chức vụ công việc ở nước ngoài nếu không có ở trên
      </InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary5NameAddressWork"
        label="Tên và địa chỉ nơi làm việc"
        value={values.beneficiary5NameAddressWork}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary5Position"
        label="Chức vụ"
        value={values.beneficiary5Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary5FromMonthYear"
        label="Từ Tháng/năm"
        value={values.beneficiary5FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary5ToMonthYear"
        label="Đến Tháng/năm"
        value={values.beneficiary5ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary5AllPreviousVisaRefusals"
        label="Liệt kê tất cả những lần bị từ chối Visa trước đây"
        value={values.beneficiary5AllPreviousVisaRefusals}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary5HasAppliedWorkPermit">
          Người thụ hưởng đã từng nộp đơn xin giấy phép lao động trước đây?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5HasAppliedWorkPermit"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5HasAppliedWorkPermitNo"
            checked={values.beneficiary5HasAppliedWorkPermitNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5HasAppliedWorkPermitYes"
            checked={values.beneficiary5HasAppliedWorkPermitYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary5HasAppliedWorkPermitYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary5HasAppliedWorkPermitYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_1}
      </Grow>

      <TextField
        variant="outlined"
        name="beneficiary5NamesOrganizationsMember"
        label="Tên các tổ chức hoặc câu lạc bộ mà người thụ hưởng đã và đang tham gia"
        value={values.beneficiary5NamesOrganizationsMember}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary5DescribePeopleMet"
        label="Mô tả quá trình hai người gặp nhau"
        value={values.beneficiary5DescribePeopleMet}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary5CanMatchmaking">
          Có được mai mối hay không?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5CanMatchmaking"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5CanMatchmakingNo"
            checked={values.beneficiary5CanMatchmakingNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5CanMatchmakingYes"
            checked={values.beneficiary5CanMatchmakingYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="beneficiary5HaveEverViolated">
          Một trong hai người đã từng vi phạm các quy định về di trú hay không?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5HaveEverViolated"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5HaveEverViolatedNo"
            checked={values.beneficiary5HaveEverViolatedNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5HaveEverViolatedYes"
            checked={values.beneficiary5HaveEverViolatedYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary5HaveEverViolatedYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary5HaveEverViolatedYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_2}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary5HasEverSuffered">
          Một trong hai người có từng bị các chứng về thần kinh hoặc các bệnh
          liên quan đến sử dụng chất kích thích?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5HasEverSuffered"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5HasEverSufferedNo"
            checked={values.beneficiary5HasEverSufferedNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5HasEverSufferedYes"
            checked={values.beneficiary5HasEverSufferedYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary5HasEverSufferedYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary5HasEverSufferedYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_3}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary5HasInMilitary">
          Người thụ hưởng đã từng làm việc trong quân đội?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary5HasInMilitary"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary5HasInMilitaryNo"
            checked={values.beneficiary5HasInMilitaryNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary5HasInMilitaryYes"
            checked={values.beneficiary5HasInMilitaryYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary5HasInMilitaryYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary5HasInMilitaryYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_4}
      </Grow>

      <h5>
        <InputLabel
          style={{
            textDecorationLine: "underline",
            fontWeight: "bold",
            color: "blue"
          }}
        >
          Phần B - Đương đơn
        </InputLabel>
      </h5>

      <TextField
        variant="outlined"
        name="sponsor1Name"
        label="Họ tên:"
        value={values.sponsor1Name}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1BirthPlace"
        label="Nơi sinh:"
        value={values.sponsor1BirthPlace}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="sponsor1IsFiance">
          {" "}
          Có phải là hôn phu/hôn thê?
        </FormLabel>
        <RadioGroup row name="sponsor1IsFiance" onChange={handleInputChange}>
          <FormControlLabel
            value="sponsor1IsFianceNo"
            checked={values.sponsor1IsFianceNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="sponsor1IsFianceYes"
            checked={values.sponsor1IsFianceYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        variant="outlined"
        name="sponsor1NamesUsed"
        label="Các tên đã sử dụng (bao gồm cả tên trước hôn nhân)"
        value={values.sponsor1NamesUsed}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1GreenCardNumber"
        label="Số thẻ xanh (nếu có)"
        value={values.sponsor1GreenCardNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1SocialSecurityNumber"
        label="Số an sinh xã hội"
        value={values.sponsor1SocialSecurityNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1HomePhoneNumber"
        label="Số điện thoại nhà"
        value={values.sponsor1HomePhoneNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1Mobile"
        label="Di động"
        value={values.sponsor1Mobile}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1OfficePhone"
        label="Điện thoại văn phòng"
        value={values.sponsor1OfficePhone}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1FaxNumber"
        label="Số Fax"
        value={values.sponsor1FaxNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1EmailAddress"
        label="Địa chỉ E-mail"
        value={values.sponsor1EmailAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1FatherName"
        label="Tên cha"
        value={values.sponsor1FatherName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của cha"}
          value={values.sponsor1FatherBirthDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor1FatherBirthPlace"
        label="Nơi sinh của cha"
        value={values.sponsor1FatherBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1FatherCityCountry"
        label="Thành phố và quốc gia cư trú"
        value={values.sponsor1FatherCityCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1MotherName"
        label="Tên mẹ (tên trước hôn nhân)"
        value={values.sponsor1MotherName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của mẹ"}
          value={values.sponsor1MotherBirthDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor1MotherBirthPlace"
        label="Nơi sinh của mẹ"
        value={values.sponsor1MotherBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor1MotherCityCountry"
        label="Thành phố và quốc gia cư trú"
        value={values.sponsor1MotherCityCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor11NameExSpouse"
        label="1. Tên của vợ/chồng cũ"
        value={values.sponsor11NameExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor11BirthDateExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor11BirthplaceExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.sponsor11BirthplaceExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor11MarriageDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor11MarriagePlace"
        label="Nơi kết hôn"
        value={values.sponsor11MarriagePlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor12NameExSpouse"
        label="2. Tên của vợ/chồng cũ"
        value={values.sponsor12NameExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor12BirthDateExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor12BirthPlaceExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.sponsor12BirthPlaceExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor12MarriageDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor12MarriagePlace"
        label="Nơi kết hôn"
        value={values.sponsor12MarriagePlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor13NameExSpouse"
        label="3 Tên của vợ/chồng cũ"
        value={values.sponsor13NameExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor13BirthDateExSpouse}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor13BirthPlaceExSpouse"
        label="Nơi sinh của vợ/chồng cũ"
        value={values.sponsor13BirthPlaceExSpouse}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor13MarriageDate}
          onChange={(date) => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="sponsor13MarriagePlace"
        label="Nơi kết hôn"
        value={values.sponsor13MarriagePlace}
        onChange={handleInputChange}
      />

      <InputLabel>
        {" "}
        Địa chỉ của đương đơn trong 5 năm qua. Liệt kê địa chỉ hiện tại trước
      </InputLabel>

      <TextField
        variant="outlined"
        name="sponsor21CurrentHouseStreet"
        label="1. Số nhà và tên đường hiện tại"
        value={values.sponsor21CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor21City"
        label="Thành phố"
        value={values.sponsor21City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor21StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor21StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor21ZipCode"
        label="Zip Code"
        value={values.sponsor21ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor21FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor21FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor21ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor21ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22CurrentHouseStreet"
        label="2. Số nhà và tên đường"
        value={values.sponsor22CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22City"
        label="Thành phố"
        value={values.sponsor22City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor22StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22ZipCode"
        label="Zip Code"
        value={values.sponsor22ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor22FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor22ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor22ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23CurrentHouseStreet"
        label="3. Số nhà và tên đường hiện tại"
        value={values.sponsor23CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23City"
        label="Thành phố"
        value={values.sponsor23City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor23StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23ZipCode"
        label="Zip Code"
        value={values.sponsor23ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor23FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor23ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor23ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24CurrentHouseStreet"
        label="4. Số nhà và tên đường hiện tại"
        value={values.sponsor24CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24City"
        label="Thành phố"
        value={values.sponsor24City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor24StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24ZipCode"
        label="Zip Code"
        value={values.sponsor24ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor24FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor24ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor24ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25CurrentHouseStreet"
        label="5. Số nhà và tên đường hiện tại"
        value={values.sponsor25CurrentHouseStreet}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25City"
        label="Thành phố"
        value={values.sponsor25City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor25StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25ZipCode"
        label="Zip Code"
        value={values.sponsor25ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor25FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor25ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor25ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Địa chỉ của đương đơn bên ngoài Hoa Kỳ trên một năm
      </InputLabel>

      <TextField
        variant="outlined"
        name="sponsor3HouseStreetName"
        label="Số nhà và tên đường"
        value={values.sponsor3HouseStreetName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor3City"
        label="Thành phố"
        value={values.sponsor3City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor3StateCounty"
        label="Tiểu bang/quận"
        value={values.sponsor3StateCounty}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor3ZipCode"
        label="Zip Code"
        value={values.sponsor3ZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor3FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor3FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor3ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor3ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Nơi làm việc của đương đơn trong vòng 5 năm qua. Liệt kê nơi làm việc
        hiện tại trước
      </InputLabel>

      <TextField
        variant="outlined"
        name="sponsor41NameWorkplaceAddress"
        label="1. Tên và địa chỉ nơi làm việc hện tại"
        value={values.sponsor41NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor41Position"
        label="Chức vụ"
        value={values.sponsor41Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor41FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor41FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor41ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor41ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor42NameWorkplaceAddress"
        label="2. Tên và địa chỉ nơi làm việc"
        value={values.sponsor42NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor42Position"
        label="Chức vụ"
        value={values.sponsor42Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor42FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor42FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor42ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor42ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor43NameWorkplaceAddress"
        label="3. Tên và địa chỉ nơi làm việc"
        value={values.sponsor43NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor43Position"
        label="Chức vụ"
        value={values.sponsor43Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor43FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor43FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor43ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor43ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor44NameWorkplaceAddress"
        label="4. Tên và địa chỉ nơi làm việc"
        value={values.sponsor44NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor44Position"
        label="Chức vụ"
        value={values.sponsor44Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor44FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor44FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor44ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor44ToMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor45NameWorkplaceAddress"
        label="5. Tên và địa chỉ nơi làm việc"
        value={values.sponsor45NameWorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor45Position"
        label="Chức vụ"
        value={values.sponsor45Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor45FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor45FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor45ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor45ToMonthYear}
        onChange={handleInputChange}
      />

      <InputLabel>
        Chức vụ công việc ở nước ngoài nếu không có ở trên
      </InputLabel>

      <TextField
        variant="outlined"
        name="sponsor5NameAddressWork"
        label="Tên và địa chỉ nơi làm việc"
        value={values.sponsor5NameAddressWork}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor5Position"
        label="Chức vụ"
        value={values.sponsor5Position}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor5FromMonthYear"
        label="Từ Tháng/năm"
        value={values.sponsor5FromMonthYear}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="sponsor5ToMonthYear"
        label="Đến Tháng/năm"
        value={values.sponsor5ToMonthYear}
        onChange={handleInputChange}
      />

      <h5>
        <InputLabel
          style={{
            textDecorationLine: "underline",
            fontWeight: "bold",
            color: "blue"
          }}
        >
          Part C - Hồ sơ cần thiết:
        </InputLabel>
      </h5>

      <FormControl>
        <FormLabel id="beneficiaryProfile">
          Người thụ hưởng (và con cái):
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            value="beneficiaryProfileFormI94"
            checked={true}
            control={<Checkbox />}
            label="1. Form I-94 và bản sao hộ chiếu của từng người"
          />
          <FormControlLabel
            value="beneficiaryProfileBirthCertificate"
            checked={true}
            control={<Checkbox />}
            label="2. Giấy khai sinh (hoặc bất kỳ giấy tờ nào thay thế) của từng người"
          />
          <FormControlLabel
            value="beneficiaryProfileI20Documents"
            checked={true}
            control={<Checkbox />}
            label="3. Tất cả những biên nhận, quyết định từ chối hồ sơ, giấy tờ i-20… trước đây của từng người"
          />
          <FormControlLabel
            value="beneficiaryProfileCriminalRecord"
            checked={true}
            control={<Checkbox />}
            label="4. Hồ sơ phạm tội (nếu có) của từng người"
          />
          <FormControlLabel
            value="beneficiaryProfilePassportPhotos"
            checked={true}
            control={<Checkbox />}
            label="5. 02 tấm hình passport của từng người"
          />
          <FormControlLabel
            value="beneficiaryProfilePreviousDivorce"
            checked={true}
            control={<Checkbox />}
            label="6. Giấy tờ ly hôn trước đây của người thụ hưởng"
          />
          <FormControlLabel
            value="beneficiaryProfilePapersRelated"
            checked={true}
            control={<Checkbox />}
            label="7. Giấy tờ liên quan đến việc đổi tên (nếu có)"
          />
        </FormGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="sponsorProfileLetter">Đương đơn:</FormLabel>
        <FormGroup>
          <FormControlLabel
            value="sponsorProfileLetterConfirmation"
            checked={true}
            control={<Checkbox />}
            label="8. Thư xác nhận của nơi làm việc về việc đương đơn đang làm việc"
          />
          <FormControlLabel
            value="sponsorProfileBankStatement"
            checked={true}
            control={<Checkbox />}
            label="9. Sao kê tài khoản ngân hàng trong 3 năm gần nhất"
          />
          <FormControlLabel
            value="sponsorProfileTaxReturns"
            checked={true}
            control={<Checkbox />}
            label="10. Giấy tờ khai thuế trong 3 năm gần nhất"
          />
          <FormControlLabel
            value="sponsorProfileW2PaystubsChecks"
            checked={true}
            control={<Checkbox />}
            label="11. W-2, Paystubs, và Checks trong vòng 3 tháng"
          />
          <FormControlLabel
            value="sponsorProfileDocumentsShowing"
            checked={true}
            control={<Checkbox />}
            label="12. Giấy tờ thể hiện là công dân Mỹ (hộ chiếu Mỹ, giấy chứng nhận quốc tịch)"
          />
          <FormControlLabel
            value="sponsorProfilePassportPhotos"
            checked={true}
            control={<Checkbox />}
            label="13. 02 tấm hình hộ chiếu"
          />
          <FormControlLabel
            value="sponsorProfilePreviousDivorce"
            checked={true}
            control={<Checkbox />}
            label="14. Giấy tờ ly hôn trước đây"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
