import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
  },
  projectContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    overflow: "hidden",
  },
  projectCard: {
    flex: 1,
    margin: "0 5px",
    transition: "all 1.3s ease-in-out",
    height: "450px",
    position: "relative",
    // boxShadow:
    //   "12px 12px 50px 0 rgba(189,112,69,.25), 0px 0px 12px -40px rgba(255, 255, 255, 0.3)",
    // transform: "rotate(0deg) skew(-5deg)",

    "&:hover": {
      flexGrow: "10",
      "& .MuiBox-root": {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        top: "calc(100% - 2em)",
        color: "white",
        background: "#  ",
        opacity: 0.9,
        fontSize: "2rem",
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
    transform: " rotate(-90deg)",
    transformOrigin: "0% 0%",
    transition: "all 0.5s ease-in-out",
    minWidth: "max-content",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: "1.2rem",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 1s ease-in-out",
    filter: "grayscale(1)",
  },
}));

const ProjectSection = () => {
  const classes = useStyles();

  const projects = [
    {
      id: 1,
      source: "./images/project-section/eucaps.webp",
      title: "Eucaps",
      link: "https://www.eucaps.com/",
    },
    {
      id: 2,
      source: "./images/project-section/neovotech.png",
      title: "Neovotech",
      margin: {
        marginTop: "100px",
      },
      link: "https://www.neovotech.com/",
    },
    {
      id: 3,
      source: "./images/project-section/t4t.webp",
      title: "Tools 4 Trader",
      link: "https://tools4trader.com/",
    },
    {
      id: 4,
      source: "./images/project-section/xpillar.webp",
      title: "Xpillar",
      margin: {
        marginTop: "100px",
      },
      link: "https://www.xpillarengineering.com/",
    },
    {
      id: 5,
      source: "./images/project-section/bugseen.webp",
      title: "Bugseen",
      link: "http://bugseen.com/",
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
            className={classes.projectContainer}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                className={classes.projectCard}
                style={project.margin}
              >
                <img
                  className={classes.projectImage}
                  src={project.source}
                  alt={project.title}
                />
                <Box className={classes.cardHead}>
                  <Typography variant="">{project.title}</Typography>
                  <Button
                    href={project.link}
                    target="_blank"
                    color="secondary"
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ marginLeft: "10px", marginTop: "5px" }}
                  >
                    visit
                  </Button>
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
