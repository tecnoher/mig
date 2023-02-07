import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginBottom: 30,
    gap: 20,
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  leftPanelImages: {
    "@media (max-width: 780px)": {
      maxHeight: 300,
      width: "100%",
      objectFit: "cover",
    },
  },
});

export { useStyles };
