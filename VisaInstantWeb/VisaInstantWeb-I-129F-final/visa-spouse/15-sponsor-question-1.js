import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorQuestion1 = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>18. Question 1</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>All questions are about the Alien (foreign citizen).</InputLabel></h1>
      <h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>WARNING! Do not write your answers in all capital letters except for your last name and
        never use any type of non-English characters.</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?</FormLabel>
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
        <FormLabel id="">Do you have a communicable disease of public health significance?
          (Communicable diseases of public significance include chancroid, gonorrhea, granuloma inguinale,
          infections leprosy, lymphogranuloma venereum, infections stage syphilis, active tuberculosis,
          and other diseases as determined by the Department of Health and Human Services.)
        </FormLabel>
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
        <FormLabel id="">Do you have a mental or physical disorder that poses or
          is likely to pose a threat to the safety or welfare of yourself or others?
        </FormLabel>
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
        <FormLabel id="">Are you or have you ever been a drug abuser or addict?</FormLabel>
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
        <FormLabel id="">You will be given any necessary vaccinations (shots) at your medical exam prior to your embassy interview.
          If you have documentation to show you have had some or all of these vaccinations you will not need to
          repeat them. For the required shots that you have not already had, will you be objecting to
          taking these shots and seeking a waiver, possibly delaying your visa?</FormLabel>
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
        <FormLabel id="">Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?</FormLabel>
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
        <FormLabel id="">Have you ever violated, or engaged in a conspiracy to violate, any law relating to controlled substances?</FormLabel>
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
        <FormLabel id="">Are you coming to the United States to engage in prostitution or unlawful commercialized vice or have you been engaged in prostitution or procuring prostitutes within the past 10 years?</FormLabel>
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
        <FormLabel id="">Have you ever been involved in, or do you seek to engage in, money laundering?</FormLabel>
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
        <FormLabel id="">Have you ever committed or conspired to commit a human trafficking offense in the United States or outside the United States?</FormLabel>
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
        <FormLabel id="">Have you ever knowingly aided, abetted, assisted, or colluded with an individual who has been identified by
          the President of the United States as a person who plays a significant role in a severe form of trafficking in
          persons?</FormLabel>
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