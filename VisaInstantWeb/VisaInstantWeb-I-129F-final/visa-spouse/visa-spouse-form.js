import React, { useEffect, useState } from "react";
import AppShell from "../../../@shells/app.shell";
import { Button, Container, Stack } from "@mui/material";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import http from "../../../../@onewits/http";
import { useHistory, useLocation } from "react-router-dom";
import { SponsorName } from "./01-sponsor-name";
import { SponsorContact } from "./02-sponsor-contact";
import { SponsorPlaceOfBirth } from "./03-sponsor-place-of-birth";
import { SponsorStatus } from "./04-sponsor-status";
import { SponsorMaritalStatus } from "./05-sponsor-marital-status";
import { SponsorOtherFilings } from "./06-sponsor-other-filings";
import { MilitaryAndConvictions } from "./07-military-and-convictions";
import { SponsorAddress } from "./08-sponsor-address";
import { SponsorRelationship } from "./09-sponsor-relationship";
import { SponsorEmployment } from "./10-sponsor-employment";
import { SponsorImmigration } from "./11-sponsor-immigration";
import { SponsorLanguages } from "./12-sponsor-languages";
import { SponsorUSVisits } from "./13-sponsor-us-visits";
import { SponsorRelatives } from "./14-sponsor-relatives";
import { SponsorQuestion1 } from "./15-sponsor-question-1";
import { SponsorQuestion2 } from "./16-sponsor-question-2";
import { SponsorQuestion3 } from "./17-sponsor-question-3";
import { SponsorQuestion4 } from "./18-sponsor-question-4";
import { SponsorQuestion5 } from "./19-sponsor-question-5";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      margin: theme.spacing(1)
    }
  }
}));

const initialSteps = [
  { active: true, component: SponsorName, stepIndex: 1 },
  { active: false, component: SponsorContact, stepIndex: 2 },
  { active: false, component: SponsorPlaceOfBirth, stepIndex: 3 },
  { active: false, component: SponsorStatus, stepIndex: 4 },
  { active: false, component: SponsorMaritalStatus, stepIndex: 5 },
  { active: false, component: SponsorOtherFilings, stepIndex: 6 },
  { active: false, component: MilitaryAndConvictions, stepIndex: 7 },
  { active: false, component: SponsorAddress, stepIndex: 8 },
  { active: false, component: SponsorRelationship, stepIndex: 9 },
  { active: false, component: SponsorEmployment, stepIndex: 10 },
  { active: false, component: SponsorImmigration, stepIndex: 11 },
  { active: false, component: SponsorLanguages, stepIndex: 12 },
  { active: false, component: SponsorUSVisits, stepIndex: 13 },
  { active: false, component: SponsorRelatives, stepIndex: 14 },
  { active: false, component: SponsorQuestion1, stepIndex: 15 },
  { active: false, component: SponsorQuestion2, stepIndex: 16 },
  { active: false, component: SponsorQuestion3, stepIndex: 17 },
  { active: false, component: SponsorQuestion4, stepIndex: 18 },
  { active: false, component: SponsorQuestion5, stepIndex: 19 }
]

const initialValues = {
  "id": 0,
  "accountId": 1,
  "deleted": false
}

export const FormVisaSpouse = (props) => {

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

    // if (type === 'radio') {
    // 	handleInputRadio(name, value)
    // } else {
    // 	setValues({
    // 		...values,
    // 		[name]: value
    // 	})
    // }
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
      pathname: "",
      search: "id=" + values.id + "&st=" + currentStepIndex,
    });
  }, [values.id, currentStepIndex]);

  return (
    <AppShell>
      <Container>
        <h1>
          Visa Spouse
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