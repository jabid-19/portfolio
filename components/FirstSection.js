import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
  LinearProgress,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "8.5rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7.2rem",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    wordSpacing: ".8rem",
    letterSpacing: ".25rem",
    color: "#BD7045",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  imageGrid: {
    display: "flex",
    justifyContent: "start",
    alignItems: "end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
      alignItems: "start",
    },
  },

  textGrid: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "end",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "end",
    },
  },
}));

const FirstSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Grid
      container
      sx={{
        color: "white",
      }}
    >
      <Grid
        data-aos="fade-up-right"
        data-aos-duration="2500"
        item
        md={6}
        sm={12}
        xs={12}
        className={classes.imageGrid}
      >
        <Image
          priority
          loader={imageLoader}
          src={"./images/landing-section/avatar.webp"}
          width={sm ? "295" : "590"}
          height={sm ? "410" : "800"}
        />
      </Grid>
      <Grid
        data-aos="fade-down-left"
        data-aos-duration="2500"
        item
        md={6}
        sm={12}
        xs={12}
        className={classes.textGrid}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Typography className={classes.text} variant="h1">
            <span style={{ color: "#BD7045" }}>{""}</span>JAB
            <span style={{ color: "#BD7045" }}>I</span>D
          </Typography>
          <Typography className={classes.text} variant="h1">
            HA<span style={{ color: "#BD7045" }}>S</span>AN
          </Typography>
          <Box>
            <Typography variant="body1" className={classes.title}>
              A FRONT-END ENGINEER
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "10px",
                left: "0",
                marginTop: "8px",
              }}
            >
              <LinearProgress color="secondary" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
