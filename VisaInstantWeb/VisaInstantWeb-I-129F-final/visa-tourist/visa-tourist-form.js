import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack, InputLabel } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";

import { PersonalInformation01 } from "./01-personal-information";
import { PersonalInformation02 } from "./02-personal-information";
import { PersonalInformation03 } from "./03-personal-information";
import { TripInformation04 } from "./04-trip-information";
import { TripInformation05 } from "./05-trip-information";
import { TripInformation06 } from "./06-trip-information";
import { UsContactInformation07 } from "./07-us-contact-information";
import { FamilyInformation08 } from "./08-family-information";
import { FamilyInformation09 } from "./09-family-information";
import { FamilyInformation10 } from "./10-family-information";
import { JobInformation11 } from "./11-job-information";
import { JobInformation12 } from "./12-job-information";
import { JobInformation13 } from "./13-job-information";

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root': {
			width: '100%',
			margin: theme.spacing(1)
		}
	}
}));

const initialSteps = [
	{ active: true, component: PersonalInformation01, step_index: 1 },
	{ active: false, component: PersonalInformation02, step_index: 2 },
	{ active: false, component: PersonalInformation03, step_index: 3 },
	{ active: false, component: TripInformation04, step_index: 4 },
	{ active: false, component: TripInformation05, step_index: 5 },
	{ active: false, component: TripInformation06, step_index: 6 },
	{ active: false, component: UsContactInformation07, step_index: 7 },
	{ active: false, component: FamilyInformation08, step_index: 8 },
	{ active: false, component: FamilyInformation09, step_index: 9 },
	{ active: false, component: FamilyInformation10, step_index: 10 },
	{ active: false, component: JobInformation11, step_index: 11 },
	{ active: false, component: JobInformation12, step_index: 12 },
	{ active: false, component: JobInformation13, step_index: 13 }
]

const initialValues = {
	"id": 0,
	"accountId": null,
	"deleted": false,
	"applicantFamilyName": "",
	"applicantGivenName": "",
	"applicantMiddleName": "",
	"applicantPhysicalAddressStreet": "",
	"applicantPhysicalAddressNumber": "",
	"applicantPhysicalAddressApt": false,
	"applicantPhysicalAddressSte": false,
	"applicantPhysicalAddressFr": false,
	"applicantPhysicalAddressCity": "",
	"applicantPhysicalAddressZipCode": "",
	"applicantPhysicalAddressPostCode": "",
	"applicantPhysicalAddressState": "",
	"applicantPhysicalAddressProvince": "",
	"applicantPhysicalAddressCountry": "",
	"applicantAlienNumber": "",
	"applicantAlienNumber1": "",
	"applicantAlienNumber2": "",
	"applicantAlienNumber3": "",
	"applicantAlienNumber4": "",
	"applicantAlienNumber5": "",
	"applicantAlienNumber6": "",
	"applicantAlienNumber7": "",
	"applicantAlienNumber9": "",
	"applicantAlienNumber8": "",
	"applicantCitizen": "",
	"applicantClassOfAdmission": "",
	"applicantMale": false,
	"applicantFemale": false,
	"applicantDateOfBirth": null,
	"applicantCountryOfBirth": "",
	"applicantCitizenship": "",
	"applicantDateOfDepartment": null,
	"applicantLengthOfTrip": "",
	"preparerGivenName": "",
	"preparerFamilyName": "",
	"preparerBusinessName": "",
	"preparerAddressStreet": "",
	"preparerAddress": "",
	"preparerAddressSte": false,
	"preparerAddressFr": false,
	"preparerAddressApt": false,
	"preparerAddressCity": "",
	"preparerAddressState": "",
	"preparerAddressZipCode": "",
	"preparerAddressPostalCode": "",
	"preparerAddressProvince": "",
	"preparerAddressCountry": "",
	"applicantPhoneNumber": "",
	"applicantPhoneNumber1": "",
	"applicantPhoneNumber2": "",
	"applicantPhoneNumber3": "",
	"applicantPhoneNumber4": "",
	"applicantPhoneNumber5": "",
	"applicantPhoneNumber6": "",
	"applicantPhoneNumber7": "",
	"applicantPhoneNumber8": "",
	"applicantPhoneNumber9": "",
	"applicantPhoneNumber10": "",
	"preparerEmail": "",
	"preparerPhoneNumber": "",
	"preparerPhoneNumber1": "",
	"preparerPhoneNumber2": "",
	"preparerPhoneNumber3": "",
	"preparerPhoneNumber4": "",
	"preparerPhoneNumber5": "",
	"preparerPhoneNumber6": "",
	"preparerPhoneNumber7": "",
	"preparerPhoneNumber8": "",
	"preparerPhoneNumber9": "",
	"preparerPhoneNumber10": "",
	"applicantPhone": "",
	"applicantPhone1": "",
	"applicantPhone2": "",
	"applicantPhone3": "",
	"applicantPhone4": "",
	"applicantPhone5": "",
	"applicantPhone6": "",
	"applicantPhone7": "",
	"applicantPhone8": "",
	"applicantPhone9": "",
	"applicationTypeTravelDocument": false,
	"otherPersonFamilyName": "",
	"otherPersonGivenName": "",
	"otherPersonGMiddleName": "",
	"otherPersonDateOfBirth": null,
	"otherPersonAddressStreet": "",
	"otherPersonApt": false,
	"otherPersonFlr": false,
	"otherPersonSte": false,
	"otherPersonAddressNumber": "",
	"otherPersonAddressCity": "",
	"otherPersonAddressState": "",
	"otherPersonAddressZipCode": "",
	"otherPersonAddressPostalCode": "",
	"otherPersonAddressProvince": "",
	"otherPersonAddressCountry": "",
	"otherPersonRemovalYes": false,
	"otherPersonRemovalNo": false,
	"retryPermitYes": false,
	"retryPermitNo": false,
	"retryPermitDate": "",
	"retryPermitDisposition": "",
	"applicationTypeReentryPermit": false,
	"applicationTypeAdvanceParole": false,
	"applicationTypeForOther": false,
	"applicationTypeRefugee": false,
	"applicationTypeForeignTravel": false,
	"documentSentToUsAddress": false,
	"documentSentToUsConsulate": false,
	"consulateAddressCity": "",
	"consulateAddressCountry": "",
	"nameOfDHS": "",
	"dhsOffice": false,
	"dhsOfficeAddressCity": "",
	"dhsOfficeAddressCountry": "",
	"addressPart2": false,
	"addressPart3": false,
	"addressApt": false,
	"addressFlr": false,
	"addressSte": false,
	"addressNumber": "",
	"addressStreet": "",
	"addressAddressCity": "",
	"addressAddressState": "",
	"addressAddressZipCode": "",
	"addressAddressPostalCode": "",
	"addressAddressCountry": "",
	"addressPhoneNumber": "",
	"addressPhoneNumber1": "",
	"addressPhoneNumber2": "",
	"addressPhoneNumber3": "",
	"addressPhoneNumber4": "",
	"addressPhoneNumber5": "",
	"addressPhoneNumber6": "",
	"addressPhoneNumber7": "",
	"addressPhoneNumber8": "",
	"addressPhoneNumber9": "",
	"addressPhoneNumber10": "",
	"preparerExtension": "",
	"timeOutsideLessThan6M": false,
	"timeOutsideLessThan1Y": false,
	"timeOutsideLessThan2Y": false,
	"timeOutsideLessThan3Y": false,
	"timeOutsideLessThan4Y": false,
	"timeOutsideMoreThan4Y": false,
	"taxFillYes": false,
	"taxFillNo": false,
	"countryFrom": "",
	"advanceParoleTripOne": false,
	"advanceParoleTripMore": false,
	"advanceParoleDHSCity": "",
	"advanceParoleDHSCountry": "",
	"advanceParoleDHSAddress": false,
	"advanceParoleHomeAddress": false,
	"advanceParoleInCareOfName": "",
	"advanceParoleAddressStreet": "",
	"advanceParoleAddressApt": false,
	"advanceParoleAddressSte": false,
	"advanceParoleAddressFlr": false,
	"advanceParoleAddressNum": false,
	"advanceParoleAddressNumber": "",
	"advanceParoleAddressCity": "",
	"advanceParoleAddressState": "",
	"advanceParoleAddressNumberZipCode": "",
	"advanceParoleAddressPostalCode": "",
	"advanceParoleAddressProvince": "",
	"advanceParoleAddressCountry": "",
	"advanceParolePhoneNumber": "",
	"advanceParolePhoneNumber1": "",
	"advanceParolePhoneNumber2": "",
	"advanceParolePhoneNumber3": "",
	"advanceParolePhoneNumber4": "",
	"advanceParolePhoneNumber5": "",
	"advanceParolePhoneNumber6": "",
	"advanceParolePhoneNumber7": "",
	"advanceParolePhoneNumber8": "",
	"advanceParolePhoneNumber9": "",
	"advanceParolePhoneNumber10": ""
}


export const FormVisaTourist = () => {

	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const stepIndex = parseInt(params.get("st")) || 1;
	// Init step when reload
	initialSteps.map((val) => {
		val.active = val.step_index === stepIndex;
		return val;
	});
	const [steps, setSteps] = useState(initialSteps);
	const [currentStepIndex, setCurrentStepIndex] = useState(stepIndex);

	initialValues.id = params.get("id") || 0;
	const [values, setValues] = useState(initialValues);

	const nextStep = () => {
		let nextStepIndex = currentStepIndex + 1;
		setCurrentStepIndex(nextStepIndex);
		updateStepActive(nextStepIndex);
	}

	const backToStart = () => {
		setCurrentStepIndex(1);
		updateStepActive(1);  // Set first step active
	}

	const backToPrevious = () => {
		setCurrentStepIndex(currentStepIndex - 1);
		updateStepActive(currentStepIndex - 1);  // Set previous step active
	}

	const updateStepActive = (index) => {
		initialSteps.map((val) => {
			val.active = val.step_index === index;
			return val;
		});
		setSteps([
			...initialSteps
		]);
	}

	const handleInputChange = e => {
		const { name, value, type } = e.target

		if (type === 'radio') {
			handleInputRadio(name, value)
		} else {
			setValues({
				...values,
				[name]: value
			})
		}
	}

	const handleInputRadio = (name, value) => {
		let group_radio = {
			"applicantGender": {
				"applicantMale": false,
				"applicantFemale": false,
			},
			"applicantPhysicalAddress": {
				"applicantPhysicalAddressApt": false,
				"applicantPhysicalAddressSte": false,
				"applicantPhysicalAddressFr": false,
			},
			"applicationType": {
				"applicationTypeForOther": false,
				"applicationTypeAdvanceParole": false,
				"applicationTypeForeignTravel": false,
				"applicationTypeRefugee": false,
				"applicationTypeTravelDocument": false,
				"applicationTypeReentryPermit": false,
			},
			"timeOutside": {
				"timeOutsideLessThan6M": false,
				"timeOutsideLessThan1Y": false,
				"timeOutsideLessThan2Y": false,
				"timeOutsideLessThan3Y": false,
				"timeOutsideLessThan4Y": false,
				"timeOutsideMoreThan4Y": false,
			},
			"taxFill": {
				"taxFillYes": false,
				"taxFillNo": false,
			},
			"otherPerson": {
				"otherPersonApt": false,
				"otherPersonSte": false,
				"otherPersonFlr": false,
			},
			"otherPersonRemoval": {
				"otherPersonRemovalYes": false,
				"otherPersonRemovalNo": false,
			},
			"retryPermit": {
				"retryPermitYes": false,
				"retryPermitNo": false,
			},
			"documentSentToUs": {
				"documentSentToUsAddress": false,
				"documentSentToUsConsulate": false,
			},
			"address": {
				"addressApt": false,
				"addressSte": false,
				"addressFlr": false,
			},
			"travelRadioGroup": {
				"travelYes": false,
				"travelNo": false,
			},
			"returnRadioGroup": {
				"returnYes": false,
				"returnNo": false,
			},
			"applyRadioGroup": {
				"applyYes": false,
				"applyNo": false,
			},
			"benefitRadioGroup": {
				"benefitYes": false,
				"benefitNo": false,
			},
			"requiredNationality": {
				"requiredNationalityYes": false,
				"requiredNationalityNo": false,
			},
			"refugeeRadioGroup": {
				"refugeeYes": false,
				"refugeeNo": false,
			},
			"advanceParole": {
				"advanceParoleDHSAddress": false,
				"advanceParoleHomeAddress": false,
			},
			"advanceParoleAddress": {
				"advanceParoleAddressApt": false,
				"advanceParoleAddressSte": false,
				"advanceParoleAddressFlr": false,
				"advanceParoleAddressNum": false,
			},
			"tripRadioGroup": {
				"tripOne": false,
				"tripMore": false,
			},
		}
		if (group_radio[name]) {
			group_radio[name][value] = true;
			setValues({
				...values,
				...group_radio[name]
			})
		}
	}

	const convertToEventParam = (name, value) => ({
		target: {
			name, value
		}
	})

	const submitForm = async (e) => {
		e.preventDefault();
		let payload = {}

		Object.keys(values).forEach(function (key) {
			if (values[key]) {
				payload[key] = values[key]
			}
		});

		// if (values.id > 0) {
		// 	await http.post("FormTravelDocument/Update", payload);
		// } else {
		// 	let result = await http.post("FormTravelDocument/Insert", payload);
		// 	if (result.succeeded) {
		// 		setValues({
		// 			...values,
		// 			id: result.data.id
		// 		})
		// 	}
		// }

		if (currentStepIndex === steps.length) {
			// Reset state and back to start
			// setValues(initialValues)
			// backToStart();
		} else {
			nextStep();
		}
	}

	// Update query string
	useEffect(() => {
		history.push({
			pathname: "formtourist",
			search: "id=" + values.id + "&st=" + currentStepIndex,
		});
	}, [values.id, currentStepIndex]);

	return (
		<AppShell>
			<Container>
				<br />
				<h5><InputLabel style={{ textDecorationLine: 'underline', color: 'blue' }}>PHIẾU THÔNG TIN KHÁCH HÀNG</InputLabel></h5>
				<h1><InputLabel style={{ fontWeight: 'bold', color: 'red' }}>DU LỊCH MỸ</InputLabel></h1>
				<ThemeProvider theme={{}}>
					<form className={classes.root}
						autoComplete="off"
						onSubmit={submitForm}>
						{
							steps.map(
								(step, idx) => {
									return step.active && <step.component
										key={idx}
										handleInputChange={handleInputChange}
										convertToEventParam={convertToEventParam}
										values={values} />
								})
						}
						<Stack spacing={2} direction="row" justifyContent="center">
							{
								currentStepIndex > 1 &&
								<Button variant="contained" onClick={backToStart}>Back To Start</Button>
							}
							{
								currentStepIndex > 1 &&
								<Button variant="contained" onClick={backToPrevious}>Back</Button>
							}
							<Button variant="contained"
								type="submit">{currentStepIndex === steps.length ? "Submit" : "Save & Continue"}</Button>
							{
								currentStepIndex < steps.length &&
								<Button variant="contained" onClick={nextStep}>Skip & Continue</Button>
							}
						</Stack>
						<br />
						<br />
						<br />
					</form>
				</ThemeProvider>
			</Container>
		</AppShell>
	)
};
