import React, { FC } from 'react';

import { Card, Chip, LinearProgress, Typography } from '@material-ui/core';

import StyledAvatar from 'components/styled/StyledAvatar';
import { selectCurrentNav } from 'models/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: 16px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledLinearProgress = styled(LinearProgress)`
  margin-right: 1rem;
  width: 50%;
`;

const LevelIndicator = styled(Chip)`
  min-width: 3rem;
`;

const StyledCard = styled(Card)`
  border-radius: 8px !important;
  height: 200px;
  width: 100%;
  margin: 0.5rem 0;
`;

const LevelProgress: FC = () => (
  <ProgressContainer>
    <StyledLinearProgress variant="determinate" value={80} />
    <LevelIndicator label="LVL 6" variant="outlined" />
  </ProgressContainer>
);

const Profile: FC = () => {
  const currentNav = useSelector(selectCurrentNav);
  return (
    <ProfileContainer>
      <StyledAvatar />
      <Typography variant="h6">User Name</Typography>
      <Typography variant="body1">user@name.com</Typography>
      <LevelProgress />
      <StyledCard elevation={5} />
      <StyledCard elevation={5} />
    </ProfileContainer>
  );
};

export default Profile;
