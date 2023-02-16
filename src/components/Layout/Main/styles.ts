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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
    padding: "20px",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#ffe8c3",
    backgroundColor: "#eab768",
    borderRadius: "10px",
    border: "10px solid #f5cc8b",
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
});

export { useStyles };
