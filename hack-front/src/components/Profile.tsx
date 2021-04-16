import React, { FC } from 'react';

import { Avatar } from '@material-ui/core';

import { selectCurrentNav } from 'models/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: 100%;
  width; 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 4rem;
  height: min(40vmin, 100px) !important;
  width: min(40vmin, 100px) !important;
`;

const Profile: FC = () => {
  const currentNav = useSelector(selectCurrentNav);
  return (
    <ProfileContainer>
      <StyledAvatar />
    </ProfileContainer>
  );
};

export default Profile;
