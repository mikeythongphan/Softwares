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
  "sponsorNameFirstName": "",
	"sponsorNameMiddleName": "",
	"sponsorNameDoesNotApply": false,
	"sponsorNameLastName": "",
	"sponsorNameDaytimePhoneNumber": "",
	"sponsorNameGenderMale": false,
	"sponsorNameGenderFemale": false,
	"sponsorNameAnotherNamesYes": false,
	"sponsorNameAnotherNameNo": false,
	"sponsorContactEmailAddress": "",
	"sponsorContactMobileNumber": "",
	"sponsorContactSocialSecurityNumber": "",
	"sponsorContactAccountNumber": "",
	"sponsorContactDoesNotApply": false,
	"sponsorContactUncommon": "",
	"sponsorContactDifferentPhysicalYes": false,
	"sponsorContactDifferentPhysicalNo": false,
	"sponsorPlaceOfBirthDateOfBirth": null,
	"sponsorPlaceOfBirthCityOfBirth": "",
	"sponsorPlaceOfBirthCountryOfBirthText": "",
	"sponsorPlaceOfBirthCountryOfBirthId": null,
	"sponsorPlaceOfBirthFatherLastName": "",
	"sponsorPlaceOfBirthFatherFirstName": "",
	"sponsorPlaceOfBirthFatherMiddleName": "",
	"sponsorPlaceOfBirth1DoesNotApply": false,
	"sponsorPlaceOfBirthFatherDateOfBirth": null,
	"sponsorPlaceOfBirth1Unknow": false,
	"sponsorPlaceOfBirthFatherCountryOfBirth": null,
	"sponsorPlaceOfBirthFatherCityProvince": "",
	"sponsorPlaceOfBirthHeDeceasedYes": false,
	"sponsorPlaceOfBirthHeDeceasedNo": false,
	"sponsorPlaceOfBirthMotherMaidenLastName": "",
	"sponsorPlaceOfBirthMotherFirstName": "",
	"sponsorPlaceOfBirthMotherMiddleName": "",
	"sponsorPlaceOfBirth2DoesNotApply": false,
	"sponsorPlaceOfBirthMotherDateOfBirth": null,
	"sponsorPlaceOfBirth2Unknow": false,
	"sponsorPlaceOfBirthMotherCountryOfBirth": null,
	"sponsorPlaceOfBirthMotherCityOfBirth": "",
	"sponsorPlaceOfBirthSheDeceasedYes": false,
	"sponsorPlaceOfBirthSheDeceasedNo": false,
	"sponsorStatusUSCitizen": false,
	"sponsorStatusPermanentResident": false,
	"sponsorStatusAmericanSamoa": false,
	"sponsorStatusHeightFeet": "",
	"sponsorStatusHeightInches": "",
	"sponsorStatusWeightPounds": "",
	"sponsorStatusEthnicityNotHispanicOrLatino": false,
	"sponsorStatusEthnicityHispanicOrLatino": false,
	"sponsorStatusRaceWhite": false,
	"sponsorStatusRaceAsian": false,
	"sponsorStatusRaceBlack": false,
	"sponsorStatusRaceAmericanIndian": false,
	"sponsorStatusRaceNativeHawaiian": false,
	"sponsorStatusHairColorBlack": false,
	"sponsorStatusHairColorBrown": false,
	"sponsorStatusHairColorBlond": false,
	"sponsorStatusHairColorGray": false,
	"sponsorStatusHairColorWhite": false,
	"sponsorStatusHairColorRed": false,
	"sponsorStatusHairColorSandy": false,
	"sponsorStatusHairColorBald": false,
	"sponsorStatusHairColorOther": false,
	"sponsorStatusEyeColorBlack": false,
	"sponsorStatusEyeColorBlue": false,
	"sponsorStatusEyeColorBrown": false,
	"sponsorStatusEyeColorGray": false,
	"sponsorStatusEyeColorGreen": false,
	"sponsorStatusEyeColorHazel": false,
	"sponsorStatusEyeColorMaroon": false,
	"sponsorStatusEyeColorPink": false,
	"sponsorStatusEyeColorOther": false,
	"sponsorMaritalStatusMarried": false,
	"sponsorMaritalStatusSingle": false,
	"sponsorMaritalStatusWidowed": false,
	"sponsorMaritalStatusDivorced": false,
	"sponsorMaritalStatusChildrenUnder18Yes": false,
	"sponsorMaritalStatusChildrenUnder18No": false,
	"sponsorOtherFilingsI129FYes": false,
	"sponsorOtherFilingsI129FNo": false,
	"militaryAndConvictionsUnitedStatesArmedForcesYes": false,
	"militaryAndConvictionsUnitedStatesArmedForcesNo": false,
	"militaryAndConvictionsCivilOrCriminalYes": false,
	"militaryAndConvictionsCivilOrCriminalNo": false,
	"militaryAndConvictionsEitherCivilOrCriminalYes": false,
	"militaryAndConvictionsEitherCivilOrCriminalNo": false,
	"militaryAndConvictionsDomesticViolenceYes": false,
	"militaryAndConvictionsDomesticViolenceNo": false,
	"militaryAndConvictionsHomicideYes": false,
	"militaryAndConvictionsHomicideNo": false,
	"militaryAndConvictionsArrestsOrConvictionsYes": false,
	"militaryAndConvictionsArrestsOrConvictionsNo": false,
	"militaryAndConvictionsTrafficViolationsYes": false,
	"militaryAndConvictionsTrafficViolationsNo": false,
	"sponsorAddressInCareOfName": "",
	"sponsorAddress1DoesNotApply": false,
	"sponsorAddressNumberAndstreet": "",
	"sponsorAddressApartmentSuiteId": null,
	"sponsorAddressApartmentSuiteNumber": "",
	"sponsorAddressTownOrCity": "",
	"sponsorAddressCountry": null,
	"sponsorAddressUSState": null,
	"sponsorAddressProvince": "",
	"sponsorAddress2DoesNotApply": false,
	"sponsorAddressPostalCode": "",
	"sponsorAddressLivedAddressSince": null,
	"sponsorAddressUSStateCountry": null,
	"sponsorRelationshipCityFirstTime": "",
	"sponsorRelationshipItUSCISYes": false,
	"sponsorRelationshipUSCISNo": false,
	"sponsorRelationshipIMBYes": false,
	"sponsorRelationshipIMBNo": false,
	"sponsorEmploymentNameEmployer": "",
	"sponsorEmploymentOccupation": "",
	"sponsorEmploymentNumberAndStreet": "",
	"sponsorEmploymentApartment": null,
	"sponsorEmploymentApartmentNumber": "",
	"sponsorEmploymentTownOrCity": "",
	"sponsorEmploymentCountry": null,
	"sponsorEmploymentUSState": null,
	"sponsorEmploymentProvince": "",
	"sponsorEmploymentDoesNotApply": false,
	"sponsorEmploymentPostalCode": "",
	"sponsorEmploymentCategoryJob": null,
	"sponsorEmploymentBeganThisJob": null,
	"sponsorImmigrationImmigrationProceedingsYes": false,
	"sponsorImmigrationImmigrationProceedingsNo": false,
	"sponsorImmigrationCityAndState": "",
	"sponsorImmigrationEstimateDate": null,
	"sponsorImmigrationTypeProceedingApplyRemoval": false,
	"sponsorImmigrationTypeProceedingApplyExclusion": false,
	"sponsorImmigrationTypeProceedingApplyRescission": false,
	"sponsorImmigrationTypeProceedingApplyJudicial": false,
	"sponsorLanguages1": "",
	"sponsorUSVisitsUSVisaYes": false,
	"sponsorUSVisitsUSVisaNo": false,
	"sponsorUSVisitsExplainDeniedAdmissions": "",
	"sponsorUSVisitsVisitedUnitedStatesYes": false,
	"sponsorUSVisitsVisitedUnitedStatesNo": false,
	"sponsorUSVisitsPrimaryCity": "",
	"sponsorUSVisitsTypeOfVisa": null,
	"sponsorUSVisitsRegistrationNumber": "",
	"sponsorUSVisitsNone": false,
	"sponsorUSVisitsStartDateVisit": null,
	"sponsorUSVisitsEndDateVisit": null,
	"sponsorRelativesChildInUSYes": false,
	"sponsorRelativesChildInUSNo": false,
	"sponsorRelativesFirstAndMiddleNames": "",
	"sponsorRelativesLastName": "",
	"sponsorRelativesSuffixAfterName": null,
	"sponsorRelativesStatus": null,
	"sponsorQuestion1ParamilitaryUnitYes": false,
	"sponsorQuestion1ParamilitaryUnitNo": false,
	"sponsorQuestion1ExplainQuestion": "",
	"sponsorQuestion1HealthSignificanceYes": false,
	"sponsorQuestion1HealthSignificanceNo": false,
	"sponsorQuestion1SafetyOrWelfareYes": false,
	"sponsorQuestion1SafetyOrWelfareNo": false,
	"sponsorQuestion1DrugAbuserYes": false,
	"sponsorQuestion1DrugAbuserNo": false,
	"sponsorQuestion1NecessaryVaccinationsYes": false,
	"sponsorQuestion1NecessaryVaccinationsNo": false,
	"sponsorQuestion1ArrestedOffenseYes": false,
	"sponsorQuestion1ArrestedOffenseNo": false,
	"sponsorQuestion1ViolatedYes": false,
	"sponsorQuestion1ViolatedNo": false,
	"sponsorQuestion1EngageInProstitutionYes": false,
	"sponsorQuestion1EngageInProstitutionNo": false,
	"sponsorQuestion1MoneyLaunderingYes": false,
	"sponsorQuestion1MoneyLaunderingNo": false,
	"sponsorQuestion1HumanTraffickingOffenseYes": false,
	"sponsorQuestion1HumanTraffickingOffenseNo": false,
	"sponsorQuestion1KnowinglyAidedYes": false,
	"sponsorQuestion1KnowinglyAidedNo": false,
	"sponsorQuestion2KnowinglyAidedYes": false,
	"sponsorQuestion2KnowinglyAidedNo": false,
	"sponsorQuestion2ExplainQuestion": "",
	"sponsorQuestion2TraffickingOffenseYes": false,
	"sponsorQuestion2TraffickingOffenseNo": false,
	"sponsorQuestion2IdentifiedPresidentYes": false,
	"sponsorQuestion2IdentifiedPresidentNo": false,
	"sponsorQuestion2ViolatedYes": false,
	"sponsorQuestion2ViolatedNo": false,
	"sponsorQuestion2EngageEspionageYes": false,
	"sponsorQuestion2EngageEspionageNo": false,
	"sponsorQuestion2TerroristActivitiesYes": false,
	"sponsorQuestion2TerroristActivitiesNo": false,
	"sponsorQuestion2FinancialAssistanceYes": false,
	"sponsorQuestion2FinancialAssistanceNo": false,
	"sponsorQuestion2TerroristOrganizationYes": false,
	"sponsorQuestion2TerroristOrganizationNo": false,
	"sponsorQuestion2GenocideYes": false,
	"sponsorQuestion2GenocideNo": false,
	"sponsorQuestion2TortureYes": false,
	"sponsorQuestion2TortureNo": false,
	"sponsorQuestion2IntentionallyAssistedYes": false,
	"sponsorQuestion2IntentionallyAssistedNo": false,
	"sponsorQuestion3JudicialKillingsYes": false,
	"sponsorQuestion3JudicialKillingsNo": false,
	"sponsorQuestion3ExplainQuestion": "",
	"sponsorQuestion3EngagedRecruitmentYes": false,
	"sponsorQuestion3EngagedRecruitmentNo": false,
	"sponsorQuestion3ReligiousFreedomYes": false,
	"sponsorQuestion3ReligiousFreedomNo": false,
	"sponsorQuestion3TotalitarianPartyYes": false,
	"sponsorQuestion3TotalitarianPartyNo": false,
	"sponsorQuestion3IndirectlyAssistedYes": false,
	"sponsorQuestion3IndirectlyAssistedNo": false,
	"sponsorQuestion31ClaimOwnershipYes": false,
	"sponsorQuestion31ClaimOwnershipNo": false,
	"sponsorQuestion32ClaimOwnershipYes": false,
	"sponsorQuestion32ClaimOwnershipNo": false,
	"sponsorQuestion31ChemicalWeaponsYes": false,
	"sponsorQuestion31ChemicalWeaponsNo": false,
	"sponsorQuestion32ChemicalWeaponsYes": false,
	"sponsorQuestion32ChemicalWeaponsNo": false,
	"sponsorQuestion3EstablishmentYes": false,
	"sponsorQuestion3EstablishmentNo": false,
	"sponsorQuestion3ReimbursingSchoolYes": false,
	"sponsorQuestion3ReimbursingSchoolNo": false,
	"sponsorQuestion4BodilyTissueYes": false,
	"sponsorQuestion4BodilyTissueNo": false,
	"sponsorQuestion4ExplainQuestion": "",
	"sponsorQuestion4INA274CYes": false,
	"sponsorQuestion4INA274CNo": false,
	"sponsorQuestion4RemovedUS5YearsYes": false,
	"sponsorQuestion4RemovedUS5YearsNo": false,
	"sponsorQuestion4RemovedUS20YearsYes": false,
	"sponsorQuestion4RemovedUS20YearsNo": false,
	"sponsorQuestion4RemovedUS10YearsYes": false,
	"sponsorQuestion4RemovedUS10YearsNo": false,
	"sponsorQuestion4ConvictedRemovedUSYes": false,
	"sponsorQuestion4ConvictedRemovedUSNo": false,
	"sponsorQuestion4Unlawfully180DaysYes": false,
	"sponsorQuestion4Unlawfully180DaysNo": false,
	"sponsorQuestion4Unlawfully1YearYes": false,
	"sponsorQuestion4Unlawfully1YearNo": false,
	"sponsorQuestion4WithheldCustodyYes": false,
	"sponsorQuestion4WithheldCustodyNo": false,
	"sponsorQuestion4ViolationLawYes": false,
	"sponsorQuestion4ViolationLawNo": false,
	"sponsorQuestion5AvoidingTaxationYes": false,
	"sponsorQuestion5AvoidingTaxationNo": false,
	"sponsorQuestion5ExplainQuestion": "",
	"sponsorQuestion5FormerExchangeVisitorYes": false,
	"sponsorQuestion5FormerExchangeVisitorNo": false,
	"sponsorQuestion5SecretaryLaborYes": false,
	"sponsorQuestion5SecretaryLaborNo": false,
	"sponsorQuestion5ForeignMedicalSchoolYes": false,
	"sponsorQuestion5ForeignMedicalSchoolNo": false,
	"sponsorQuestion5HealthCareWorkerYes": false,
	"sponsorQuestion5HealthCareWorkerNo": false,
	"sponsorQuestion5PermanentlyIneligibleYes": false,
	"sponsorQuestion5PermanentlyIneligibleNo": false,
	"sponsorQuestion5EvadeMilitaryServiceYes": false,
	"sponsorQuestion5EvadeMilitaryServiceNo": false,
	"sponsorQuestion5PracticePolygamyYes": false,
	"sponsorQuestion5PracticePolygamyNo": false,
	"sponsorQuestion5SecretaryHomelandYes": false,
	"sponsorQuestion5SecretaryHomelandNo": false,
	"sponsorQuestion5ObtainVisaYes": false,
	"sponsorQuestion5ObtainVisaNo": false,
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
			"sponsorNameGender": {
        "sponsorNameGenderMale": false,
        "sponsorNameGenderFemale": false,
        "sponsorNameAnotherNamesYes": false,
        "sponsorNameAnotherNameNo": false,
			},
			"sponsorContactDifferentPhysical": {
        "sponsorContactDifferentPhysicalYes": false,
        "sponsorContactDifferentPhysicalNo": false,
			},
			"sponsorPlaceOfBirthHeDeceased": {
        "sponsorPlaceOfBirthHeDeceasedYes": false,
        "sponsorPlaceOfBirthHeDeceasedNo": false,
			},
			"sponsorPlaceOfBirthSheDeceased": {
        "sponsorPlaceOfBirthSheDeceasedYes": false,
        "sponsorPlaceOfBirthSheDeceasedNo": false,
			},
			"sponsorStatus": {
        "sponsorStatusUSCitizen": false,
        "sponsorStatusPermanentResident": false,
        "sponsorStatusAmericanSamoa": false,
			},
			"sponsorStatusEthnicity": {
        "sponsorStatusEthnicityNotHispanicOrLatino": false,
        "sponsorStatusEthnicityHispanicOrLatino": false,
			},
			"sponsorStatusRace": {
        "sponsorStatusRaceWhite": false,
        "sponsorStatusRaceAsian": false,
        "sponsorStatusRaceBlack": false,
        "sponsorStatusRaceAmericanIndian": false,
        "sponsorStatusRaceNativeHawaiian": false,
			},
			"sponsorStatusHairColor": {
        "sponsorStatusHairColorBlack": false,
        "sponsorStatusHairColorBrown": false,
        "sponsorStatusHairColorBlond": false,
        "sponsorStatusHairColorGray": false,
        "sponsorStatusHairColorWhite": false,
        "sponsorStatusHairColorRed": false,
        "sponsorStatusHairColorSandy": false,
        "sponsorStatusHairColorBald": false,
        "sponsorStatusHairColorOther": false,
			},
			"sponsorStatusEyeColor": {
        "sponsorStatusEyeColorBlack": false,
        "sponsorStatusEyeColorBlue": false,
        "sponsorStatusEyeColorBrown": false,
        "sponsorStatusEyeColorGray": false,
        "sponsorStatusEyeColorGreen": false,
        "sponsorStatusEyeColorHazel": false,
        "sponsorStatusEyeColorMaroon": false,
        "sponsorStatusEyeColorPink": false,
        "sponsorStatusEyeColorOther": false,
			},
			"sponsorMaritalStatus": {
        "sponsorMaritalStatusMarried": false,
        "sponsorMaritalStatusSingle": false,
        "sponsorMaritalStatusWidowed": false,
        "sponsorMaritalStatusDivorced": false,
        "sponsorMaritalStatusChildrenUnder18Yes": false,
        "sponsorMaritalStatusChildrenUnder18No": false,
			},
			"sponsorOtherFilingsI129": {
        "sponsorOtherFilingsI129FYes": false,
        "sponsorOtherFilingsI129FNo": false,
			},
			"militaryAndConvictionsUnitedStatesArmedForces": {
        "militaryAndConvictionsUnitedStatesArmedForcesYes": false,
        "militaryAndConvictionsUnitedStatesArmedForcesNo": false,
			},
			"militaryAndConvictionsCivilOrCriminal": {
        "militaryAndConvictionsCivilOrCriminalYes": false,
        "militaryAndConvictionsCivilOrCriminalNo": false,
			},
			"militaryAndConvictionsEitherCivilOrCriminal": {
        "militaryAndConvictionsEitherCivilOrCriminalYes": false,
        "militaryAndConvictionsEitherCivilOrCriminalNo": false,
			},
			"militaryAndConvictionsDomesticViolence": {
        "militaryAndConvictionsDomesticViolenceYes": false,
        "militaryAndConvictionsDomesticViolenceNo": false,
			},
			"militaryAndConvictionsHomicide": {
        "militaryAndConvictionsHomicideYes": false,
        "militaryAndConvictionsHomicideNo": false,
			},
			"militaryAndConvictionsArrestsOrConvictions": {
        "militaryAndConvictionsArrestsOrConvictionsYes": false,
        "militaryAndConvictionsArrestsOrConvictionsNo": false,
			},
			"militaryAndConvictionsTrafficViolations": {
        "militaryAndConvictionsTrafficViolationsYes": false,
        "militaryAndConvictionsTrafficViolationsNo": false,
			},
			"sponsorRelationshipUSCIS": {
        "sponsorRelationshipItUSCISYes": false,
        "sponsorRelationshipUSCISNo": false,
      },
      "sponsorRelationshipIMB": {
        "sponsorRelationshipIMBYes": false,
        "sponsorRelationshipIMBNo": false,
      },
      "sponsorImmigrationImmigrationProceedings": {
        "sponsorImmigrationImmigrationProceedingsYes": false,
        "sponsorImmigrationImmigrationProceedingsNo": false,
      },
      "sponsorImmigrationTypeProceedingApply": {
        "sponsorImmigrationTypeProceedingApplyRemoval": false,
        "sponsorImmigrationTypeProceedingApplyExclusion": false,
        "sponsorImmigrationTypeProceedingApplyRescission": false,
        "sponsorImmigrationTypeProceedingApplyJudicial": false,
      },
      "sponsorUSVisitsUSVisa": {
        "sponsorUSVisitsUSVisaYes": false,
        "sponsorUSVisitsUSVisaNo": false,
      },
      "sponsorUSVisitsVisitedUnitedStates": {
        "sponsorUSVisitsVisitedUnitedStatesYes": false,
        "sponsorUSVisitsVisitedUnitedStatesNo": false,
      },
      "sponsorRelativesChildInUS": {
        "sponsorRelativesChildInUSYes": false,
        "sponsorRelativesChildInUSNo": false,
      },
      "sponsorQuestion1ParamilitaryUnit": {
        "sponsorQuestion1ParamilitaryUnitYes": false,
        "sponsorQuestion1ParamilitaryUnitNo": false,
      },
      "sponsorQuestion1HealthSignificance": {
        "sponsorQuestion1HealthSignificanceYes": false,
        "sponsorQuestion1HealthSignificanceNo": false,
      },
      "sponsorQuestion1SafetyOrWelfare": {
        "sponsorQuestion1SafetyOrWelfareYes": false,
        "sponsorQuestion1SafetyOrWelfareNo": false,
      },
      "sponsorQuestion1DrugAbuser": {
        "sponsorQuestion1DrugAbuserYes": false,
        "sponsorQuestion1DrugAbuserNo": false,
      },
      "sponsorQuestion1NecessaryVaccinations": {
        "sponsorQuestion1NecessaryVaccinationsYes": false,
        "sponsorQuestion1NecessaryVaccinationsNo": false,
      },
      "sponsorQuestion1ArrestedOffense": {
        "sponsorQuestion1ArrestedOffenseYes": false,
        "sponsorQuestion1ArrestedOffenseNo": false,
      },
      "sponsorQuestion1Violated": {
        "sponsorQuestion1ViolatedYes": false,
        "sponsorQuestion1ViolatedNo": false,
      },
      "sponsorQuestion1EngageInProstitution": {
        "sponsorQuestion1EngageInProstitutionYes": false,
        "sponsorQuestion1EngageInProstitutionNo": false,
      },
      "sponsorQuestion1MoneyLaundering": {
        "sponsorQuestion1MoneyLaunderingYes": false,
        "sponsorQuestion1MoneyLaunderingNo": false,
      },
      "sponsorQuestion1HumanTraffickingOffense": {
        "sponsorQuestion1HumanTraffickingOffenseYes": false,
        "sponsorQuestion1HumanTraffickingOffenseNo": false,
      },
      "sponsorQuestion1KnowinglyAided": {
        "sponsorQuestion1KnowinglyAidedYes": false,
        "sponsorQuestion1KnowinglyAidedNo": false,
      },
      "sponsorQuestion2KnowinglyAided": {
        "sponsorQuestion2KnowinglyAidedYes": false,
        "sponsorQuestion2KnowinglyAidedNo": false,
      },
      "sponsorQuestion2TraffickingOffense": {
        "sponsorQuestion2TraffickingOffenseYes": false,
        "sponsorQuestion2TraffickingOffenseNo": false,
      },
      "sponsorQuestion2IdentifiedPresident": {
        "sponsorQuestion2IdentifiedPresidentYes": false,
        "sponsorQuestion2IdentifiedPresidentNo": false,
      },
      "sponsorQuestion2Violated": {
        "sponsorQuestion2ViolatedYes": false,
        "sponsorQuestion2ViolatedNo": false,
      },
      "sponsorQuestion2EngageEspionage": {
        "sponsorQuestion2EngageEspionageYes": false,
        "sponsorQuestion2EngageEspionageNo": false,
      },
      "sponsorQuestion2TerroristActivities": {
        "sponsorQuestion2TerroristActivitiesYes": false,
        "sponsorQuestion2TerroristActivitiesNo": false,
      },
      "sponsorQuestion2FinancialAssistance": {
        "sponsorQuestion2FinancialAssistanceYes": false,
        "sponsorQuestion2FinancialAssistanceNo": false,
      },
      "sponsorQuestion2TerroristOrganization": {
        "sponsorQuestion2TerroristOrganizationYes": false,
        "sponsorQuestion2TerroristOrganizationNo": false,
      },
      "sponsorQuestion2Genocide": {
        "sponsorQuestion2GenocideYes": false,
        "sponsorQuestion2GenocideNo": false,
      },
      "sponsorQuestion2Torture": {
        "sponsorQuestion2TortureYes": false,
        "sponsorQuestion2TortureNo": false,
      },
      "sponsorQuestion2IntentionallyAssisted": {
        "sponsorQuestion2IntentionallyAssistedYes": false,
        "sponsorQuestion2IntentionallyAssistedNo": false,
      },
      "sponsorQuestion3JudicialKillings": {
        "sponsorQuestion3JudicialKillingsYes": false,
        "sponsorQuestion3JudicialKillingsNo": false,
      },
      "sponsorQuestion3EngagedRecruitment": {
        "sponsorQuestion3EngagedRecruitmentYes": false,
        "sponsorQuestion3EngagedRecruitmentNo": false,
      },
      "sponsorQuestion3ReligiousFreedom": {
        "sponsorQuestion3ReligiousFreedomYes": false,
        "sponsorQuestion3ReligiousFreedomNo": false,
      },
      "sponsorQuestion3TotalitarianParty": {
        "sponsorQuestion3TotalitarianPartyYes": false,
        "sponsorQuestion3TotalitarianPartyNo": false,
      },
      "sponsorQuestion3IndirectlyAssisted": {
        "sponsorQuestion3IndirectlyAssistedYes": false,
        "sponsorQuestion3IndirectlyAssistedNo": false,
      },
      "sponsorQuestion31ClaimOwnership": {
        "sponsorQuestion31ClaimOwnershipYes": false,
        "sponsorQuestion31ClaimOwnershipNo": false,
      },
      "sponsorQuestion32ClaimOwnership": {
        "sponsorQuestion32ClaimOwnershipYes": false,
        "sponsorQuestion32ClaimOwnershipNo": false,
      },
      "sponsorQuestion31ChemicalWeapons": {
        "sponsorQuestion31ChemicalWeaponsYes": false,
        "sponsorQuestion31ChemicalWeaponsNo": false,
      },
      "sponsorQuestion32ChemicalWeapons": {
        "sponsorQuestion32ChemicalWeaponsYes": false,
        "sponsorQuestion32ChemicalWeaponsNo": false,
      },
      "sponsorQuestion3Establishment": {
        "sponsorQuestion3EstablishmentYes": false,
        "sponsorQuestion3EstablishmentNo": false,
      },
      "sponsorQuestion3ReimbursingSchool": {
        "sponsorQuestion3ReimbursingSchoolYes": false,
        "sponsorQuestion3ReimbursingSchoolNo": false,
      },
      "sponsorQuestion4BodilyTissue": {
        "sponsorQuestion4BodilyTissueYes": false,
        "sponsorQuestion4BodilyTissueNo": false,
      },
      "sponsorQuestion4INA274C": {
        "sponsorQuestion4INA274CYes": false,
        "sponsorQuestion4INA274CNo": false,
      },
      "sponsorQuestion4RemovedUS5Years": {
        "sponsorQuestion4RemovedUS5YearsYes": false,
        "sponsorQuestion4RemovedUS5YearsNo": false,
      },
      "sponsorQuestion4RemovedUS20Years": {
        "sponsorQuestion4RemovedUS20YearsYes": false,
        "sponsorQuestion4RemovedUS20YearsNo": false,
      },
      "sponsorQuestion4RemovedUS10Years": {
        "sponsorQuestion4RemovedUS10YearsYes": false,
        "sponsorQuestion4RemovedUS10YearsNo": false,
      },
      "sponsorQuestion4ConvictedRemovedUS": {
        "sponsorQuestion4ConvictedRemovedUSYes": false,
        "sponsorQuestion4ConvictedRemovedUSNo": false,
      },
      "sponsorQuestion4Unlawfully180Days": {
        "sponsorQuestion4Unlawfully180DaysYes": false,
        "sponsorQuestion4Unlawfully180DaysNo": false,
      },
      "sponsorQuestion4Unlawfully1Year": {
        "sponsorQuestion4Unlawfully1YearYes": false,
        "sponsorQuestion4Unlawfully1YearNo": false,
      },
      "sponsorQuestion4WithheldCustody": {
        "sponsorQuestion4WithheldCustodyYes": false,
        "sponsorQuestion4WithheldCustodyNo": false,
      },
      "sponsorQuestion4ViolationLaw": {
        "sponsorQuestion4ViolationLawYes": false,
        "sponsorQuestion4ViolationLawNo": false,
      },
      "sponsorQuestion5AvoidingTaxation": {
        "sponsorQuestion5AvoidingTaxationYes": false,
        "sponsorQuestion5AvoidingTaxationNo": false,
      },
      "sponsorQuestion5FormerExchangeVisitor": {
        "sponsorQuestion5FormerExchangeVisitorYes": false,
        "sponsorQuestion5FormerExchangeVisitorNo": false,
      },
      "sponsorQuestion5SecretaryLabor": {
        "sponsorQuestion5SecretaryLaborYes": false,
        "sponsorQuestion5SecretaryLaborNo": false,
      },
      "sponsorQuestion5ForeignMedicalSchool": {
        "sponsorQuestion5ForeignMedicalSchoolYes": false,
        "sponsorQuestion5ForeignMedicalSchoolNo": false,
      },
      "sponsorQuestion5HealthCareWorker": {
        "sponsorQuestion5HealthCareWorkerYes": false,
        "sponsorQuestion5HealthCareWorkerNo": false,
      },
      "sponsorQuestion5PermanentlyIneligible": {
        "sponsorQuestion5PermanentlyIneligibleYes": false,
        "sponsorQuestion5PermanentlyIneligibleNo": false,
      },
      "sponsorQuestion5EvadeMilitaryService": {
        "sponsorQuestion5EvadeMilitaryServiceYes": false,
        "sponsorQuestion5EvadeMilitaryServiceNo": false,
      },
      "sponsorQuestion5PracticePolygamy": {
        "sponsorQuestion5PracticePolygamyYes": false,
        "sponsorQuestion5PracticePolygamyNo": false,
      },
      "sponsorQuestion5SecretaryHomeland": {
        "sponsorQuestion5SecretaryHomelandYes": false,
        "sponsorQuestion5SecretaryHomelandNo": false,
      },
      "sponsorQuestion5ObtainVisa": {
        "sponsorQuestion5ObtainVisaYes": false,
        "sponsorQuestion5ObtainVisaNo": false,
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
			await http.post("FormVisaSpouse/Update", payload);
		} else {
			let result = await http.post("FormVisaSpouse/Insert", payload);
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
      pathname: "formvisaspouse",
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
