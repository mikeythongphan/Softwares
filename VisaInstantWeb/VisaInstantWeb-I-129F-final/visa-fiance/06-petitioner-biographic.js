import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Checkbox, FormGroup } from '@mui/material';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

export const PetitionerBiographic = (props) => {

	// const {values, handleInputChange, convertToEventParam} = props;

	return (
		<>
			<h1><InputLabel>Petitioner's Information (The US Citizen) Continued</InputLabel></h1>

			<h1><InputLabel>Biographic Information</InputLabel></h1>

			<FormControl>
				<FormLabel id="">Ethnicity</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Not Hispanic or Latino" />
					<FormControlLabel value="" control={<Radio />} label="Hispanic or Latino" />
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel id="">Race Select all that apply.</FormLabel>
				<FormGroup>
					<FormControlLabel value="" control={<Checkbox />} label="White" />
					<FormControlLabel value="" control={<Checkbox />} label="Asian" />
					<FormControlLabel value="" control={<Checkbox />} label="Black or African American" />
					<FormControlLabel value="" control={<Checkbox />} label="American Indian or Alaska Native" />
					<FormControlLabel value="" control={<Checkbox />} label="Native Hawaiian or Other Pacific Islander" />
				</FormGroup>
			</FormControl>

			<InputLabel>Height</InputLabel>

			<TextField variant="outlined"
				name=""
				label="Feet"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<TextField variant="outlined"
				name=""
				label="Inches"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<InputLabel>Weight</InputLabel>

			<TextField variant="outlined"
				name=""
				label="Pound"
			//    value={values.applicantMiddleName}
			//    onChange={handleInputChange}
			/>

			<FormControl>
				<FormLabel id="">Hair Color</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Black" />
					<FormControlLabel value="" control={<Radio />} label="Brown" />
					<FormControlLabel value="" control={<Radio />} label="Blond" />
					<FormControlLabel value="" control={<Radio />} label="Gray" />
					<FormControlLabel value="" control={<Radio />} label="White" />
					<FormControlLabel value="" control={<Radio />} label="Red" />
					<FormControlLabel value="" control={<Radio />} label="Sandy" />
					<FormControlLabel value="" control={<Radio />} label="Bald (No Hair)" />
					<FormControlLabel value="" control={<Radio />} label="Other" />
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel id="">Eye Color</FormLabel>
				<RadioGroup
					row
					name=""
				// onChange={handleInputChange}
				>
					<FormControlLabel value="" control={<Radio />} label="Black" />
					<FormControlLabel value="" control={<Radio />} label="Blue" />
					<FormControlLabel value="" control={<Radio />} label="Brown" />
					<FormControlLabel value="" control={<Radio />} label="Gray" />
					<FormControlLabel value="" control={<Radio />} label="Green" />
					<FormControlLabel value="" control={<Radio />} label="Hazel" />
					<FormControlLabel value="" control={<Radio />} label="Maroon" />
					<FormControlLabel value="" control={<Radio />} label="Pink" />
					<FormControlLabel value="" control={<Radio />} label="Other" />
				</RadioGroup>
			</FormControl>

			<h1><InputLabel>Criminal Information</InputLabel></h1>

			<FormControl>
				<FormLabel id="">Have you ever been subject to temporary or permanent protection or restraining order (civil or criminal)?</FormLabel>
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
				<FormLabel id="">Have you EVER been arrested or convicted of any crime relating to domestic violence?</FormLabel>
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
				<FormLabel id="">Have you EVER been arrested or convicted of any crime such as Homicide, murder, manslaughter or rape?</FormLabel>
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
				<FormLabel id="">Three or more arrests or convictions, not from a single act, for crimes relating to a controlled substance or</FormLabel>
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