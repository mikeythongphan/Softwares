import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorImmigration = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>14. Immigration</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Immigration Proceedings</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Has your alien beneficiary been under immigration proceedings?</FormLabel>
        <FormLabel id="">(in trouble with the immigration authorities)</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Where? Enter City and State or Country"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"When? Estimate if you don't know the exact date. format mm/dd/yyyy"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <FormControl>
        <FormLabel id="">What type of proceeding was it? Check all that apply.</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Removal" />
          <FormControlLabel value="" control={<Radio />} label="Exclusion/Deportation" />
          <FormControlLabel value="" control={<Radio />} label="Rescission" />
          <FormControlLabel value="" control={<Radio />} label="Judicial Proceedings (choose this option if none of the others apply)" />
        </RadioGroup>
      </FormControl>

      <InputLabel>Attach to your petition a copy of the official documentation relating to this proceeding.</InputLabel>
    </>
  )
}