import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 5,
  },
  buyBtn: {
    backgroundColor: COLORS.primary,
    color: "blue",
    margin: 20,
  },
});

export { useStyles };
