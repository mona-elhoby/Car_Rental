import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { FormLabel } from "@mui/material";
import { connect } from "react-redux";
import { withRouter } from "next/router";

import styles from "../../styles/signature.module.css";
import {
  updateProfileFiles,
} from "../../store/reducer/profile";
import { SettingContainer } from "../../components/profile/style";
class Signature extends Component {
  state = {
    trimmedDataURL: null,
  };
  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    });
    this.props
      .updateProfileFiles(this.sigPad.getTrimmedCanvas())
      .then((res) => console.log(res));
  };
  render() {
    let { trimmedDataURL } = this.state;

    return (
      <SettingContainer>
        <div className={styles.container}>
          <div className={styles.sigContainer}>
            <FormLabel>Signature: </FormLabel>
            <SignaturePad
              canvasProps={{ className: styles.sigPad }}
              ref={(ref) => {
                this.sigPad = ref;
              }}
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.buttons} onClick={this.clear}>
              Clear
            </button>
            <button className={styles.buttons} onClick={this.trim}>
              Export
            </button>
          </div>
          {trimmedDataURL ? (
            <img className={styles.sigImage} src={trimmedDataURL} />
          ) : null}
        </div>
      </SettingContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileFiles: (data) => dispatch(updateProfileFiles(data)),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(Signature));
