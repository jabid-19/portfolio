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
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    scrollSnapAlign: "start",
    paddingTop: "100px",
  },
  childNoSnap: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    paddingTop: "100px",
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
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <FirstSection />
        </Box>
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <AboutSection />
        </Box>
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <ProjectSection />
        </Box>
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <UiSection />
        </Box>
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <UxSection />
        </Box>
        <Box className={!sm ? classes.child : classes.childNoSnap}>
          <Contact />
        </Box>

        {!sm && <Footer />}
      </Box>
    </Container>
  );
}
