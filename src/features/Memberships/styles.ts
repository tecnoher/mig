import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    padding: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  cardsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  cardContainer: {
    width: "33.33%",
    backgroundColor: "#363636",
    padding: 15,
    "@media (max-width: 780px)": {
      width: "90%",
    },
  },
  bigCardContainer: {
    width: "100%",
    backgroundColor: "#363636",
  },
  buyBtn: {
    width: 250,
  },
});

export { useStyles };
