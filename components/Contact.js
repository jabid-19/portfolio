import React, { useState, useEffect, useRef } from "react";
import { Block } from "@mui/icons-material";
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { createStyles, makeStyles, withStyles } from "@mui/styles";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import emailjs from "@emailjs/browser";
// import CustomAlert from "../Elements/Alert";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    // background: "#1D1A27",
    border: "5px solid #626262",
    // borderStyle: "solid solid none solid",
    // borderRadius: "30px",
    boxShadow: "#626262",
    // margin: "0 20px",
    maxHeight: "580px",
    width: "100%",
    backdropFilter: "blur(100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "left",
      // paddingBottom: '50px',
    },
  },
  newsletterTitle: {
    // fontWeight: "bold",
    fontSize: "2rem",
    lineHeight: "55px",
    marginBottom: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      marginTop: "20px",
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "2rem",
      marginLeft: "0px",
    },
  },
  newsletterSubTitle: {
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "33px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
      textAlign: "center",
      lineHeight: "25px",
    },
  },
  subBox: {
    width: "70%",
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    // fontFamily: 'Verdana',
    fontStyle: "normal",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px",
    },
  },
  rightElements: {
    margin: "13px 0px",
    border: "1px solid #BD7045",
    [theme.breakpoints.down("md")]: {
      margin: "0",
      width: "90%",
      marginLeft: "20px",
      marginBottom: "20px",
    },
    // [theme.breakpoints.only('xs')]: {
    //   width: '80%',
    // },
  },
}));

const Contact = () => {
  const classes = useStyle();
  const WhiteTextField = withStyles({
    root: {
      "& ..MuiInputLabel": {
        color: "#fff", // Text color
      },
      "& .MuiInputBase-input": {
        color: "#fff", // Text color
      },
      "& .MuiInput-underline": {
        borderBottom: "1px solid #BD7045",
      },
      "&:after": {
        borderBottom: "2px solid #BD7045",
        // borderBottom: `2px solid ${theme.palette.secondary.main}`
      },
      // '&:hover:not($disabled):not($focused):not($error):before': {
      //   borderBottom: '2px solid rgba(255, 91, 202, 1)',
      // },
    },
  })(TextField);

  // AOS initialization
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // Email functionality
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/newsletterEmailCredentials`);
    const data = await res.json();

    emailjs
      .sendForm(data.SERVICE_ID, data.TEMPLATE_ID, form.current, data.USER_ID)
      .then(
        (result) => {
          setSeverity("success");
          setPopupError(true);
          setErrorMessage("You have subscribed successfully");
        },
        (error) => {
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
      {/* <Container data-aos="fade-up" data-aos-duration="900"> */}
      <Box className={classes.mainBox}>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={classes.subBox}
          sx={{ alignItems: "center", width: "30%" }}
        >
          {/* <Typography
            variant="h4"
            color="#FFFFFF80"
            // className={classes.newsletterSubTitle}
          >
            My CV
          </Typography> */}
          <Box display="flex" justifyContent="start">
            <IconButton
              color="primary"
              sx={{
                border: "1px solid #BD7045",
                color: "#BD7045",
                width: "200px",
                height: "200px",
                // marginTop: "10px",
                boxShadow: "0 0 0 #BD7045",
                animation: "pulse 2s infinite",
                "& :hover": {
                  transition: "all 1700ms cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: "scale(1.2)",
                  // backgroundColor: "#BD7045",
                },
              }}
            >
              <Typography
                variant="h4"
                // className={classes.newsletterSubTitle}
              >
                My CV
              </Typography>

              {/* <DownloadIcon fontSize="large" /> */}
            </IconButton>
          </Box>
        </Box>
        <Box className={classes.subBox}>
          <Typography
            variant="h6"
            color="#626262"
            className={classes.newsletterTitle}
          >
            I would love to hear from you.
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              required
              fullWidth
              variant="filled"
              label="Name"
              name="name"
              className={classes.rightElements}
              InputLabelProps={{
                style: { color: "#f9f2f9" },
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
                style: { color: "#f9f2f9" },
              }}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              variant="filled"
              label="Message"
              name="email"
              className={classes.rightElements}
              InputLabelProps={{
                style: { color: "#f9f2f9" },
              }}
            />

            <Box display="flex" justifyContent="center">
              <Button variant="outlined" size="large" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      {/* </Container> */}
      {/* <CustomAlert
        open={popupError}
        severity={severity}
        msg={errorMessage}
        close={setPopupError}
      /> */}
    </>
  );
};

export default Contact;
