import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";

const useStyles = makeStyles({
  mainContainer: { padding: 20, width: "100%" },
  contentContainer: {
    backgroundColor: "#363636",
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
    backgroundColor: "#222222",
    padding: 14,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#222222",
    display: "flex",
    flexDirection: "column",
    color: "white",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  detailHeader: {
    backgroundColor: "#EB1D36",
    padding: "7px 15px",
  },
  table: {
    width: "100%",
  },
});

export { useStyles };
