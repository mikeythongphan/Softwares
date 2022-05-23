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
