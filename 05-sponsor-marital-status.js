import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorMaritalStatus = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>5. Marital Status</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Marital Status</InputLabel></h1>

      <FormControl>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Married" />
          <FormControlLabel value="" control={<Radio />} label="Single (never married)" />
          <FormControlLabel value="" control={<Radio />} label="Widowed" />
          <FormControlLabel value="" control={<Radio />} label="Divorced" />
        </RadioGroup>
      </FormControl>

<InputLabel>You cannot petition a K1 Fiancée Visa if you are currently married.</InputLabel>
<InputLabel>If you are already married to the person you are petitioning, you will need to petition for a Spousal Visa instead.</InputLabel>
<InputLabel>Did you select "Married" above by mistake?</InputLabel>

      <FormControl>
        <FormLabel id="">Do you have any children under 18 years of age?</FormLabel>
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
