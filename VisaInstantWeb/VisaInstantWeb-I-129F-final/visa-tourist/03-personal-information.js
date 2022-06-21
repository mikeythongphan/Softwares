import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Grow, Box, FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const PersonalInformation03 = (props) => {

  const { values, handleInputChange } = props;

  const extent_option_1 = (
    <Box>
      <TextField variant="outlined"
        name=""
        label="Số hộ chiếu:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>1. THÔNG TIN CÁ NHÂN</InputLabel></h5>

      <FormControl>
        <FormLabel id="timeOutside">Tình trạng hôn nhân :</FormLabel>
        <RadioGroup
          row
          name="timeOutside"
          onChange={handleInputChange}
        >
          <FormControlLabel value="timeOutsideLessThan6M" checked={values.timeOutsideLessThan6M} control={<Radio />} label="Độc thân" />
          <FormControlLabel value="timeOutsideLessThan1Y" checked={values.timeOutsideLessThan1Y} control={<Radio />} label="Kết hôn" />
          <FormControlLabel value="timeOutsideLessThan2Y" checked={values.timeOutsideLessThan2Y} control={<Radio />} label="Góa" />
          <FormControlLabel value="timeOutsideLessThan3Y" checked={values.timeOutsideLessThan3Y} control={<Radio />} label="Ly hôn" />
          <FormControlLabel value="timeOutsideLessThan4Y" checked={values.timeOutsideLessThan4Y} control={<Radio />} label="Ly thân" />
        </RadioGroup>
      </FormControl>

      <FormLabel id="">Nếu đã kết hôn/ ly thân/ ly hôn, xin cung cấp:</FormLabel>

      <TextField variant="outlined"
        name=""
        label="Họ tên chồng/vợ:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày sinh:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Nơi sinh:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Quốc tịch:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <FormLabel id="">Nếu đã ly hôn, xin cung cấp thêm:</FormLabel>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày đăng ký kết hôn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày làm thủ tục ly hôn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <FormControl>
        <FormLabel id="taxFill">Bạn đã từng bị mất hay bị đánh cắp hộ chiếu:</FormLabel>
        <RadioGroup
          row
          name="taxFill"
          onChange={handleInputChange}
        >
          <FormControlLabel value="taxFillNo" checked={values.taxFillNo} control={<Radio />} label="Không" />
          <FormControlLabel value="taxFillYes" checked={values.taxFillYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.taxFillYes}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.taxFillYes ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1}</Grow>
    </>
  )
}