import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ProfileHead from "../../components/profile/profileHead";
import { getProfile } from "../../store/reducer/profile";
import { ProfileContainerDiv } from "../../components/profile/style";

const ProfileContainer = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile()).then((res) => setUser(res.payload.data));
  }, [dispatch]);
  return (
    <ProfileContainerDiv>
      <ProfileHead user={user} />
      {console.log(user)}
    </ProfileContainerDiv>
  );
};

export default ProfileContainer;
