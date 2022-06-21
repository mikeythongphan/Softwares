import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const FamilyInformation08 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>4. THÔNG TIN GIA ĐÌNH:</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Họ tên cha:"
      // value={values.nameOfDHS}
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
        label="Địa chỉ hiện tại:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Họ tên mẹ:"
      // value={values.nameOfDHS}
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
        label="Địa chỉ hiện tạ:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </>
  )
}