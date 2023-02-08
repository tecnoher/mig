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
      padding: "0px 10px",
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
    gap: 10,
    margin: "10px 0px",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  cardContainer: {
    width: "40%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  detailsContainer: {
    width: "55%",
    backgroundColor: "#363636",
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
  imagesContaienr: {
    width: "40%",
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  contactContainer: {
    backgroundColor: "#363636",
    width: "55%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  contactButton: {
    textAlign: "center",
    backgroundColor: "#EB1D36",
    cursor: "pointer",
  },
  images: {
    width: "33%",
    "@media (max-width: 780px)": {
      width: "30%",
    },
  },
  firstTable: {
    width: "40%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  secondTable: {
    width: "55%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
});

export { useStyles };
