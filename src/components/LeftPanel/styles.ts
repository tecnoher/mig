import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
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
});

export { useStyles };
