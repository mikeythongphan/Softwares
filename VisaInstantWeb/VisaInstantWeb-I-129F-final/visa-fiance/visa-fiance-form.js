import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";
import { BeneficiaryInformation01 } from "./beneficiary-sponsor-profile";

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root': {
			width: '100%',
			margin: theme.spacing(1)
		}
	}
}));

const initialSteps = [
	{ active: true, component: BeneficiaryInformation01, stepIndex: 1 }
]

const initialValues = {
	"id": 0,
  "accountId": null,
  "beneficiary1FullName": "",
  "beneficiary1PlaceOfBirth": "",
  "beneficiary1HasBeenUSYes": false,
  "beneficiary1HasBeenUSNo": false,
  "beneficiary1NamesUsed": "",
  "beneficiary1GreenCardNumber": "",
  "beneficiary1SocialSecurityNumber": "",
  "beneficiary1ConsularOfficeWishes": "",
  "beneficiary1PrimaryLanguage": "",
  "beneficiary1HomePhoneNumber": "",
  "beneficiary1Mobile": "",
  "beneficiary1OfficeTelephone": "",
  "beneficiary1FaxNumber": "",
  "beneficiary1EmailAddress": "",
  "beneficiary1FatherName": "",
  "beneficiary1FatherDateOfBirth": null,
  "beneficiary1FatherPlaceOfBirth": "",
  "beneficiary1FatherCityCountryResidence": "",
  "beneficiary1MotherName": "",
  "beneficiary1MotherDateOfBirth": null,
  "beneficiary1MotherPlaceOfBirth": "",
  "beneficiary1MotherCityCountryResidence": "",
  "beneficiary11NameOfExSpouse": "",
  "beneficiary11BirthDateOfExSpouse": null,
  "beneficiary11BirthPlaceOfExSpouse": "",
  "beneficiary11DateOfMarriage": null,
  "beneficiary11PlaceOfMarriage": "",
  "beneficiary12NameOfExSpouse": "",
  "beneficiary12BirthDateOfExSpouse": null,
  "beneficiary12BirthPlaceOfExSpouse": "",
  "beneficiary12DateOfMarriage": null,
  "beneficiary12PlaceOfMarriage": "",
  "beneficiary13NameOfExSpouse": "",
  "beneficiary13BirthDateOfExSpouse": null,
  "beneficiary13BirthPlaceOfExSpouse": "",
  "beneficiary13DateOfMarriage": null,
  "beneficiary13PlaceOfMarriage": "",
  "beneficiary14NameOfExSpouse": "",
  "beneficiary14BirthDateOfExSpouse": null,
  "beneficiary14BirthPlaceOfExSpouse": "",
  "beneficiary14DateOfMarriage": null,
  "beneficiary14PlaceOfMarriage": "",
  "beneficiary21CurrentHouseStreet": "",
  "beneficiary21City": "",
  "beneficiary21StateCounty": "",
  "beneficiary21ZipCode": "",
  "beneficiary21FromMonthYear": "",
  "beneficiary21ToMonthYear": "",
  "beneficiary22CurrentHouseStreet": "",
  "beneficiary22City": "",
  "beneficiary22StateCounty": "",
  "beneficiary22ZipCode": "",
  "beneficiary22FromMonthYear": "",
  "beneficiary22ToMonthYear": "",
  "beneficiary23CurrentHouseStreet": "",
  "beneficiary23City": "",
  "beneficiary23StateCounty": "",
  "beneficiary23ZipCode": "",
  "beneficiary23FromMonthYear": "",
  "beneficiary23ToMonthYear": "",
  "beneficiary24CurrentHouseStreet": "",
  "beneficiary24City": "",
  "beneficiary24StateCounty": "",
  "beneficiary24ZipCode": "",
  "beneficiary24FromMonthYear": "",
  "beneficiary24ToMonthYear": "",
  "beneficiary25CurrentHouseStreet": "",
  "beneficiary25City": "",
  "beneficiary25StateCounty": "",
  "beneficiary25ZipCode": "",
  "beneficiary25FromMonthYear": "",
  "beneficiary25ToMonthYear": "",
  "beneficiary3HouseStreetName": "",
  "beneficiary3City": "",
  "beneficiary3StateCounty": "",
  "beneficiary3ZipCode": "",
  "beneficiary3FromMonthYear": "",
  "beneficiary3ToMonthYear": "",
  "beneficiary41NameWorkplaceAddress": "",
  "beneficiary41Position": "",
  "beneficiary41FromMonthYear": "",
  "beneficiary41ToMonthYear": "",
  "beneficiary42NameWorkplaceAddress": "",
  "beneficiary42Position": "",
  "beneficiary42FromMonthYear": "",
  "beneficiary42ToMonthYear": "",
  "beneficiary43NameWorkplaceAddress": "",
  "beneficiary43Position": "",
  "beneficiary43FromMonthYear": "",
  "beneficiary43ToMonthYear": "",
  "beneficiary44NameWorkplaceAddress": "",
  "beneficiary44Position": "",
  "beneficiary44FromMonthYear": "",
  "beneficiary44ToMonthYear": "",
  "beneficiary45NameWorkplaceAddress": "",
  "beneficiary45Position": "",
  "beneficiary45FromMonthYear": "",
  "beneficiary45ToMonthYear": "",
  "beneficiary5NameAddressWork": "",
  "beneficiary5Position": "",
  "beneficiary5FromMonthYear": "",
  "beneficiary5ToMonthYear": "",
  "beneficiary5AllPreviousVisaRefusals": "",
  "beneficiary5HasAppliedWorkPermitYes": false,
  "beneficiary5HasAppliedWorkPermitNo": false,
  "beneficiary5WhenAndWhere": "",
  "beneficiary5ApprovedYes": false,
  "beneficiary5ApprovedNo": false,
  "beneficiary5NamesOrganizationsMember": "",
  "beneficiary5DescribePeopleMet": "",
  "beneficiary5CanMatchmakingYes": false,
  "beneficiary5CanMatchmakingNo": false,
  "beneficiary5HaveEverViolatedYes": false,
  "beneficiary5HaveEverViolatedNo": false,
  "beneficiary5ViolatedProvideDetails": "",
  "beneficiary5HasEverSufferedYes": false,
  "beneficiary5HasEverSufferedNo": false,
  "beneficiary5SufferedProvideDetails": "",
  "beneficiary5HasInMilitaryYes": false,
  "beneficiary5HasInMilitaryNo": false,
  "beneficiary5NameOfOrganization": "",
  "beneficiary5EnlistmentDate": null,
  "beneficiary5WhereToEnlist": "",
  "sponsor1Name": "",
  "sponsor1BirthPlace": "",
  "sponsor1IsFianceYes": false,
  "sponsor1IsFianceNo": false,
  "sponsor1NamesUsed": "",
  "sponsor1GreenCardNumber": "",
  "sponsor1SocialSecurityNumber": "",
  "sponsor1HomePhoneNumber": "",
  "sponsor1Mobile": "",
  "sponsor1OfficePhone": "",
  "sponsor1FaxNumber": "",
  "sponsor1EmailAddress": "",
  "sponsor1FatherName": "",
  "sponsor1FatherBirthDate": null,
  "sponsor1FatherBirthPlace": "",
  "sponsor1FatherCityCountry": "",
  "sponsor1MotherName": "",
  "sponsor1MotherBirthDate": null,
  "sponsor1MotherBirthPlace": "",
  "sponsor1MotherCityCountry": "",
  "sponsor11NameExSpouse": "",
  "sponsor11BirthDateExSpouse": null,
  "sponsor11BirthplaceExSpouse": "",
  "sponsor11MarriageDate": null,
  "sponsor11MarriagePlace": "",
  "sponsor12NameExSpouse": "",
  "sponsor12BirthDateExSpouse": null,
  "sponsor12BirthPlaceExSpouse": "",
  "sponsor12MarriageDate": null,
  "sponsor12MarriagePlace": "",
  "sponsor13NameExSpouse": "",
  "sponsor13BirthDateExSpouse": null,
  "sponsor13BirthPlaceExSpouse": "",
  "sponsor13MarriageDate": null,
  "sponsor13MarriagePlace": "",
  "sponsor21CurrentHouseStreet": "",
  "sponsor21City": "",
  "sponsor21StateCounty": "",
  "sponsor21ZipCode": "",
  "sponsor21FromMonthYear": "",
  "sponsor21ToMonthYear": "",
  "sponsor22CurrentHouseStreet": "",
  "sponsor22City": "",
  "sponsor22StateCounty": "",
  "sponsor22ZipCode": "",
  "sponsor22FromMonthYear": "",
  "sponsor22ToMonthYear": "",
  "sponsor23CurrentHouseStreet": "",
  "sponsor23City": "",
  "sponsor23StateCounty": "",
  "sponsor23ZipCode": "",
  "sponsor23FromMonthYear": "",
  "sponsor23ToMonthYear": "",
  "sponsor24CurrentHouseStreet": "",
  "sponsor24City": "",
  "sponsor24StateCounty": "",
  "sponsor24ZipCode": "",
  "sponsor24FromMonthYear": "",
  "sponsor24ToMonthYear": "",
  "sponsor25CurrentHouseStreet": "",
  "sponsor25City": "",
  "sponsor25StateCounty": "",
  "sponsor25ZipCode": "",
  "sponsor25FromMonthYear": "",
  "sponsor25ToMonthYear": "",
  "sponsor3HouseStreetName": "",
  "sponsor3City": "",
  "sponsor3StateCounty": "",
  "sponsor3ZipCode": "",
  "sponsor3FromMonthYear": "",
  "sponsor3ToMonthYear": "",
  "sponsor41NameWorkplaceAddress": "",
  "sponsor41Position": "",
  "sponsor41FromMonthYear": "",
  "sponsor41ToMonthYear": "",
  "sponsor42NameWorkplaceAddress": "",
  "sponsor42Position": "",
  "sponsor42FromMonthYear": "",
  "sponsor42ToMonthYear": "",
  "sponsor43NameWorkplaceAddress": "",
  "sponsor43Position": "",
  "sponsor43FromMonthYear": "",
  "sponsor43ToMonthYear": "",
  "sponsor44NameWorkplaceAddress": "",
  "sponsor44Position": "",
  "sponsor44FromMonthYear": "",
  "sponsor44ToMonthYear": "",
  "sponsor45NameWorkplaceAddress": "",
  "sponsor45Position": "",
  "sponsor45FromMonthYear": "",
  "sponsor45ToMonthYear": "",
  "sponsor5NameAddressWork": "",
  "sponsor5Position": "",
  "sponsor5FromMonthYear": "",
  "sponsor5ToMonthYear": "",
  "beneficiaryProfileFormI94": false,
  "beneficiaryProfileBirthCertificate": false,
  "beneficiaryProfileI20Documents": false,
  "beneficiaryProfileCriminalRecord": false,
  "beneficiaryProfilePassportPhotos": false,
  "beneficiaryProfilePreviousDivorce": false,
  "beneficiaryProfilePapersRelated": false,
  "sponsorProfileLetterConfirmation": false,
  "sponsorProfileBankStatement": false,
  "sponsorProfileTaxReturns": false,
  "sponsorProfileW2PaystubsChecks": false,
  "sponsorProfileDocumentsShowing": false,
  "sponsorProfilePassportPhotos": false,
  "sponsorProfilePreviousDivorce": false,	  
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

	const backToPrevious = () => {
		setCurrentStepIndex(currentStepIndex - 1);
		updateStepActive(currentStepIndex - 1);  // Set previous step active
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
		}
		else {
			setValues({
				...values,
				[name]: value
			})
		}
	}

	const handleInputRadio = (name, value) => {
		let group_radio = {
			"beneficiary1HasBeenUS": {
        "beneficiary1HasBeenUSYes": false,
        "beneficiary1HasBeenUSNo": false,
			},
			"beneficiary5HasAppliedWorkPermit": {
        "beneficiary5HasAppliedWorkPermitYes": false,
        "beneficiary5HasAppliedWorkPermitNo": false,
			},
      "beneficiary5Approved": {
        "beneficiary5ApprovedYes": false,
        "beneficiary5ApprovedNo": false,
      },
      "beneficiary5CanMatchmaking": {
        "beneficiary5CanMatchmakingYes": false,
        "beneficiary5CanMatchmakingNo": false,
      },
      "beneficiary5HaveEverViolated": {
        "beneficiary5HaveEverViolatedYes": false,
        "beneficiary5HaveEverViolatedNo": false,
      },
      "beneficiary5HasEverSuffered": {
        "beneficiary5HasEverSufferedYes": false,
        "beneficiary5HasEverSufferedNo": false,
      },
      "beneficiary5HasInMilitary": {
        "beneficiary5HasInMilitaryYes": false,
        "beneficiary5HasInMilitaryNo": false,
      },
      "sponsor1IsFiance": {
        "sponsor1IsFianceYes": false,
        "sponsor1IsFianceNo": false,
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

		// if (values.id > 0) {
		// 	await http.post("FormVisaFiance/Update", payload);
		// } else {
		// 	let result = await http.post("FormVisaFiance/Insert", payload);
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
			pathname: "formfiance",
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
