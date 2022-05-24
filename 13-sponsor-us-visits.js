import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorUSVisits = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>16. U.S. Visits</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>All questions are about the Alien (foreign citizen).</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you ever been refused a U.S. Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?</FormLabel>
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
        label="Explain all denied admissions to the United States."
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Has the alien ever visited or lived in the United States?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

<h1><InputLabel style={{ color: 'DarkGray' }}>List your last 3 visits to the United States.</InputLabel></h1>


      <TextField variant="outlined"
        name=""
        label="Primary city and state where you stayed."
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">Type of visa you used to enter the United States.</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

      <TextField variant="outlined"
        name=""
        label="Your Alien Registration Number. You would not have one if you were a tourist."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="None" />
        </FormGroup>
      </FormControl>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Start date of this visit. mm/dd/yyyy"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"End date of this visit. mm/dd/yyyy"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
    </>
  )
}
