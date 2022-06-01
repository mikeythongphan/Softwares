import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";
import { EmploymentName } from "./01-employment-name";
import { EmploymentAddress } from "./02-employment-address";
import { EmploymentContact } from "./03-employment-contact";
import { EmploymentParent } from "./04-employment-parent";
import { EmploymentAuthorization } from "./05-employment-authorization";
import { EmploymentInterpreter } from "./06-employment-interpreter";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      margin: theme.spacing(1)
    }
  }
}));

const initialSteps = [
  { active: true, component: EmploymentName, stepIndex: 1 },
  { active: false, component: EmploymentAddress, stepIndex: 2 },
  { active: false, component: EmploymentContact, stepIndex: 3 },
  { active: false, component: EmploymentParent, stepIndex: 4 },
  { active: false, component: EmploymentAuthorization, stepIndex: 5 },
  { active: false, component: EmploymentInterpreter, stepIndex: 6 }
]

const initialValues = {
  "id": 0,
  "accountId": 1,
  "nameFirstName": "",
  "nameMiddleName": "",
  "nameLastName": "",
  "nameOtherNamesYes": false,
  "nameOtherNamesNo": false,
  "nameDaytimePhone": "",
  "nameEmailAddress": "",
  "nameCityOfBirth": "",
  "nameProvinceStateOfBirth": "",
  "nameCountryOfBirth": "",
  "nameAppyingForInitial": false,
  "nameAppyingForReplacement": false,
  "nameAppyingForRenewal": false,
  "addressMailingStreetAddressApt": false,
  "addressMailingStreetAddressSte": false,
  "addressMailingStreetAddressFlr": false,
  "addressMailingStreetAddressYes": false,
  "addressMailingStreetAddressText": "",
  "addressCityOrTown": "",
  "addressState": "",
  "addressProvince": "",
  "addressZipCode": "",
  "addressDifferentPhysicalYes": false,
  "addressDifferentPhysicalNo": false,
  "contactGenderMale": false,
  "contactGenderFemale": false,
  "contactDateOfBirth": null,
  "contactCityOfBirth": "",
  "contactProvinceOrStateOfBirth": "",
  "contactCountryOfBirth": "",
  "contactMaritalStatusSingle": false,
  "contactMaritalStatusMarried": false,
  "contactMaritalStatusDivorced": false,
  "contactMaritalStatusWidowed": false, 
  "contactAlienRegistrationNumber": "",
  "contactFormI765Yes": false,
  "contactFormI765No": false,
  "contactSocialSecurityYes": false,
  "contactSocialSecurityNo": false,
  "contactSSAYes": false,
  "contactSSANo": false,
  "contactConsentDisclosureYes": false,
  "contactConsentDisclosureNo": false,
  "parentFatherFirstName": "",
  "parentFatherLastName": "",
  "parentMotherFirstName": "",
  "parentMotherLastName": "",
  "parent1Country": "",
  "parent2Country": "",
  "parent3Country": "",
  "parentArrivalDeparture": "",
  "parentDateAuthorized": "",
  "parentPassportNumber": "",
  "parentTravelDocumentNumber": "",
  "parentCountryIssuance": "",
  "parentDateLastArrival": null,
  "parentPlaceLastArrival": "",
  "parentImmigrationStatusLastArrival": "",
  "parentImmigrationStatusCategory": "",
  "parentSudentExchangeVisitor": "", 
  "authorizationEligibilityCategory": "",
  "authorizationDegree": "",
  "authorizationEmployerName": "",
  "authorizationCompanyIdentification": "",
  "authorizationReceiptNumber": "",
  "authorization1ArrestedYes": false,
  "authorization1ArrestedNo": false,
  "authorizationLawfullyYes": false,
  "authorizationLawfullyNo": false,
  "authorizationSecretaryYes": false,
  "authorizationSecretaryNo": false,
  "authorization1NoticeYes": false,
  "authorization1NoticeNo": false,
  "authorization2ArrestedYes": false,
  "authorization2ArrestedNo": false,
  "authorization2NoticeYes": false,
  "authorization2NoticeNo": false,
  "interpreterFirstName": "",
  "interpreterLastName": "",
  "interpreterBusinessName": "",
  "interpreterMailingStreetAddressApt": false,
  "interpreterMailingStreetAddressSte": false,
  "interpreterMailingStreetAddressFlr": false,
  "interpreterMailingStreetAddressNumber": false,
  "interpreterMailingStreetAddressText": "",
  "interpreterCityOrTown": "",
  "interpreterProvince": "",
  "interpreterZipCode": "",
  "interpreterCountry": "",
  "interpreterDaytimeTelephoneNumber": "",
  "interpreterEmail": "",
  "deleted": false
}

export const FormEmploymentAuthorization = (props) => {

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
			"nameOtherNames": {
				"nameOtherNamesYes": false,
				"nameOtherNamesNo": false,
			},
			"nameAppyingFor": {
				"nameAppyingForInitial": false,
				"nameAppyingForReplacement": false,
				"nameAppyingForRenewal": false,
			},
			"addressMailingStreetAddress": {
				"addressMailingStreetAddressApt": false,
				"addressMailingStreetAddressSte": false,
				"addressMailingStreetAddressFlr": false,
				"addressMailingStreetAddressYes": false,
			},
			"contactGender": {
				"contactGenderMale": false,
				"contactGenderFemale": false,
			},
			"contactMaritalStatus": {
				"contactMaritalStatusSingle": false,
        "contactMaritalStatusMarried": false,
        "contactMaritalStatusDivorced": false,
        "contactMaritalStatusWidowed": false, 
			},
			"contactFormI765": {
        "contactFormI765Yes": false,
        "contactFormI765No": false,
			},
			"contactSocialSecurity": {
        "contactSocialSecurityYes": false,
        "contactSocialSecurityNo": false,
			},
			"contactSSA": {
        "contactSSAYes": false,
        "contactSSANo": false,
			},
			"contactConsentDisclosure": {
        "contactConsentDisclosureYes": false,
        "contactConsentDisclosureNo": false,
			},
			"authorization1Arrested": {
        "authorization1ArrestedYes": false,
        "authorization1ArrestedNo": false,
			},
			"authorizationLawfully": {
        "authorizationLawfullyYes": false,
        "authorizationLawfullyNo": false,
			},
			"authorizationSecretary": {
        "authorizationSecretaryYes": false,
        "authorizationSecretaryNo": false,
			},
			"authorization1Notice": {
        "authorization1NoticeYes": false,
        "authorization1NoticeNo": false,
			},
			"authorization2Arrested": {
        "authorization2ArrestedYes": false,
        "authorization2ArrestedNo": false,
			},
			"authorization2Notice": {
        "authorization2NoticeYes": false,
        "authorization2NoticeNo": false,
			},
			"interpreterMailingStreetAddress": {
        "interpreterMailingStreetAddressApt": false,
        "interpreterMailingStreetAddressSte": false,
        "interpreterMailingStreetAddressFlr": false,
        "interpreterMailingStreetAddressNumber": false,
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
			await http.post("FormEmployment/Update", payload);
		} else {
			let result = await http.post("FormEmployment/Insert", payload);
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
      pathname: "formemployment",
      search: "id=" + values.id + "&st=" + currentStepIndex,
    });
  }, [values.id, currentStepIndex]);

  return (
    <AppShell>
      <Container>
        <h1>
          Form Employment Authorization
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
  );
};
