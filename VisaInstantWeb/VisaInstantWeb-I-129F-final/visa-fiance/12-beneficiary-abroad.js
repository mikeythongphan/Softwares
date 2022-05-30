import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const BeneficiaryAbroad = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Beneficiary's Information (The Foreign National) Continued</InputLabel></h1>
			<h1><InputLabel>EAddress in the US Where Beneficiary Intends to</InputLabel></h1>

			<FormControl>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Apt" />
					<FormControlLabel value="" control={<Radio />} label="Ste" />
					<FormControlLabel value="" control={<Radio />} label="Flo" />
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
				label="State"
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

			<FormControl>
				<FormLabel id="">Is Beneficiary's language uses Latin Alphabet?</FormLabel>
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
				<FormLabel id="">Other Names Used, including aliases, maiden name, and nicknames?</FormLabel>
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