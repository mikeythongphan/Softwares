import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Grow, Box, FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const FamilyInformation10 = (props) => {

  const { values, handleInputChange } = props;

  const extent_option_1_1 = (
    <Box>
      <TextField variant="outlined"
        name=""
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_1_2 = (
    <Box>
      <TextField variant="outlined"
        name=""
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_1 = (
    <Box>
      <InputLabel>Nếu có:</InputLabel>

      <TextField variant="outlined"
        name=""
        label="1. Họ tên:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Quan hệ với bạn:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="applicationType">Tình trạng:</FormLabel>
        <RadioGroup
          row
          name="applicationType"
          onChange={handleInputChange}
        >
          <FormControlLabel value="applicationTypeForOther" checked={values.applicationTypeForOther} control={<Radio />} label="Công dân" />
          <FormControlLabel value="applicationTypeAdvanceParole" checked={values.applicationTypeAdvanceParole} control={<Radio />} label="Thường trú nhân" />
          <FormControlLabel value="applicationTypeForeignTravel" checked={values.applicationTypeForeignTravel} control={<Radio />} label="Không di dân" />
          <FormControlLabel value="applicationTypeRefugee" checked={values.applicationTypeRefugee} control={<Radio />} label="Khác" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.applicationTypeRefugee}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.applicationTypeRefugee ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1_1}</Grow>

      <TextField variant="outlined"
        name=""
        label="2. Họ tên:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Quan hệ với bạn:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="timeOutside">Tình trạng:</FormLabel>
        <RadioGroup
          row
          name="timeOutside"
          onChange={handleInputChange}
        >
          <FormControlLabel value="timeOutsideLessThan6M" checked={values.timeOutsideLessThan6M} control={<Radio />} label="Công dân" />
          <FormControlLabel value="timeOutsideLessThan1Y" checked={values.timeOutsideLessThan1Y} control={<Radio />} label="Thường trú nhân" />
          <FormControlLabel value="timeOutsideLessThan2Y" checked={values.timeOutsideLessThan2Y} control={<Radio />} label="Không di dân" />
          <FormControlLabel value="timeOutsideLessThan3Y" checked={values.timeOutsideLessThan3Y} control={<Radio />} label="Khác" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.timeOutsideLessThan3Y}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.timeOutsideLessThan3Y ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1_2}</Grow>
    </Box>
  );

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>4. THÔNG TIN GIA ĐÌNH:</InputLabel></h5>

      <FormControl>
        <FormLabel id="returnRadioGroup">Họ hàng bà con khác ở Mỹ:</FormLabel>
        <RadioGroup
          row
          name="returnRadioGroup"
          onChange={handleInputChange}
        >
          <FormControlLabel value="returnNo" checked={values.returnNo} control={<Radio />} label="Không" />
          <FormControlLabel value="returnYes" checked={values.returnYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.returnYes}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.returnYes ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1}</Grow>
    </>
  )
}