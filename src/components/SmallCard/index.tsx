import { Box, Button, Divider, Typography } from "@mui/material";
import { useStyles } from "./styles";
import React, { FC, useEffect, useState } from "react";

interface SmallCardProps {
  title: string;
  listItems: string[];
  action: () => void;
}

const SmallCard: FC<SmallCardProps> = ({ title, listItems, action }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ my: 1.5 }} />
      {listItems.map((item, index) => {
        return (
          <Typography key={index} variant="body1">
            {item}
          </Typography>
        );
      })}
      <Button variant="contained" sx={{ mx: "auto", mt: 2, mb: 0.3 }}>
        Comprar
      </Button>
    </Box>
  );
};

export { SmallCard };
