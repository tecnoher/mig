import { CustomCard, LeftPanel, RightPanel } from "@components";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import RoomIcon from "@material-ui/icons/Room";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useStyles } from "./styles";

const AdminDashboard: FC = () => {
  const classes = useStyles();

  const links: string[] = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const tableContent = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  return (
    <Container>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftPanel}>
          <img src="/cards/1.png" alt="" className={classes.img} />
          <Typography variant="h4">Lorem ipsum</Typography>
          <Typography variant="h5">Lorem ipsum</Typography>
          {links.map((item, index) => {
            return (
              <Typography key={index} variant="h6" className={classes.navLinks}>
                {item}
              </Typography>
            );
          })}
        </Box>
        <Box className={classes.RightPanel}>
          <Typography variant="h5">Lorem ipsum</Typography>
          <Box>
            <Box className={classes.tableHeader}>
              <Typography variant="body1" style={{ width: "50%" }}>
                Lorem ipsum
              </Typography>
              <Typography variant="body1" style={{ width: "25%" }}>
                Lorem ipsum
              </Typography>
              <Typography variant="body1" style={{ width: "25%" }}>
                Lorem ipsum
              </Typography>
            </Box>
            <Box className={classes.tableBody}>
              {tableContent.map((item, index) => {
                return (
                  <Box key={index} className={classes.tableRow}>
                    <Typography variant="body1" style={{ width: "50%" }}>
                      Lorem ipsum
                    </Typography>
                    <Box style={{ width: "25%" }}>
                      <Button variant="contained" color="info">
                        Contactar
                      </Button>
                    </Box>
                    <Box style={{ width: "25%" }}>
                      <Button variant="contained">Contactar</Button>
                    </Box>
                  </Box>
                );
              })}
              <Pagination
                count={10}
                color="primary"
                className={classes.pagination}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export { AdminDashboard };
