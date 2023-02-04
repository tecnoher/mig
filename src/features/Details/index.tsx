import { CustomCard, DetailsList, LeftPanel, RightPanel } from "@components";
import { ClassNames } from "@emotion/react";
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useStyles } from "./styles";

interface DetailsProps {
  name: string;
  isTrue: boolean;
  price: number;
}

const Details: FC = () => {
  const classes = useStyles();
  const firstTable: DetailsProps[] = [
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
  ];
  const SecondTable: DetailsProps[] = [
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
  return (
    <Box className={classes.mainContainer}>
      <LeftPanel />
      <Box className={classes.middlePanel}>
        <Typography variant="body1" style={{ padding: "20px 0px" }}>
          Loren ipsum &gt; loren ipsum &gt;
          <span style={{ color: "#EB1D36" }}> lorem ipsum</span>
        </Typography>
        <Box className={classes.flexContainer}>
          <Box className={classes.cardContainer}>
            <CustomCard
              title="Name"
              country="Country"
              favorited={true}
              image={`/cards/1.png`}
              isDetailScreen={true}
            />
          </Box>
          <Box className={classes.detailsContainer}>
            <Box style={{ margin: 10 }}>
              <Typography variant="h4">
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
        <Box className={classes.flexContainer}>
          <Box className={classes.imagesContaienr}>
            {Array.from({ length: 6 }, (_, i) => (
              <img src="/cards/1.png" style={{ width: "33%" }} />
            ))}
          </Box>
          <Box className={classes.contactContainer}>
            <Box
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Typography variant="h5">CONTACT</Typography>
              {Array.from({ length: 3 }, (_, i) => (
                <Box>
                  <Typography variant="body1">
                    Lorem ipsum : Lorem ipsum
                  </Typography>
                </Box>
              ))}
              <Typography variant="h5" className={classes.contactButton}>
                Lorem ipsum
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.flexContainer}>
          <Box style={{ width: "40%" }}>
            <DetailsList data={firstTable} />
          </Box>
          <Box style={{ width: "55%" }}>
            <DetailsList data={SecondTable} />
          </Box>
        </Box>
      </Box>
      <RightPanel />
    </Box>
  );
};

export { Details };
