import React from 'react'
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterMoment';
import { FormControl, FormControlLabel, FormLabel, TextareaAutosize, InputLabel, Radio, RadioGroup, TextField, Check, Checkbox } from "@mui/material";
import { color } from '@mui/system';

export const TripInformation05 = (props) => {

  const { values, handleInputChange } = props;

  return (
    <>
      <h5><InputLabel style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'blue' }}>2. THÔNG TIN CHUYẾN ĐI:</InputLabel></h5>

      <FormControl>
        <FormLabel id="retryPermit">Bạn đã từng nhập cảnh Mỹ:</FormLabel>
        <RadioGroup
          row
          name="retryPermit"
          onChange={handleInputChange}
        >
          <FormControlLabel value="retryPermitNo" checked={values.retryPermitNo} control={<Radio />} label="Không" />
          <FormControlLabel value="retryPermitYes" checked={values.retryPermitYes} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="documentSentToUs">Bạn đã từng được lấy dấu vân tay:</FormLabel>
        <RadioGroup
          row
          name="documentSentToUs"
          onChange={handleInputChange}
        >
          <FormControlLabel value="documentSentToUsAddress" checked={values.documentSentToUsAddress} control={<Radio />} label="Không" />
          <FormControlLabel value="documentSentToUsConsulate" checked={values.documentSentToUsConsulate} control={<Radio />} label="Có" />
        </RadioGroup>
      </FormControl>

      <InputLabel>Thông tin về tất cả visa Mỹ được cấp trong các năm qua: (chính xác theo thông tin trên hộ chiếu)</InputLabel>

      <TextField variant="outlined"
        name=""
        label="1. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số visa (nếu biết):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày cấp:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày hết hạn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <InputLabel>Thời gian lưu trú (ngày/tháng/năm):</InputLabel>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Từ:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Đến:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="2. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số visa (nếu biết):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày cấp:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày hết hạn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <InputLabel>Thời gian lưu trú (ngày/tháng/năm):</InputLabel>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Từ:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Đến:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant="outlined"
        name=""
        label="3. Loại visa (du học/ du lịch/ khác, ghi rõ là gì):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <TextField variant="outlined"
        name=""
        label="Số visa (nếu biết):"
      // value={values.nameOfDHS}
      // onChange={handleInputChange}
      />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày cấp:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Ngày hết hạn:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <InputLabel>Thời gian lưu trú (ngày/tháng/năm):</InputLabel>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Từ:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={"Đến:"}
          // value={values.applicantDateOfBirth}
          // onChange={date => handleInputChange(convertToEventParam("applicantDateOfBirth", date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  )
}