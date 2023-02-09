import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Box, Button, Container, Pagination, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";

const AdminDashboard: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
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
    <Container>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftPanel}>
          <img src="/cards/1.png" alt="" className={classes.img} />
          <h4 className={classes.leftPanelH4}>Lorem ipsum</h4>
          <h4 className={classes.leftPanelH4}>Lorem ipsum</h4>
          {links.map((item, index) => {
            return (
              <h4 key={index} className={classes.navLinks}>
                {item}
              </h4>
            );
          })}
        </Box>
        <Box className={classes.rightPanel}>
          <Typography variant="h5">Lorem ipsum</Typography>
          <Box>
            <Box className={classes.tableHeader}>
              <h6
                className={classes.leftPanelH4}
                style={width < 1000 ? { width: "40%" } : { width: "50%" }}
              >
                Lorem ipsum
              </h6>
              <h6
                className={classes.leftPanelH4}
                style={width < 1000 ? { width: "30%" } : { width: "25%" }}
              >
                Lorem ipsum
              </h6>
              <h6
                className={classes.leftPanelH4}
                style={width < 1000 ? { width: "30%" } : { width: "25%" }}
              >
                Lorem ipsum
              </h6>
            </Box>
            <Box className={classes.tableBody}>
              {tableContent.map((item, index) => {
                return (
                  <Box key={index} className={classes.tableRow}>
                    <Typography
                      variant="body1"
                      style={
                        width < 1000
                          ? { width: "40%", fontSize: 12 }
                          : { width: "50%" }
                      }
                    >
                      Lorem ipsum
                    </Typography>
                    <Box
                      style={width < 1000 ? { width: "30%" } : { width: "25%" }}
                    >
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
                    <Box
                      style={width < 1000 ? { width: "30%" } : { width: "25%" }}
                    >
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
      </Box>
    </Container>
  );
};

export { AdminDashboard };
