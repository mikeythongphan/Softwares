import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";
import { PetitionerContact } from "./01-petitioner-contact";
import { PetitionerAddress } from "./02-petitioner-address";
import { PetitionerEmployment } from "./03-petitioner-employment";
import { PetitionerBackground } from "./04-petitioner-background";
import { PetitionerParent } from "./05-petitioner-parent";
import { PetitionerBiographic } from "./06-petitioner-biographic";
import { PetitionerStatus } from "./07-petitioner-status";
import { BeneficiaryContact } from "./08-beneficiary-contact";
import { BeneficiaryAddress } from "./09-beneficiary-address";
import { BeneficiaryEmployment } from "./10-beneficiary-employment";
import { BeneficiaryBackground } from "./11-beneficiary-background";
import { BeneficiaryAbroad } from "./12-beneficiary-abroad";
import { Interpreter } from "./13-interpreter";

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root': {
			width: '100%',
			margin: theme.spacing(1)
		}
	}
}));

const initialSteps = [
	{ active: true, component: PetitionerContact, stepIndex: 1 },
	{ active: false, component: PetitionerAddress, stepIndex: 2 },
	{ active: false, component: PetitionerEmployment, stepIndex: 3 },
	{ active: false, component: PetitionerBackground, stepIndex: 4 },
	{ active: false, component: PetitionerParent, stepIndex: 5 },
	{ active: false, component: PetitionerBiographic, stepIndex: 6 },
	{ active: false, component: PetitionerStatus, stepIndex: 7 },
	{ active: false, component: BeneficiaryContact, stepIndex: 8 },
	{ active: false, component: BeneficiaryAddress, stepIndex: 9 },
	{ active: false, component: BeneficiaryEmployment, stepIndex: 10 },
	{ active: false, component: BeneficiaryBackground, stepIndex: 11 },
	{ active: false, component: BeneficiaryAbroad, stepIndex: 12 },
	{ active: false, component: Interpreter, stepIndex: 13 }
]

const initialValues = {
	"id": 0,
  "accountId": 1,    
	"petitionerContactFirstName": "",
	"petitionerContactMiddleName": "",
	"petitionerContactLastName": "",
	"petitionerContactOtherNamesUsedYes": false,
	"petitionerContactOtherNamesUsedNo": false,
	"petitionerContactEmailAddress": "",
	"petitionerContactRelatedFianceYes": false,
	"petitionerContactRelatedFianceNo": false,
	"petitionerAddress1MailingStreetAddressApt": false,
	"petitionerAddress1MailingStreetAddressSte": false,
	"petitionerAddress1MailingStreetAddressFlr": false,
	"petitionerAddressCityOrTown": "",
	"petitionerAddress1State": "",
	"petitionerAddress1Province": "",
	"petitionerAddress1ZipCode": "",
	"petitionerAddress1Country": "",
	"petitionerAddressDifferentPhysicalAddressYes": false,
	"petitionerAddressDifferentPhysicalAddressNo": false,
	"petitionerAddress2MailingStreetAddressApt": false,
	"petitionerAddress2MailingStreetAddressSte": false,
	"petitionerAddress2MailingStreetAddressFlr": false,
	"petitionerAddress2MailingStreetAddressYes": false,
	"petitionerAddress2State": "",
	"petitionerAddress2Province": "",
	"petitionerAddress2ZipCode": "",
	"petitionerAddress2Country": "",
	"petitionerAddressResidence1State": "",
	"petitionerAddressResidence1Country": "",
	"petitionerAddressResidence2State": "",
	"petitionerAddressResidence2Country": "",
	"petitionerEmploymentNameOfEmployer": "",
	"petitionerEmploymentStreetAddress": "",
	"petitionerEmploymentCityOrTown": "",
	"petitionerEmploymentState": "",
	"petitionerEmploymentProvince": "",
	"petitionerEmploymentZipCode": "",
	"petitionerEmploymentCountry": "",
	"petitionerEmploymentOccupationName": "",
	"petitionerEmploymentStartDate": null,
	"petitionerEmploymentEndDate": null,
	"petitionerBackgroundGenderMale": false,
	"petitionerBackgroundGenderFemale": false,
	"petitionerBackgroundDateOfBirth": null,
	"petitionerBackgroundMaritalStatusSingle": false,
	"petitionerBackgroundMaritalStatusMarried": false,
	"petitionerBackgroundMaritalStatusDivorced": false,
	"petitionerBackgroundMaritalStatusWidowed": false,
	"petitionerBackgroundCityOfBirth": "",
	"petitionerBackgroundStateOfBirth": "",
	"petitionerBackgroundCountryOfBirth": "",
	"petitionerBackgroundPreviouslyMarriedYes": false,
	"petitionerBackgroundPreviouslyMarriedNo": false,
	"petitionerParent1FirstName": "",
	"petitionerParent1MiddleName": "",
	"petitionerParent1LastName": "",
	"petitionerParent1DateOfBirth": null,
	"petitionerParent1GenderMale": false,
	"petitionerParent1GenderFemale": false,
	"petitionerParent1CountryOfBirth": null,
	"petitionerParent1CityOfBirth": "",
	"petitionerParent1CountryOfResidence": "",
	"petitionerParent2FirstName": "",
	"petitionerParent2MiddleName": "",
	"petitionerParent2LastName": "",
	"petitionerParent2DateOfBirth": null,
	"petitionerParent2GenderMale": false,
	"petitionerParent2GenderFemale": false,
	"petitionerParent2CountryOfBirth": null,
	"petitionerParent2CityOfBirth": "",
	"petitionerParent2CountryOfResidence": "",
	"petitionerBiographicEthnicityNotHispanic": false,
	"petitionerBiographicEthnicityHispanic": false,
	"petitionerBiographicRaceWhite": false,
	"petitionerBiographicRaceAsian": false,
	"petitionerBiographicRaceBlack": false,
	"petitionerBiographicRaceIndian": false,
	"petitionerBiographicRaceHawaiian": false,
	"petitionerBiographicFeet": "",
	"petitionerBiographicInches": "",
	"petitionerBiographicPound": "",
	"petitionerBiographicHairColorBlack": false,
	"petitionerBiographicHairColorBrown": false,
	"petitionerBiographicHairColorBlond": false,
	"petitionerBiographicHairColorGray": false,
	"petitionerBiographicHairColorWhite": false,
	"petitionerBiographicHairColorRed": false,
	"petitionerBiographicHairColorSandy": false,
	"petitionerBiographicHairColorBald": false,
	"petitionerBiographicHairColorOther": false,
	"petitionerBiographicEyeColorBlack": false,
	"petitionerBiographicEyeColorBlue": false,
	"petitionerBiographicEyeColorBrown": false,
	"petitionerBiographicEyeColorGray": false,
	"petitionerBiographicEyeColorGreen": false,
	"petitionerBiographicEyeColorHazel": false,
	"petitionerBiographicEyeColorMaroon": false,
	"petitionerBiographicEyeColorPink": false,
	"petitionerBiographicEyeColorOther": false,
	"petitionerBiographicCivilCriminalYes": false,
	"petitionerBiographicCivilCriminalNo": false,
	"petitionerBiographicDomesticViolenceYes": false,
	"petitionerBiographicDomesticViolenceNo": false,
	"petitionerBiographicHomicideYes": false,
	"petitionerBiographicHomicideNo": false,
	"petitionerBiographicConvictionsYes": false,
	"petitionerBiographicConvictionsNo": false,
	"petitionerStatusSocialSecurityNumber": "",
	"petitionerStatusThroughBirthUS": false,
	"petitionerStatusThroughUSCitizenParents": false,
	"petitionerStatusThroughNaturalization": false,
	"petitionerStatusCitizenshipYes": false,
	"petitionerStatusCitizenshipNo": false,
	"petitionerStatusI129FYes": false,
	"petitionerStatusI129FNo": false,
	"petitionerStatusIMBYes": false,
	"petitionerStatusIMBNo": false,
	"petitionerStatusCity": "",
	"petitionerStatusCountry": "",
	"beneficiaryContactFirstName": "",
	"beneficiaryContactMiddleName": "",
	"beneficiaryContactLastName": "",
	"beneficiaryContactOtherNamesUsedYes": false,
	"beneficiaryContactOtherNamesUsedNo": false,
	"beneficiaryContactDaytimePhoneNumber": "",
	"beneficiaryContactEmailAddress": "",
	"beneficiaryAddress1MailingStreetAddressApt": false,
	"beneficiaryAddress1MailingStreetAddressSte": false,
	"beneficiaryAddress1MailingStreetAddressFlr": false,
	"beneficiaryAddress1MailingStreetAddressYes": false,
	"beneficiaryAddress1CityOrTown": "",
	"beneficiaryAddress1State": "",
	"beneficiaryAddress1Province": "",
	"beneficiaryAddress1ZipCode": "",
	"beneficiaryAddress1Country": "",
	"beneficiaryAddressDifferentPhysicalYes": false,
	"beneficiaryAddressDifferentPhysicalNo": false,
	"beneficiaryAddress2MailingStreetAddressApt": false,
	"beneficiaryAddress2MailingStreetAddressSte": false,
	"beneficiaryAddress2MailingStreetAddressFlr": false,
	"beneficiaryAddress2MailingStreetAddressYes": false,
	"beneficiaryAddress2CityOrTown": "",
	"beneficiaryAddress2State": "",
	"beneficiaryAddress2Province": "",
	"beneficiaryAddress2ZipCode": "",
	"beneficiaryAddress2Country": "",
	"beneficiaryAddressResidence1State": "",
	"beneficiaryAddressResidence1Country": "",
	"beneficiaryAddressResidence2State": "",
	"beneficiaryAddressResidence2Country": "",
	"beneficiaryEmploymentNameOfEmployer": "",
	"beneficiaryEmploymentStreetAddress": "",
	"beneficiaryEmploymentCityOrTown": "",
	"beneficiaryEmploymentState": "",
	"beneficiaryEmploymentProvince": "",
	"beneficiaryEmploymentZipCode": "",
	"beneficiaryEmploymentCountry": "",
	"beneficiaryEmploymentOccupationName": "",
	"beneficiaryEmploymentStartDate": null,
	"beneficiaryEmploymentEndDate": null,
	"beneficiaryBackgroundGenderMale": false,
	"beneficiaryBackgroundGenderFemale": false,
	"beneficiaryBackgroundDateOfBirth": null,
	"beneficiaryBackgroundMaritalStatusSingle": false,
	"beneficiaryBackgroundMaritalStatusMarried": false,
	"beneficiaryBackgroundMaritalStatusDivorced": false,
	"beneficiaryBackgroundMaritalStatusWidowed": false,
	"beneficiaryBackgroundCityOfBirth": "",
	"beneficiaryBackgroundProvinceOfBirth": "",
	"beneficiaryBackgroundCountryOfBirth": "",
	"beneficiaryBackgroundPreviouslyMarriedYes": false,
	"beneficiaryBackgroundPreviouslyMarriedNo": false,
	"beneficiaryBackgroundEverBeenInTheUSYes": false,
	"beneficiaryBackgroundEverBeenInTheUSNo": false,
	"beneficiaryBackgroundCurrentlyInUSYes": false,
	"beneficiaryBackgroundCurrentlyInUSNo": false,
	"beneficiaryAbroadStreetAddressApt": false,
	"beneficiaryAbroadStreetAddressSte": false,
	"beneficiaryAbroadStreetAddressFlo": false,
	"beneficiaryAbroadStreetAddressNumber": false,
	"beneficiaryAbroadStreetAddressText": "",
	"beneficiaryAbroadCityOrTown": "",
	"beneficiaryAbroadState": "",
	"beneficiaryAbroadProvince": "",
	"beneficiaryAbroadZipCode": "",
	"beneficiaryAbroadCountry": "",
	"beneficiaryAbroadDaytimePhoneNumber": "",
	"beneficiaryAbroadLatinAlphabetYes": false,
	"beneficiaryAbroadLatinAlphabetNo": false,
	"beneficiaryAbroadOtherNamesUsedYes": false,
	"beneficiaryAbroadOtherNamesUsedNo": false,
	"interpreterFirstName": "",
	"interpreterLastName": "",
	"interpreterBusinessName": "",
	"interpreterStreetAddressApt": false,
	"interpreterStreetAddressSte": false,
	"interpreterStreetAddressFlo": false,
	"interpreterStreetAddressNumber": false,
	"interpreterStreetAddressText": "",
	"interpreterCityOrTown": "",
	"interpreterProvince": "",
	"interpreterZipCode": "",
	"interpreterCountry": "",
	"interpreterDaytimePhoneNumber": "",
	"interpreterEmailAddress": "",
	"deleted": false
}

export const FormVisaFiance = () => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const stepIndex = parseInt(params.get("st")) || 1;
	// Init step when reload
	initialSteps.map((val) => {
		val.active = val.stepIndex === stepIndex;
		return val;
	});

	const [steps, setSteps] = useState(initialSteps);
	const [currentStepIndex, setCurrentStepIndex] = useState(stepIndex);
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

	const updateStepActive = (index) => {
		initialSteps.map((val) => {
			val.active = val.stepIndex === index;
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
			"petitionerContactOtherNamesUsed": {
        "petitionerContactOtherNamesUsedYes": false,
        "petitionerContactOtherNamesUsedNo": false,
			},
			"petitionerContactRelatedFiance": {
        "petitionerContactRelatedFianceYes": false,
        "petitionerContactRelatedFianceNo": false,
			},
			"petitionerAddress1MailingStreetAddress": {
        "petitionerAddress1MailingStreetAddressApt": false,
        "petitionerAddress1MailingStreetAddressSte": false,
        "petitionerAddress1MailingStreetAddressFlr": false,
			},
			"petitionerAddress2MailingStreetAddress": {
        "petitionerAddress2MailingStreetAddressApt": false,
        "petitionerAddress2MailingStreetAddressSte": false,
        "petitionerAddress2MailingStreetAddressFlr": false,
        "petitionerAddress2MailingStreetAddressYes": false,
			},
			"petitionerBackgroundGender": {
        "petitionerBackgroundGenderMale": false,
        "petitionerBackgroundGenderFemale": false,
			},
			"petitionerBackgroundMaritalStatus": {
        "petitionerBackgroundMaritalStatusSingle": false,
        "petitionerBackgroundMaritalStatusMarried": false,
        "petitionerBackgroundMaritalStatusDivorced": false,
        "petitionerBackgroundMaritalStatusWidowed": false,
			},
			"petitionerBackgroundPreviouslyMarried": {
        "petitionerBackgroundPreviouslyMarriedYes": false,
        "petitionerBackgroundPreviouslyMarriedNo": false,
			},
			"petitionerParent1Gender": {
        "petitionerParent1GenderMale": false,
        "petitionerParent1GenderFemale": false,
			},
			"petitionerParent2Gender": {
        "petitionerParent2GenderMale": false,
        "petitionerParent2GenderFemale": false,
			},
			"petitionerBiographicEthnicity": {
        "petitionerBiographicEthnicityNotHispanic": false,
        "petitionerBiographicEthnicityHispanic": false,
			},
			"petitionerBiographicRace": {
        "petitionerBiographicRaceWhite": false,
        "petitionerBiographicRaceAsian": false,
        "petitionerBiographicRaceBlack": false,
        "petitionerBiographicRaceIndian": false,
        "petitionerBiographicRaceHawaiian": false,
			},
			"petitionerBiographicHairColor": {
        "petitionerBiographicHairColorBlack": false,
        "petitionerBiographicHairColorBrown": false,
        "petitionerBiographicHairColorBlond": false,
        "petitionerBiographicHairColorGray": false,
        "petitionerBiographicHairColorWhite": false,
        "petitionerBiographicHairColorRed": false,
        "petitionerBiographicHairColorSandy": false,
        "petitionerBiographicHairColorBald": false,
        "petitionerBiographicHairColorOther": false,
			},
			"petitionerBiographicEyeColor": {
        "petitionerBiographicEyeColorBlack": false,
        "petitionerBiographicEyeColorBlue": false,
        "petitionerBiographicEyeColorBrown": false,
        "petitionerBiographicEyeColorGray": false,
        "petitionerBiographicEyeColorGreen": false,
        "petitionerBiographicEyeColorHazel": false,
        "petitionerBiographicEyeColorMaroon": false,
        "petitionerBiographicEyeColorPink": false,
        "petitionerBiographicEyeColorOther": false,
			},
			"petitionerBiographicCivilCriminal": {
        "petitionerBiographicCivilCriminalYes": false,
        "petitionerBiographicCivilCriminalNo": false,
			},
			"petitionerBiographicDomesticViolence": {
        "petitionerBiographicDomesticViolenceYes": false,
        "petitionerBiographicDomesticViolenceNo": false,
			},
			"petitionerBiographicHomicide": {
        "petitionerBiographicHomicideYes": false,
        "petitionerBiographicHomicideNo": false,
			},
			"petitionerBiographicConvictions": {
        "petitionerBiographicConvictionsYes": false,
        "petitionerBiographicConvictionsNo": false,
			},
			"petitionerStatusThrough": {
        "petitionerStatusThroughBirthUS": false,
        "petitionerStatusThroughUSCitizenParents": false,
        "petitionerStatusThroughNaturalization": false,
			},
			"petitionerStatusCitizenship": {
        "petitionerStatusCitizenshipYes": false,
        "petitionerStatusCitizenshipNo": false,
      },
      "petitionerStatusI129F": {
        "petitionerStatusI129FYes": false,
        "petitionerStatusI129FNo": false,
      },
      "petitionerStatusIMB": {
        "petitionerStatusIMBYes": false,
        "petitionerStatusIMBNo": false,
      },
      "beneficiaryContactOtherNamesUsed": {
        "beneficiaryContactOtherNamesUsedYes": false,
        "beneficiaryContactOtherNamesUsedNo": false,
      },
      "beneficiaryAddress1MailingStreetAddress": {
        "beneficiaryAddress1MailingStreetAddressApt": false,
        "beneficiaryAddress1MailingStreetAddressSte": false,
        "beneficiaryAddress1MailingStreetAddressFlr": false,
        "beneficiaryAddress1MailingStreetAddressYes": false,
      },
      "beneficiaryAddressDifferentPhysical": {
        "beneficiaryAddressDifferentPhysicalYes": false,
        "beneficiaryAddressDifferentPhysicalNo": false,
      },
      "beneficiaryAddress2MailingStreetAddress": {
        "beneficiaryAddress2MailingStreetAddressApt": false,
        "beneficiaryAddress2MailingStreetAddressSte": false,
        "beneficiaryAddress2MailingStreetAddressFlr": false,
        "beneficiaryAddress2MailingStreetAddressYes": false,
      },
      "beneficiaryBackgroundGender": {
        "beneficiaryBackgroundGenderMale": false,
        "beneficiaryBackgroundGenderFemale": false,
      },
      "beneficiaryBackgroundMaritalStatus": {
        "beneficiaryBackgroundMaritalStatusSingle": false,
        "beneficiaryBackgroundMaritalStatusMarried": false,
        "beneficiaryBackgroundMaritalStatusDivorced": false,
        "beneficiaryBackgroundMaritalStatusWidowed": false,
      },
      "beneficiaryBackgroundPreviouslyMarried": {
        "beneficiaryBackgroundPreviouslyMarriedYes": false,
        "beneficiaryBackgroundPreviouslyMarriedNo": false,
      },
      "beneficiaryBackgroundEverBeenInTheUS": {
        "beneficiaryBackgroundEverBeenInTheUSYes": false,
        "beneficiaryBackgroundEverBeenInTheUSNo": false,
      },
      "beneficiaryBackgroundCurrentlyInUS": {
        "beneficiaryBackgroundCurrentlyInUSYes": false,
        "beneficiaryBackgroundCurrentlyInUSNo": false,
      },
      "beneficiaryAbroadStreetAddress": {
        "beneficiaryAbroadStreetAddressApt": false,
        "beneficiaryAbroadStreetAddressSte": false,
        "beneficiaryAbroadStreetAddressFlo": false,
        "beneficiaryAbroadStreetAddressNumber": false,
      },
      "beneficiaryAbroadLatinAlphabet": {
        "beneficiaryAbroadLatinAlphabetYes": false,
        "beneficiaryAbroadLatinAlphabetNo": false,
        "beneficiaryAbroadOtherNamesUsedYes": false,
        "beneficiaryAbroadOtherNamesUsedNo": false,
      },
      "interpreterStreetAddress": {
        "interpreterStreetAddressApt": false,
        "interpreterStreetAddressSte": false,
        "interpreterStreetAddressFlo": false,
        "interpreterStreetAddressNumber": false,
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

	// Submit Form
	const submitForm = async (e) => {
		e.preventDefault();
		let payload = {}

		Object.keys(values).forEach(function (key) {
			if (values[key]) {
				payload[key] = values[key]
			}
		});

    if (values.id > 0) {
			await http.post("FormVisaFiance/Update", payload);
		} else {
			let result = await http.post("FormVisaFiance/Insert", payload);
			if (result.succeeded) {
				setValues({
					...values,
					id: result.data.id
				})
			}
    }
    
		if (currentStepIndex === steps.length) {
			// Reset state and back to start
			setValues(initialValues)
			backToStart();
		} else {
			nextStep();
		}
	}

	// Update query string
	useEffect(() => {
		history.push({
			pathname: "formvisafiance",
			search: "id=" + values.id + "&st=" + currentStepIndex,
		});
	}, [values.id, currentStepIndex]);

	return (
		<AppShell>
			<Container>
				<h1>
					Visa Fiance
				</h1>
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
							<Button variant="contained"
								type="submit">{currentStepIndex === steps.length ? "Submit" : "Save & Continue"}</Button>
							{
								currentStepIndex < steps.length &&
								<Button variant="contained" onClick={nextStep}>Skip & Continue</Button>
							}
						</Stack>
					</form>
				</ThemeProvider>
			</Container>
		</AppShell>
	)
};
