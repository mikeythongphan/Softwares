import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorPlaceOfBirth = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>3. Place Of Birth</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Birth Information</InputLabel></h1>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Sponsor's Date of Birth as mm/dd/yyyy"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Sponsor's City of Birth"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Sponsor's Country of Birth"
      //    value={values.applicantAlienNumber}
      //    onChange={handleInputChange}
      />

			<FormControl>
				<FormLabel id="">Country of Birth</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

<h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Father Information</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Father's Last Name"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Father's First Name"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Father's Middle Name"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Check if Does Not Apply" />
        </FormGroup>
      </FormControl>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Father's Date of Birth as mm/dd/yyyy"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Unknow" />
        </FormGroup>
      </FormControl>

			<FormControl>
				<FormLabel id="">Father's Country of Birth</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

      <TextField variant="outlined"
        name=""
        label="Father's City or Province of Birth"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Is he deceased?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

<h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's Mother Information</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Mother's Maiden Last Name"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Mother's First Name"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Mother's Middle Name"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Check if Does Not Apply" />
        </FormGroup>
      </FormControl>

			<LocalizationProvider dateAdapter={DateAdapter}>
				<MobileDatePicker
					label={"Mother's Date of Birth (mm/dd/yyyy, okay to estimate)"}
				// value={values.applicantDateOfBirth}
				// onChange={date => handleInputChange(convertToEventParam("", date))}
				renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Unknow" />
        </FormGroup>
      </FormControl>

			<FormControl>
				<FormLabel id="">Mother's Country of Birth</FormLabel>
				<Select>
					<MenuItem>Vietnam</MenuItem>
				</Select>
			</FormControl>

      <TextField variant="outlined"
        name=""
        label="Mother's City of Birth"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Is she deceased?</FormLabel>
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
