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
  mobileInputContainer: {
    display: "none",
    /* "@media (max-width: 780px)": {
      backgroundColor: "#363636",
      position: "relative",
      display: "flex",
      justifyContent: "end",
      padding: 30,
      marginLeft: 20,
      borderRadius: 12,
      margin: "20px 0px",
    }, */
  },
  cutCirle: {
    backgroundColor: "#222222",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    left: 0,
    display: "flex",
    padding: 10,
    borderRadius: "50%",
  },
  headerMainText: {
    color: "#EB1D36",
    fontWeight: "bolder",
  },
  headerSecondaryText: {
    color: "white",
  },
  filterNameText: {
    display: "none",
    "@media (max-width: 780px)": {
      color: "#EB1D36",
      marginTop: 10,
    },
  },
  mobileFilterContainer: {
    display: "none",
    "@media (max-width: 780px)": {
      backgroundColor: "black",
      marginTop: 10,
      display: "flex",
      gap: 10,
      padding: "5px 13px",
      alignItems: "center",
    },
  },
  filtorIcon: {
    color: "#EB1D36",
    marginLeft: "auto",
  },
  filterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    color: "white",
    backgroundColor: "black",
    padding: "10px 20px",
    marginBottom: 20,
    "@media (max-width: 780px)": {},
  },
  filterContainerOpened: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 80,
    color: "white",
    backgroundColor: "black",
    padding: "10px 20px",
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  filterButtons: {
    cursor: "pointer",
    width: "100%",
  },
  mainBodyContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    marginTop: 20,
    padding: "0px 30px",
    "@media (max-width: 780px)": {
      flexDirection: "column",
      padding: "0px 0px",
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
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 10,
    justifyContent: "center",
    "@media (max-width: 780px)": {
      gap: 5,
    },
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
  leftPanelImages: {
    "@media (max-width: 780px)": {
      maxHeight: 300,
      width: "100%",
      objectFit: "cover",
    },
  },
});

export { useStyles };
