import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  container: { backgroundColor: "#363636" },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: "10px 0px",
    backgroundColor: "#EB1D36",
  },
});

export { useStyles };
