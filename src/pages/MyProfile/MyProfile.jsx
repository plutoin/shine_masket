import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';

export default function MyProfile() {
  return (
    <>
      <TopMenuBar />
      <ProfileContainer>
        <Profile
          followersCount="2950"
          followingsCount="128"
          userName="애월읍 위니브 감귤농장"
          userId="weniv_Mandarin"
          userIntroduction="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
        ></Profile>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
      </ProfileContainer>
      <TabMenu />
    </>
  );
}

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
`;
