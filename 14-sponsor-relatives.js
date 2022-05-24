import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorRelatives = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>17. Relatives</InputLabel></h5>

      <FormControl>
        <FormLabel id="">Do you, the Alien, have a Child, Brother or Sister living in the United States?</FormLabel>
	<FormLabel id="">Do not include step children.</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Relative 1</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Relative's First and Middle Names"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Relative's Last Name (family name)"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">If there is a suffix after the name such as Jr. or III, put that here after the last name.</FormLabel>
<FormLabel id="">Alien's relationship to this person.</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

			<FormControl>
				<FormLabel id="">Relative's Status</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>
    </>
  )
}
