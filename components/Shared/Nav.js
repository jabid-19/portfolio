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
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "110px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    backdropFilter: "blur(60px)",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      minHeight: "92px",
    },
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoSection: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
  },
  logo: {
    cursor: "pointer",
  },
  links: {
    width: "670px",
    display: "flex",
    flexDirection: "row",
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
    padding: "1",
    textTransform: "none",
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
        <Container className={classes.navContainer} maxWidth="xl">
          <Box className={classes.logoSection}>
            <Link to="landing" smooth={true} offset={-200} duration={50}>
              <Image
                // priority
                data-aos="zoom-in"
                data-aos-duration="1500"
                loader={imageLoader}
                src={"./logo.png"}
                // alt="Logo of Neovotech"
                width={!sm ? "65" : "50"}
                height={!sm ? "90" : "65"}
                className={classes.logo}
                // onClick={scrollToTop}
              />
            </Link>
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
