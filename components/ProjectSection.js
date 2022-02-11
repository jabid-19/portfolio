import React, { useEffect } from "react";
import Image from "next/image";

import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
  LinearProgress,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    // transform: "rotate(-90deg)",
    // height: "100%",
  },
  uiContainer: {
    //   display: -webkit-box;
    // display: -ms-flexbox;
    display: "flex",
    // -webkit-box-pack: 'center';
    //     -ms-flex-pack: center;
    justifyContent: "center",
    // -webkit-box-align: center;
    //     -ms-flex-align: center;
    alignItems: "start",
    // margin: "0 10px",
    overflow: "hidden",
  },
  uiCard: {
    // -webkit-box-flex: 1;
    // -ms-flex: 1;
    flex: 1,
    margin: "0 5px",
    // -webkit-transition: all 1s ease-in-out;
    transition: "all 1.3s ease-in-out",
    height: "450px",
    position: "relative",
    // margin: "0, 1000px",
    // -webkit-box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    //         box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    // transform: "rotate(0deg) skew(-5deg)",

    "&:hover": {
      flexGrow: "10",

      "& .MuiBox-root": {
        textAlign: "center",
        top: "calc(100% - 2em)",
        color: "white",
        background: "#BD7045",
        opacity: 0.9,
        fontSize: "2rem",
        // -webkit-transform: rotate(0deg) skew(-5deg);
        transform: "rotate(0deg) ",
      },

      "& img": {
        filter: "grayscale(0)",
      },
    },
  },
  cardHead: {
    color: "white",
    background: " #BD7045",
    padding: " 0.5em",
    // -webkit-transform: rotate(-90deg);
    transform: " rotate(-90deg)",
    // -webkit-transform-origin: 0% 0%;
    transformOrigin: "0% 0%",
    // -webkit-transition: all 0.5s ease-in-out;
    transition: "all 0.5s ease-in-out",
    // minWidth: "max-content",
    minWidth: "100%",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: "1.2rem",
    // whiteSpace: "nowrap",
  },
  uiImage: {
    width: "100%",
    height: "100%",
    // -o-object-fit: 'cover',
    objectFit: "cover",
    // -webkit-transition: 'all 1s ease-in-out',
    transition: "all 1s ease-in-out",
    filter: "grayscale(1)",
  },
}));

const ProjectSection = () => {
  const classes = useStyles();

  const projects = [
    {
      id: 1,
      source: "./images/project-section/eucaps.jpg",
      title: "Eucaps",
    },
    {
      id: 2,
      source: "./images/project-section/neovotech.jpg",
      title: "Neovotech",
      margin: {
        marginTop: "100px",
      },
    },
    {
      id: 3,
      source: "./images/project-section/t4t.jpg",
      title: "Tools 4 Trader",
    },
    {
      id: 4,
      source: "./images/project-section/xpillar.jpg",
      title: "Xpillar",
      margin: {
        marginTop: "100px",
      },
    },
    {
      id: 5,
      source: "./images/project-section/bugseen.jpg",
      title: "Bugseen",
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
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box
            data-aos="fade-up"
            data-aos-duration="2500"
            className={classes.uiContainer}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                className={classes.uiCard}
                style={project.margin}
              >
                <img className={classes.uiImage} src={project.source} />
                <Box className={classes.cardHead}>
                  <Typography variant="">{project.title}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            data-aos="fade-up-left"
            data-aos-duration="2500"
          >
            {/* <Box sx={{ width: "735px" }}>
              <Typography variant="h5">
                Some of the projects I have worked on
              </Typography>
              <LinearProgress sx={{ margin: "8px 0", width: "460px" }} />
            </Box> */}
            <Typography variant="h2" className={classes.text}>
              PRO<span style={{ color: "#BD7045" }}>J</span>ECTS
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectSection;
