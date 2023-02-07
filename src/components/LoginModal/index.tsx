import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Typography } from "@mui/material";

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LoginModal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [selectedOption, setSelectedOption] = useState<string>("login");
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Box className={classes.paper}>
          <Box className={classes.leftSection}>
            <Box
              className={classes.closeButtonMovile}
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </Box>
            <Box className={classes.leftSectionOverlay} />
            <Typography variant="h3" className={classes.title}>
              LOREM IPSUM
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Many desktop publishing packages and web page editors now use
            </Typography>
            <Box className={classes.btnContainer}>
              <Box
                className={
                  selectedOption === "login"
                    ? classes.selectionBtnSelected
                    : classes.selectionBtn
                }
                onClick={() => setSelectedOption("login")}
              >
                <Typography variant="body1">Login</Typography>
              </Box>
              <Box
                className={
                  selectedOption === "register"
                    ? classes.selectionBtnSelected
                    : classes.selectionBtn
                }
                onClick={() => setSelectedOption("register")}
              >
                <Typography variant="body1">Register</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightSection}>
            <Box className={classes.closeButton} onClick={() => setOpen(false)}>
              <CloseIcon fontSize="large" />
            </Box>
            <Typography variant="h2">LOGO</Typography>
            <Box className={classes.loginOption}>
              <Box className={classes.opcionImage}>
                <img src="/vector.png" alt="" />
              </Box>
              <Typography variant="body1" className={classes.optionText}>
                Ingresar con...
              </Typography>
            </Box>
            <Box className={classes.loginOption}>
              <Box className={classes.opcionImage}>
                <img src="/vector.png" alt="" />
              </Box>
              <Typography variant="body1" className={classes.optionText}>
                Ingresar con...
              </Typography>
            </Box>
            <form className={classes.form}>
              <TextField
                className={classes.textField}
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                className={classes.textField}
                label="Password"
                type="password"
                fullWidth
              />
              <Button
                fullWidth
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
            <Typography variant="body1">
              ¿desktop publishing packages?
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export { LoginModal };
