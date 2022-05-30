import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormGroup, Select, Button, MenuItem, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorAddress = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>8. Address</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Your (sponsor's) Current Physical Address.</InputLabel></h1>

      <InputLabel>Enter your physical address here. If your mailing address is different you will enter that on another page.
        Changing your address later, using a P.O. box or a non-USA address is complicated
        and may cause your petition to be delayed.</InputLabel>

      <TextField variant="outlined"
        name=""
        label="In Care Of Name. Do not put your name here!"
      //    value={values.applicantGivenName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormGroup>
          <FormControlLabel value="" control={<Checkbox />} label="Check if Does Not Apply" />
        </FormGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Number and street. Example: 123 Main Street"
      //    value={values.applicantMiddleName}
      //    onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Apartment, Suite or Floor?</FormLabel>
        <Select>
          <MenuItem value="" selected disabled hidden>
            <em>-Select</em>
          </MenuItem>
        </Select>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Apartment, Suite or Floor Number. Example: 43 or 532-B. Do not add 'Apt' or '#'."
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
          <MenuItem value="" selected disabled hidden>
            <em>-Select Country</em>
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel id="">U.S. State (Select Does Not Apply if not USA)</FormLabel>
        <Select>
          <MenuItem value="" selected disabled hidden>
            <em>-Select State</em>
          </MenuItem>
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

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"I have lived at this address since (mm/dd/yyyy)"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h1><InputLabel style={{ color: 'DarkGray' }}>Provide all U.S. states and foreign countries in which you have resided since your 18th birthday</InputLabel></h1>

      <FormControl>
        <FormLabel id="">U.S. State or Foreign Country</FormLabel>
        <Select>
          <MenuItem value="" selected disabled hidden>
            <em>-Select State</em>
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Button variant="contained" style={{ width: "150px", backgroundColor: "Red" }}>Remove</Button>
      </FormControl>
      <FormControl>
        <Button variant="contained" style={{ width: "150px", backgroundColor: "White", color: "Black" }}>Add Address</Button>
      </FormControl>
    </>
  )
}