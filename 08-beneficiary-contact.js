import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const BeneficiaryContact = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Beneficiary's Information (The Foreign National) Continued</InputLabel></h1>
			<InputLabel>Beneficiary's Contact</InputLabel>

			<TextField variant="outlined"
				name=""
				label="First Name (given name)"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Middle Name"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Last Name(family name)"
			//    value={values.applicantFamilyName}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<FormLabel id="">Other Names Used, including aliases, maiden name, and nicknames?</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Yes" />
					<FormControlLabel value="" control={<Radio />} label="No" />
				</RadioGroup>
			</FormControl>

			<TextField variant="outlined"
				name=""
				label="Daytime phone number with area code"
			//    value={values.applicantFamilyName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Email Address"
			//    value={values.applicantFamilyName}
			//    onChange={handleInputChange}
			/>
		</>
	)
}