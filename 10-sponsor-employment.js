import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorEmployment = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>10. Employment</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Your Employment for the Past Five Years (U.S. Citizen Sponsor)</InputLabel></h1>
      
<InputLabel>Enter "Unemployed" or "Retired" if appropriate. More space will be provided as needed to go back 5 years.</InputLabel>
<InputLabel>You will need a source of income or adequate assets to be approved.</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Name of Employer/Company"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Occupation or Job Title"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Number and street. Example: 123 Main Street"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">Apartment, Suite or Floor?</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

      <TextField variant="outlined"
        name=""
        label="Apartment, Suite or Floor Number. Example: 43 or 532-B. Do not add "Apt" or "#"."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Town or City"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">Country</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

			<FormControl>
				<FormLabel id="">U.S. State (Select Does Not Apply if not USA)</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

      <TextField variant="outlined"
        name=""
        label="Province"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Does Not Apply" />
        </FormGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Postal Code"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">Pick the category that best describes your job.</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>


			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"I began this job on (mm/dd/yyyy)"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
    </>
  )
}
