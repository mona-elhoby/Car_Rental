import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";

const Layout = (props) => {
    const largeMatches = useMediaQuery("(min-width: 1200px)");
    const mediumMatches = useMediaQuery("(min-width: 991px)");

  const Customize = styled(Container)`
    padding: ${mediumMatches ? "0 85px !important" : "0 24px !important"};
  `;
  return (
    <Customize
      maxWidth={largeMatches ? "1425px" : mediumMatches ? "960px" : "100%"}
    >
      {props.children}
    </Customize>
  );
};

export default Layout;
