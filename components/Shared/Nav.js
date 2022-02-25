import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, AppBar, Box, Button } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    // minHeight: "250px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    // backdropFilter: "blur(60px)",
    // paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      minHeight: "92px",
    },
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  logoSection: {
    marginLeft: "35px",
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    minHeight: "120px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    backdropFilter: "blur(60px)",
    border: "3px solid #ca8c6a",
    borderStyle: "none none solid solid",
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      // alignItems: "center",
      minHeight: "50px",
    },
  },
  logo: {
    cursor: "pointer",
  },
  links: {
    minHeight: "100px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    backdropFilter: "blur(60px)",
    padding: "20px",
    width: "720px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    // [theme.breakpoints.down('md')]: {
    //   width: '60%',
    //   flex: '2',
    // },
  },

  linksButton: {
    // minWidth: "100px",
    // my: 2,
    color: "white",
    fontSize: "16px",
    textTransform: "none",
    // transition: "all 1.5s ease-in-out",

    "&:hover": {
      color: "#ca8c6a",
      // transform: "scale(2.1)",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: "2rem",
    },
  },
}));

const Nav = ({}) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  // AOS initialization
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      <AppBar className={classes.appBar} position="fixed" elevation={0}>
        <Container className={classes.navContainer} maxWidth={false}>
          <Box className={classes.logoSection}>
            <Box
              className={classes.logoBox}
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <Link to="landing" smooth={true} offset={-200} duration={50}>
                <Image
                  // priority
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                  loader={imageLoader}
                  src={"./logo.png"}
                  // alt="Logo of Neovotech"
                  width={!sm ? "65" : "47"}
                  height={!sm ? "90" : "65"}
                  className={classes.logo}
                  // onClick={scrollToTop}
                />
              </Link>
            </Box>
          </Box>

          <Box className={classes.links}>
            <Link to="about" smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
                // onClick={scrollToServices}
              >
                {"about me"}
              </Button>
            </Link>
            <Link to="projects" smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
                // onClick={scrollToBanner}
              >
                {"projects"}
              </Button>
            </Link>
            <Link to="ui" offset={150} smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
                // onClick={scrollToVision}
              >
                {"ui designs"}
              </Button>
            </Link>
            <Link to="ux" smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
                // onClick={scrollToComponent()}
              >
                {"ux designs"}
              </Button>
            </Link>
            <Link to="experiences" smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
                // onClick={scrollToComponent()}
              >
                {"experiences"}
              </Button>
            </Link>

            <Link to="contact" smooth={true} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                color="primary"
              >
                {"contact"}
              </Button>
            </Link>
          </Box>

          {/* Mobile View */}
          {/* <Box className={classes.mobileMenu}>
            <IconButton
              // aria-controls="fade-menu"
              // aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" className={classes.menuIcon} />
            </IconButton>
            <Sidebar
              open={open}
              handleClose={handleClose}
              scrollToServices={scrollToServices}
              scrollToVision={scrollToVision}
              scrollToBanner={scrollToBanner}
            />
          </Box> */}
          {/* End Mobile View */}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Nav;
