import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
import { COLORS } from "@constants";

const useStyles = makeStyles({
  mainContainer: { padding: 20, width: "100%" },
  contentContainer: {
    backgroundColor: COLORS.BG_Light,
    padding: 10,
    width: "90%",
  },
  fullWidth: { width: "100%" },
  pageTitle: { margin: "10px 0px", color: "white" },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  rowContainer: {
    width: "60%",
    px: 1,
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    "@media (max-width: 1000px)": {
      flexWrap: "no-wrap",
      flexDirection: "column",
    },
  },
  inputContainer: {
    width: "45%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  primaryColor: { color: COLORS.primary },
  smallImagesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  stepOneformContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  stepperHeader: { margin: "15px 0px" },
  bigImg: {
    width: "100%",
    height: 400,
    backgroundColor: "#D9D9D9",
  },
  smallImages: {
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
  },
  contactBox: {
    backgroundColor: COLORS.BG_Dark,
    padding: 14,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: COLORS.BG_Dark,
    display: "flex",
    flexDirection: "column",
    color: "white",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  detailHeader: {
    backgroundColor: COLORS.primary,
    padding: "7px 15px",
  },
  table: {
    width: "100%",
  },
  stepperContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    margin: "15px 0px",
  },
  confirmBtn: { marginTop: 20 },
  stepTwoWidth: {
    width: "60%",
    "@media (max-width: 1000px)": {
      width: "90%",
    },
  },
  StepTwoContainer: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
  stepTwoTable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    "@media (max-width: 1000px)": {
      gap: 0,
    },
  },
  primaryColorText: { color: COLORS.primary, marginTop: 20 },
  inputWidth: {
    width: "45%",
    "@media (max-width: 1000px)": {
      width: "95%",
    },
  },
  checkBoxMargin: { marginLeft: "auto" },
  stepThreeContainer: { display: "flex", flexDirection: "column", px: 3 },
  textHeader: { color: COLORS.primary, my: 2 },
  stepThreeTableContainer: {
    display: "flex",
    gap: 5,
    "@media (max-width: 1000px)": {
      gap: 0,
      flexDirection: "column",
    },
  },
  tableContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    "@media (max-width: 1000px)": {
      gap: 20,
    },
  },
  tableWidth: { width: "50%" },
  stepFourContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  stepFourInnerContainer: {
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  stepFourImages: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  stepFourInfoBox: {
    width: "33.33%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  fontMargin: { margin: 10 },
  stepFourTableContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 30px",
    color: "white",
  },
  stepTwoOuterContainer: { display: "flex", justifyContent: "center" },
  secondTableWidth: { width: "33.33%" },
});

export { useStyles };
