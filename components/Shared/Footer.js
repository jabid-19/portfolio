import React, { useEffect } from "react";
import Link from "next/link";
import { Container, AppBar, Box, IconButton, Button, Fab } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import MailIcon from "@mui/icons-material/Mail";
// import AOS from "aos";
// import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "flex-end",
    minHeight: "60px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    // backgroundColor: "#040404",
    // backdropFilter: "blur(60px)",
    // borderTop: "2px solid #7f2a0b",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  iconSection: {
    height: "60px",
    width: "270px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#626262",
    backdropFilter: "blur(20px)",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <AppBar
      // data-aos="fade-up"
      // data-aos-duration="2500"
      className={classes.appBar}
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
      elevation={0}
    >
      <Container
        sx={{ display: "flex", justifyContent: "start" }}
        maxWidth="xl"
      >
        <Box className={classes.iconSection}>
          <a
            className={classes.socialIcon}
            href="https://www.linkedin.com/in/jabid-hasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize={sm ? "large" : "medium"} />
          </a>
          <a
            className={classes.socialIcon}
            href="https://github.com/jabid-19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize={sm ? "large" : "medium"} />
          </a>
          <a
            className={classes.socialIcon}
            href="https://www.behance.net/jabidhasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormatBoldIcon fontSize={sm ? "large" : "medium"} />
          </a>
          <a
            className={classes.socialIcon}
            href="https://twitter.com/Jabid_19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon fontSize={sm ? "large" : "medium"} />
          </a>

          <a
            className={classes.socialIcon}
            href="https://www.facebook.com/jabid19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize={sm ? "large" : "medium"} />
          </a>

          <a
            className={classes.socialIcon}
            href="mailto:jabidhasan19@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon fontSize={sm ? "large" : "medium"} />
          </a>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
