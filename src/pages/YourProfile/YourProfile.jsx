import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';

import ChatButtonImg from '../../assets/icon/icon-message-circle.svg';
import ShareButtonImg from '../../assets/icon/icon-share.png';

export default function YourProfile() {
  return (
    <>
      <TopMenuBar />
      <ProfileContainer>
        <Profile
          followersCount="3333"
          followingsCount="33"
          userName="옆집 감귤 농장"
          userId="another"
          userIntroduction="다른 사용자 프로필 화면입니다."
        >
          <YourProfileButton />
        </Profile>
      </ProfileContainer>
      <TabMenu />
    </>
  );
}

const YourProfileButton = () => {
  return (
    <>
      <ChatButton active size="34"></ChatButton>
      <Button active buttonText="팔로우" size="medium"></Button>
      <ShareButton active size="34"></ShareButton>
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
`;

const ChatButton = styled(Button)`
  background-image: url(${ChatButtonImg});
  background-repeat: no-repeat;
  background-position: center;
`;

const ShareButton = styled(Button)`
  background-image: url(${ShareButtonImg});
  background-repeat: no-repeat;
  background-position: center;
`;
