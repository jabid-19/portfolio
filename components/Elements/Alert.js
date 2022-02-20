import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  alert: {
    fontSize: "0.85rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5.85rem",
    },
  },
}));

// function SnackbarAlert(props) {
//   return <Alert elevation={6} variant="filled" {...props} />
// }

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomAlert = ({ open, severity, msg, close }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    close(false);
  };

  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        className={classes.alert}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
