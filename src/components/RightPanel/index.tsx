import { Box } from "@mui/material";
import { useStyles } from "./styles";

const RightPanel = () => {
  const rightPanel: string[] = [
    "/rightpanel/1.png",
    "/rightpanel/2.png",
    "/rightpanel/3.png",
    "/rightpanel/4.png",
    "/rightpanel/5.png",
  ];
  const classes = useStyles();
  return (
    <Box className={classes.rightPanel}>
      {rightPanel.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            alt=""
            className={classes.leftPanelImages}
          />
        );
      })}
    </Box>
  );
};

export { RightPanel };
