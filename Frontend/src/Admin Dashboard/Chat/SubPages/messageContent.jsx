import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import MmsRoundedIcon from "@mui/icons-material/MmsRounded";
import IdentifyMessage from "../Messages Steps/identifyMessage";
import MessageHeader from "../Messages Steps/messageHeader";
import MessageBody from "../Messages Steps/messageBody";
import MessageActions from "../Messages Steps/messageActions";
import MessageFooter from "../Messages Steps/messageFooter";
// import UpcommingRoundedIcon from "@mui/icons-material/UpcommingRoundedIcon";
const steps = [
  {
    label: "Identify Message ",
    icon: (
      <BorderColorRoundedIcon
        color="info"
        sx={{
          fontSize: "16px",
          ml: 2,
        }}
      />
    ),
    description: <IdentifyMessage />,
  },
  {
    label: "Message Header",
    icon: (
      <MmsRoundedIcon
        color="info"
        sx={{
          fontSize: "16px",
          ml: 2,
        }}
      />
    ),
    description: <MessageHeader />,
  },
  {
    label: "Message Body",
    icon: (
      <MapsUgcRoundedIcon
        color="info"
        sx={{
          fontSize: "16px",
          ml: 2,
        }}
      />
    ),
    description: <MessageBody />,
  },
  {
    label: "Message Footer",
    icon: (
      <MessageRoundedIcon
        color="info"
        sx={{
          fontSize: "16px",
          ml: 2,
        }}
      />
    ),
    description: <MessageFooter />,
  },
  {
    label: "Message Actions",
    icon: (
      <MessageRoundedIcon
        color="info"
        sx={{
          fontSize: "16px",
          ml: 2,
        }}
      />
    ),
    description: <MessageActions />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              onClick={handleStep(index)}
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              sx={{ cursor: "pointer" }}
            >
              {step.label}
              {step.icon}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          square
          elevation={0}
          sx={{
            p: 3,
          }}
        >
          <Typography variant="body1">
            All steps completed - you&apos;re finished
          </Typography>

          <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
            variant="outlined"
          >
            Reset
          </Button>
        </Paper>
      )}
      <Button
        onClick={handleReset}
        sx={{ mt: 1, mb: 1 }}
        fullWidth
        variant="outlined"
      >
        Save Changes
      </Button>
    </Box>
  );
}
