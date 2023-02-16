import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";
import { COLORS } from "@constants";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "50%",
    height: "60%",
    boxShadow: theme.shadows[5],
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 780px)": {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      boxShadow: theme.shadows[0],
    },
  },
  leftSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(/login.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "@media (max-width: 780px)": {
      width: "100%",
      height: "40%",
    },
  },
  leftSectionOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.primary,
    zIndex: 9999,
  },
  subtitle: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    color: "white",
    padding: "0px 10px",
    zIndex: 9999,
  },
  btnContainer: {
    position: "absolute",
    right: 0,
    bottom: 30,
    textAlign: "center",
    color: "white",
    "@media (max-width: 780px)": {
      bottom: 0,
      display: "flex",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  selectionBtn: {
    padding: 10,
    cursor: "pointer",
  },
  selectionBtnSelected: {
    padding: 10,
    cursor: "pointer",
    backgroundColor: COLORS.BG_Light,
  },
  rightSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
    color: "white",
    position: "relative",
    backgroundColor: COLORS.BG_Light,
    "@media (max-width: 780px)": {
      width: "90%",
      height: "100%",
      padding: 20,
    },
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
    backgroundColor: COLORS.primary,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FC5C65",
    },
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  closeButtonMovile: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 7,
    backgroundColor: COLORS.primary,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15%",
    zIndex: 1000,
    "&:hover": {
      backgroundColor: "#FC5C65",
    },
    "@media (min-width: 780px)": {
      display: "none",
    },
  },
  loginOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BG_Dark,
    width: "96%",
    padding: "10px 10px",
    boxShadow: theme.shadows[5],
    color: "white",
    borderRadius: 7,
    marginTop: 15,
  },
  opcionImage: {
    backgroundColor: COLORS.BG_Light,
    padding: "7px 6px",
    borderRadius: "50%",
    marginRight: 50,
  },
  optionText: {
    marginLeft: 20,
  },
  image: {
    width: "100%",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  textField: {
    marginTop: theme.spacing(2),
    padding: "5px 5px",
  },
  button: {
    backgroundColor: COLORS.primary,
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#FC5C65",
    },
  },
}));

export { useStyles };
