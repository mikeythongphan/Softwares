import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const BeneficiaryEmployment = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Beneficiary's Information (The US Citizen) Continued</InputLabel></h1>
			<h1><InputLabel>Employment History for last 5 years</InputLabel></h1>

			<TextField variant="outlined"
				name=""
				label="Name of Employer/Company"
			//    value={values.applicantGivenName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Street Address"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="City or Town"
			//    value={values.applicantFamilyName}
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
				label="Occupation Name"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Employment Start Date"}
					// value={values.applicantDateOfBirth}
					// onChange={date => handleInputChange(convertToEventParam("", date))}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Employment End Date"}
					// value={values.applicantDateOfBirth}
					// onChange={date => handleInputChange(convertToEventParam("", date))}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

			<InputLabel>Add Additional Employment Information</InputLabel>
		</>
	)
}