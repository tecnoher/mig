import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box, Typography } from "@mui/material";
import StarIcon from "@material-ui/icons/Star";
import { useStyles } from "./styles";
import { FC } from "react";

interface HomeCardProps {
  title: string;
  country: string;
  favorited: boolean;
  image: string;
}

const CustomCard: FC<HomeCardProps> = ({
  title,
  country,
  favorited,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <img src={image} alt="" className={classes.cardImage} />
      <Box className={classes.cardTextContainer}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{country}</Typography>
      </Box>
      <Box className={classes.lazzo}>
        <Typography variant="body1" color="initial">
          IPSUM
        </Typography>
      </Box>
      {favorited ? (
        <Box className={classes.starContainer}>
          <StarIcon />
        </Box>
      ) : (
        <Box className={classes.starContainer}>
          <StarBorderIcon />
        </Box>
      )}
    </Box>
  );
};

export { CustomCard };
