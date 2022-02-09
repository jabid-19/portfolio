import React from "react";
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

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "8rem",
    fontWeight: "400",
    transform: "rotate(90deg)",
    // height: "100%",
  },
  textLg: {
    fontSize: "8rem",
    fontWeight: "400",
    marginBottom: "20px",

    // transform: "rotate(90deg)",
    // height: "100%",
  },
  textBox: {
    // backgroundColor: "red",
  },
  mainText: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    wordSpacing: ".4rem",
    letterSpacing: ".2rem",
    width: "800px",
    color: "#626262",
    // letterSpacing: ".1rem",
  },
  mainTextLg: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    wordSpacing: ".4rem",
    letterSpacing: ".2rem",
    width: "500px",
    color: "#626262",
    // letterSpacing: ".1rem",
  },
}));

const AboutSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const stacks = [
    {
      source: "./images/about-section/js.svg",
      title: "JavaScript",
    },
    {
      source: "./images/about-section/react.svg",
      title: "ReactJS",
    },
    {
      source: "./images/about-section/next-js.svg",
      title: "NextJS",
    },
    {
      source: "./images/about-section/node.svg",
      title: "NodeJS",
    },
    {
      source: "./images/about-section/mongo.svg",
      title: "MongoDB",
    },
    {
      source: "./images/about-section/heroku.svg",
      title: "Heroku",
    },
    {
      source: "./images/about-section/mui.svg",
      title: "Material Ui",
    },
    {
      source: "./images/about-section/bootstrap.svg",
      title: "Bootstrap",
    },

    {
      source: "./images/about-section/figma.svg",
      title: "Figma",
    },
    {
      source: "./images/about-section/xd.svg",
      title: "XD",
    },
    {
      source: "./images/about-section/ps.svg",
      title: "Photoshop",
    },
    {
      source: "./images/about-section/ai.svg",
      title: "illustrator",
    },
    {
      source: "./images/about-section/html.svg",
      title: "HTML5",
    },
    {
      source: "./images/about-section/css.svg",
      title: "CSS3",
    },
    {
      source: "./images/about-section/wordpress.svg",
      title: "Wordpress",
    },
  ];

  return (
    <Grid
      container
      sx={{
        // height: "100vh",
        color: "white",
      }}
    >
      <Grid
        item
        md={10}
        sm={12}
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box className={classes.textBox}>
          {md && (
            <Typography variant="h1" className={classes.textLg}>
              AB<span style={{ color: "#BD7045" }}>O</span>UT
            </Typography>
          )}

          <Typography
            className={md ? classes.mainTextLg : classes.mainText}
            variant="body1"
          >
            <span
              style={{
                color: "#BD7045",
                fontSize: "3.5rem",
                fontWeight: "normal",
              }}
            >
              Hello!
            </span>{" "}
            I am Jabid Hasan. I have hands-on experience in Web Application
            Development. Along with technology, I am also focused on developing
            my knowledge of business strategy because I want to build products
            that are economically impactful & extensible.
          </Typography>
          <Box sx={{ marginLeft: "100px", marginTop: "50px" }}>
            <Box sx={{ width: "250px" }}>
              <Typography variant="h4">My stacks</Typography>
              <LinearProgress sx={{ margin: "8px 0", width: "170px" }} />
            </Box>

            <Grid
              container
              rowSpacing={5}
              // spacing={1}
              sx={{
                marginTop: "10px",
                color: "#919191",
                maxWidth: "700px",

                // border: "1px solid #BD7045",
              }}
            >
              {stacks.map((stack) => (
                <Grid
                  item
                  md={2}
                  sm={3}
                  xs={3}
                  sx={
                    {
                      // border: "1px solid #BD7045",
                    }
                  }
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      // padding: "10px 2px",
                    }}
                  >
                    <Image
                      loader={imageLoader}
                      src={stack.source}
                      width={"26"}
                      height={"26"}
                    />
                    <Typography variant="body2">{stack.title}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        {!md && (
          <Typography variant="h1" className={classes.text}>
            AB<span style={{ color: "#BD7045" }}>O</span>UT
          </Typography>
        )}

        {/* <Typography variant="h1" className={classes.text}>
          AB<span style={{ color: "#BD7045" }}>O</span>UT
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default AboutSection;
