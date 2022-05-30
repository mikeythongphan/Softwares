import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { color } from '@mui/system';

export const PetitionerContact = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Petitioner's Information (The US Citizen)</InputLabel></h5>
			<h1><InputLabel style={{ color: 'DarkGray' }}>Petitioner's Contact</InputLabel></h1>
			<h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>The sponsor is the U.S. citizen.</InputLabel></h1>

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
				<FormLabel id="applicant-other-names-used">Other Names Used, including aliases, maiden name, and nicknames?</FormLabel>
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
				label="Email Address"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<FormLabel id="applicant-related-fiance">Are you related to the fiance?</FormLabel>
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