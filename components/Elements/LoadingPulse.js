import React from "react";
import { Box, CardActionArea, CardActions } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: "Berkshire Swash",
    fontFamily: "Roboto",
    fontSize: "150px",
    fontWeight: "400",
    color: "white",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "2px solid #BD7045",
    color: "#BD7045",
    boxShadow: "0 0 0 #BD7045",
    animation: "pulse 2s infinite",
  },
}));

const LoadingPulse = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box sx={{ marginBottom: "0px" }}>19</Box>
    </Box>
  );
};

export default LoadingPulse;
