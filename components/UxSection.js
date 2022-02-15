import React, { useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    color: "white",
  },
  cardGrid: {
    width: "100%",
  },

  card: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& :hover": {
      transform: "scale(1.05)",
      transition: "all 0.5s ease-in-out",
    },
  },
}));

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const UxSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box display="flex" alignItems="center">
      <Grid container spacing={3}>
        {sm && (
          <Grid item sm={12}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="h2" className={classes.text}>
                UX
              </Typography>

              <Typography variant="h2" className={classes.text}>
                <span style={{ color: "#BD7045" }}> D</span>ESIGNS
              </Typography>
            </Box>
          </Grid>
        )}

        <Grid
          className={classes.cardGrid}
          item
          sm={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Card
            data-aos="fade-down-right"
            data-aos-duration="2500"
            className={classes.card}
            sx={{
              backgroundColor: "#626262",
            }}
          >
            <CardActionArea
              href="https://www.figma.com/proto/8TvYhBORrmlWvw1dfpbm4C/Xhopy?node-id=0%3A1"
              target="_blank"
            >
              <CardMedia
                component="img"
                height="300"
                image="./images/ux-section/xhopy.webp"
                alt="xhopy"
              />
            </CardActionArea>
          </Card>
        </Grid>
        {!sm && (
          <Grid item md={6}>
            <Box
              data-aos="fade-down-left"
              data-aos-duration="2500"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Typography variant="h2" className={classes.text}>
                UX
              </Typography>

              <Typography variant="h2" className={classes.text}>
                <span style={{ color: "#BD7045" }}> D</span>ESIGNS
              </Typography>
            </Box>
          </Grid>
        )}
        <Grid
          className={classes.cardGrid}
          item
          sm={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Card
            data-aos="fade-up-right"
            data-aos-duration="2500"
            className={classes.card}
            sx={{
              backgroundColor: "#77636e",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <CardActionArea
              href="https://www.figma.com/proto/PZDJfOflAEXUrfApab59c2/Bugseen?page-id=0%3A1&node-id=2%3A2&starting-point-node-id=2%3A2"
              target="_blank"
            >
              <CardMedia
                component="img"
                height="300"
                image="./images/project-section/bugseen.webp"
                alt="bugseen"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          className={classes.cardGrid}
          item
          sm={6}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Card
            data-aos="fade-up-left"
            data-aos-duration="3000"
            className={classes.card}
            sx={{
              backgroundColor: "#f6b28a",
            }}
          >
            <CardActionArea
              href="https://www.figma.com/proto/Tlt2tREJY11CCclN3Y9far/Mobile-eco?page-id=0%3A1&node-id=4%3A154&starting-point-node-id=4%3A154"
              target="_blank"
            >
              <CardMedia
                component="img"
                height="300"
                image="./images/ux-section/jenni.webp"
                alt="jenni"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UxSection;
