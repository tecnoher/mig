import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import {
  Box,
  Button,
  Container,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { SmallCard } from "@components";

interface CardDetails {
  title: string;
  listItems: string[];
  action: () => void;
}

const Memberships: FC = () => {
  //const [width, setWidth] = useState(window.innerWidth);
  const classes = useStyles();

  const cardList = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const cards: CardDetails[] = [
    {
      title: "Lorem ipsum",
      listItems: cardList,
      action: () => console.log("Working"),
    },
    {
      title: "Lorem ipsum",
      listItems: cardList,
      action: () => console.log("Working"),
    },
    {
      title: "Lorem ipsum",
      listItems: cardList,
      action: () => console.log("Working"),
    },
  ];

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h5" sx={{ my: 1 }}>
        Lorem ipsum
      </Typography>
      <Box className={classes.cardsContainer}>
        {cards.map((item, index) => {
          return (
            <Box key={index} className={classes.cardContainer}>
              <SmallCard
                title="Lorem ipsum"
                listItems={cardList}
                action={() => console.log("Working")}
              />
            </Box>
          );
        })}
      </Box>
      <Box className={classes.bigCardContainer}>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Lorem ipsum</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Typography>
          <Box sx={{ textAlign: "center", mt: 1, py: 1 }}>
            <Button variant="contained" className={classes.buyBtn}>
              Comprar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Memberships };
