import {
  CustomCard,
  CustomStepper,
  DetailsList,
  LeftPanel,
  RightPanel,
} from "@components";
import { ClassNames } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useStyles } from "./styles";

interface TableProps {
  name: string;
  isTrue: boolean;
  price: number;
}

const Services: FC = () => {
  const [step, setStep] = useState<number>(1);
  const classes = useStyles();

  const SecondTable: TableProps[] = [
    {
      name: "Lorem ipsum",
      isTrue: true,
      price: 10,
    },
    {
      name: "Lorem ipsum",
      isTrue: true,
      price: 30,
    },
    {
      name: "Lorem ipsum",
      isTrue: false,
      price: 15,
    },
    {
      name: "Lorem ipsum",
      isTrue: true,
      price: 0,
    },
    {
      name: "Lorem ipsum",
      isTrue: true,
      price: 30,
    },
    {
      name: "Lorem ipsum",
      isTrue: false,
      price: 15,
    },
    {
      name: "Lorem ipsum",
      isTrue: true,
      price: 0,
    },
  ];

  const steps = ["Paso 1", "Paso 2", "Paso 3", "Paso 4"];

  const handleBack = () => {
    if (step === 0) return;
    setStep((step) => (step -= 1));
    console.log(step);
  };

  const handleNext = () => {
    if (step === 4) return;
    setStep((step) => (step += 1));
    console.log(step);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h4" className={classes.pageTitle}>
        Lorem ipsum
      </Typography>
      <Box className={classes.contentContainer}>
        <Box className={classes.stepperHeader}>
          <CustomStepper steps={steps} activeStep={step} />
        </Box>

        {/* ######################### FIRST STEP ######################### */}
        {step === 0 && (
          <Box className={classes.innerContainer}>
            <Box className={classes.stepOneformContainer}>
              <Box className={classes.bigImg}></Box>
              <Box className={classes.smallImagesContainer}>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
              </Box>
              <Box className={classes.fullWidth}>
                <Typography variant="body1">Lorem ipsum</Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Lorem imsum"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box className={classes.rowContainer}>
              <Typography variant="h6" className={classes.primaryColor}>
                Lorem ipsum
              </Typography>
              <Box className={classes.formContainer}>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputContainer}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Button variant="contained" className={classes.confirmBtn}>
                  Lorem ipsum
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {/* ######################### FIRST STEP ######################### */}

        {/* ######################### SECOND STEP ######################### */}
        {step === 1 && (
          <Box className={classes.stepTwoOuterContainer}>
            <Box className={classes.stepTwoWidth}>
              <Typography variant="body1" className={classes.primaryColorText}>
                Lorem ipsum
              </Typography>
              <Box className={classes.StepTwoContainer}>
                <Box className={classes.inputWidth}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputWidth}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.inputWidth}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Typography variant="body1" className={classes.primaryColorText}>
                Lorem ipsum
              </Typography>
              {Array.from({ length: 7 }, (_, i) => (
                <>
                  <Box className={classes.stepTwoTable}>
                    <Typography variant="body1">Lorem ipsum</Typography>
                    <Checkbox {...label} className={classes.checkBoxMargin} />
                    <Checkbox {...label} />
                    <Typography variant="body1">$000</Typography>
                  </Box>
                  <Divider />
                </>
              ))}
            </Box>
          </Box>
        )}
        {/* ######################### SECOND STEP ######################### */}

        {/* ######################### THIRDTH STEP ######################### */}
        {step === 2 && (
          <Box className={classes.stepThreeContainer}>
            <Typography variant="body1" className={classes.textHeader}>
              Lorem ipsum
            </Typography>
            <Box className={classes.stepThreeTableContainer}>
              <Box className={classes.tableWidth}>
                {Array.from({ length: 7 }, (_, i) => (
                  <>
                    <Box className={classes.tableContent}>
                      <Typography variant="body1">Lorem ipsum</Typography>
                      <Checkbox {...label} sx={{ ml: "auto" }} />
                      <Checkbox {...label} />
                      <Typography variant="body1">$000</Typography>
                    </Box>
                    <Divider />
                  </>
                ))}
              </Box>
              <Box className={classes.tableWidth}>
                {Array.from({ length: 7 }, (_, i) => (
                  <>
                    <Box className={classes.tableContent}>
                      <Typography variant="body1">Lorem ipsum</Typography>
                      <Checkbox {...label} sx={{ ml: "auto" }} />
                      <Checkbox {...label} />
                      <Typography variant="body1">$000</Typography>
                    </Box>
                    <Divider />
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        )}
        {/* ######################### THIRDTH STEP ######################### */}

        {/* ######################### FOURTH STEP ######################### */}
        {step === 3 && (
          <Box className={classes.stepFourContainer}>
            <Box className={classes.stepFourInnerContainer}>
              <Box className={classes.bigImg}></Box>
              <Box className={classes.stepFourImages}>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
              </Box>
              <Box className={classes.contactBox}>
                <Typography variant="h6">CONTACT</Typography>
                <Typography variant="body1">
                  Lorem ipsum: Lorem ipsum
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum: Lorem ipsum
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum: Lorem ipsum
                </Typography>
              </Box>
            </Box>
            <Box className={classes.stepFourInfoBox}>
              <Box className={classes.detailsContainer}>
                <Box className={classes.fontMargin}>
                  <Typography variant="h6">
                    NAME <span className={classes.primaryColor}> (00)</span>
                  </Typography>
                  <Typography variant="body1">Country</Typography>
                </Box>
                <Box style={{ margin: "15px 0px" }}>
                  <Typography variant="body1" className={classes.detailHeader}>
                    Lorem ipsum
                  </Typography>
                </Box>
                {Array.from({ length: 9 }, (_, i) => (
                  <Box className={classes.stepFourTableContent}>
                    <Typography variant="body1">
                      Lorem ipsum : Lorem ipsum
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum : Lorem ipsum
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className={classes.secondTableWidth}>
              <Box className={classes.table}>
                <DetailsList data={SecondTable} />
              </Box>
            </Box>
          </Box>
        )}

        {/* ######################### FOURTH STEP ######################### */}
        <Box className={classes.stepperContainer}>
          <Button onClick={handleBack}>Atras</Button>
          <Button onClick={handleNext}>
            {step === 3 ? "Finalizar" : "Siguiente"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { Services };
