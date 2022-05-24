import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorLanguages = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>15. Languages</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>All questions are about the Alien (foreign citizen).</InputLabel></h1>
      <h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>Provide a List of Languages You Speak</InputLabel></h1>
	<h1><InputLabel style={{ backgroundColor: 'DarkSeaRed', color: 'Red' }}>Please enter only one language per line!</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Language 1"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

    </>
  )
}
