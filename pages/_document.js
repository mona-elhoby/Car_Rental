import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

class Documnet extends React.Component {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Work+Sans%3A100%2C200%2C300%2Cregular%2C500%2C600%2C700%2C800%2C900%7CPoppins%3A300%2Cregular%2C500%2C600%2C700%2C900&amp;subset"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.quilljs.com/1.3.7/quill.bubble.css"
          ></link>
          <Script src="https://cdn.quilljs.com/1.3.7/quill.js"></Script>
          <Script src="https://cdn.jsdelivr.net/gh/T-vK/DynamicQuillTools@master/DynamicQuillTools.js"></Script>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.quilljs.com/1.3.7/quill.snow.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Documnet;
