import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorStatus = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>4. Status</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Status</InputLabel></h1>
      <h5><InputLabel style={{ backgroundColor: 'DarkSeaRed', color: 'Red' }}>Do not write your answers in all capital letters and never use any type of non-English characters.</InputLabel></h5>

      <FormControl>
        <FormLabel id="">What is your current status?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="U.S. Citizen" />
          <FormControlLabel value="" control={<Radio />} label="Permanent Resident (green card holder)" />
          <FormControlLabel value="" control={<Radio />} label="U.S. National born in American Samoa, Swains Island or U.S. Minor Outlying Island" />
        </RadioGroup>
      </FormControl>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Biographic Data</InputLabel></h1>

      <InputLabel>Height</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Feet"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Inches"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <InputLabel>Weight</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Pounds"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Ethnicity</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Not Hispanic or Latino" />
          <FormControlLabel value="" control={<Radio />} label="Hispanic or Latino" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Race Select all that apply
        </FormLabel>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="White" />
          <FormControlLabel value="" control={<Checkbox />} label="Asian" />
          <FormControlLabel value="" control={<Checkbox />} label="Black or African American" />
          <FormControlLabel value="" control={<Checkbox />} label="American Indian or Alaska Native" />
          <FormControlLabel value="" control={<Checkbox />} label="Native Hawaiian or Other Pacific Islander" />
        </FormGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Hair Color</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Black" />
          <FormControlLabel value="" control={<Radio />} label="Brown" />
          <FormControlLabel value="" control={<Radio />} label="Blond" />
          <FormControlLabel value="" control={<Radio />} label="Gray" />
          <FormControlLabel value="" control={<Radio />} label="White" />
          <FormControlLabel value="" control={<Radio />} label="Red" />
          <FormControlLabel value="" control={<Radio />} label="Sandy" />
          <FormControlLabel value="" control={<Radio />} label="Bald (No Hair)" />
          <FormControlLabel value="" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Eye Color</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Black" />
          <FormControlLabel value="" control={<Radio />} label="Blue" />
          <FormControlLabel value="" control={<Radio />} label="Brown" />
          <FormControlLabel value="" control={<Radio />} label="Gray" />
          <FormControlLabel value="" control={<Radio />} label="Green" />
          <FormControlLabel value="" control={<Radio />} label="Hazel" />
          <FormControlLabel value="" control={<Radio />} label="Maroon" />
          <FormControlLabel value="" control={<Radio />} label="Pink" />
          <FormControlLabel value="" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  )
}