import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container, AppBar, Box, IconButton, Button, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../../helper/imageLoader";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    width: "250px",
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

  return (
    <AppBar
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
          <Link href="#">
            <a className={classes.socialIcon}>
              <LinkedInIcon fontSize={sm ? "large" : "medium"} />
            </a>
          </Link>
          <Link href="#">
            <a className={classes.socialIcon}>
              <FormatBoldIcon fontSize={sm ? "large" : "medium"} />
            </a>
          </Link>
          <Link href="#">
            <a className={classes.socialIcon}>
              <TwitterIcon fontSize={sm ? "large" : "medium"} />
            </a>
          </Link>
          <Link href="#">
            <a className={classes.socialIcon}>
              <FacebookIcon fontSize={sm ? "large" : "medium"} />
            </a>
          </Link>
          <Link href="#">
            <a className={classes.socialIcon}>
              <InstagramIcon fontSize={sm ? "large" : "medium"} />
            </a>
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
