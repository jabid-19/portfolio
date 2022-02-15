import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Grid, Box, Typography, ImageList, ImageListItem } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageLoader from "../helper/imageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

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
    img: "/images/ui-section/vmobile.webp",
    title: "Breakfast",
    rows: 2,
    cols: 2,
    link: "https://www.behance.net/gallery/116545921/V-mobile",
  },
  {
    img: "/images/ui-section/gym.webp",
    title: "Burger",
    cols: 2,
    link: "https://www.behance.net/gallery/132045179/GYM-LANE",
  },
  {
    img: "/images/ui-section/cox.webp",
    title: "Camera",
    rows: 2,
    link: "https://www.behance.net/gallery/96744373/BD-Travel-App",
  },
  {
    img: "/images/ui-section/barber.webp",
    title: "Coffee",
    cols: 2,
    link: "https://www.behance.net/gallery/132045417/The-Barber-Shop",
  },
  {
    img: "/images/ui-section/bigmen.webp",
    title: "Hats",
    cols: 2,
    link: "https://www.behance.net/gallery/132045325/Big-Men",
  },
  {
    img: "/images/ui-section/limo.webp",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    link: "https://www.behance.net/gallery/132045509/LIMO-Music",
  },
  {
    img: "/images/ui-section/toy.webp",
    title: "Fern",
    link: "https://www.behance.net/jabidhasan",
  },
  {
    img: "/images/ui-section/grove.webp",
    title: "Basketball",
    link: "https://www.behance.net/jabidhasan",
  },
  {
    img: "/images/ui-section/ridin.webp",
    title: "Fern",
    link: "https://www.behance.net/gallery/96607277/RideIN",
  },
  {
    img: "/images/ui-section/foodon.webp",
    title: "Fern",
    link: "https://www.behance.net/gallery/96541503/FoodON-Website",
  },
  {
    img: "/images/ui-section/fitbit.webp",
    title: "Fern",
    cols: 2,
    link: "https://www.behance.net/gallery/96541503/FoodON-Website",
  },
  {
    img: "/images/ui-section/social.webp",
    title: "Fern",
    link: "https://www.behance.net/gallery/117634713/Social-landing-page",
  },
  {
    img: "/images/ui-section/triyoga.webp",
    title: "Fern",
    cols: 2,
    link: "https://www.behance.net/gallery/97245037/TriYoga-Website",
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

  const route = useRouter();
  const openLink = (link) => {
    route.push(link);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box>
      <Grid container spacing={md ? 1 : 10}>
        <Grid
          data-aos="fade-up-right"
          data-aos-duration="2500"
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
          data-aos="fade-up-left"
          data-aos-duration="2500"
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
                onClick={() => openLink(item.link)}
              >
                <img
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
  );
};

export default UiSection;
