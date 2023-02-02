import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#363636",
    marginTop: "auto",
  },
  mainCardsContainer: {
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    "@media (max-width: 780px)": {
      flexDirection: "column",
      gap: 10,
      padding: "20px 0px",
    },
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    width: "35%",
    textAlign: "center",
    "@media (max-width: 780px)": {
      width: "80%",
      textAlign: "left",
    },
  },
  footerHeaderText: {
    fontWeight: "bold",
    color: "white",
    "@media (max-width: 780px)": {
      marginBottom: 15,
    },
  },
  footerBodyText: {
    color: "white",
  },
  divider: {
    height: 250,
    width: 1.6,
    backgroundColor: "#2C2C2C",
    "@media (max-width: 780px)": {
      height: 1.6,
      width: 400,
    },
  },
  underFooter: {
    backgroundColor: "#1A1A1A",
    padding: "10px 0px",
    width: "100%",
    textAlign: "center",
  },
  underFooterMainText: { color: "white" },
  underFooterSecondaryText: { color: "gray" },
});

export { useStyles };
