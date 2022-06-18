import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { createStyles, makeStyles, withStyles } from "@mui/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

// import AOS from "aos";
// import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import CustomAlert from "../components/Elements/Alert";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    border: "5px solid #626262",
    boxShadow: "#626262",
    padding: "20px 0px",
    width: "100%",
    backdropFilter: "blur(100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "left",
    },
  },

  subBox: {
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px",
      margin: "30px 0",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  rightElements: {
    color: "#fff",
    margin: "13px 0px",
    border: "1px solid #fff",
    "& .MuiInputBase-input": {
      color: "#fff", // Text color
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 20px ",
      width: "91%",
      marginBottom: "20px",
    },
  },
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    color: "white",
    // transform: "rotate(-90deg)",
  },
  sendButtonBox: {
    "& .Mui-disabled": {
      color: "#fff ",
      border: "1px solid #fff",
      borderRadius: "0",
    },
  },
  sendButton: {
    margin: "13px 0px",
    textTransform: "none",
    borderRadius: "0",
  },
}));

const Contact = () => {
  const classes = useStyle();

  const [loading, setLoading] = useState(false);

  // AOS initialization
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // Email functionality
  const form = useRef();

  const sendEmail = async (e) => {
    setLoading(true);

    e.preventDefault();

    const res = await fetch(`/api/emailCredentials`);
    const data = await res.json();

    emailjs
      .sendForm(data.SERVICE_ID, data.TEMPLATE_ID, form.current, data.USER_ID)
      .then(
        (result) => {
          setLoading(false);
          setSeverity("success");
          setPopupError(true);
          setErrorMessage("Successfully delivered!");
        },
        (error) => {
          setLoading(false);
          setSeverity("error");
          setPopupError(true);
          setErrorMessage("Something went wrong.");
        }
      );
  };

  // Alert Functionality
  const [popupError, setPopupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [severity, setSeverity] = useState("");

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box data-aos="fade-down-left" data-aos-duration="2500">
          <Typography variant="h2" textAlign="right" className={classes.text}>
            CON<span style={{ color: "#BD7045" }}>T</span>ACT
          </Typography>
        </Box>

        <Box className={classes.mainBox}>
          <Box
            className={classes.subBox}
            sx={{ alignItems: "center", width: "30%" }}
          >
            <Box display="flex" justifyContent="start">
              <Box data-aos="zoom-in" data-aos-duration="2500">
                <IconButton
                  href="https://www.google.com/search?q=butterfly+effect&ref=YWJvdXQ6Ymxhbms="
                  target="_blank"
                  color="primary"
                  sx={{
                    border: "1px solid #BD7045",
                    color: "#BD7045",
                    width: "200px",
                    height: "200px",
                    boxShadow: "0 0 0 #BD7045",
                    animation: "pulse 2s infinite",
                    "& :hover": {
                      transition: "all 1700ms cubic-bezier(0.19, 1, 0.22, 1)",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <Typography variant="h4">Just a fact</Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            className={classes.subBox}
            data-aos="zoom-out"
            data-aos-duration="2500"
          >
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                required
                fullWidth
                variant="filled"
                label="Name"
                name="name"
                className={classes.rightElements}
                InputLabelProps={{
                  style: { color: "#BD7045" },
                }}
              />
              <TextField
                required
                fullWidth
                variant="filled"
                label="Email"
                name="email"
                className={classes.rightElements}
                InputLabelProps={{
                  style: { color: "#BD7045" },
                }}
              />
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                variant="filled"
                label="Message"
                name="message"
                className={classes.rightElements}
                InputLabelProps={{
                  style: { color: "#BD7045" },
                }}
              />

              <Box
                display="flex"
                justifyContent="center"
                className={classes.sendButtonBox}
              >
                <LoadingButton
                  // disabled
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="outlined"
                  size="large"
                  color="primary"
                  type="submit"
                  className={classes.sendButton}
                >
                  Send Queries
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
      <CustomAlert
        open={popupError}
        severity={severity}
        msg={errorMessage}
        close={setPopupError}
      />
    </>
  );
};

export default Contact;
