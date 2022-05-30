import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const InterpreterName = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <InputLabel>I can read and understand English, and I have read and understand every question and instructions on this petition and my answer to every question.</InputLabel>
      <InputLabel>My interpreter named, read to me very question and instruction on this petition and my answer to every question in XXXXXXXXX, a language in which I am fluent,</InputLabel>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Interpreter's Full Name</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Interpreter's First Name (Given Name)"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Interpreter's Last Name (Family Name)"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Interpreter's Business or Organization Name, if any"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>Interpreter's Mailing Address</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Street Address</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Apt" />
          <FormControlLabel value="" control={<Radio />} label="Ste" />
          <FormControlLabel value="" control={<Radio />} label="Flr" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Number"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="City or Town"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Province"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Zip Code"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Interpreter's Daytime Telephone Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Email Address"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />
    </>
  )
}