import { Container, Box, LinearProgress } from "@mui/material";
import Nav from "../components/Shared/Nav";

import FirstSection from "../components/FirstSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import UiSection from "../components/UiSection";
import UxSection from "../components/UxSection";
import Contact from "../components/Contact";
import Footer from "../components/Shared/Footer";

import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: "100px",
  },
  child: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    scrollSnapAlign: "start",
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "start",
      paddingTop: "70px",
      scrollSnapAlign: "none",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Nav />

      <Box>
        <Box id="landing" className={classes.child}>
          <FirstSection />
        </Box>
        <Box id="about" className={classes.child}>
          <AboutSection />
        </Box>
        <Box id="projects" className={classes.child}>
          <ProjectSection />
        </Box>
        <Box id="ui" className={classes.child}>
          <UiSection />
        </Box>
        <Box id="ux" className={classes.child}>
          <UxSection />
        </Box>
        <Box id="contact" className={classes.child}>
          <Contact />
        </Box>

        {/* {!sm && */}
        <Footer />
        {/* } */}
      </Box>
    </Container>
  );
}
