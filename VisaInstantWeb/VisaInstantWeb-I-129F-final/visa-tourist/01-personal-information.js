import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const PersonalInformation01 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>1. THÔNG TIN CÁ NHÂN</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Họ tên:"
      // value={values.applicantPhysicalAddressStreet}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="applicantGender">Giới tính:</FormLabel>
        <RadioGroup
          row
          name="applicantGender"
          onChange={handleInputChange}
        >
          <FormControlLabel value="applicantMale" checked={values.applicantMale} control={<Radio />} label="Nam" />
          <FormControlLabel value="applicantFemale" checked={values.applicantFemale} control={<Radio />} label="Nữ" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Tên gọi khác (nếu có)"
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
        label="Quốc tịch khi sinh:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Quốc tịch hiện nay:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số CMND:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày cấp:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Nơi cấp:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số hộ chiếu:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Nơi cấp:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày cấp:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày hết hạn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  )
}