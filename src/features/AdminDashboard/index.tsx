import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Box, Button, Container, Pagination, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";

const AdminDashboard: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const classes = useStyles();

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

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box className={classes.rightPanel}>
      <Typography variant="h5">Lorem ipsum</Typography>
      <Box className={classes.fullWidth}>
        <Box className={classes.tableHeader}>
          <h6 className={classes.tableSmallRows}>Lorem ipsum</h6>
          <h6 className={classes.tableSmallRows}>Lorem ipsum</h6>
          <h6 className={classes.tableSmallRows}>Lorem ipsum</h6>
        </Box>
        <Box className={classes.tableBody}>
          {tableContent.map((item, index) => {
            return (
              <Box key={index} className={classes.tableRow}>
                <Typography variant="body1" className={classes.firstRowFont}>
                  Lorem ipsum
                </Typography>
                <Box className={classes.tableSmallRows}>
                  {width < 780 ? (
                    <>
                      <WhatsAppIcon />
                    </>
                  ) : (
                    <>
                      <Button variant="contained" color="info">
                        Contactar
                      </Button>
                    </>
                  )}
                </Box>
                <Box className={classes.tableSmallRows}>
                  {width < 780 ? (
                    <>
                      <TelegramIcon />
                    </>
                  ) : (
                    <>
                      <Button variant="contained">Contactar</Button>
                    </>
                  )}
                </Box>
              </Box>
            );
          })}
          <Box className={classes.paginationContainer}>
            <Pagination count={3} color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AdminDashboard };
