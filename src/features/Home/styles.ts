import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerBG: {
    backgroundImage: `url(/headerBG.png)`,
    backgroundSize: "cover",
    height: 500,
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerMainText: {
    color: "#EB1D36",
    fontWeight: "bolder",
  },
  headerSecondaryText: {
    color: "white",
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 80,
    color: "white",
    backgroundColor: "black",
    padding: "10px 20px",
    margin: "20px 0px",
  },
  filterButtons: {
    cursor: "pointer",
    width: "100%",
  },
  mainBodyContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: "0px 30px",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  leftPanel: {
    backgroundColor: "#363636",
    padding: "20px 20px",
    width: "15%",
    marginBottom: 30,
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  countryContainer: {
    display: "flex",
    padding: "5px 10px",
    gap: 10,
  },
  middlePanel: {
    width: "65%",
    marginBottom: 30,
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginBottom: 30,
    gap: 20,
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
});

export { useStyles };
