import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  card: {
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 780px)": {
      width: "45%",
    },
  },
  bigCard: {
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  cardImage: {
    position: "relative",
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#222222",
    borderStyle: "solid",
    cursor: "pointer",
    "&:hover": {
      borderWidth: 2,
      borderColor: "#EB1D36",
      borderStyle: "solid",
    },
  },
  cardTextContainer: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bottom: -20,
    textAlign: "center",
    color: "white",
  },
  lazzo: {
    position: "absolute",
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
    top: "5%",
    right: "50%",
    padding: "3px 0px",
    transform: "rotate(-45deg)",
    "@media (max-width: 780px)": {
      top: "7%",
    },
  },
  smallLazzo: {
    position: "absolute",
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
    top: "10%",
    right: "5%",
    padding: "3px 0px",
    transform: "rotate(-45deg)",
    "@media (max-width: 780px)": {
      top: "8%",
      right: "15%",
    },
  },
  starContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 10,
    color: "white",
  },
});

export { useStyles };
