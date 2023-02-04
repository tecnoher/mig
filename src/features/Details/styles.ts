import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    marginTop: 100,
    padding: "0px 30px",
    color: "white",
    "@media (max-width: 780px)": {
      flexDirection: "column",
      padding: "0px 0px",
    },
  },
  middlePanel: {
    width: "65%",
    marginBottom: 30,
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "40%",
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  detailsContainer: {
    width: "55%",
    backgroundColor: "#363636",
    margin: "5px 10px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  detailHeader: {
    backgroundColor: "#EB1D36",
    padding: "7px 15px",
  },
  imagesContaienr: {
    width: "40%",
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
  },
  contactContainer: {
    backgroundColor: "#363636",
    width: "55%",
    margin: "1px 5px",
    padding: 20,
  },
  contactButton: {
    textAlign: "center",
    backgroundColor: "#EB1D36",
    padding: "15px 0px",
    cursor: "pointer",
  },
});

export { useStyles };
