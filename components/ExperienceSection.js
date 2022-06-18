import React, { useEffect } from "react";
import { Grid, Box, Typography, LinearProgress, Tooltip } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "4rem",
    fontWeight: "400",
    // transform: "rotate(-90deg)",
    color: "#fff",
    textAlign: "center",
    marginBottom: "50px",
  },

  logo: {
    margin: "100px, 0",
  },
  stackText: {
    color: "#fff",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.7rem",
    },
  },
}));

const experienceData = [
  {
    img: "/images/experience-section/eucaps.webp",
    title: "Front-End Engineer",
    since: "June 2021 - Present",
    width: 210,
    height: 50,
  },
  {
    img: "/images/experience-section/netcoden.webp",
    title: "Intern at Tect Department",
    since: "September 2020 - November 2020",
    width: 190,
    height: 80,
  },
  {
    img: "/images/experience-section/ipa.webp",
    title: "Research Collaborator",
    since: "August 2018",
    width: 210,
    height: 75,
  },
  {
    img: "/images/experience-section/lict.webp",
    title: "Top-Up IT Training",
    since: "Credential ID: G046245",
    width: 230,
    height: 90,
  },
  {
    img: "/images/experience-section/ict.webp",
    title: "Idea Workshop for Mobile Apps Development",
    since: "Issued May 2017",
    width: 250,
    height: 95,
  },
];

const ExperienceSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Grid container>
      <Grid
        // data-aos="fade-up-left"
        // data-aos-duration="2500"
        item
        sm={12}
        md={12}
      >
        <Box>
          <Typography
            data-aos="zoom-in"
            data-aos-duration="1500"
            variant="h4"
            className={classes.text}
          >
            EXPE<span style={{ color: "#BD7045" }}>R</span>IENCES{" "}
            <span style={{ color: "#BD7045" }}>&</span> CERTIFICATI
            <span style={{ color: "#BD7045" }}>O</span>NS
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {experienceData.map((item, index) => (
              <Box
                key={index}
                data-aos="zoom-in"
                data-aos-duration="2500"
                sx={{
                  padding: "20px 0",
                  minWidth: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flex: "0 0 33.333333333%",
                  border: "2px solid #BD7045",
                }}
              >
                <Box
                  sx={{
                    // height: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* <Tooltip
                    title={
                      <>
                        <Typography variant="body2" className={classes.text}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                          {item.since}
                        </Typography>
                      </>
                    }
                  > */}
                  <Image
                    data-aos="zoom-out"
                    data-aos-duration="2500"
                    loader={imageLoader}
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    className={classes.logo}
                  />
                  {/* </Tooltip> */}
                </Box>

                <Box
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ color: "#fff", marginTop: "20px" }}
                >
                  <Typography textAlign="center" variant="body1">
                    {item.title}
                  </Typography>
                  <Typography
                    textAlign="center"
                    variant="body2"
                    sx={{ fontStyle: "italic" }}
                  >
                    {item.since}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
