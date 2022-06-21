import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Grow, Box, FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const PersonalInformation02 = (props) => {

  const { values, handleInputChange } = props;

  const extent_option_1 = (
    <Box>
      <TextField variant="outlined"
        name=""
        label="Nếu có vui long liệt kê thêm:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  const extent_option_2 = (
    <Box>
      <TextField variant="outlined"
        name=""
        label="Nếu có nêu tên người dùng:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>1. THÔNG TIN CÁ NHÂN</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Quốc tịch khác (nếu có):"
      // value={values.applicantPhysicalAddressStreet}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số hộ chiếu:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ (hộ khẩu):"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ hiện tại (liên lạc):"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số ĐT nhà:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="ĐTDĐ:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Email:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="taxFill">Ngoài số điện thoại và email đã cung cấp ở trên, quý khách còn sử dụng số điện thoại và email nào khác ?</FormLabel>
        <RadioGroup
          row
          name="taxFill"
          onChange={handleInputChange}
        >
          <FormControlLabel value="taxFillNo" checked={values.taxFillNo} control={<Radio />} label="Không" />
          <FormControlLabel value="taxFillYes" checked={values.taxFillYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <Grow in={values.taxFillYes}
        style={{ transformOrigin: '0 0 0' }}
        {...(values.taxFillYes ? { timeout: 400 } : {})}
        unmountOnExit>{extent_option_1}</Grow>

      <FormControl>
        <FormLabel id="retryPermit">Bạn có sử dụng mạng xã hội không?</FormLabel>
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
        unmountOnExit>{extent_option_2}</Grow>
    </>
  )
}