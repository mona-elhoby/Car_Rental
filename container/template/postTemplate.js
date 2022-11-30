import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";

import Template from "../../components/template/generateTemplate";
import { saveTemplates } from "../../store/reducer/template";
import { SettingBtn } from "../../components/profile/style";
import styles from "../../styles/signature.module.css";
import Snackbar from "../../features/snackbar";

const PostTemplate = () => {
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  //post new template
  const handlePost = (e) => {
    dispatch(
      saveTemplates({
        // "company": "000000030000000000000000", // For System
        name: "{{$randomAbbreviation}}",
        text: content,
        isDefault: checked,
      })
    ).then((res) => {
      if (res.payload.status == 201) {
        setTimeout(() => {
          setSuccessMessage(true);
          router.push("/template");
        }, 500);
      }
    });
  };

  // handle degult checked
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ margin: "auto 20px" }}>
      <Template
        editorHtml={content}
        handleChange={useCallback((html) => setContent(html), [])}
      />
      <FormControlLabel
        value="end"
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Default Template"
        labelPlacement="end"
      />
      <div className={styles.btnContainer}>
        <SettingBtn onClick={handlePost}>Save</SettingBtn>
        <SettingBtn>
          <Link href="/template" style={{ color: "#FFF" }}>
            Cancel
          </Link>
        </SettingBtn>
      </div>
      {successMessage ? (
        <Snackbar
          msg="template Saved successfuly"
          closeAlert={setSuccessMessage}
        />
      ) : null}
    </div>
  );
};

export default PostTemplate;
