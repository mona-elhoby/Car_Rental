import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// to prevent server side render
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";
import Link from "next/link";

import { getTemplates } from "../../store/reducer/template";
import { Grid } from "@mui/material";

const GetTemplate = () => {
  const [templates, setTemplates] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemplates({ theParams: null })).then((res) =>
      setTemplates(res.payload.data)
    );
  }, [dispatch]);
  return (
      <Grid container>
        <Grid item md={4} sm={6} xs={12}>
          {templates?.data?.map((ele) => (
            <Link key={ele.id} href={`/template/${ele.id}`}>
            <ReactQuill
              
              theme="snow"
              readOnly={true}
              value={ele.text}
              bounds={".app"}
              style={{
                // height: "300px",
                marginBottom: "100px",
                marginTop: "40px",
              }}
            />
            </Link>
          ))}
        </Grid>
      </Grid>
  );
};

export default GetTemplate;
