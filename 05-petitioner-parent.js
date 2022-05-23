import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, List, ListItem, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";

export const PetitionerParent = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Petitioner's Information (The US Citizen) Continued</InputLabel></h1>

			<h1><InputLabel>Your Parent 1's Information</InputLabel></h1>

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

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Date of Birth (mm/dd/yyyy)"}
					// value={values.applicantDateOfBirth}
					// onChange={date => handleInputChange(convertToEventParam("", date))}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

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

			<FormControl>
				<FormLabel id="">Country of Birth</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

			<TextField variant="outlined"
				name=""
				label="Country of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="City of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country of Residence"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<h1><InputLabel>The sponsor is the U.S. citizen.</InputLabel></h1>

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

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Date of Birth (mm/dd/yyyy)"}
					// value={values.applicantDateOfBirth}
					// onChange={date => handleInputChange(convertToEventParam("", date))}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

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

			<FormControl>
				<FormLabel id="">Country of Birth</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

			<TextField variant="outlined"
				name=""
				label="City of Birth"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Country of Residence"
			//    value={values.applicantAlienNumber}
			//    onChange={handleInputChange}
			/>
		</>
	)
}