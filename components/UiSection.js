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
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import imageLoader from "../helper/imageLoader";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "6rem",
    fontWeight: "400",
    color: "white",
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: "600",
    wordSpacing: ".8rem",
    letterSpacing: ".25rem",
    color: "#626262",
  },
  image: {
    cursor: "pointer",
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(0.97)",
      transition: "all 1700ms cubic-bezier(0.19, 1, 0.22, 1)",
    },
  },
}));

const itemData = [
  {
    img: "/images/ui-section/vmobile.png",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/ui-section/gym.png",
    title: "Burger",
    // rows: 2,
    cols: 2,
  },
  {
    img: "/images/ui-section/cox.png",
    title: "Camera",
    rows: 2,
  },
  {
    img: "/images/ui-section/barber.png",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "/images/ui-section/bigmen.png",
    title: "Hats",
    cols: 2,
  },
  {
    img: "/images/ui-section/limo.png",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/ui-section/toy.png",
    title: "Fern",
  },
  {
    img: "/images/ui-section/grove.png",
    title: "Basketball",
  },
  {
    img: "/images/ui-section/ridin.png",
    title: "Fern",
  },
  {
    img: "/images/ui-section/foodon.png",
    title: "Fern",
  },
  {
    img: "/images/ui-section/fitbit.png",
    title: "Fern",
    cols: 2,
  },
  {
    img: "/images/ui-section/social.png",
    title: "Fern",
  },
  {
    img: "/images/ui-section/triyoga.png",
    title: "Fern",
    cols: 2,
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

const UiSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
    // sx={{ height: "90vh" }}
    >
      <Grid container spacing={md ? 1 : 10}>
        <Grid
          item
          sm={12}
          md={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box display="flex" flexDirection="column" alignItems="start">
            <Typography textAlign="right" variant="h2" className={classes.text}>
              UI
            </Typography>

            <Typography variant="h2" className={classes.text}>
              <span style={{ color: "#BD7045" }}> D</span>ESIGNS
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={8}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ImageList
            sx={{ width: "100%", height: "60%" }}
            variant="quilted"
            cols={5}
            rowHeight="auto"
            gap={10}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                className={classes.image}
              >
                <img
                  // className={classes.image}
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>

    // <Box sx={{ height: "100vh" }} display="flex" alignItems="center">
    //   <Box display="flex" alignItems="center" sx={{ marginRight: "10px" }}>
    //     <Typography variant="h2" className={classes.text}>
    //       UI<span style={{ color: "#7f2a0b" }}> D</span>ESIGNS
    //     </Typography>
    //   </Box>

    //   <ImageList
    //     sx={{ width: "100%", height: "60%" }}
    //     variant="quilted"
    //     cols={5}
    //     rowHeight="auto"
    //     gap={10}
    //   >
    //     {itemData.map((item) => (
    //       <ImageListItem
    //         key={item.img}
    //         cols={item.cols || 1}
    //         rows={item.rows || 1}
    //       >
    //         <img
    //           {...srcset(item.img, 121, item.rows, item.cols)}
    //           alt={item.title}
    //           loading="lazy"
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </Box>
  );
};

export default UiSection;
