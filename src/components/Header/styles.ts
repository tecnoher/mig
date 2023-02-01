import { makeStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const useStyles = makeStyles({
  _header: {
    boxSizing: "border-box",
    position: "absolute",
    width: "100%",
    height: "15%",
    left: "0",
    top: "0",
    background: "rgba(0, 0, 0, 0.5)",
    border: "1px solid #000000",
  },
  header: {
    backgroundColor: "var(--black)",
    boxShadow: "1px 1px 5px 0px var(--grey)",
    position: "sticky",
    top: 0,
    width: "100%",
  },
  logo: {
    display: "inline-block",
    color: "var(--white)",
    fontSize: "60px",
    marginLeft: "10px",
  },
  nav: { maxHeight: "0", transition: "max-height .5s ease-out" },
  menu_a: { display: "block", padding: "30px", color: "var(--white)" },
  menu_a_hover: { backgroundColor: "var(--grey)" },
  hamb: { cursor: "pointer", float: "right", padding: "40px 20px" },
  hamb_line: {
    background: "var(--white)",
    display: "block",
    height: "2px",
    position: "relative",
    width: "24px",
  },
  hamb_line__before: { top: "5px" },
  hamb_line__after: { top: "-5px" },
  side_menu: { display: "none" },
  side_menu_checked___nav: { maxHeight: "100%" },
  side_menu_checked____hamb__hamb_line: { background: "transparent" },
  side_menu_checked____hamb__hamb_line__before: {
    transform: "rotate(-45deg)",
    top: "0",
  },
  side_menu_checked____hamb__hamb_line__after: {
    transform: "rotate(45deg)",
    top: "0",
  },
});

export { useStyles };
