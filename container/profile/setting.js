import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Checkbox, FormControlLabel} from "@mui/material";
import { useRouter } from "next/router";
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
import ChangePassword from "./changePassword";
import Signature from "./signature";

const Setting = () => {
  const [profile, setProfile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneKey, setPhoneKey] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [validation, setValidation] = useState("");
  const [attachedFile, setAttachedFile] = useState("");
  const [options, setOptions] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile()).then((res) => {
      setProfile(res.payload.data);
      setFirstName(res.payload.data?.firstName);
      setLastName(res.payload.data?.lastName);
      setPhoneKey(res.payload.data?.nationality?.phone);
      setPhone(
        res.payload?.data?.phone?.slice(
          res.payload.data?.nationality?.phone.length + 1
        )
      );
      setEmail(res.payload?.data?.email);
      setNationality(res.payload.data?.nationality?.name);
      setGender(res.payload.data?.gender);
    });
  }, [dispatch]);
  //dispatch update function
  const handleUpdateInputs = () => {
    dispatch(
      updateProfile({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        nationality: options?.find((item) => item?.name == nationality)?.id,
        phone: phoneKey.includes("+") ? phoneKey : "+" + phoneKey + "" + phone,
        email: email,
      })
    ).then((res) => {
      console.log(res.payload);
      if (res.payload.code == "0625") {
        setValidation(true);
      } else if (res.payload == "OK") {
        router.push("/profile");
      }
    });
  };
  // upload avatar
  const handleChangeAttached = (e) => {
    dispatch(updateProfileFiles(e.target.files[0])).then((res) =>
      console.log(res)
    );
  };
  const handlegetNationality = (name) => {
    console.log(name);
    dispatch(getCountry(name)).then((res) =>
      setOptions(res?.payload?.data?.data)
    );
  };
  return (
    <SettingContainer>
      <SettingForm
        firstName={firstName}
        handleChangeFName={(e) => setFirstName(e.target.value)}
        lastName={lastName}
        handleChangeLName={(e) => setLastName(e.target.value)}
        email={email}
        handleChangeEmail={(e) => setEmail(e.target.value)}
        user={profile}
        phoneKey={phoneKey}
        setPhoneKey={(e) => this.setState({ phoneKey: e })}
        phone={phone}
        handleChangePhone={(e) => setPhone(e.target.value)}
        //   code={profile?.nationality?.code}
        nationality={nationality}
        handleChangeNationality={(e) => setNationality(e)}
        gender={gender}
        handleChangeGender={(e) => setGender(e.target.value)}
        phoneValid={validation}
        attachedFile={attachedFile}
        handleChangeAttached={handleChangeAttached}
        getNationality={(e) => handlegetNationality(e)}
        options={options}
      />
       <FormControlLabel
        checked={checked}
        onChange={React.useCallback(
          (e) => setChecked(e.target.checked),
          [checked]
        )}
          // value="Change Password"
          control={<Checkbox />}
          label="Change Password"
          labelPlacement="end"
        />
      {checked ? <ChangePassword /> : null}
      <Signature />
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
};

export default Setting;
