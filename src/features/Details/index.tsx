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
        <Typography variant="body1" className={classes.middlePanelText}>
          Loren ipsum &gt; loren ipsum &gt;
          <span className={classes.middlePanelSpan}>lorem ipsum</span>
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
            <Box className={classes.detailsContainerInnerMargin}>
              <Typography variant="h4">
                NAME <span className={classes.middlePanelSpan}>(00)</span>
              </Typography>
              <Typography variant="body1">Country</Typography>
            </Box>
            <Box className={classes.tableHead}>
              <Typography variant="body1" className={classes.detailHeader}>
                Lorem ipsum
              </Typography>
            </Box>
            {Array.from({ length: 9 }, (_, i) => (
              <Box className={classes.tableRow}>
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
              <img src="/cards/1.png" className={classes.images} />
            ))}
          </Box>
          <Box className={classes.contactContainer}>
            <Box className={classes.contactTable}>
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
          <Box className={classes.firstTable}>
            <DetailsList data={firstTable} />
          </Box>
          <Box className={classes.secondTable}>
            <DetailsList data={SecondTable} />
          </Box>
        </Box>
      </Box>
      <RightPanel />
    </Box>
  );
};

export { Details };
