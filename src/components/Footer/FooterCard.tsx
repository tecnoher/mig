import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { FC } from "react";

interface FooterCardProps {
  title: string;
  description: string;
}

const FooterCard = ({ title, description }: FooterCardProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.footerContent}>
      <Typography
        variant="body1"
        color="initial"
        className={classes.footerHeaderText}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className={classes.footerBodyText}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default FooterCard;
