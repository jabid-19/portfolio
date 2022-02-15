import React from "react";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, LinearProgress } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../theme/createEmotionCache";
import theme from "../theme/theme";
import LoadingPulse from "../components/Elements/LoadingPulse";
import CircleLoader from "react-spinners/CircleLoader";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Jabid Hasan</title>
        <link rel="shortcut icon" href="./favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {loading ? (
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleLoader loading={loading} color="#BD7045" size={100} />

            {/* <PuffLoader loading={loading} color="#c84da7" size={200} /> */}

            {/* <LinearProgress sx={{ width: "100%" }} />
            <LinearProgress sx={{ width: "100%" }} />
            <LinearProgress sx={{ width: "100%" }} /> */}
            <LoadingPulse />
          </Box>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
