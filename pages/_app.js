import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import Head from  'next/head';

import ErrorBoundary from "../services/errorBoundery";
import { customTheme } from "../layout/theme";
import { storeWrapper } from "../store/index";
import "../styles/globals.css";
import "../store/inceptors";

const theme = createTheme(customTheme);
function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <ThemeProvider theme={theme}>
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Work+Sans%3A100%2C200%2C300%2Cregular%2C500%2C600%2C700%2C800%2C900%7CPoppins%3A300%2Cregular%2C500%2C600%2C700%2C900&amp;subset"
          />
        </Head>
          <Provider store={store}>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
