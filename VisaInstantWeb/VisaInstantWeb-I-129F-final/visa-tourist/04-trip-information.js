import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { Grow, Box, FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const TripInformation04 = (props) => {

  const { values, handleInputChange } = props;

  const extent_option_1 = (
    <Box>
      <InputLabel>Nếu có:</InputLabel>

      <TextField variant="outlined"
        name=""
        label="Họ tên:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Quan hệ với bạn:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Địa chỉ:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số điện thoại:"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />
    </Box>
  );

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>2. THÔNG TIN CHUYẾN ĐI:</InputLabel></h5>

      <TextField variant="outlined"
        name=""
        label="Mục đích chuyến đi (du lịch/ thăm thân/ công tác):"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày dự định đến Mỹ:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Tại thành phố:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày dự định rời Mỹ:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="Tại thành phố:"
      // value={values.applicantPhysicalAddressCountry}
      // onChange={handleInputChange}
      />

      <FormControl>
        <FormLabel id="">Các địa điểm sẽ tham quan:</FormLabel>
        <TextareaAutosize variant="outlined"
          minRows={5}
          name=""
        // value={values.sponsorQuestion1ExplainQuestion}
        // onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel id="">Địa chỉ ở khi đến Mỹ:</FormLabel>
        <TextareaAutosize variant="outlined"
          minRows={5}
          name=""
        // value={values.sponsorQuestion1ExplainQuestion}
        // onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel id="retryPermit">Người bảo trợ cho chuyến đi của bạn (người thân, công ty, tổ chức):</FormLabel>
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