import React, { useEffect } from "react";
import Image from "next/image";
import { Grid, Box, Typography, LinearProgress } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import avatar from "../public/images/landing-section/avatar.webp";

const float = (theme) => ({
  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.6)",
      transform: " translatey(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0, 0, 0, 0.2)",
      /* transform: translatex(40px); */
      transform: "scale(1.1)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.6)",
      transform: "translatey(0px)",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "8.5rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6.3rem",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    wordSpacing: ".8rem",
    letterSpacing: ".25rem",
    color: "#BD7045",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  imageGrid: {
    // overflow: "visible",
    position: "relative",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    // animation: "$float 6s ease-in-out infinite",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
      alignItems: "center",
      paddingTop: "23px",
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

  sphere: {
    animation: "$float 4s ease-in-out infinite",
  },

  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.6)",
      transform: " translatey(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0, 0, 0, 0.2)",
      /* transform: translatex(40px); */
      transform: "scale(1.3)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.6)",
      transform: "translatey(0px)",
    },
  },
}));

const FirstSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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
        item
        md={6}
        sm={12}
        xs={12}
        className={classes.imageGrid}
        // className="avatar"
        // sx={{ backgroundColor: "red" }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="2500"
          className={classes.sphere}
          sx={{
            position: "absolute",
            top: "40px",
            left: "10px",
            backgroundColor: "rgba(189, 112, 69, 0.8)",
            filter: "blur(70.053px)",
            height: "50%",
            width: "50%",
            borderRadius: "50%",
          }}
        ></Box>
        <Image
          data-aos="zoom-out"
          data-aos-duration="2500"
          eager="true"
          loader={imageLoader}
          src={avatar}
          width={sm ? "270" : "520"}
          height={sm ? "400" : "760"}
          // placeholder="blur"
          // layout="intrinsic"
        />
      </Grid>
      <Grid
        // data-aos="fade-down-left"
        // data-aos-duration="2500"
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
