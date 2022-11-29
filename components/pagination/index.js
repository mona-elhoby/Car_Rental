import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationContainer = (props) => {
    
  return (
    <Stack spacing={2} sx={{ marginBottom: "60px" }}>
      <Pagination
        count={props.count}
        page={props.page}
        onChange={props.handleChange}
        sx={{ margin: "auto", color: "#FFF" }}
        color="primary"
      />
    </Stack>
  );
};

export default PaginationContainer;
