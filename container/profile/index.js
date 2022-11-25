import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ProfileHead from "../../components/profile/profileHead";
import { getProfile, getImage } from "../../store/reducer/profile";
import { ProfileContainerDiv } from "../../components/profile/style";

const ProfileContainer = () => {
  const [user, setUser] = useState(null)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getProfile()).then(res => {
        setUser(res.payload.data)
        dispatch(getImage(res.payload.data?.avatar)).then(res => setImage(res.payload.data))
      })
    },[dispatch])

  return (
    <ProfileContainerDiv>
      <ProfileHead user={user} avatar={image}/>
    </ProfileContainerDiv>
  );
};


export default ProfileContainer;
