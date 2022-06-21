import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const JobInformation11 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>5. THÔNG TIN CÔNG VIỆC/ TRÌNH ĐỘ HỌC VẤN:</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Đơn vị công tác/ Trường:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Chức vụ/ Ngành học (viết bằng tiếng anh):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <InputLabel>Thời gian công tác/ học (ngày tháng năm):</InputLabel>

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

      <FormControl>
        <FormLabel id="">Mô tả công việc (viết bằng tiếng anh):</FormLabel>
        <TextareaAutosize variant="outlined"
          minRows={5}
          name=""
        // value={values.sponsorQuestion1ExplainQuestion}
        // onChange={handleInputChange}
        />
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Mức thu nhập hàng tháng:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ công ty/Trường:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số ĐT công ty/ Trường:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Họ tên giám đốc công ty:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </>
  )
}