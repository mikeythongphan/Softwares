import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";
import { PetitionerContact } from "./01-petitioner-contact";
import { SponsorsContact } from "./02-sponsors-contact";
import { SponsorInformation } from "./03-sponsor-information";
import { SponsorStatus } from "./04-sponsor-status";
import { SponsorGender } from "./05-sponsor-gender";
import { SponsorAddress } from "./06-sponsor-address";
import { SponsorName } from "./07-sponsor-name";
import { InterpreterName } from "./08-interpreter-name";

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
  { active: false, component: SponsorsContact, stepIndex: 2 },
  { active: false, component: SponsorInformation, stepIndex: 3 },
  { active: false, component: SponsorStatus, stepIndex: 4 },
  { active: false, component: SponsorGender, stepIndex: 5 },
  { active: false, component: SponsorAddress, stepIndex: 6 },
  { active: false, component: SponsorName, stepIndex: 7 },
  { active: false, component: InterpreterName, stepIndex: 8 }
]

const initialValues = {
  "id": 0,
  "accountId": 1,
  "petitionerContactFirstName": "",
	"petitionerContactMiddleName": "",
	"petitionerContactLastName": "",
	"petitionerContactDaytimeTelephoneNumber": "",
	"petitionerContactEmailAddress": "",
	"petitionerContactDateOfBirth": null,
	"petitionerContactAlienRegistrationNumber": "",
	"petitionerContactCountryOfCitizenship": "",
	"sponsorsContactMailingStreetAddressApt": false,
	"sponsorsContactMailingStreetAddressSte": false,
	"sponsorsContactMailingStreetAddressFlr": false,
	"sponsorsContactMailingStreetNumber": "",
	"sponsorsContactCityOrTown": "",
	"sponsorsContactState": "",
	"sponsorsContactProvince": "",
	"sponsorsContactZipCode": "",
	"sponsorsContactCountry": "",
	"sponsorsContactDifferentPhysicalYes": false,
	"sponsorsContactDifferentPhysicalNo": false,
	"sponsorInformationEmployedAs": "",
	"sponsorInformationNameOfEmployer1": "",
	"sponsorInformationNameOfEmployer2": "",
	"sponsorInformationSelfEmployed": "",
	"sponsorInformationRetiredSince": null,
	"sponsorInformationUnemployedSince": null,
	"sponsorInformationAnnualIncomeIs": "",
	"sponsorInformationAnnualHouseholdIs": "",
	"sponsorInformationTaxYearMostRecent": "",
	"sponsorInformation2ndMostRecent": "",
	"sponsorInformation3rdMostRecent": "",
	"sponsorInformationIRSRequiredLevelYes": false,
	"sponsorInformationIRSRequiredLevelNo": false,
	"sponsorStatusSocialSecurityNumber": "",
	"sponsorStatusMaritalStatusUSCitizen": false,
	"sponsorStatusMaritalStatusUSNational": false,
	"sponsorStatusMaritalStatusGreenCard": false,
	"sponsorStatusAlienNumber": "",
	"sponsorStatusCountryOfDomicile": "",
	"sponsorStatusUSArmedForcesYes": false,
	"sponsorStatusUSArmedForcesNo": false,
	"sponsorStatusCurrentlyMarriedYes": false,
	"sponsorStatusCurrentlyMarriedNo": false,
	"sponsorStatusDependentChildrenYes": false,
	"sponsorStatusDependentChildrenNo": false,
	"sponsorStatusPreviouslyMarriedYes": false,
	"sponsorStatusPreviouslyMarriedNo": false,
	"sponsorGenderPrincipalImmigrantMale": false,
	"sponsorGenderPrincipalImmigrantFemale": false,
	"sponsorGenderWithinSixMonthsImmigrantMale": false,
	"sponsorGenderWithinSixMonthsImmigrantFemale": false,
	"sponsorGenderMoreThanSixMonthsImmigrantMale": false,
	"sponsorGenderMoreThanSixMonthsImmigrantFemale": false,
	"sponsorAddressStreetApt": false,
	"sponsorAddressStreetSte": false,
	"sponsorAddressStreetFlr": false,
	"sponsorAddressStreetNumber": "",
	"sponsorAddressCityOrTown": "",
	"sponsorAddressState": "",
	"sponsorAddressProvince": "",
	"sponsorAddressZipCode": "",
	"sponsorAddressCountry": "",
	"sponsorNameFirstName": "",
	"sponsorNameMiddleName": "",
	"sponsorNameLastName": "",
	"sponsorName1DaytimeTelephoneNumber": "",
	"sponsorName2DaytimeTelephoneNumber": "",
	"sponsorNameEmailAddress": "",
	"sponsorNameDateOfBirth": null,
	"sponsorNameAlienRegistrationNumber": "",
	"sponsorNameCountry": "",
	"interpreterNameFirstName": "",
	"interpreterNameLastName": "",
	"interpreterNameBusinessOrOrganization": "",
	"interpreterNameStreetApt": false,
	"interpreterNameStreetSte": false,
	"interpreterNameStreetFlr": false,
	"interpreterNameStreetNumber": "",
	"interpreterNameCityOrTown": "",
	"interpreterNameProvince": "",
	"interpreterNameZipCode": "",
	"interpreterNameCountry": "",
	"interpreterNameDaytimeTelephoneNumber": "",
	"interpreterNameEmailAddress": "",
  "deleted": false
}

export const FormVisaParent = (props) => {

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
			"sponsorsContactMailingStreetAddress": {
        "sponsorsContactMailingStreetAddressApt": false,
        "sponsorsContactMailingStreetAddressSte": false,
        "sponsorsContactMailingStreetAddressFlr": false,
			},
			"sponsorsContactDifferentPhysical": {
        "sponsorsContactDifferentPhysicalYes": false,
        "sponsorsContactDifferentPhysicalNo": false,
			},
			"sponsorInformationIRSRequiredLevel": {
        "sponsorInformationIRSRequiredLevelYes": false,
        "sponsorInformationIRSRequiredLevelNo": false,
			},
			"sponsorStatusMaritalStatus": {
        "sponsorStatusMaritalStatusUSCitizen": false,
        "sponsorStatusMaritalStatusUSNational": false,
        "sponsorStatusMaritalStatusGreenCard": false,
			},
			"sponsorStatusUSArmedForces": {
        "sponsorStatusUSArmedForcesYes": false,
        "sponsorStatusUSArmedForcesNo": false,
			},
			"sponsorStatusCurrentlyMarried": {
        "sponsorStatusCurrentlyMarriedYes": false,
        "sponsorStatusCurrentlyMarriedNo": false,
			},
			"sponsorStatusDependentChildren": {
        "sponsorStatusDependentChildrenYes": false,
        "sponsorStatusDependentChildrenNo": false,
			},
			"sponsorStatusPreviouslyMarried": {
        "sponsorStatusPreviouslyMarriedYes": false,
        "sponsorStatusPreviouslyMarriedNo": false,
			},
			"sponsorGenderPrincipalImmigrant": {
        "sponsorGenderPrincipalImmigrantMale": false,
        "sponsorGenderPrincipalImmigrantFemale": false,
			},
			"sponsorGenderWithinSixMonthsImmigrant": {
        "sponsorGenderWithinSixMonthsImmigrantMale": false,
        "sponsorGenderWithinSixMonthsImmigrantFemale": false,
			},
			"sponsorGenderMoreThanSixMonthsImmigrant": {
        "sponsorGenderMoreThanSixMonthsImmigrantMale": false,
        "sponsorGenderMoreThanSixMonthsImmigrantFemale": false,
			},
			"sponsorAddressStreet": {
        "sponsorAddressStreetApt": false,
        "sponsorAddressStreetSte": false,
        "sponsorAddressStreetFlr": false,
			},
			"interpreterNameStreet": {
        "interpreterNameStreetApt": false,
        "interpreterNameStreetSte": false,
        "interpreterNameStreetFlr": false,
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
			await http.post("FormVisaParent/Update", payload);
		} else {
			let result = await http.post("FormVisaParent/Insert", payload);
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
      pathname: "formvisaparent",
      search: "id=" + values.id + "&st=" + currentStepIndex,
    });
  }, [values.id, currentStepIndex]);

  return (
    <AppShell>
      <Container>
        <h1>
          Visa Parents
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
