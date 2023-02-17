import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  parent: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.BG_Dark,
  },
  main: {
    display: "flex",
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
  child: {
    px: 20,
    "@media (max-width: 1000px)": {
      px: 1,
      width: "94%",
    },
  },
  body: {
    backgroundColor: "#282c35",
    fontFamily: "Verdana",
    fontWeight: 600,
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
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    color: "white",
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      width: "100%",
    },
  },
  img: {
    height: "auto",
    clipPath: "circle(45% at center)",
    width: "80%",
    "@media (max-width: 780px)": {
      height: "auto",
      width: "95%",
      objectFit: "cover",
    },
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: COLORS.BG_Light,
    alignItems: "center",
    padding: "100px 0px",
    marginBottom: "10px",
    "@media (max-width: 780px)": {
      gap: 5,
    },
  },
  leftPanelH4: {
    fontSize: 12,
  },
  navLinks: {
    padding: "0px 30px",
    "&:hover": {
      background: COLORS.BG_Dark,
      cursor: "pointer",
    },
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      fontSize: 12,
    },
  },
  rightPanel: {
    width: "70%",
  },
});

export { useStyles };
