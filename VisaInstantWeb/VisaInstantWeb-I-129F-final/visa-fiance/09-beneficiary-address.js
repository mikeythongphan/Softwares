import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, StepLabel, TextField } from "@mui/material";

export const BeneficiaryAddress = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Beneficiary's Information (The Foreign National) Continued</InputLabel></h1>

			<FormControl>
				<FormLabel id="">Mailing Street Address</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Apt" />
					<FormControlLabel value="" control={<Radio />} label="Ste" />
					<FormControlLabel value="" control={<Radio />} label="Flr" />
					<FormControlLabel value="" control={<Radio />} label="Yes" />
				</RadioGroup>
			</FormControl>

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

			<FormControl>
				<FormLabel id="">Is your mailing address different from your physical address?</FormLabel>
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
				<FormLabel id="">Mailing Street Address</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Apt" />
					<FormControlLabel value="" control={<Radio />} label="Ste" />
					<FormControlLabel value="" control={<Radio />} label="Flr" />
					<FormControlLabel value="" control={<Radio />} label="Yes" />
				</RadioGroup>
			</FormControl>

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

			<InputLabel>Provide all US states and foreign countries you have resided since your 18th birthday ?</InputLabel>

			<InputLabel>Residence 1</InputLabel>
			<TextField variant="outlined"
				name=""
				label="State"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<InputLabel>Residence 2</InputLabel>
			<TextField variant="outlined"
				name=""
				label="State"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>
		</>
	)
}