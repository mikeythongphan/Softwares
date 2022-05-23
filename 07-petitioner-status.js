import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const PetitionerStatus = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Petitioner's Information (The US Citizen) Continued</InputLabel></h1>

			<TextField variant="outlined"
				name=""
				label="Your Social Security Number"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<FormLabel id="">You are a US citizen through (select only one box):</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Birth in the US" />
					<FormControlLabel value="" control={<Radio />} label="US citizen parents" />
					<FormControlLabel value="" control={<Radio />} label="Naturalization" />
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel id="">Have you obtained Naturalization or Citizenship in your own name?</FormLabel>
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
				<FormLabel id="">Have you ever filed Form I-129F for anyone else?</FormLabel>
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
				<FormLabel id="">Did you meet your fiance through the serices of an International Marriage Broker (IMB)?</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Yes" />
					<FormControlLabel value="" control={<Radio />} label="No" />
				</RadioGroup>
			</FormControl>

			<InputLabel>Petitioner's Information (The US Citizen) Continued</InputLabel>

			<TextField variant="outlined"
				name=""
				label="City"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>
		</>
	)
}