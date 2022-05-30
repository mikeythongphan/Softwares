import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorStatus = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Sponsor's Information</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Status</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Your Social Security Number"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Marital Status</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="US Citizen" />
          <FormControlLabel value="" control={<Radio />} label="US National" />
          <FormControlLabel value="" control={<Radio />} label="Lawful Permanent Resident (Green Card)" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Alien Number, if any"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country of Domicile"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

<FormControl>
        <FormLabel id="">Are you currently on active duty in the US Armed Forces?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Are you currently married?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Do you have dependent children?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Have you been previously married?lor</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

    </>
  )
}