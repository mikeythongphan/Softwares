import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const EmploymentParent = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Applicant's Information</InputLabel></h5>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Your Father's Information</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="First Name (Given Name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Last Name (Family Name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>Your Mother's Information</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="First Name (Given Name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Last Name (Family Name)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <InputLabel>List all countries where you are currently a citizen or national.</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Country"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>Information about your Last Arrival in the US</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="I-94 Arrival-Departure Record Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Date authorized stay expired as shown on Form I-94 or I-95"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Passport Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Travel Document Number, if any"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Country of Issuance for Passport or Travel Document"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Date of your Last Arrival into the US"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Place of your Last Arrival into the US"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Immigration Status at Your Last Arrival (for example, B-2 visitor, F-1 Student, or no status)"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Your current Immigration Status or Category (for example, B-2 visitor, F-1 student, parolee, deferred action"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Sudent and Exchange Visitor Information System (SEVIS Number), if any"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />
    </>
  )
}