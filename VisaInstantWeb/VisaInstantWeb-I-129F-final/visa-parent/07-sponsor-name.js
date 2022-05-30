import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorName = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Principal Immigrant Information</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="First Name (Given Name)"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Middle Name"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Last Name (Family Name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Daytime Telephone Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Daytime Telephone Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Email Address"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Date of Birth"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Alien Registration Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country of Citizenship or Nationality"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />
    </>
  )
}