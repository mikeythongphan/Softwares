import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const EmploymentName = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Applicant's Information</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="First Name (given name)"
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
        label="Last Name(family name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Other Names Used, including aliases, maiden name, and nicknames?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Daytime phone number with area code"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Email Address"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="City of Birth"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Province or State of Birth"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country of Birth"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">I am appying for (Select only one box):</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Initial permission to accept employment" />
          <FormControlLabel value="" control={<Radio />} label="Replacement of lost, stolen, or damaged employment
          authorization document, or correction of my employment authorization document NOT DUE to U.S. Citizenship and Immigration Services (USCIS)
          error." />
          <FormControlLabel value="" control={<Radio />} label="Renewal of my permission to accept employment." />
        </RadioGroup>
      </FormControl>
    </>
  )
}