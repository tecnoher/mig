import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useStyles } from "./styles";
import { FC } from "react";

type Steps = {
  steps: string[];
  activeStep: number;
};

const CustomStepper: FC<Steps> = ({ steps, activeStep }) => {
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export { CustomStepper };
