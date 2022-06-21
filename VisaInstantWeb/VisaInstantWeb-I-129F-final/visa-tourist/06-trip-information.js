import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const TripInformation06 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>2. THÔNG TIN CHUYẾN ĐI:</InputLabel></h5>

      <FormControl>
        <FormLabel id="retryPermit">Bạn đã từng bị từ chối visa, rút đơn xin visa, bị hủy hay thu hồi visa Mỹ:</FormLabel>
        <RadioGroup
          row
          name="retryPermit"
          onChange={handleInputChange}
        >
          <FormControlLabel value="retryPermitNo" checked={values.retryPermitNo} control={<Radio />} label="Không" />
          <FormControlLabel value="retryPermitYes" checked={values.retryPermitYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Thời gian:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Lý do:</FormLabel>
        <TextareaAutosize variant="outlined"
          minRows={5}
          name=""
        // value={values.sponsorQuestion1ExplainQuestion}
        // onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel id="taxFill">Bạn đã từng bị từ chối cho phép nhập cảnh Mỹ:</FormLabel>
        <RadioGroup
          row
          name="taxFill"
          onChange={handleInputChange}
        >
          <FormControlLabel value="taxFillNo" checked={values.taxFillNo} control={<Radio />} label="Không" />
          <FormControlLabel value="taxFillYes" checked={values.taxFillYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Thời gian:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Lý do:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Các quốc gia đã từng đến trong 5 năm gần đây:</FormLabel>
        <TextareaAutosize variant="outlined"
          minRows={5}
          name=""
        // value={values.sponsorQuestion1ExplainQuestion}
        // onChange={handleInputChange}
        />
      </FormControl>

      <TextField variant="outlined"
        name=""
        label="Các ngôn ngữ bạn biết:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </>
  )
}