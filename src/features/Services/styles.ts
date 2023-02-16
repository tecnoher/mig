import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  mainContainer: { padding: 20, width: "100%" },
  contentContainer: {
    backgroundColor: COLORS.BG_Light,
    padding: 10,
    width: "100%",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  bigImg: {
    width: "100%",
    height: 400,
    backgroundColor: "#D9D9D9",
  },
  smallImages: {
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
  },
  contactBox: {
    backgroundColor: COLORS.BG_Dark,
    padding: 14,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: COLORS.BG_Dark,
    display: "flex",
    flexDirection: "column",
    color: "white",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  detailHeader: {
    backgroundColor: COLORS.primary,
    padding: "7px 15px",
  },
  table: {
    width: "100%",
  },
});

export { useStyles };
