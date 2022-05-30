import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const EmploymentAuthorization = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>Applicant's Information</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Enter the appropriate letter and number for your eligibility category below (for example, (a)(8), (c)(17)(iii))."
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>If you entered the eligibility category (c)(3)(C)</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Degree"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Employer's Name as Listed in E-Verify"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Employer's E-Verify Company Identification Number"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>If you entered the eligibility category (c)(26)</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Provide the receipt number of your H-1B spouse's most recent Form I-797 Notice for Form I-129"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <h1><InputLabel style={{ color: 'DarkGray' }}>If you entered the eligibility category (c)(26)</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you EVER been arrested for, and/or charged with, and/or convicted of any crime in any country?</FormLabel>
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
        <FormLabel id="">Did you enter the United States lawfully through a U.S.port of entry and were you inspected and admitted or paroled after inspection by an immigration officer? (If you answer “Yes,” you MUST provide evidence of your lawful entry.)</FormLabel>
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
        <FormLabel id="">If you answered “No” to previous question, did you present yourself to the Secretary of Homeland Security or his or her delegate (DHS) within 48 hours of entry or attempted entry AND express an intention to seek asylum within the United States or express a fear of persecution or torture in your home country?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="Yes" />
          <FormControlLabel value="" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <h1><InputLabel style={{ color: 'DarkGray' }}>If you entered the eligibility category (c)(35) and (c)(36)</InputLabel></h1>

      <TextField variant="outlined"
        name=""
        label="Provide the receipt number of your Form I-797 Notice for Form I-140, Immigrant Petition for entered the eligibility category (c)(36) in Item NumberAlien Worker. If you entered the eligibility category (c)(36) in Item Number 27., please provide the receipt number of your spouse's or parent's Form I-797 Notice for Form I-140."
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Have you EVER been arrested for, and/or charged with, and/or convicted of any crime in any country?</FormLabel>
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
        label="Provide the receipt number of your Form I-797 Notice for Form I-140, Immigrant Petition for entered the"
      //    value={values.applicantFamilyName}
      //    onChange={handleInputChange}
      />
    </>
  )
}