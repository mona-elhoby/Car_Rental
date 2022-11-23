import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { FormLabel } from "@mui/material";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/signature.module.css";
import SettingForm from "../../components/profile/setting";
import {
  getProfile,
  updateProfile,
  updateProfileFiles,
} from "../../store/reducer/profile";
import { SettingBtn, SettingContainer } from "../../components/profile/style";
import { getCountry } from "../../store/reducer/constant/country";

class Signature extends Component {
  state = {
    trimmedDataURL: null,
    profile: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneKey: "",
    phone: "",
    nationality: "",
    gender: "",
    countries: null,
    validation: false,
    attachedFile: null
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
  //get nationalites list and user info
  componentDidMount() {
    this.props
      .getCountry()
      .then((res) => this.setState({ countries: res.payload.data }));
    this.props.getProfile().then((res) => {
      this.setState({ profile: res.payload.data });
      this.setState({ firstName: res.payload.data?.firstName });
      this.setState({ lastName: res.payload.data?.lastName });
      this.setState({ phoneKey: res.payload.data?.nationality?.phone });
      this.setState({
        phone: res.payload?.data?.phone?.slice(
          res.payload.data?.nationality?.phone.length + 1
        ),
      });
      this.setState({ email: res.payload?.data?.email });
      this.setState({ nationality: res.payload.data?.nationality?.id });
      this.setState({ gender: res.payload.data?.gender });
    });
  }
  render() {
    let { trimmedDataURL } = this.state;
    //update function
    const handleUpdateInputs = () => {
      this.props
        .updateProfile({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          gender: this.state.gender,
          nationality: this.state.nationality,
          phone: this.state.phoneKey.includes("+")
            ? this.state.phoneKey
            : "+" + this.state.phoneKey + "" + this.state.phone,
          email: this.state.email,
        })
        .then((res) => {
          console.log(res.payload);
          if (res.payload.code == "0625") {
            this.setState({ validation: true });
          } else if (res.payload == "OK") {
            this.props.router.push("/profile");
          }
        });
    };

    const handleChangeAttached = e => {
        this.props
    .updateProfileFiles(e.target.files[0])
    .then((res) => console.log(res));
}
console.log(this.state.attachedFile)
    return (
      <SettingContainer>
        <SettingForm
          firstName={this.state.firstName}
          handleChangeFName={(e) =>
            this.setState({ firstName: e.target.value })
          }
          lastName={this.state.lastName}
          handleChangeLName={(e) => this.setState({ lastName: e.target.value })}
          email={this.state.email}
          handleChangeEmail={(e) => this.setState({ email: e.target.value })}
          user={this.state.profile}
          phoneKey={this.state.phoneKey}
          setPhoneKey={(e) => this.setState({ phoneKey: e })}
          phone={this.state.phone}
          handleChangePhone={(e) => this.setState({ phone: e.target.value })}
          //   code={this.state.profile?.nationality?.code}
          nationality={this.state.nationality}
          handleChangeNationality={(e) =>
            this.setState({ nationality: e.target.value })
          }
          gender={this.state.gender}
          handleChangeGender={(e) => this.setState({ gender: e.target.value })}
          nationalites={this.state.countries}
          phoneValid={this.state.validation}
          attachedFile={this.state.attachedFile}
          handleChangeAttached={handleChangeAttached}
        />

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
        <div className={styles.btnContainer}>
          <SettingBtn onClick={handleUpdateInputs}>Update</SettingBtn>
          <SettingBtn>
            <Link href="/profile" style={{ color: "#FFF" }}>
              Cancel
            </Link>
          </SettingBtn>
        </div>
      </SettingContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountry: () => dispatch(getCountry()),
    getProfile: () => dispatch(getProfile()),
    updateProfile: (data) => dispatch(updateProfile(data)),
    updateProfileFiles: (data) => dispatch(updateProfileFiles(data)),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(Signature));
