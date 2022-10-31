import React from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  Grow,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Checkbox
} from "@mui/material";

export const BeneficiaryInformation01 = (props) => {
  const { values, handleInputChange, convertToEventParam } = props;

  const convertToDefEventParameter = (name, value) => ({
    target: {
      name,
      value
    }
  });

  const extent_option_1 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05EverBeenRestrainingOrder"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05EverBeenRestrainingOrder}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_2 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HasBeenAccusedAnyCountry"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HasBeenAccusedAnyCountry}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_3 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05EverBeenInUSLastTimeAs"
        label="A. Người đó nhập cảnh lần cuối với tư cách là (ví dụ: du khách, sinh viên, người nước ngoài trao đổi, thủy thủ đoàn, người trốn
          theo tàu, người lao động tạm thời, không cần kiểm tra)"
        value={values.beneficiary05EverBeenInUSLastTimeAs}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary05EverBeenInUSI94"
        label="B. Số hồ sơ I-94 đi và đến"
        value={values.beneficiary05EverBeenInUSI94}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"C. Ngày đến"}
          value={values.beneficiary05EverBeenInUSArrivalDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary05EverBeenInUSArrivalDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"D. Ngày hết hạn thể hiện trên đơn I-94 hoặc I-95"}
          value={values.beneficiary05EverBeenInUSI94I95Date}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary05EverBeenInUSI94I95Date", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary05EverBeenInUSPassportNo"
        label="E. Số hộ chiếu"
        value={values.beneficiary05EverBeenInUSPassportNo}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"F. Ngày hết hạn của hộ chiếu"}
          value={values.beneficiary05EverBeenInUSPassportExpireDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam(
                "beneficiary05EverBeenInUSPassportExpireDate",
                date
              )
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary05EverBeenInUSPassportCountry"
        label="G. Quốc gia cấp hộ chiếu"
        value={values.beneficiary05EverBeenInUSPassportCountry}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_4 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HaveEverMetFiance"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HaveEverMetFiance}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_5 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HasServicesIMB"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HasServicesIMB}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_6 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HasBeenArrestedConvictedViolence"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HasBeenArrestedConvictedViolence}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_7 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HasBeenArrestedConvictedFelon"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HasBeenArrestedConvictedFelon}
        onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_8 = (
    <Box>
      <TextField
        variant="outlined"
        name="beneficiary05HasBeenArrestedConvictedArrested"
        label="Nếu có, vui lòng cung cấp thông tin"
        value={values.beneficiary05HasBeenArrestedConvictedArrested}
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
        name="beneficiary01LastName"
        label="Họ:"
        value={values.beneficiary01LastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FirstName"
        label="Tên:"
        value={values.beneficiary01FirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MiddleName"
        label="Tên đệm:"
        value={values.beneficiary01MiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh"}
          value={values.beneficiary01BirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary01BirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary01CityBirthPlace"
        label="Thành phố:"
        value={values.beneficiary01CityBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01CountryBirthPlace"
        label="Quốc gia:"
        value={values.beneficiary01CountryBirthPlace}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary01HasBeenUS">
          Người được bảo lãnh từng ở Mỹ chưa?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary01HasBeenUS"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary01HasBeenUSNo"
            checked={values.beneficiary01HasBeenUSNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary01HasBeenUSYes"
            checked={values.beneficiary01HasBeenUSYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <InputLabel>Tất cả tên đã sử dụng (kể cả tên trước hôn nhân)</InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary01LastNamesUsed"
        label="Họ:"
        value={values.beneficiary01LastNamesUsed}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FirstNamesUsed"
        label="Tên:"
        value={values.beneficiary01FirstNamesUsed}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MiddleNamesUsed"
        label="Tên đệm:"
        value={values.beneficiary01MiddleNamesUsed}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01GreenCardNumber"
        label="Số thẻ xanh (nếu có)"
        value={values.beneficiary01GreenCardNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01SocialSecurityNumber"
        label="Số an sinh xã hội (nếu có)"
        value={values.beneficiary01SocialSecurityNumber}
        onChange={handleInputChange}
      />

      <InputLabel>Văn phòng lãnh sự mong muốn</InputLabel>

      <TextField
        variant="outlined"
        name="beneficiary01CityConsularOfficeWishes"
        label="Thành phố:"
        value={values.beneficiary01CityConsularOfficeWishes}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01CountryConsularOfficeWishes"
        label="Quốc gia:"
        value={values.beneficiary01CountryConsularOfficeWishes}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01HomePhoneNumber"
        label="Số điện thoại nhà"
        value={values.beneficiary01HomePhoneNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01Mobile"
        label="Di động"
        value={values.beneficiary01Mobile}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01OfficeTelephone"
        label="Điện thoại văn phòng"
        value={values.beneficiary01OfficeTelephone}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FaxNumber"
        label="Số Fax"
        value={values.beneficiary01FaxNumber}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01EmailAddress"
        label="Địa chỉ E-mail"
        value={values.beneficiary01EmailAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FatherLastName"
        label="Họ của cha"
        value={values.beneficiary01FatherLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FatherFirstName"
        label="Tên của cha"
        value={values.beneficiary01FatherFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FatherMiddleName"
        label="Tên đệm của cha"
        value={values.beneficiary01FatherMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của cha"}
          value={values.beneficiary01FatherBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary01FatherBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary01FatherBirthPlace"
        label="Nơi sinh của cha"
        value={values.beneficiary01FatherBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FatherCityResidence"
        label="Thành phố cư trú"
        value={values.beneficiary01FatherCityResidence}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01FatherCountryResidence"
        label="Quốc gia cư trú"
        value={values.beneficiary01FatherCountryResidence}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MotherLastName"
        label="Họ của Mẹ"
        value={values.beneficiary01MotherLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MotherFirstName"
        label="Tên của Mẹ"
        value={values.beneficiary01MotherFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MotherMiddleName"
        label="Tên đệm của Mẹ"
        value={values.beneficiary01MotherMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của mẹ"}
          value={values.beneficiary01MotherBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary01MotherBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary01MotherBirthPlace"
        label="Nơi sinh của mẹ"
        value={values.beneficiary01MotherBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MotherCityResidence"
        label="Thành phố cư trú"
        value={values.beneficiary01MotherCityResidence}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary01MotherCountryResidence"
        label="Quốc gia cư trú"
        value={values.beneficiary01MotherCountryResidence}
        onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="beneficiary05EverBeenRestrainingOrder">
          Người thụ hưởng của bạn đã bao giờ phải chịu lệnh cấm tạm thời hoặc
          vĩnh viễn chưa?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05EverBeenRestrainingOrder"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05EverBeenRestrainingOrderNo"
            checked={values.beneficiary05EverBeenRestrainingOrderNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05EverBeenRestrainingOrderYes"
            checked={values.beneficiary05EverBeenRestrainingOrderYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05EverBeenRestrainingOrderYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05EverBeenRestrainingOrderYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_1}
      </Grow>

      <InputLabel>
        Người thụ hưởng của bạn đã BAO GIỜ bị bắt hoặc bị kết án về bất kỳ tội
        nào sau đây:
      </InputLabel>

      <FormControl>
        <FormLabel id="beneficiary05HasBeenArrestedConvictedViolence">
          A. Bạo lực gia đình, tấn công tình dục, lạm dụng trẻ em, bỏ bê trẻ em,
          bạo lực khi hẹn hò, ngược đãi người già, theo dõi hoặc cố gắng thực
          hiện bất kỳ tội phạm nào trong số này?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HasBeenArrestedConvictedViolence"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedViolenceNo"
            checked={values.beneficiary05HasBeenArrestedConvictedViolenceNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedViolenceYes"
            checked={values.beneficiary05HasBeenArrestedConvictedViolenceYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HasBeenArrestedConvictedViolenceYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HasBeenArrestedConvictedViolenceYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_6}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05HasBeenArrestedConvictedFelon">
          B. Giết người, ngộ sát, hiếp dâm, lạm dụng tình dục, bóc lột tình dục,
          loạn luân, tra tấn, buôn bán, bắt giữ con tin, nô lệ không tự nguyện,
          buôn bán nô lệ, bắt cóc, bắt cóc, khống chế tội phạm trái pháp luật,
          bỏ tù sai hoặc cố gắng thực hiện bất kỳ hành vi nào những tội ác này?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HasBeenArrestedConvictedFelon"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedFelonNo"
            checked={values.beneficiary05HasBeenArrestedConvictedFelonNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedFelonYes"
            checked={values.beneficiary05HasBeenArrestedConvictedFelonYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HasBeenArrestedConvictedFelonYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HasBeenArrestedConvictedFelonYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_7}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05HasBeenArrestedConvictedArrested">
          C. Ba lần bị bắt hoặc bị kết án trở lên, không phải từ một hành vi duy
          nhất, đối với các tội phạm liên quan đến chất kích thích hoặc rượu
          được kiểm soát
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HasBeenArrestedConvictedArrested"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedArrestedNo"
            checked={values.beneficiary05HasBeenArrestedConvictedArrestedNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HasBeenArrestedConvictedArrestedYes"
            checked={values.beneficiary05HasBeenArrestedConvictedArrestedYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HasBeenArrestedConvictedArrestedYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HasBeenArrestedConvictedArrestedYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_8}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05HasBeenAccusedAnyCountry">
          Người thụ hưởng của bạn đã từng bị bắt, bị dẫn giải, bị buộc tội, bị
          truy tố, bị kết án, bị phạt tiền hoặc bị bỏ tù vì vi phạm hoặc vi phạm
          bất kỳ luật hoặc pháp lệnh nào ở bất kỳ quốc gia nào, ngoại trừ vi
          phạm giao thông (trừ khi vi phạm giao thông liên quan đến rượu hoặc ma
          túy hoặc bị phạt 500 đô la hoặc hơn)?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HasBeenAccusedAnyCountry"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HasBeenAccusedAnyCountryNo"
            checked={values.beneficiary05HasBeenAccusedAnyCountryNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HasBeenAccusedAnyCountryYes"
            checked={values.beneficiary05HasBeenAccusedAnyCountryYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HasBeenAccusedAnyCountryYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HasBeenAccusedAnyCountryYes
          ? { timeout: 400 }
          : {})}
        unmountOnExit
      >
        {extent_option_2}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05EverBeenInUS">
          Người thụ hưởng của bạn đã từng ở Hoa Kỳ chưa?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05EverBeenInUS"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05EverBeenInUSNo"
            checked={values.beneficiary05EverBeenInUSNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05EverBeenInUSYes"
            checked={values.beneficiary05EverBeenInUSYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05EverBeenInUSYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05EverBeenInUSYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_3}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05HaveEverMetFiance">
          Bạn và vị hôn phu/ hôn thê của bạn có gặp mặt trực tiếp trong hai năm
          ngay trước khi nộp đơn bảo lãnh này không?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HaveEverMetFiance"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HaveEverMetFianceNo"
            checked={values.beneficiary05HaveEverMetFianceNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HaveEverMetFianceYes"
            checked={values.beneficiary05HaveEverMetFianceYes}
            control={<Radio />}
            label="Có"
          />
          <FormControlLabel
            value="beneficiary05HaveEverMetFianceNA"
            checked={values.beneficiary05HaveEverMetFianceNA}
            control={<Radio />}
            label="NA"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HaveEverMetFianceYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HaveEverMetFianceYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_4}
      </Grow>

      <FormControl>
        <FormLabel id="beneficiary05HasServicesIMB">
          Bạn có gặp được người thụ hưởng của mình thông qua các dịch vụ của IMB
          không?
        </FormLabel>
        <RadioGroup
          row
          name="beneficiary05HasServicesIMB"
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="beneficiary05HasServicesIMBNo"
            checked={values.beneficiary05HasServicesIMBNo}
            control={<Radio />}
            label="Không"
          />
          <FormControlLabel
            value="beneficiary05HasServicesIMBYes"
            checked={values.beneficiary05HasServicesIMBYes}
            control={<Radio />}
            label="Có"
          />
        </RadioGroup>
      </FormControl>

      <Grow
        in={values.beneficiary05HasServicesIMBYes}
        style={{ transformOrigin: "0 0 0" }}
        {...(values.beneficiary05HasServicesIMBYes ? { timeout: 400 } : {})}
        unmountOnExit
      >
        {extent_option_5}
      </Grow>

      {/* <h1>
        <InputLabel>Liệt kê tất cả tên của vợ/chống (nếu có)</InputLabel>
      </h1> */}

      {/* <TextField
        variant="outlined"
        name="beneficiary11ExSpouseLastName"
        label="1. Họ của vợ/chồng"
        value={values.beneficiary11ExSpouseLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary11ExSpouseFirstName"
        label="Tên của vợ/chồng"
        value={values.beneficiary11ExSpouseFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary11ExSpouseMiddleName"
        label="Tên đệm của vợ/chồng"
        value={values.beneficiary11ExSpouseMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng"}
          value={values.beneficiary11ExSpouseBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary11ExSpouseBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary11ExSpouseBirthPlace"
        label="Nơi sinh của vợ/chồng"
        value={values.beneficiary11ExSpouseBirthPlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary11MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary11MarriageDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary11MarriagePlace"
        label="Nơi kết hôn"
        value={values.beneficiary11MarriagePlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày ly hôn"}
          value={values.beneficiary11DivorceDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary11DivorceDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary11DivorcePlace"
        label="Nơi ly hôn"
        value={values.beneficiary11DivorcePlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary12ExSpouseLastName"
        label="2. Họ của vợ/chồng"
        value={values.beneficiary12ExSpouseLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary12ExSpouseFirstName"
        label="Tên của vợ/chồng"
        value={values.beneficiary12ExSpouseFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary12ExSpouseMiddleName"
        label="Tên đệm của vợ/chồng"
        value={values.beneficiary12ExSpouseMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng"}
          value={values.beneficiary12ExSpouseBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary12ExSpouseBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary12ExSpouseBirthPlace"
        label="Nơi sinh của vợ/chồng"
        value={values.beneficiary12ExSpouseBirthPlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary12MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary12MarriageDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary12MarriagePlace"
        label="Nơi kết hôn"
        value={values.beneficiary12MarriagePlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày ly hôn"}
          value={values.beneficiary12DivorceDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary12DivorceDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary12DivorcePlace"
        label="Nơi ly hôn"
        value={values.beneficiary12DivorcePlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary13ExSpouseLastName"
        label="3. Họ của vợ/chồng"
        value={values.beneficiary13ExSpouseLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary13ExSpouseFirstName"
        label="Tên của vợ/chồng"
        value={values.beneficiary13ExSpouseFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary13ExSpouseMiddleName"
        label="Tên đệm của vợ/chồng"
        value={values.beneficiary13ExSpouseMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng"}
          value={values.beneficiary13ExSpouseBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary13ExSpouseBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary13ExSpouseBirthPlace"
        label="Nơi sinh của vợ/chồng"
        value={values.beneficiary13ExSpouseBirthPlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary13MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary13MarriageDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary13MarriagePlace"
        label="Nơi kết hôn"
        value={values.beneficiary13MarriagePlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày ly hôn"}
          value={values.beneficiary13DivorceDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary13DivorceDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary13DivorcePlace"
        label="Nơi ly hôn"
        value={values.beneficiary13DivorcePlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary14ExSpouseLastName"
        label="4. Họ của vợ/chồng"
        value={values.beneficiary14ExSpouseLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary14ExSpouseFirstName"
        label="Tên của vợ/chồng"
        value={values.beneficiary14ExSpouseFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary14ExSpouseMiddleName"
        label="Tên đệm của vợ/chồng"
        value={values.beneficiary14ExSpouseMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng"}
          value={values.beneficiary14ExSpouseBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary14ExSpouseBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary14ExSpouseBirthPlace"
        label="Nơi sinh của vợ/chồng"
        value={values.beneficiary14ExSpouseBirthPlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.beneficiary14MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary14MarriageDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary14MarriagePlace"
        label="Nơi kết hôn"
        value={values.beneficiary14MarriagePlace}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày ly hôn"}
          value={values.beneficiary14DivorceDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary14DivorceDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary14DivorcePlace"
        label="Nơi ly hôn"
        value={values.beneficiary14DivorcePlace}
        onChange={handleInputChange}
      /> */}

      {/* <h1>
        <InputLabel>
          Địa chỉ của người thụ hưởng trong 5 năm qua. Liệt kê địa chỉ hiện tại
          trước
        </InputLabel>
      </h1>

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
        name="beneficiary21State"
        label="Tiểu bang/quận"
        value={values.beneficiary21State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary21ZipCode"
        label="Zip Code"
        value={values.beneficiary21ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary21FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary21FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary21ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary21ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

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
        name="beneficiary22State"
        label="Tiểu bang/quận"
        value={values.beneficiary22State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary22ZipCode"
        label="Zip Code"
        value={values.beneficiary22ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary22FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary22FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary22ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary22ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

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
        name="beneficiary23State"
        label="Tiểu bang/quận"
        value={values.beneficiary23State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary23ZipCode"
        label="Zip Code"
        value={values.beneficiary23ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary23FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary23FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary23ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary23ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

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
        name="beneficiary24State"
        label="Tiểu bang/quận"
        value={values.beneficiary24State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary24ZipCode"
        label="Zip Code"
        value={values.beneficiary24ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary24FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary24FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary24ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary24ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

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
        name="beneficiary25State"
        label="Tiểu bang/quận"
        value={values.beneficiary25State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary25ZipCode"
        label="Zip Code"
        value={values.beneficiary25ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary25FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary25FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary25ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary25ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}

      {/* <h1>
        <InputLabel>
          Địa chỉ cuối cùng của người thụ hưởng bên ngoài Hoa Kỳ
        </InputLabel>
      </h1>

      <TextField
        variant="outlined"
        name="beneficiary03HouseStreetName"
        label="Số nhà và tên đường"
        value={values.beneficiary03HouseStreetName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary03City"
        label="Thành phố"
        value={values.beneficiary03City}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary03State"
        label="Tiểu bang/quận"
        value={values.beneficiary03State}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary03ZipCode"
        label="Zip Code"
        value={values.beneficiary03ZipCode}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary03FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary03FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary03ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary03ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
      {/* 
      <h1>
        <InputLabel>
          Nơi làm việc của người thụ hưởng trong vòng 5 năm qua. Liệt kê nơi làm
          việc hiện tại trước
        </InputLabel>
      </h1>

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceName"
        label="1. Tên nơi làm việc hiện tại"
        value={values.beneficiary41WorkplaceName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceAddress"
        label="Địa chỉ nơi làm việc hiện tại"
        value={values.beneficiary41WorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceCity"
        label="Thành phố"
        value={values.beneficiary41WorkplaceCity}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceState"
        label="Tiểu bang/quận"
        value={values.beneficiary41WorkplaceState}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceZipCode"
        label="Zip Code"
        value={values.beneficiary41WorkplaceZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceProvince"
        label="Khu vực"
        value={values.beneficiary41WorkplaceProvince}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41WorkplaceCountry"
        label="Quốc gia"
        value={values.beneficiary41WorkplaceCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary41Position"
        label="Chức vụ"
        value={values.beneficiary41Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary41FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary41FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary41ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary41ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceName"
        label="2. Tên nơi làm việc"
        value={values.beneficiary42WorkplaceName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceAddress"
        label="Địa chỉ nơi làm việc"
        value={values.beneficiary42WorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceCity"
        label="Thành phố"
        value={values.beneficiary42WorkplaceCity}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceState"
        label="Tiểu bang/quận"
        value={values.beneficiary42WorkplaceState}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceZipCode"
        label="Zip Code"
        value={values.beneficiary42WorkplaceZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceProvince"
        label="Khu vực"
        value={values.beneficiary42WorkplaceProvince}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42WorkplaceCountry"
        label="Quốc gia"
        value={values.beneficiary42WorkplaceCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary42Position"
        label="Chức vụ"
        value={values.beneficiary42Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary42FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary42FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary42ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary42ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceName"
        label="3. Tên nơi làm việc"
        value={values.beneficiary43WorkplaceName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceAddress"
        label="Địa chỉ nơi làm việc"
        value={values.beneficiary43WorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceCity"
        label="Thành phố"
        value={values.beneficiary43WorkplaceCity}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceState"
        label="Tiểu bang/quận"
        value={values.beneficiary43WorkplaceState}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceZipCode"
        label="Zip Code"
        value={values.beneficiary43WorkplaceZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceProvince"
        label="Khu vực"
        value={values.beneficiary43WorkplaceProvince}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43WorkplaceCountry"
        label="Quốc gia"
        value={values.beneficiary43WorkplaceCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary43Position"
        label="Chức vụ"
        value={values.beneficiary43Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary43FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary43FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary43ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary43ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceName"
        label="4. Tên nơi làm việc"
        value={values.beneficiary44WorkplaceName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceAddress"
        label="Địa chỉ nơi làm việc"
        value={values.beneficiary44WorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceCity"
        label="Thành phố"
        value={values.beneficiary44WorkplaceCity}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceState"
        label="Tiểu bang/quận"
        value={values.beneficiary44WorkplaceState}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceZipCode"
        label="Zip Code"
        value={values.beneficiary44WorkplaceZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceProvince"
        label="Khu vực"
        value={values.beneficiary44WorkplaceProvince}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44WorkplaceCountry"
        label="Quốc gia"
        value={values.beneficiary44WorkplaceCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary44Position"
        label="Chức vụ"
        value={values.beneficiary44Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary44FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary44FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary44ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary44ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceName"
        label="5. Tên nơi làm việc"
        value={values.beneficiary45WorkplaceName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceAddress"
        label="Địa chỉ nơi làm việc"
        value={values.beneficiary45WorkplaceAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceCity"
        label="Thành phố"
        value={values.beneficiary45WorkplaceCity}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceState"
        label="Tiểu bang/quận"
        value={values.beneficiary45WorkplaceState}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceZipCode"
        label="Zip Code"
        value={values.beneficiary45WorkplaceZipCode}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceProvince"
        label="Khu vực"
        value={values.beneficiary45WorkplaceProvince}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45WorkplaceCountry"
        label="Quốc gia"
        value={values.beneficiary45WorkplaceCountry}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary45Position"
        label="Chức vụ"
        value={values.beneficiary45Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary45FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary45FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary45ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary45ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h1>
        <InputLabel>
          Chức vụ công việc ở nước ngoài nếu không có ở trên
        </InputLabel>
      </h1>

      <TextField
        variant="outlined"
        name="beneficiary05WorkName"
        label="Tên nơi làm việc"
        value={values.beneficiary05WorkName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary05WorkAddress"
        label="Địa chỉ nơi làm việc"
        value={values.beneficiary05WorkAddress}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary05Position"
        label="Chức vụ"
        value={values.beneficiary05Position}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Từ Tháng/năm"}
          value={values.beneficiary05FromMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary05FromMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Đến Tháng/năm"}
          value={values.beneficiary05ToMonthYear}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary05ToMonthYear", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}

      {/* <h1>
        <InputLabel>Liệt kê tất cả tên các con của người thụ hưởng</InputLabel>
      </h1>

      <TextField
        variant="outlined"
        name="beneficiary61ChildrenLastName"
        label="1. Họ:"
        value={values.beneficiary61ChildrenLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary61ChildrenFirstName"
        label="Tên:"
        value={values.beneficiary61ChildrenFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary61ChildrenMiddleName"
        label="Tên đệm:"
        value={values.beneficiary61ChildrenMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày tháng năm sinh"}
          value={values.beneficiary61ChildrenBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary61ChildrenBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary61ChildrenBirthPlace"
        label="Nơi sinh:"
        value={values.beneficiary61ChildrenBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary62ChildrenLastName"
        label="2. Họ:"
        value={values.beneficiary62ChildrenLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary62ChildrenFirstName"
        label="Tên:"
        value={values.beneficiary62ChildrenFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary62ChildrenMiddleName"
        label="Tên đệm:"
        value={values.beneficiary62ChildrenMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày tháng năm sinh"}
          value={values.beneficiary62ChildrenBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary62ChildrenBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary62ChildrenBirthPlace"
        label="Nơi sinh:"
        value={values.beneficiary62ChildrenBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary63ChildrenLastName"
        label="3. Họ:"
        value={values.beneficiary63ChildrenLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary63ChildrenFirstName"
        label="Tên:"
        value={values.beneficiary63ChildrenFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary63ChildrenMiddleName"
        label="Tên đệm:"
        value={values.beneficiary63ChildrenMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày tháng năm sinh"}
          value={values.beneficiary63ChildrenBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary63ChildrenBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary63ChildrenBirthPlace"
        label="Nơi sinh:"
        value={values.beneficiary63ChildrenBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary64ChildrenLastName"
        label="4. Họ:"
        value={values.beneficiary64ChildrenLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary64ChildrenFirstName"
        label="Tên:"
        value={values.beneficiary64ChildrenFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary64ChildrenMiddleName"
        label="Tên đệm:"
        value={values.beneficiary64ChildrenMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày tháng năm sinh"}
          value={values.beneficiary64ChildrenBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary64ChildrenBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary64ChildrenBirthPlace"
        label="Nơi sinh:"
        value={values.beneficiary64ChildrenBirthPlace}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary65ChildrenLastName"
        label="5. Họ:"
        value={values.beneficiary65ChildrenLastName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary65ChildrenFirstName"
        label="Tên:"
        value={values.beneficiary65ChildrenFirstName}
        onChange={handleInputChange}
      />

      <TextField
        variant="outlined"
        name="beneficiary65ChildrenMiddleName"
        label="Tên đệm:"
        value={values.beneficiary65ChildrenMiddleName}
        onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày tháng năm sinh"}
          value={values.beneficiary65ChildrenBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("beneficiary65ChildrenBirthDate", date)
            )
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        variant="outlined"
        name="beneficiary65ChildrenBirthPlace"
        label="Nơi sinh:"
        value={values.beneficiary65ChildrenBirthPlace}
        onChange={handleInputChange}
      /> */}

      {/*           
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của cha"}
          value={values.sponsor1FatherBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor1FatherBirthDate", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của mẹ"}
          value={values.sponsor1MotherBirthDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor1MotherBirthDate", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor11BirthDateExSpouse}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor11BirthDateExSpouse", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor11MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor11MarriageDate", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor12BirthDateExSpouse}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor12BirthDateExSpouse", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor12MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor12MarriageDate", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày sinh của vợ/chồng cũ"}
          value={values.sponsor13BirthDateExSpouse}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor13BirthDateExSpouse", date)
            )
          }
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

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          label={"Ngày kết hôn"}
          value={values.sponsor13MarriageDate}
          onChange={(date) =>
            handleInputChange(
              convertToEventParam("sponsor13MarriageDate", date)
            )
          }
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
            control={
              <Checkbox
                name="beneficiaryProfileFormI94"
                checked={values.beneficiaryProfileFormI94}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfileFormI94",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"1. Form I-94 và bản sao hộ chiếu của từng người"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfileBirthCertificate"
                checked={values.beneficiaryProfileBirthCertificate}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfileBirthCertificate",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={
              "2. Giấy khai sinh (hoặc bất kỳ giấy tờ nào thay thế) của từng người"
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfileI20Documents"
                checked={values.beneficiaryProfileI20Documents}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfileI20Documents",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={
              "3. Tất cả những biên nhận, quyết định từ chối hồ sơ, giấy tờ i-20… trước đây của từng người"
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfileCriminalRecord"
                checked={values.beneficiaryProfileCriminalRecord}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfileCriminalRecord",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"4. Hồ sơ phạm tội (nếu có) của từng người"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfilePassportPhotos"
                checked={values.beneficiaryProfilePassportPhotos}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfilePassportPhotos",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"5. 02 tấm hình passport của từng người"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfilePreviousDivorce"
                checked={values.beneficiaryProfilePreviousDivorce}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfilePreviousDivorce",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"6. Giấy tờ ly hôn trước đây của người thụ hưởng"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="beneficiaryProfilePapersRelated"
                checked={values.beneficiaryProfilePapersRelated}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "beneficiaryProfilePapersRelated",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"7. Giấy tờ liên quan đến việc đổi tên (nếu có)"}
          />
        </FormGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="sponsorProfileLetter">Đương đơn:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfileLetterConfirmation"
                checked={values.sponsorProfileLetterConfirmation}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfileLetterConfirmation",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={
              "8. Thư xác nhận của nơi làm việc về việc đương đơn đang làm việc"
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfileBankStatement"
                checked={values.sponsorProfileBankStatement}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfileBankStatement",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"9. Sao kê tài khoản ngân hàng trong 3 năm gần nhất"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfileTaxReturns"
                checked={values.sponsorProfileTaxReturns}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfileTaxReturns",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"10. Giấy tờ khai thuế trong 3 năm gần nhất"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfileW2PaystubsChecks"
                checked={values.sponsorProfileW2PaystubsChecks}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfileW2PaystubsChecks",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"11. W-2, Paystubs, và Checks trong vòng 3 tháng"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfileDocumentsShowing"
                checked={values.sponsorProfileDocumentsShowing}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfileDocumentsShowing",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={
              "12. Giấy tờ thể hiện là công dân Mỹ (hộ chiếu Mỹ, giấy chứng nhận quốc tịch)"
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfilePassportPhotos"
                checked={values.sponsorProfilePassportPhotos}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfilePassportPhotos",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"13. 02 tấm hình hộ chiếu"}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sponsorProfilePreviousDivorce"
                checked={values.sponsorProfilePreviousDivorce}
                onChange={(e) =>
                  handleInputChange(
                    convertToDefEventParameter(
                      "sponsorProfilePreviousDivorce",
                      e.target.checked
                    )
                  )
                }
              />
            }
            label={"14. Giấy tờ ly hôn trước đây"}
          />
        </FormGroup>
      </FormControl> */}
    </>
  );
};
