import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, AppBar, Box, IconButton, Button, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { makeStyles } from "@mui/styles";
import imageLoader from "../../helper/imageLoader";
import Sidebar from "./Sidebar";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "flex-end",
    minHeight: "110px",
    backgroundColor: "rgba(24, 22, 32, 0)",
    backdropFilter: "blur(60px)",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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
    width: "600px",
    display: "flex",
    flexDirection: "row",
    // flex: "2",
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
    minWidth: "100px",
    my: 2,
    color: "white",
    fontSize: "16px",

    textTransform: "lowercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },
  chatSection: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
  },
  btnBorder: {
    position: "relative",
    background: "linear-gradient(to left, #FF5BCA, #7353E5)",
    borderRadius: "50px",
    padding: "1px",
    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  chatBtn: {
    minWidth: "200px",
    color: "#ffffff",
    textTransform: "capitalize",
    fontSize: "14.5px",
    padding: "8px 20px",
    borderRadius: "50px",
    background: "rgba(19, 17, 26, 1)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileMenu: {
    display: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  menuIcon: {
    color: "white",
  },
  floatingBtn: {
    display: "none",
    position: "fixed",
    bottom: "50px",
    right: "50px",
    zIndex: "99",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const Nav = ({
  scrollToTop,
  scrollToServices,
  scrollToVision,
  scrollToBanner,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // AOS initialization
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <Box>
      <AppBar className={classes.appBar} position="fixed" elevation={0}>
        <Container className={classes.navContainer} maxWidth="xl">
          <Box className={classes.logoSection}>
            <Link to="landing" smooth={true} offset={-200} duration={50}>
              <Image
                priority
                // data-aos="zoom-in"
                // data-aos-duration="1500"
                loader={imageLoader}
                src={"./logo.png"}
                // alt="Logo of Neovotech"
                width={"65"}
                height={"90"}
                className={classes.logo}
                // onClick={scrollToTop}
              />
            </Link>
          </Box>

          <Box className={classes.links}>
            <Link to="services" smooth={true} offset={-200} duration={50}>
              <Button
                // data-aos="zoom-in"
                // data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToServices}
              >
                About me
              </Button>
            </Link>
            <Link to="reference" smooth={true} offset={-250} duration={50}>
              <Button
                // data-aos="zoom-in"
                // data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToBanner}
              >
                Projects
              </Button>
            </Link>
            <Link to="vision" smooth={true} offset={-100} duration={50}>
              <Button
                // data-aos="zoom-in"
                // data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToVision}
              >
                UI designs
              </Button>
            </Link>
            <Button
              // data-aos="zoom-in"
              // data-aos-duration="1500"
              href="/about-us"
              className={classes.linksButton}
              // onClick={scrollToComponent()}
            >
              UX designs
            </Button>
            <Button
              // data-aos="zoom-in"
              // data-aos-duration="1500"
              href="/about-us"
              className={classes.linksButton}
              // onClick={scrollToComponent()}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile View */}
          <Box className={classes.mobileMenu}>
            <IconButton
              // aria-controls="fade-menu"
              // aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Sidebar
              open={open}
              handleClose={handleClose}
              scrollToServices={scrollToServices}
              scrollToVision={scrollToVision}
              scrollToBanner={scrollToBanner}
            />
          </Box>
          {/* End Mobile View */}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Nav;
