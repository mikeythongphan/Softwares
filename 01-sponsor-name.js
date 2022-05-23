import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorName = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>1. Name</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's name and gender</InputLabel></h1>
      <h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>The sponsor is the U.S. citizen.</InputLabel></h1>

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

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Check if Does Not Apply" />
        </FormGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Last Name(family name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Daytime phone number with area code"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Sponsor's Gender:</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Male" />
          <FormControlLabel value="" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Have you ever used another name including a maiden name but not including nicknames?</FormLabel>
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