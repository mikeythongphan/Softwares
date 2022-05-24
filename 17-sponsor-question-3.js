import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorQuestion3 = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>20. Question 3</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>All questions are about the Alien (foreign citizen).</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you committed, ordered, incited, assisted, or otherwise participated in extra-judicial killings,
political killings, or other acts of violence?</FormLabel>
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
        label="Explain why you answered "Yes" to this question and provide details."
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Have you ever engaged in the recruitment or the use of child soldiers?</FormLabel>
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
        <FormLabel id="">Have you, while serving as a government official, been responsible for or directly carried out,
at any time, particularly severe violations of religious freedom?</FormLabel>
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
        <FormLabel id="">Are you a member of or affiliated with the Communist or other totalitarian party?</FormLabel>
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
        <FormLabel id="">Have you ever directly or indirectly assisted or supported any of the groups in Colombia known
as the Revolutionary Armed Forces of Colombia (FARC), National Liberation Army (ELN),
or United Self-Defense Forces of Colombia (AUC)?</FormLabel>
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
        <FormLabel id="">Have you ever through abuse of governmental or political position converted for personal gain,
confiscated or expropriated property in a foreign nation to which a United States national
had claim of ownership?</FormLabel>
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
        <FormLabel id="">Are you the spouse, minor child, or agent of an individual who has through abuse of governmental or 
political position converted for personal gain, confiscated, or expropriated property in a foreign nation
to which a United States national had claim of ownership?</FormLabel>
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
        <FormLabel id="">Have you ever disclosed or trafficked in confidential U.S. business information obtained in
connection with U.S. participation in the Chemical Weapons Convention?</FormLabel>
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
        <FormLabel id="">Are you the spouse, minor child, or agent of an individual who has disclosed or trafficked in
confidential U.S. business information obtained in connection with U.S. participation
in the Chemical Weapons Convention?</FormLabel>
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
        <FormLabel id="">Have you ever been directly involved in the establishment or enforcement of population controls forcing
a woman to undergo an abortion against her free choice or a man or
a woman to undergo sterilization against his or her free will?</FormLabel>
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
        <FormLabel id="">Have you attended a public elementary school or a public secondary school on student (F) status
after November 30, 1996 without reimbursing the school?</FormLabel>
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
