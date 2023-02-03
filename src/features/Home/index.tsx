import { CustomCard } from "@components";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import RoomIcon from "@material-ui/icons/Room";
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

interface CountryList {
  continent: string;
  countries: string[];
}

const Home: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const filters: string[] = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];
  const rightPanel: string[] = [
    "/rightpanel/1.png",
    "/rightpanel/2.png",
    "/rightpanel/3.png",
    "/rightpanel/4.png",
    "/rightpanel/5.png",
  ];
  const leftPanel: CountryList[] = [
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
  ];
  const classes = useStyles();

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleOpenFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <Box className={classes.headerBG}>
        <Box className={classes.overlay}>
          <Typography className={classes.headerMainText} variant="h2">
            is simply dummy text of the printing
          </Typography>
          <Typography variant="h3" className={classes.headerSecondaryText}>
            and typesetting industry.
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box className={classes.mobileInputContainer}>
          <Box className={classes.cutCirle}>
            <RoomIcon style={{ width: 50, height: 50, color: "#EB1D36" }} />
          </Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Lorem Ipsum"
            variant="outlined"
            style={{ marginLeft: 50 }}
          />
        </Box>
        <Typography variant="body1" className={classes.filterNameText}>
          Lorem ipsum
        </Typography>
        <Box
          className={classes.mobileFilterContainer}
          onClick={handleOpenFilters}
        >
          <MenuOpenIcon className={classes.headerSecondaryText} />
          <Typography variant="body1" style={{ color: "white" }}>
            Filtrar
          </Typography>
          {isFilterOpen ? (
            <ArrowDropUpIcon fontSize="large" className={classes.filtorIcon} />
          ) : (
            <ArrowDropDownIcon
              fontSize="large"
              className={classes.filtorIcon}
            />
          )}
        </Box>
        <Box
          className={
            isFilterOpen
              ? classes.filterContainer
              : classes.filterContainerOpened
          }
        >
          {filters.map((item, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                className={classes.filterButtons}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Container>
      <Box className={classes.mainBodyContainer}>
        <Box className={classes.leftPanel}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Lorem Ipsum"
            variant="outlined"
          />
          {leftPanel.map((item, index) => {
            return (
              <>
                <Box key={index}>
                  <Typography
                    variant="h6"
                    style={{ color: "white", marginTop: 20 }}
                  >
                    {item.continent}
                  </Typography>
                </Box>
                <Divider />
                {item.countries.map((country, i) => {
                  return (
                    <Box key={i} className={classes.countryContainer}>
                      <img src={`/flags/${randomInt(1, 4)}.png`} alt="" />
                      <Typography variant="body1" style={{ color: "white" }}>
                        {country}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            );
          })}
        </Box>
        <Box className={classes.middlePanel}>
          <Box className={classes.cardContainer}>
            {Array.from({ length: 40 }, (_, i) => (
              <CustomCard
                key={i}
                title="Name"
                country="Country"
                favorited={false}
                image={`/cards/${randomInt(1, 5)}.png`}
              />
            ))}
          </Box>
        </Box>
        <Box className={classes.rightPanel}>
          {rightPanel.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className={classes.leftPanelImages}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export { Home };
