import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const JobInformation12 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>5. THÔNG TIN CÔNG VIỆC/ TRÌNH ĐỘ HỌC VẤN:</InputLabel></h5>

      <FormControl>
        <FormLabel id="retryPermit">Trong 5 năm trở lại đây, bạn có làm công việc nào khác không:</FormLabel>
        <RadioGroup
          row
          name="retryPermit"
          onChange={handleInputChange}
        >
          <FormControlLabel value="retryPermitNo" checked={values.retryPermitNo} control={<Radio />} label="Không" />
          <FormControlLabel value="retryPermitYes" checked={values.retryPermitYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Đơn vị công tác:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Chức vụ:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <InputLabel>Thời gian công tác (ngày tháng năm):</InputLabel>

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

      <TextField variant="outlined"
        name=""
        label="Mô tả công việc:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ công ty:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số ĐT công ty:"
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