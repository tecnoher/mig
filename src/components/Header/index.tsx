import Container from "@material-ui/core/Container";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface Links {
  linkName: string;
  linkTo: string;
}

//const Header: React.FC<HeaderProps> = (props) => {
const Header: React.FC = (props) => {
  const classes = useStyles();

  const links: Links[] = [
    { linkName: "Lorem Ipsum", linkTo: "#" },
    { linkName: "Lorem Ipsum", linkTo: "#" },
    { linkName: "Lorem Ipsum", linkTo: "#" },
    { linkName: "Lorem Ipsum", linkTo: "#" },
  ];

  return (
    <header className={classes.header}>
      <Container>
        <Box className={classes.navContainer}>
          <Typography variant="h3" className={classes.linkText}>
            LOGO
          </Typography>
          <Box className={classes.linksContainer}>
            {links.map((item, index) => {
              return (
                <Box key={index} className={classes.linkButton}>
                  <Typography variant="body1" className={classes.linkText}>
                    {item.linkName}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box>
            <PersonIcon fontSize="large" className={classes.icon} />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export { Header };
