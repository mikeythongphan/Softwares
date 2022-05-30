import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const EmploymentContact = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Applicant's Information</InputLabel></h5>

      <FormControl>
        <FormLabel id="">Gender</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Male" />
          <FormControlLabel value="" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Date of Birth (mm/dd/yyyy)"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

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
        <FormLabel id="">Marital Status</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Single" />
          <FormControlLabel value="" control={<Radio />} label="Married" />
          <FormControlLabel value="" control={<Radio />} label="Divorced" />
          <FormControlLabel value="" control={<Radio />} label="Widowed" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Alien Registration Number (Greend Card)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Have you previously filed Form I-765?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Has the Social Security Administration ever issued a Social Security card to you?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Do you want the SSA to issue you a Social Security card?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Consent for Disclosure: I authorize disclosure of information from this application to the SSA as required for the purpose of assigning me an SSN and issuing me a Social Security Card</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </>
  )
}