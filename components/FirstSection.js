import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
  LinearProgress,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import imageLoader from "../helper/imageLoader";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "8.5rem",
    fontWeight: "400",
    // color: "#000",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    wordSpacing: ".8rem",
    letterSpacing: ".25rem",
    color: "#BD7045",
  },
}));

const FirstSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        // height: "100vh",
        color: "white",
        // backgroundColor: "red",
      }}
    >
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        sx={
          md
            ? {
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
              }
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red",
              }
        }
      >
        <Image
          loader={imageLoader}
          src={"./images/landing-section/avatar.png"}
          width={md ? "450" : "590"}
          height={md ? "620" : "800"}
        />
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        sx={
          md
            ? {
                display: "flex",
                justifyContent: "end",
                alignItems: "start",
              }
            : {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#fff",
              }
        }
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Typography className={classes.text} variant="h1">
            <span style={{ color: "#BD7045" }}>{""}</span>JAB
            <span style={{ color: "#BD7045" }}>I</span>D
          </Typography>
          <Typography className={classes.text} variant="h1">
            HA<span style={{ color: "#BD7045" }}>S</span>AN
          </Typography>
          <Box
          // sx={{
          //   backgroundColor: "white",
          // }}
          >
            <Typography variant="body1" className={classes.title}>
              A FRONT-END ENGINEER
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "10px",
                left: "0",
                marginTop: "8px",
              }}
            >
              <LinearProgress color="secondary" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
