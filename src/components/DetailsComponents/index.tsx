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
        <Typography
          variant="body1"
          style={{ width: "60%", padding: "0px 20px" }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant="body1"
          style={{ marginLeft: "auto", width: "20%", padding: "0px 20px" }}
        >
          Lorem
        </Typography>
        <Typography
          variant="body1"
          style={{ width: "20%", padding: "0px 20px" }}
        >
          Lorem
        </Typography>
      </Box>
      {data.map((item, index) => {
        return (
          <Box key={index}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "10px 0px",
              }}
            >
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
