import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Grow, Box, FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const FamilyInformation09 = (props) => {

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
        <FormLabel id="advanceParoleAddress">Tình trạng:</FormLabel>
        <RadioGroup
          row
          name="advanceParoleAddress"
          onChange={handleInputChange}
        >
          <FormControlLabel value="advanceParoleAddressApt" checked={values.advanceParoleAddressApt} control={<Radio />} label="Công dân" />
          <FormControlLabel value="advanceParoleAddressSte" checked={values.advanceParoleAddressSte} control={<Radio />} label="Thường trú nhân" />
          <FormControlLabel value="advanceParoleAddressFlr" checked={values.advanceParoleAddressFlr} control={<Radio />} label="Không di dân" />
          <FormControlLabel value="advanceParoleAddressNum" checked={values.advanceParoleAddressNum} control={<Radio />} label="Khác" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.advanceParoleAddressNum}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.advanceParoleAddressNum ? { timeout: 400 } : {})}
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
        <FormLabel id="retryPermit">Người thân ruột thịt ở Mỹ:</FormLabel>
        <RadioGroup
          row
          name="retryPermit"
          onChange={handleInputChange}
        >
          <FormControlLabel value="retryPermitNo" checked={values.retryPermitNo} control={<Radio />} label="Không" />
          <FormControlLabel value="retryPermitYes" checked={values.retryPermitYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.retryPermitYes}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.retryPermitYes ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1}</Grow>
    </>
  )
}