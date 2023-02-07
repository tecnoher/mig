import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "1px 1px 5px 0px var(--grey)",
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "10px 0px",
    zIndex: 9999,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 780px)": {
      justifyContent: "space-between",
    },
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    gap: 20,
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  linkButton: {
    padding: "10px 20px",
    borderRadius: 5,
    "&:hover": {
      background: "#EB1D36",
      cursor: "pointer",
    },
  },
  linkText: {
    color: "white",
  },
  icon: {
    color: "#EB1D36",
    cursor: "pointer",
    "@media (min-width: 780px)": {
      display: "none",
    },
  },
  hamburguerLinkOpened: {},
  hamburguerLinkClosed: {
    display: "none",
  },
});

export { useStyles };
