import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    color: "white",
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      width: "95%",
    },
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: "#363636",
    alignItems: "center",
    gap: 20,
    padding: "20px 0px",
  },
  RightPanel: { width: "70%", padding: "20px" },
  img: {
    borderRadius: "50%",
    height: 200,
    width: 200,
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      height: 115,
      width: "100%",
    },
  },
  navLinks: {
    padding: "5px 30px",
    "&:hover": {
      background: "#222222",
      cursor: "pointer",
    },
    "@media (max-width: 780px)": {
      padding: "0px 10px",
    },
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EB1D36",
    padding: "8px 20px",
  },
  tableBody: {
    backgroundColor: "#363636",
    "& .MuiPagination-root": {
      color: "#ff0000",
    },
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: "8px 20px",
  },
  pagination: {
    marginLeft: 100,
    padding: "20px 0px",
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      marginLeft: 0,
    },
  },
});

export { useStyles };
