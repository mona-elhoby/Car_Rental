import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import ChangePassword from "../../components/profile/changePassword";
import { changePassword } from "../../store/reducer/profile";
import SnackbarAlert from "../../features/snackbar";

const ChangePasswordContainer = () => {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currPassValid, setCurrPassValid] = useState(false);
  const [newPassValid, setNewPassValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const dispatch = useDispatch();

  const submitChange = useCallback(() => {
    console.log(currPassword, newPassword);
    if (!currPassword) {
      setCurrPassValid(true);
    }
    if (!newPassword) {
      setNewPassValid(true);
    }
    dispatch(changePassword({ old: currPassword, new: newPassword })).then(
      (res) => {
        console.log(res.payload);
        if (res.payload?.data?.code == "0660") {
          setCurrPassValid(true);
        }
        if (res.payload?.data?.code == "0201") {
          setNewPassValid(true);
        }
        if (res.payload.status == 200) {
          setSuccessMessage(true);
        }
      }
    );
  }, [currPassword, newPassword]);

  return (
    <div>
      <ChangePassword
        currPassword={currPassword}
        handleChangeCurrPassword={useCallback(
          (e) => setCurrPassword(e.target.value),
          []
        )}
        currPassValid={currPassValid}
        newPassword={newPassword}
        handleChangeNewPassword={useCallback(
          (e) => setNewPassword(e.target.value),
          []
        )}
        newPassValid={newPassValid}
        submitChange={submitChange}
      />
      {successMessage ? (
        <SnackbarAlert
        closeAlert={setSuccessMessage}
          msg="password updated"
        />
      ) : null}
    </div>
  );
};

export default ChangePasswordContainer;
