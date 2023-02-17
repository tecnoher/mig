import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  container: {
    backgroundColor: COLORS.BG_Light,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: "10px 0px",
    backgroundColor: COLORS.primary,
    "@media (max-width: 780px)": {
      gap: 40,
      padding: "10px 0px",
    },
  },
  tableFirstColumnHeader: { width: "60%", paddingLeft: "20px" },
  tableSecondColumnHeader: {
    width: "20%",
  },
  tableThirdColumnHeader: { width: "20%" },
  tableContentContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 0px",
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
    color: COLORS.primary,
  },
  tableThirdtColumn: { width: "20%", padding: "0px 20px" },
});

export { useStyles };
