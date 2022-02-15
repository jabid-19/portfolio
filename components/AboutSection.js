import React, { useEffect } from "react";
import Image from "next/image";
import { Grid, Box, Typography, LinearProgress } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    transform: "rotate(90deg)",
  },
  textLg: {
    fontSize: "6rem",
    fontWeight: "400",
    marginBottom: "20px",
  },
  stackText: {
    fontSize: "2rem",
  },

  mainText: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    wordSpacing: ".4rem",
    letterSpacing: ".2rem",
    width: "800px",
    color: "#626262",
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}));

const AboutSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const stacks = [
    {
      id: 1,
      source: "./images/about-section/js.webp",
      title: "JavaScript",
    },
    {
      id: 2,
      source: "./images/about-section/react.webp",
      title: "ReactJS",
    },
    {
      id: 3,
      source: "./images/about-section/next-js.webp",
      title: "NextJS",
    },
    {
      id: 4,
      source: "./images/about-section/node.webp",
      title: "NodeJS",
    },
    {
      id: 5,
      source: "./images/about-section/mongo.webp",
      title: "MongoDB",
    },
    {
      id: 6,
      source: "./images/about-section/heroku.webp",
      title: "Heroku",
    },
    {
      id: 7,
      source: "./images/about-section/mui.webp",
      title: "Material Ui",
    },
    {
      id: 8,
      source: "./images/about-section/bootstrap.webp",
      title: "Bootstrap",
    },

    {
      id: 9,
      source: "./images/about-section/figma.webp",
      title: "Figma",
    },
    {
      id: 10,
      source: "./images/about-section/xd.webp",
      title: "XD",
    },
    {
      id: 11,
      source: "./images/about-section/ps.webp",
      title: "Photoshop",
    },
    {
      id: 12,
      source: "./images/about-section/ai.webp",
      title: "illustrator",
    },
    {
      id: 13,
      source: "./images/about-section/html.webp",
      title: "HTML5",
    },
    {
      id: 14,
      source: "./images/about-section/css.webp",
      title: "CSS3",
    },
    {
      id: 15,
      source: "./images/about-section/wordpress.webp",
      title: "Wordpress",
    },
  ];

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
        md={10}
        sm={12}
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          className={classes.textBox}
          data-aos="fade-down-right"
          data-aos-duration="2500"
        >
          {md && (
            <Typography
              data-aos="fade-down-right"
              data-aos-duration="2500"
              variant="h1"
              className={classes.textLg}
            >
              AB<span style={{ color: "#BD7045" }}>O</span>UT ME
            </Typography>
          )}

          <Typography
            data-aos="fade-down-right"
            data-aos-duration="2500"
            className={classes.mainText}
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
          <Box
            data-aos="fade-up-right"
            data-aos-duration="2500"
            sx={{ marginLeft: "50px", marginTop: "50px" }}
          >
            <Box sx={{ width: "250px" }}>
              <Typography className={classes.stackText} variant="h4">
                My stacks
              </Typography>
              <LinearProgress sx={{ margin: "8px 0", width: "170px" }} />
            </Box>

            <Grid
              container
              rowSpacing={5}
              sx={{
                marginTop: "10px",
                color: "#919191",
                maxWidth: "700px",
              }}
            >
              {stacks.map((stack) => (
                <Grid key={stack.id} item md={2} sm={3} xs={3}>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Image
                      priority
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
        data-aos="fade-down-left"
        data-aos-duration="2500"
        item
        md={2}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {!md && (
          <Box>
            <Typography variant="h1" className={classes.text}>
              AB<span style={{ color: "#BD7045" }}>O</span>UT
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default AboutSection;
