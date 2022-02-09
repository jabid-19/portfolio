import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  LinearProgress,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import imageLoader from "../helper/imageLoader";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    color: "white",
  },
  cardGrid: {
    width: "100%",
    // backgroundColor: "red",
    "& :hover": {
      "& img": {
        transform: "scale(0.9)",
        transition: "all 0.5s ease-in-out",
      },
    },
  },

  card: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
];

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

  return (
    <Box
      // sx={{ height: "90vh" }}
      display="flex"
      alignItems="center"
    >
      <Grid container spacing={3}>
        {sm && (
          <Grid item md={6}>
            <Box
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
            className={classes.card}
            sx={{
              backgroundColor: "#626262",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="./images/ux-section/xhopy.jpg"
                alt="green iguana"
              />
              {/* <CardContent sx={{ backgroundColor: "#626262", color: "#fff" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Xhopy
                </Typography>
                <Typography variant="body2">
                  UI & UX design for an E-commerce website using Figma.
                </Typography>
              </CardContent> */}
            </CardActionArea>
          </Card>
        </Grid>
        {!sm && (
          <Grid item md={6}>
            <Box
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
            className={classes.card}
            sx={{
              backgroundColor: "#77636e",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="./images/project-section/bugseen.jpg"
                alt="green iguana"
              />
              {/* <CardContent sx={{ backgroundColor: "#77636e", color: "#fff" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Bugseen
                </Typography>
                <Typography variant="body2">
                  UI & UX design for Bugseen Technologics using Figma.
                </Typography>
              </CardContent> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          className={classes.cardGrid}
          item
          sm={6}
          // sm={12}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Card
            className={classes.card}
            sx={{
              backgroundColor: "#f6b28a",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="./images/ux-section/jenni.jpg"
                alt="green iguana"
              />
              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jenni Kayne
                </Typography>
                <Typography variant="body2">
                  UI/UX design of an E-commerce mobile app using Figma.
                </Typography>
              </CardContent> */}
            </CardActionArea>
            {/* <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UxSection;
