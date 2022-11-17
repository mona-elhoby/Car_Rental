import * as React from "react";

import TopBar from "../features/topBar";
import Navbar from "../features/navbar";
import Footer from "../features/footer";

const Layout = (props) => {
  return (
    <>
      <TopBar />
      <Navbar />
      {props.children}

      <Footer />
    </>
  );
};

export default Layout;
