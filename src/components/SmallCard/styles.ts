import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 5,
  },
  buyBtn: {
    backgroundColor: "#EB1D36",
    color: "blue",
    margin: 20,
  },
});

export { useStyles };
