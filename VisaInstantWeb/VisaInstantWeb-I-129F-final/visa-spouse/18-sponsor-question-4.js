import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorQuestion4 = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>21. Question 4</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>All questions are about the Alien (foreign citizen).</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Explain why you answered 'Yes' to this question and provide details."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Are you subject to a civil penalty under INA 274C?</FormLabel>
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
        <FormLabel id="">Have you been ordered removed from the U.S. during the last five years?</FormLabel>
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
        <FormLabel id="">Have you been ordered removed from the U.S. for a second time within the last 20 years?</FormLabel>
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
        <FormLabel id="">Have you ever been unlawfully present and ordered removed from the U.S. during the last ten years?</FormLabel>
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
        <FormLabel id="">Have you ever been convicted of an aggravated felony and been ordered removed from the U.S.?</FormLabel>
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
        <FormLabel id="">Have you ever been unlawfully present in the U.S. for more than 180 days (but no ore than one year) and
          have voluntarily departed the U.S. within the last three years?</FormLabel>
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
        <FormLabel id="">Have you ever been unlawfully present in the U.S. for more than one year in the aggregate
          at any time during the past ten years?</FormLabel>
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
        <FormLabel id="">Have you ever withheld custody of a U.S. citizen child outside the United States from
          a person granted legal custody by a U.S. court?</FormLabel>
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
        <FormLabel id="">Have you voted in the United States in violation of any law or regulation?</FormLabel>
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