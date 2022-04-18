import React from "react";
import styled from "styled-components";

const Profile = () => {
  const index = Math.floor(Math.random() * 8) + 1;
  return (
    <ProfileBlock>
      <ProfileImg src={require(`../assets/profile${index}.png`)} />
    </ProfileBlock>
  );
};

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 100%;
  @media screen and (max-width: 630px) {
    max-width: 48px;
    max-height: 48px;
  }
`;

export default Profile;
