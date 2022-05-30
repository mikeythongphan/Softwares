import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorInformation = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Sponsor's Information</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="I am currently employed as a/an:"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Name of Employer 1"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Name of Employer 2, if applicable"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Self-Employed as a/an (Occupation)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Retired Since (mm/dd/yyyy)"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Unemployed Since (mm/dd/yyyy)"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="My current individual annual income is:"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="My current Annual Household Income is:"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <InputLabel>My total income (adjusted gross income on Internal Revenue Service (IRS) Form 1040EZ) as
        reported on my Federal income Tax returns for the most recent three years was:</InputLabel>

      <InputLabel>Total Income</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Tax Year Most Recent"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="2nd Most Recent"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="3rd Most Recent"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Were you required to file a Federal income tax return as the income was below the IRS required level?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>
    </>
  )
}