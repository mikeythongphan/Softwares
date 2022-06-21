import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const JobInformation13 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>5. THÔNG TIN CÔNG VIỆC/ TRÌNH ĐỘ HỌC VẤN:</InputLabel></h5>

      <InputLabel>Học vấn: Cung cấp bậc học cao nhất của bạn (trường hợp là hoc sinh thì cung cấp bậc học trước bậc học hiện tại):</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Trường:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Ngành học:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <InputLabel>Thời gian học (ngày/tháng/năm):</InputLabel>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Từ ngày:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Đến ngày:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <InputLabel style={{ fontStyle: 'italic', color: 'blue' }}>Cám ơn quý khách hàng đã cung cấp thông tin!</InputLabel>

      <br />
    </>
  )
}