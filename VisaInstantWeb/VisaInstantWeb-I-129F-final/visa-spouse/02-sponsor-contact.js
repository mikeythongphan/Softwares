import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorContact = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>1. Name</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's name and gender</InputLabel></h1>
      <h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>The sponsor is the U.S. citizen.</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Email address. Should be valid for at least the next year."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <InputLabel>Contact customer service to change your email</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Mobile number for text updates from USCIS."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Social Security Number (Format: 123-45-6789)"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="USCIS Online Account Number. Uncommon"
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
        label="Sponsor's A#. Uncommon ?"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Is your mailing address different from your physical address?</FormLabel>
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