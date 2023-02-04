import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#363636",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: "10px 0px",
    backgroundColor: "#EB1D36",
    /* "@media (max-width: 780px)": {
      flexDirection: "column",
      padding: "0px 10px",
    }, */
  },
  tableFirstColumn: {
    width: "60%",
    padding: "0px 20px",
  },
  tableSecondColumnTrue: {
    width: "20%",
    padding: "0px 20px",
    color: "#08D070",
  },
  tableSecondColumnFalse: {
    width: "20%",
    padding: "0px 20px",
    color: "#EB1D36",
  },
  tableThirdtColumn: { width: "20%", padding: "0px 20px" },
});

export { useStyles };
