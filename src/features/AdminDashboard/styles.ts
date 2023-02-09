import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    color: "white",
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      width: "105%",
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
    marginBottom: "10px",
    "@media (max-width: 780px)": {
      gap: 5,
    },
  },
  rightPanel: {
    width: "70%",
    padding: "20px",
    "@media (max-width: 780px)": {
      padding: "10px",
      width: "70%",
      gap: 5,
    },
  },
  leftPanelH4: {
    fontSize: 12,
  },
  img: {
    height: "auto",
    clipPath: "circle(45% at center)",
    width: "80%",
    "@media (max-width: 780px)": {
      height: "auto",
      width: "90%",
      objectFit: "cover",
    },
  },
  navLinks: {
    padding: "5px 30px",
    "&:hover": {
      background: "#222222",
      cursor: "pointer",
    },
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      fontSize: 12,
    },
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EB1D36",
    padding: "0px 20px",
    "@media (max-width: 780px)": {
      padding: "0px 10px",
    },
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
    "@media (max-width: 780px)": {
      width: "100%",
      padding: "8px 10px",
      fontSize: 10,
    },
  },
  pagination: {
    marginLeft: 100,
    padding: "20px 0px",
    "@media (max-width: 780px)": {
      padding: "0px 0px",
      marginLeft: 0,
    },
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px",
  },
});

export { useStyles };
