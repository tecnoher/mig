import { Grid } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import FooterCard from "./FooterCard";
import { useStyles } from "./styles";

//const Footer: React.FC<FooterProps> = (props) => {
const Footer: React.FC = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Box className={classes.mainCardsContainer}>
          <FooterCard
            title="LOREM IPSUM"
            description="of a page when looking at its layout. The point 
of using Lorem Ipsum is that it has a more-or-less 
normal distribution"
          />
          <Box className={classes.divider} />
          <FooterCard
            title="LOREM IPSUM"
            description="of a page when looking at its layout. The point 
of using Lorem Ipsum is that it has a more-or-less 
normal distribution"
          />
          <Box className={classes.divider}></Box>
          <FooterCard
            title="LOREM IPSUM"
            description="of a page when looking at its layout. The point 
of using Lorem Ipsum is that it has a more-or-less 
normal distribution"
          />
        </Box>
      </Container>
      <Box className={classes.underFooter}>
        <Typography variant="body1" className={classes.underFooterMainText}>
          is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Typography
          variant="body2"
          className={classes.underFooterSecondaryText}
        >
          is simply dummy text of the printing and typesetting industry.
        </Typography>
      </Box>
    </footer>
  );
};

export { Footer };
