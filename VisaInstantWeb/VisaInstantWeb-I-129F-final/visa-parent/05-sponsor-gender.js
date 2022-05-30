import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorGender = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Sponsor's Information</InputLabel></h5>

      <FormControl>
        <FormLabel id="">Are you sponsoring the principal immigrant named?</FormLabel>
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
        <FormLabel id="">Are you sponsoring the following family members immigrating at the same time or within six months of the principal immigrant named. (Do not include any relative listed on a separate visa petition.)</FormLabel>
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
        <FormLabel id="">Are you sponsoring the following family members who are immigrating more than six months after the principal immigrant.</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Male" />
          <FormControlLabel value="" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </>
  )
}