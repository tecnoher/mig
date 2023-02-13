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
      <Typography variant="h4" sx={{ my: 2, color: "white" }}>
        Lorem ipsum
      </Typography>
      <Box className={classes.contentContainer}>
        <Box sx={{ my: 3 }}>
          <CustomStepper steps={steps} activeStep={step} />
        </Box>

        {/* ######################### FIRST STEP ######################### */}
        {step === 0 && (
          <Box className={classes.innerContainer}>
            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                "@media (max-width: 1000px)": {
                  width: "100%",
                },
              }}
            >
              <Box className={classes.bigImg}></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
                <Box className={classes.smallImages}></Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography variant="body1">Lorem ipsum</Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Lorem imsum"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "60%",
                px: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ color: "#EB1D36" }}>
                Lorem ipsum
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  flexDirection: "row",
                  width: "100%",
                  "@media (max-width: 1000px)": {
                    flexWrap: "no-wrap",
                    flexDirection: "column",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    "@media (max-width: 1000px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Button variant="contained" sx={{ mx: "auto", mt: 1 }}>
                  Lorem ipsum
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {/* ######################### FIRST STEP ######################### */}

        {/* ######################### SECOND STEP ######################### */}
        {step === 1 && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "60%" }}>
              <Typography variant="body1" sx={{ color: "#EB1D36", my: 2 }}>
                Lorem ipsum
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Box sx={{ width: "45%" }}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: "45%" }}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: "45%" }}>
                  <Typography variant="body1">Lorem ipsum</Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lorem imsum"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Typography variant="body1" sx={{ color: "#EB1D36", my: 3 }}>
                Lorem ipsum
              </Typography>
              {Array.from({ length: 7 }, (_, i) => (
                <>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 30,
                    }}
                  >
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
        )}
        {/* ######################### SECOND STEP ######################### */}

        {/* ######################### THIRDTH STEP ######################### */}
        {step === 2 && (
          <Box sx={{ display: "flex", flexDirection: "column", px: 3 }}>
            <Typography variant="body1" sx={{ color: "#EB1D36", my: 2 }}>
              Lorem ipsum
            </Typography>
            <Box sx={{ display: "flex", gap: 5 }}>
              <Box sx={{ width: "50%" }}>
                {Array.from({ length: 7 }, (_, i) => (
                  <>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 30,
                      }}
                    >
                      <Typography variant="body1">Lorem ipsum</Typography>
                      <Checkbox {...label} sx={{ ml: "auto" }} />
                      <Checkbox {...label} />
                      <Typography variant="body1">$000</Typography>
                    </Box>
                    <Divider />
                  </>
                ))}
              </Box>
              <Box sx={{ width: "50%" }}>
                {Array.from({ length: 7 }, (_, i) => (
                  <>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 30,
                      }}
                    >
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              "@media (max-width: 1000px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                width: "33.33%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                "@media (max-width: 1000px)": {
                  width: "100%",
                },
              }}
            >
              <Box className={classes.bigImg}></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  "@media (max-width: 1000px)": {
                    width: "100%",
                  },
                }}
              >
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
            <Box
              sx={{
                width: "33.33%",
                "@media (max-width: 1000px)": {
                  width: "100%",
                },
              }}
            >
              <Box className={classes.detailsContainer}>
                <Box style={{ margin: 10 }}>
                  <Typography variant="h6">
                    NAME <span style={{ color: "#EB1D36" }}> (00)</span>
                  </Typography>
                  <Typography variant="body1">Country</Typography>
                </Box>
                <Box style={{ margin: "15px 0px" }}>
                  <Typography variant="body1" className={classes.detailHeader}>
                    Lorem ipsum
                  </Typography>
                </Box>
                {Array.from({ length: 9 }, (_, i) => (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px 30px",
                      color: "white",
                    }}
                  >
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
            <Box sx={{ width: "33.33%" }}>
              <Box className={classes.table}>
                <DetailsList data={SecondTable} />
              </Box>
            </Box>
          </Box>
        )}

        {/* ######################### FOURTH STEP ######################### */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
            py: 4,
          }}
        >
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
