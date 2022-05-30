import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const MilitaryAndConvictions = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>7. Military & Convictions</InputLabel></h5>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Military Personnel Overseas</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Are you currently a member of the United States Armed Forces on active duty?</FormLabel>
        <RadioGroup
          row
          name=""
        // onChange={handleInputChange}
        >
          <FormControlLabel value="" control={<Radio />} label="No" />
          <FormControlLabel value="" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Court Convictions</InputLabel></h1>

      <FormControl>
        <FormLabel id="">Have you ever been arrested or convicted by a court of law (civil or criminal) or court martialed by
          a military tribunal for any of the following. Don't worry, most convictions will not disqualify you.
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
        <FormLabel id="">Have you ever been subject to a temporary or permanent protection or restraining order (either civil or criminal)?</FormLabel>
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
        <FormLabel id="">Domestic violence, sexual assault, child abuse and neglect, dating violence, elder abuse or stalking?</FormLabel>
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
        <FormLabel id="">Homicide, murder, manslaughter, rape, abusive sexual contact, sexual exploitation, incest, torture,
          trafficking, peonage, holding hostage, involuntary servitude, slave trade, kidnapping, abduction,
          unlawful criminal restraint, false imprisonment or an attempt to commit any of these crimes?</FormLabel>
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
        <FormLabel id="">Three or more arrests or convictions, not from a single act, for crimes relating to a controlled substance or alcohol?</FormLabel>
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
        <FormLabel id="">Have you ever been arrested, cited, charged, indicted, convicted, fined, or imprisoned for breaking
          or violating any law or ordinance in any country, excluding traffic violations (unless a traffic violation was
          alcohol- or drug-related or involved a fine of $500 or more)?</FormLabel>
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