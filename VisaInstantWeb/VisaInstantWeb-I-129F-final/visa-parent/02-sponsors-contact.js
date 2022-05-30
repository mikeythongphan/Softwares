import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorsContact = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Sponsor's Information</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsors Contact Information</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Mailing Street Address</FormLabel>
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
        label="State"
      //    value={values.applicantFamilyName}
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