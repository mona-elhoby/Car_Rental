import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


import Template from "../../components/template/generateTemplate";
import { updateTemplate, deleteTemplate, getContract } from "../../store/reducer/template";
import { SettingBtn } from "../../components/profile/style";
import styles from "../../styles/signature.module.css";
import Snackbar from "../../features/snackbar";

const Contract = () => {
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(getContract(id)).then((res) =>
      setContent(res.payload?.data?.data?.text)
    );
  }, [dispatch]);
  //update contract
  const handleUpdateTemplate = (e) => {
    dispatch(
      updateTemplate({
        id: id,
        data: {
          name: "{{$randomAbbreviation}}",
          text: content,
          isDefault: false,
        },
      })
    ).then((res) => {
      console.log("res.payload: ", res.payload);
      if (res.payload.status == 200) {
        setTimeout(() => {
          setSuccessMessage(true);
          router.push("/template");
        }, 500);
      }
    });
  };

  //delete template
  const handleDelTemplate = (id) => {
    dispatch(deleteTemplate(id)).then((res) => {
      console.log("res.payload: ", res.payload);
      if (res.payload.status == 201) {
        setTimeout(() => {
          setDeleteMessage(true);
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
        <SettingBtn onClick={handleUpdateTemplate}>Update</SettingBtn>
        <SettingBtn onClick={handleDelTemplate}>Delete</SettingBtn>
      </div>
      {successMessage || deleteMessage ? (
        <Snackbar
          msg={
            deleteMessage ? "template Deleted" : "template updated successfuly"
          }
          closeAlert={deleteMessage ? setDeleteMessage : setSuccessMessage}
        />
      ) : null}
    </div>
  );
};

export default Contract;
