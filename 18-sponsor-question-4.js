import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const SponsorQuestion4 = (props) => {

  // const {values, handleInputChange, convertToEventParam} = props;

  return (
    <>
      <h5><InputLabel style={{ backgroundColor: 'black', color: 'white' }}>1. Name</InputLabel></h5>
      <h1><InputLabel style={{ color: 'DarkGray' }}>Sponsor's name and gender</InputLabel></h1>
      <h1><InputLabel style={{ backgroundColor: 'DarkSeaGreen', color: 'Black' }}>The sponsor is the U.S. citizen.</InputLabel></h1>

    </>
  )
}