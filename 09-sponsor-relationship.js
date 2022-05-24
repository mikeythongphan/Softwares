import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorRelationship = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>9. Relationship</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Relationship</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="In what city did you meet the first time? Enter City Only!"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">It is your responsibility to get your petition to the USCIS within two years
of the last time the two of you have physically met.</FormLabel>
<FormLabel id="">Have you physically seen your fiancé in person within two years of filing this petition, 
and have you allowed adequate time to get all your documents to the USCIS 
before that two year period expires?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Were you introduced to your partner by an international marriage broker (IMB)?</FormLabel>
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
