import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const Interpreter = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Interpreter's Information (The Foreign National) Continued</InputLabel></h1>
			<InputLabel>I can read and understand English, and I have read and understand every question and instructions on this petition and my answer to every question.</InputLabel>
			<InputLabel>My interpreter named, read to me very question and instruction on this petition and my answer to every question in XXXXXXXXX, a language in which I am fluent, and I </InputLabel>

			<InputLabel>Interpreter's Full Name</InputLabel>

			<TextField variant="outlined"
				name=""
				label="Interpreter's First Name (Given Name)"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Interpreter's Last Name (Family Name)"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Interpreter's Business or Organization Name, if any"
			//    value={values.applicantFamilyName}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Apt" />
					<FormControlLabel value="" control={<Radio />} label="Ste" />
					<FormControlLabel value="" control={<Radio />} label="Flr" />
					<FormControlLabel value="" control={<Radio />} label="Number" />
				</RadioGroup>
			</FormControl>

			<TextField variant="outlined"
				name=""
				label="Street Address"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="City or Town"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Province"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Zip Code"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Daytime phone number with area code"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Email Address"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>
		</>
	)
}