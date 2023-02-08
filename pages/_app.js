import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import darkTheme from "../styles/theme/darkTheme";
import AppbarComp from "../components/AppbarComp";
import Contact from "../components/Contact";
import LoadingComp from "../components/LoadingComp";
import { Router } from "next/router";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener("loadstart", startLoading);
    window.addEventListener("load", stopLoading);
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      window.removeEventListener("loadstart", startLoading);
      window.removeEventListener("load", stopLoading);
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {<LoadingComp />}
        {!loading && <AppbarComp />}
        {!loading && <Component {...pageProps} />}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
