import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  leftPanel: {
    backgroundColor: COLORS.BG_Light,
    padding: "20px 20px",
    width: "15%",
    marginBottom: 30,
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  countryContainer: {
    display: "flex",
    padding: "5px 10px",
    gap: 10,
  },
  navLinkText: { color: "white", marginTop: 20 },
});

export { useStyles };
