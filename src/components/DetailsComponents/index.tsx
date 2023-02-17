import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box, Divider, Typography } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import StarIcon from "@material-ui/icons/Star";
import { useStyles } from "./styles";
import { FC } from "react";

interface DetailsProps {
  name: string;
  isTrue: boolean;
  price: number;
}

type Data = {
  data: DetailsProps[];
};

const DetailsList: FC<Data> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.tableHeader}>
        <Typography variant="body1" className={classes.tableFirstColumnHeader}>
          Lorem ipsum
        </Typography>
        <Typography variant="body1" className={classes.tableSecondColumnHeader}>
          Lorem
        </Typography>
        <Typography variant="body1" className={classes.tableThirdColumnHeader}>
          Lorem
        </Typography>
      </Box>
      {data.map((item, index) => {
        return (
          <Box key={index}>
            <Box className={classes.tableContentContainer}>
              <Typography variant="body1" className={classes.tableFirstColumn}>
                {item.name}
              </Typography>
              {item.isTrue ? (
                <CheckIcon
                  fontSize="large"
                  className={classes.tableSecondColumnTrue}
                />
              ) : (
                <CloseIcon
                  fontSize="large"
                  className={classes.tableSecondColumnFalse}
                />
              )}
              <Typography variant="body1" className={classes.tableThirdtColumn}>
                {item.price}
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Box>
  );
};

export { DetailsList };
