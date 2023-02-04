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
  isDetailScreen: boolean;
}

const CustomCard: FC<HomeCardProps> = ({
  title,
  country,
  favorited,
  image,
  isDetailScreen,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <img src={image} alt="" className={classes.cardImage} />

      <Box className={isDetailScreen ? classes.lazzo : classes.smallLazzo}>
        <Typography variant="body1" color="initial">
          IPSUM
        </Typography>
      </Box>
      {!isDetailScreen && (
        <>
          <Box className={classes.cardTextContainer}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{country}</Typography>
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
        </>
      )}
    </Box>
  );
};

export { CustomCard };
