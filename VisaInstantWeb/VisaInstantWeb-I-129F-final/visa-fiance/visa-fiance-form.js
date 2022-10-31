import React, { useEffect, useState } from "react";
import AppShell from "@core/@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { fianceApi } from "domain/@services/api/fiance.api";
import { useHistory, useLocation } from "react-router-dom";
import { BeneficiaryInformation01 } from "./beneficiary-sponsor-profile";
import * as paths from "routes/consts.route";
import LoadingComponent from "domain/@shared/loading";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1)
    }
  }
}));

const initialSteps = [
  { active: true, component: BeneficiaryInformation01, stepIndex: 1 }
];

const initialValues = {
  id: 0,
  accountId: null,
  beneficiary01FirstName: "",
  beneficiary01MiddleName: "",
  beneficiary01LastName: "",
  beneficiary01BirthDate: null,
  beneficiary01CityBirthPlace: "",
  beneficiary01CountryBirthPlace: "",
  beneficiary01HasBeenUSYes: false,
  beneficiary01HasBeenUSNo: false,
  beneficiary01FirstNamesUsed: "",
  beneficiary01MiddleNamesUsed: "",
  beneficiary01LastNamesUsed: "",
  beneficiary01GreenCardNumber: "",
  beneficiary01SocialSecurityNumber: "",
  beneficiary01CityConsularOfficeWishes: "",
  beneficiary01CountryConsularOfficeWishes: "",
  beneficiary01FirstNamePrimaryLanguage: "",
  beneficiary01MiddleNamePrimaryLanguage: "",
  beneficiary01LastNamePrimaryLanguage: "",
  beneficiary01StreetPrimaryLanguage: "",
  beneficiary01CityPrimaryLanguage: "",
  beneficiary01ProvincePrimaryLanguage: "",
  beneficiary01HomePhoneNumber: "",
  beneficiary01Mobile: "",
  beneficiary01OfficeTelephone: "",
  beneficiary01FaxNumber: "",
  beneficiary01EmailAddress: "",
  beneficiary01FatherFirstName: "",
  beneficiary01FatherMiddleName: "",
  beneficiary01FatherLastName: "",
  beneficiary01FatherBirthDate: null,
  beneficiary01FatherBirthPlace: "",
  beneficiary01FatherCityResidence: "",
  beneficiary01FatherCountryResidence: "",
  beneficiary01MotherFirstName: "",
  beneficiary01MotherMiddleName: "",
  beneficiary01MotherLastName: "",
  beneficiary01MotherBirthDate: null,
  beneficiary01MotherBirthPlace: "",
  beneficiary01MotherCityResidence: "",
  beneficiary01MotherCountryResidence: "",
  beneficiary11ExSpouseFirstName: "",
  beneficiary11ExSpouseMiddleName: "",
  beneficiary11ExSpouseLastName: "",
  beneficiary11ExSpouseBirthDate: null,
  beneficiary11ExSpouseBirthPlace: "",
  beneficiary11MarriageDate: null,
  beneficiary11MarriagePlace: "",
  beneficiary11DivorceDate: null,
  beneficiary11DivorcePlace: "",
  beneficiary12ExSpouseFirstName: "",
  beneficiary12ExSpouseMiddleName: "",
  beneficiary12ExSpouseLastName: "",
  beneficiary12ExSpouseBirthDate: null,
  beneficiary12ExSpouseBirthPlace: "",
  beneficiary12MarriageDate: null,
  beneficiary12MarriagePlace: "",
  beneficiary12DivorceDate: null,
  beneficiary12DivorcePlace: "",
  beneficiary13ExSpouseFirstName: "",
  beneficiary13ExSpouseMiddleName: "",
  beneficiary13ExSpouseLastName: "",
  beneficiary13ExSpouseBirthDate: null,
  beneficiary13ExSpouseBirthPlace: "",
  beneficiary13MarriageDate: null,
  beneficiary13MarriagePlace: "",
  beneficiary13DivorceDate: null,
  beneficiary13DivorcePlace: "",
  beneficiary14ExSpouseFirstName: "",
  beneficiary14ExSpouseMiddleName: "",
  beneficiary14ExSpouseLastName: "",
  beneficiary14ExSpouseBirthDate: null,
  beneficiary14ExSpouseBirthPlace: "",
  beneficiary14MarriageDate: null,
  beneficiary14MarriagePlace: "",
  beneficiary14DivorceDate: null,
  beneficiary14DivorcePlace: "",
  beneficiary21CurrentHouseStreet: "",
  beneficiary21City: "",
  beneficiary21State: "",
  beneficiary21ZipCode: "",
  beneficiary21FromMonthYear: "",
  beneficiary21ToMonthYear: "",
  beneficiary22CurrentHouseStreet: "",
  beneficiary22City: "",
  beneficiary22State: "",
  beneficiary22ZipCode: "",
  beneficiary22FromMonthYear: "",
  beneficiary22ToMonthYear: "",
  beneficiary23CurrentHouseStreet: "",
  beneficiary23City: "",
  beneficiary23State: "",
  beneficiary23ZipCode: "",
  beneficiary23FromMonthYear: "",
  beneficiary23ToMonthYear: "",
  beneficiary24CurrentHouseStreet: "",
  beneficiary24City: "",
  beneficiary24State: "",
  beneficiary24ZipCode: "",
  beneficiary24FromMonthYear: "",
  beneficiary24ToMonthYear: "",
  beneficiary25CurrentHouseStreet: "",
  beneficiary25City: "",
  beneficiary25State: "",
  beneficiary25ZipCode: "",
  beneficiary25FromMonthYear: "",
  beneficiary25ToMonthYear: "",
  beneficiary03HouseStreetName: "",
  beneficiary03City: "",
  beneficiary03State: "",
  beneficiary03ZipCode: "",
  beneficiary03FromMonthYear: "",
  beneficiary03ToMonthYear: "",
  beneficiary41WorkplaceName: "",
  beneficiary41WorkplaceAddress: "",
  beneficiary41WorkplaceCity: "",
  beneficiary41WorkplaceState: "",
  beneficiary41WorkplaceZipCode: "",
  beneficiary41WorkplaceProvince: "",
  beneficiary41WorkplaceCountry: "",
  beneficiary41Position: "",
  beneficiary41FromMonthYear: "",
  beneficiary41ToMonthYear: "",
  beneficiary42WorkplaceName: "",
  beneficiary42WorkplaceAddress: "",
  beneficiary42WorkplaceCity: "",
  beneficiary42WorkplaceState: "",
  beneficiary42WorkplaceZipCode: "",
  beneficiary42WorkplaceProvince: "",
  beneficiary42WorkplaceCountry: "",
  beneficiary42Position: "",
  beneficiary42FromMonthYear: "",
  beneficiary42ToMonthYear: "",
  beneficiary43WorkplaceName: "",
  beneficiary43WorkplaceAddress: "",
  beneficiary43WorkplaceCity: "",
  beneficiary43WorkplaceState: "",
  beneficiary43WorkplaceZipCode: "",
  beneficiary43WorkplaceProvince: "",
  beneficiary43WorkplaceCountry: "",
  beneficiary43Position: "",
  beneficiary43FromMonthYear: "",
  beneficiary43ToMonthYear: "",
  beneficiary44WorkplaceName: "",
  beneficiary44WorkplaceAddress: "",
  beneficiary44WorkplaceCity: "",
  beneficiary44WorkplaceState: "",
  beneficiary44WorkplaceZipCode: "",
  beneficiary44WorkplaceProvince: "",
  beneficiary44WorkplaceCountry: "",
  beneficiary44Position: "",
  beneficiary44FromMonthYear: "",
  beneficiary44ToMonthYear: "",
  beneficiary45WorkplaceName: "",
  beneficiary45WorkplaceAddress: "",
  beneficiary45WorkplaceCity: "",
  beneficiary45WorkplaceState: "",
  beneficiary45WorkplaceZipCode: "",
  beneficiary45WorkplaceProvince: "",
  beneficiary45WorkplaceCountry: "",
  beneficiary45Position: "",
  beneficiary45FromMonthYear: "",
  beneficiary45ToMonthYear: "",
  beneficiary05WorkName: "",
  beneficiary05WorkAddress: "",
  beneficiary05Position: "",
  beneficiary05FromMonthYear: "",
  beneficiary05ToMonthYear: "",
  beneficiary05EverBeenRestrainingOrderYes: false,
  beneficiary05EverBeenRestrainingOrderNo: false,
  beneficiary05EverBeenRestrainingOrder: "",
  beneficiary05HasBeenArrestedConvictedViolenceYes: false,
  beneficiary05HasBeenArrestedConvictedViolenceNo: false,
  beneficiary05HasBeenArrestedConvictedViolence: "",
  beneficiary05HasBeenArrestedConvictedFelonYes: false,
  beneficiary05HasBeenArrestedConvictedFelonNo: false,
  beneficiary05HasBeenArrestedConvictedFelon: "",
  beneficiary05HasBeenArrestedConvictedArrestedYes: false,
  beneficiary05HasBeenArrestedConvictedArrestedNo: false,
  beneficiary05HasBeenArrestedConvictedArrested: "",
  beneficiary05HasBeenAccusedAnyCountryYes: false,
  beneficiary05HasBeenAccusedAnyCountryNo: false,
  beneficiary05HasBeenAccusedAnyCountry: "",
  beneficiary05EverBeenInUSYes: false,
  beneficiary05EverBeenInUSNo: false,
  beneficiary05EverBeenInUSLastTimeAs: "",
  beneficiary05EverBeenInUSI94: "",
  beneficiary05EverBeenInUSArrivalDate: null,
  beneficiary05EverBeenInUSI94I95Date: null,
  beneficiary05EverBeenInUSPassportNo: "",
  beneficiary05EverBeenInUSPassportExpireDate: null,
  beneficiary05EverBeenInUSPassportCountry: "",
  beneficiary05HaveEverMetFianceYes: false,
  beneficiary05HaveEverMetFianceNo: false,
  beneficiary05HaveEverMetFianceNA: false,
  beneficiary05HaveEverMetFiance: "",
  beneficiary05HasServicesIMBYes: false,
  beneficiary05HasServicesIMBNo: false,
  beneficiary05HasServicesIMB: "",
  beneficiary61ChildrenFirstName: "",
  beneficiary61ChildrenMiddleName: "",
  beneficiary61ChildrenLastName: "",
  beneficiary61ChildrenBirthDate: null,
  beneficiary61ChildrenBirthPlace: "",
  beneficiary62ChildrenFirstName: "",
  beneficiary62ChildrenMiddleName: "",
  beneficiary62ChildrenLastName: "",
  beneficiary62ChildrenBirthDate: null,
  beneficiary62ChildrenBirthPlace: "",
  beneficiary63ChildrenFirstName: "",
  beneficiary63ChildrenMiddleName: "",
  beneficiary63ChildrenLastName: "",
  beneficiary63ChildrenBirthDate: null,
  beneficiary63ChildrenBirthPlace: "",
  beneficiary64ChildrenFirstName: "",
  beneficiary64ChildrenMiddleName: "",
  beneficiary64ChildrenLastName: "",
  beneficiary64ChildrenBirthDate: null,
  beneficiary64ChildrenBirthPlace: "",
  beneficiary65ChildrenFirstName: "",
  beneficiary65ChildrenMiddleName: "",
  beneficiary65ChildrenLastName: "",
  beneficiary65ChildrenBirthDate: null,
  beneficiary65ChildrenBirthPlace: "",
  sponsor01FirstName: "",
  sponsor01MiddleName: "",
  sponsor01LastName: "",
  sponsor01BirthDate: null,
  sponsor01BirthPlaceCity: "",
  sponsor01BirthPlaceState: "",
  sponsor01BirthPlaceCountry: "",
  sponsor01IsFianceYes: false,
  sponsor01IsFianceNo: false,
  sponsor01FirstNamesUsed: "",
  sponsor01MiddleNamesUsed: "",
  sponsor01LastNamesUsed: "",
  sponsor01GreenCardNumber: "",
  sponsor01SocialSecurityNumber: "",
  sponsor01HomePhoneNumber: "",
  sponsor01Mobile: "",
  sponsor01OfficePhone: "",
  sponsor01FaxNumber: "",
  sponsor01EmailAddress: "",
  sponsor01FatherFirstName: "",
  sponsor01FatherMiddleName: "",
  sponsor01FatherLastName: "",
  sponsor01FatherBirthDate: null,
  sponsor01FatherBirthPlace: "",
  sponsor01FatherCity: "",
  sponsor01FatherCountry: "",
  sponsor01MotherFirstName: "",
  sponsor01MotherMiddleName: "",
  sponsor01MotherLastName: "",
  sponsor01MotherBirthDate: null,
  sponsor01MotherBirthPlace: "",
  sponsor01MotherCity: "",
  sponsor01MotherCountry: "",
  sponsor11FirstNameExSpouse: "",
  sponsor11MiddleNameExSpouse: "",
  sponsor11LastNameExSpouse: "",
  sponsor11BirthDateExSpouse: null,
  sponsor11BirthplaceExSpouse: "",
  sponsor11MarriageDate: null,
  sponsor11MarriagePlace: "",
  sponsor11DivorceDate: null,
  sponsor11DivorcePlace: "",
  sponsor12FirstNameExSpouse: "",
  sponsor12MiddleNameExSpouse: "",
  sponsor12LastNameExSpouse: "",
  sponsor12BirthDateExSpouse: null,
  sponsor12BirthPlaceExSpouse: "",
  sponsor12MarriageDate: null,
  sponsor12MarriagePlace: "",
  sponsor12DivorceDate: null,
  sponsor12DivorcePlace: "",
  sponsor13FirstNameExSpouse: "",
  sponsor13MiddleNameExSpouse: "",
  sponsor13LastNameExSpouse: "",
  sponsor13BirthDateExSpouse: null,
  sponsor13BirthPlaceExSpouse: "",
  sponsor13MarriageDate: null,
  sponsor13MarriagePlace: "",
  sponsor13DivorceDate: null,
  sponsor13DivorcePlace: "",
  sponsor21CurrentHouseStreet: "",
  sponsor21City: "",
  sponsor21State: "",
  sponsor21ZipCode: "",
  sponsor21FromMonthYear: "",
  sponsor21ToMonthYear: "",
  sponsor22CurrentHouseStreet: "",
  sponsor22City: "",
  sponsor22State: "",
  sponsor22ZipCode: "",
  sponsor22FromMonthYear: "",
  sponsor22ToMonthYear: "",
  sponsor23CurrentHouseStreet: "",
  sponsor23City: "",
  sponsor23State: "",
  sponsor23ZipCode: "",
  sponsor23FromMonthYear: "",
  sponsor23ToMonthYear: "",
  sponsor24CurrentHouseStreet: "",
  sponsor24City: "",
  sponsor24State: "",
  sponsor24ZipCode: "",
  sponsor24FromMonthYear: "",
  sponsor24ToMonthYear: "",
  sponsor25CurrentHouseStreet: "",
  sponsor25City: "",
  sponsor25State: "",
  sponsor25ZipCode: "",
  sponsor25FromMonthYear: "",
  sponsor25ToMonthYear: "",
  sponsor03HouseStreetName: "",
  sponsor03City: "",
  sponsor03State: "",
  sponsor03ZipCode: "",
  sponsor03FromMonthYear: "",
  sponsor03ToMonthYear: "",
  sponsor41WorkplaceName: "",
  sponsor41WorkplaceAddress: "",
  sponsor41WorkplaceCity: "",
  sponsor41WorkplaceState: "",
  sponsor41WorkplaceZipCode: "",
  sponsor41WorkplaceProvince: "",
  sponsor41WorkplaceCountry: "",
  sponsor41Position: "",
  sponsor41FromMonthYear: "",
  sponsor41ToMonthYear: "",
  sponsor42WorkplaceName: "",
  sponsor42WorkplaceAddress: "",
  sponsor42WorkplaceCity: "",
  sponsor42WorkplaceState: "",
  sponsor42WorkplaceZipCode: "",
  sponsor42WorkplaceProvince: "",
  sponsor42WorkplaceCountry: "",
  sponsor42Position: "",
  sponsor42FromMonthYear: "",
  sponsor42ToMonthYear: "",
  sponsor43WorkplaceName: "",
  sponsor43WorkplaceAddress: "",
  sponsor43WorkplaceCity: "",
  sponsor43WorkplaceState: "",
  sponsor43WorkplaceZipCode: "",
  sponsor43WorkplaceProvince: "",
  sponsor43WorkplaceCountry: "",
  sponsor43Position: "",
  sponsor43FromMonthYear: "",
  sponsor43ToMonthYear: "",
  sponsor44WorkplaceName: "",
  sponsor44WorkplaceAddress: "",
  sponsor44WorkplaceCity: "",
  sponsor44WorkplaceState: "",
  sponsor44WorkplaceZipCode: "",
  sponsor44WorkplaceProvince: "",
  sponsor44WorkplaceCountry: "",
  sponsor44Position: "",
  sponsor44FromMonthYear: "",
  sponsor44ToMonthYear: "",
  sponsor45WorkplaceName: "",
  sponsor45WorkplaceAddress: "",
  sponsor45WorkplaceCity: "",
  sponsor45WorkplaceState: "",
  sponsor45WorkplaceZipCode: "",
  sponsor45WorkplaceProvince: "",
  sponsor45WorkplaceCountry: "",
  sponsor45Position: "",
  sponsor45FromMonthYear: "",
  sponsor45ToMonthYear: "",
  sponsor05WorkNames: "",
  sponsor05WorkAddress: "",
  sponsor05Position: "",
  sponsor05FromMonthYear: "",
  sponsor05ToMonthYear: "",
  beneficiaryProfileFormI94: false,
  beneficiaryProfileBirthCertificate: false,
  beneficiaryProfileI20Documents: false,
  beneficiaryProfileCriminalRecord: false,
  beneficiaryProfilePassportPhotos: false,
  beneficiaryProfilePreviousDivorce: false,
  beneficiaryProfilePapersRelated: false,
  sponsorProfileLetterConfirmation: false,
  sponsorProfileBankStatement: false,
  sponsorProfileTaxReturns: false,
  sponsorProfileW2PaystubsChecks: false,
  sponsorProfileDocumentsShowing: false,
  sponsorProfilePassportPhotos: false,
  sponsorProfilePreviousDivorce: false,
  deleted: false
};

export const FormFianceVisa = () => {
  const myForm = useRef();
  const classes = useStyles();
  const { push } = useHistory();
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
  };

  const backToStart = () => {
    setCurrentStepIndex(1);
    updateStepActive(1); // Set first step active
  };

  const backToPrevious = () => {
    setCurrentStepIndex(currentStepIndex - 1);
    updateStepActive(currentStepIndex - 1); // Set previous step active
  };

  const updateStepActive = (index) => {
    initialSteps.map((val) => {
      val.active = val.stepIndex === index;
      return val;
    });
    setSteps([...initialSteps]);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      handleInputRadio(name, value);
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }
  };

  const handleInputRadio = (name, value) => {
    let group_radio = {
      beneficiary01HasBeenUS: {
        beneficiary01HasBeenUSYes: false,
        beneficiary01HasBeenUSNo: false
      },
      beneficiary05EverBeenRestrainingOrder: {
        beneficiary05EverBeenRestrainingOrderYes: false,
        beneficiary05EverBeenRestrainingOrderNo: false
      },
      beneficiary05HasBeenArrestedConvictedViolence: {
        beneficiary05HasBeenArrestedConvictedViolenceYes: false,
        beneficiary05HasBeenArrestedConvictedViolenceNo: false
      },
      beneficiary05HasBeenArrestedConvictedFelon: {
        beneficiary05HasBeenArrestedConvictedFelonYes: false,
        beneficiary05HasBeenArrestedConvictedFelonNo: false
      },
      beneficiary05HasBeenArrestedConvictedArrested: {
        beneficiary05HasBeenArrestedConvictedArrestedYes: false,
        beneficiary05HasBeenArrestedConvictedArrestedNo: false
      },
      beneficiary05HasBeenAccusedAnyCountry: {
        beneficiary05HasBeenAccusedAnyCountryYes: false,
        beneficiary05HasBeenAccusedAnyCountryNo: false
      },
      beneficiary05EverBeenInUS: {
        beneficiary05EverBeenInUSYes: false,
        beneficiary05EverBeenInUSNo: false
      },
      beneficiary05HaveEverMetFiance: {
        beneficiary05HaveEverMetFianceYes: false,
        beneficiary05HaveEverMetFianceNo: false,
        beneficiary05HaveEverMetFianceNA: false
      },
      beneficiary05HasServicesIMB: {
        beneficiary05HasServicesIMBYes: false,
        beneficiary05HasServicesIMBNo: false
      },
      sponsor01IsFiance: {
        sponsor01IsFianceYes: false,
        sponsor01IsFianceNo: false
      }
    };
    if (group_radio[name]) {
      group_radio[name][value] = true;
      setValues({
        ...values,
        ...group_radio[name]
      });
    }
  };

  const convertToEventParam = (name, value) => ({
    target: {
      name,
      value
    }
  });

  // Submit Form
  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   let payload = {};

  //   Object.keys(values).forEach(function (key) {
  //     if (values[key]) {
  //       payload[key] = values[key];
  //     }
  //   });

  //   if (values.id > 0) {
  //     fianceApi.update(payload);
  //   } else {
  //     fianceApi.insert(payload).then((result) => {
  //       if (result.succeeded) {
  //         setValues({
  //           ...values,
  //           id: result.data.id
  //         });
  //       }
  //     });
  //   }

  //   if (currentStepIndex === steps.length) {
  //     // Reset state and back to start
  //     // setValues(initialValues)
  //     // backToStart();
  //   } else {
  //     nextStep();
  //   }
  // };

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (val) => {
      // e.preventDefault();
      if (myForm.current.buttonId === "submitSave") {
        let payload = {};

        Object.keys(values).forEach(function (key) {
          if (values[key]) {
            payload[key] = values[key];
          }
        });

        if (values.id > 0) {
          await fianceApi.update(payload);
        } else {
          await fianceApi.insert(payload).then((result) => {
            if (result.succeeded) {
              setValues({
                ...values,
                id: result.data.id
              });
            }
          });
        }

        if (currentStepIndex === steps.length) {
          // Reset state and back to start
          // setValues(initialValues)
          // backToStart();
        } else {
          nextStep();
        }
      }
      else if (myForm.current.buttonId === "download") {
        if (values.id > 0) {
          await fianceApi.download({
            formId: values.id,
            formName: "FormVisaFiance"
          });
        }
      }
    },
  });

  // Update query string
  useEffect(() => {
    push({
      pathname: paths.fiance.form,
      search: "id=" + values.id + "&st=" + currentStepIndex
    });
  }, [values.id, currentStepIndex, push]);

  return (
    <AppShell>
      {formik.isSubmitting && <LoadingComponent />}
      <Container>
        <h1>Visa Fiance</h1>
        <ThemeProvider theme={{}}>
          <Box component="form"
            className={classes.root}
            autoComplete="off"
            onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}
            ref={myForm}
          >
            {steps.map((step, idx) => {
              return (
                step.active && (
                  <step.component
                    key={idx}
                    handleInputChange={handleInputChange}
                    convertToEventParam={convertToEventParam}
                    values={values}
                  />
                )
              );
            })}
            <Stack spacing={2} direction="row" justifyContent="center">
              {currentStepIndex > 1 && (
                <Button variant="contained" onClick={backToStart}>
                  Back To Start
                </Button>
              )}
              {currentStepIndex > 1 && (
                <Button variant="contained" onClick={backToPrevious}>
                  Back
                </Button>
              )}
              <Button variant="contained" type="submit" id="submitSave" onClick={e => myForm.current.buttonId = e.target.id}>
                {currentStepIndex === steps.length
                  ? "Submit"
                  : "Save & Continue"}
              </Button>
              {currentStepIndex < steps.length && (
                <Button variant="contained" onClick={nextStep}>
                  Skip & Continue
                </Button>
              )}
              {values.id > 0 && (
                <Button variant="contained" type="submit" id="download" onClick={e => myForm.current.buttonId = e.target.id}>
                  Download
                </Button>
              )}
            </Stack>
            <br />
            <br />
            <br />
          </Box>
        </ThemeProvider>
      </Container>
    </AppShell>
  );
};
