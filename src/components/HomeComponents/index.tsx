import { useStyles } from "./styles";
import { Box } from "@mui/material";
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
    <Box>
      <img src={image} alt="" style={{ position: "relative" }} />
    </Box>
  );
};

export { CustomCard };
