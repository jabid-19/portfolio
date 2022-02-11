import { Container, Box, LinearProgress } from "@mui/material";
import Nav from "../components/Shared/Nav";

import FirstSection from "../components/FirstSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import UiSection from "../components/UiSection";
import UxSection from "../components/UxSection";
import Contact from "../components/Contact";
import Footer from "../components/Shared/Footer";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: "100px",
  },
  child: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    scrollSnapAlign: "start",
    paddingTop: "100px",
    // marginTop: "120px",
    // marginBottom: "100px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Nav />

      <Box>
        <Box className={classes.child}>
          <FirstSection />
        </Box>
        <Box className={classes.child}>
          <AboutSection />
        </Box>
        <Box className={classes.child}>
          <ProjectSection />
        </Box>
        <Box className={classes.child}>
          <UiSection />
        </Box>
        <Box className={classes.child}>
          <UxSection />
        </Box>
        <Box className={classes.child}>
          <Contact />
        </Box>
        <Footer />
      </Box>
    </Container>
  );
}
