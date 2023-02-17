import { Box, Divider, TextField, Typography } from "@mui/material";
import { useStyles } from "./styles";

interface CountryList {
  continent: string;
  countries: string[];
}

const LeftPanel = () => {
  const leftPanel: CountryList[] = [
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      continent: "Continent x",
      countries: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
  ];
  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const classes = useStyles();
  return (
    <Box className={classes.leftPanel}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Lorem Ipsum"
        variant="outlined"
      />
      {leftPanel.map((item, index) => {
        return (
          <>
            <Box key={index}>
              <Typography variant="h6" className={classes.navLinkText}>
                {item.continent}
              </Typography>
            </Box>
            <Divider />
            {item.countries.map((country, i) => {
              return (
                <Box key={i} className={classes.countryContainer}>
                  <img src={`/flags/${randomInt(1, 4)}.png`} alt="" />
                  <Typography variant="body1">{country}</Typography>
                </Box>
              );
            })}
          </>
        );
      })}
    </Box>
  );
};

export { LeftPanel };
