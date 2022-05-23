import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const BeneficiaryBackground = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Beneficiary's Information (The Foreign National) Continued</InputLabel></h1>

			<FormControl>
				<FormLabel id="">Gender</FormLabel>
				<RadioGroup
					row
					name=""
					// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Male" />
					<FormControlLabel value="" control={<Radio />} label="Female" />
				</RadioGroup>
			</FormControl>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Date of Birth (mm/dd/yyyy)"}
					// value={values.applicantDateOfBirth}
					// onChange={date => handleInputChange(convertToEventParam("", date))}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

			<FormControl>
				<FormLabel id="">Marital Status</FormLabel>
				<RadioGroup
					row
					name=""
					// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Single" />
					<FormControlLabel value="" control={<Radio />} label="Married" />
					<FormControlLabel value="" control={<Radio />} label="Divorced" />
					<FormControlLabel value="" control={<Radio />} label="Widowed" />
				</RadioGroup>
			</FormControl>

			<TextField variant="outlined"
				name=""
				label="City of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Province or State of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<FormLabel id="">Has the Beneficiary been previously married?</FormLabel>
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
				<FormLabel id="">Has the Beneficiary ever been in the US?</FormLabel>
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
				<FormLabel id="">Is the Beneficiary currently in the US?</FormLabel>
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