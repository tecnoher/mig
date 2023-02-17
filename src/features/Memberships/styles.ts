import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "@constants";

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
    backgroundColor: COLORS.BG_Light,
    padding: 15,
    "@media (max-width: 780px)": {
      width: "90%",
    },
  },
  bigCardContainer: {
    width: "100%",
    backgroundColor: COLORS.BG_Light,
  },
  buyBtnContainer: { textAlign: "center", marginTop: 10, padding: "10px 0px" },
  buyBtn: {
    width: 250,
  },
  contentContainer: { padding: 10, display: "flex", flexDirection: "column" },
});

export { useStyles };
