import React, { FC } from 'react';

import { Avatar, Card, Chip, LinearProgress, Typography } from '@material-ui/core';

import { selectCurrentNav } from 'models/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: 100%;
  width; 100%;
  padding: 16px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 3rem;
  margin-bottom: 1rem;
  height: min(40vmin, 100px) !important;
  width: min(40vmin, 100px) !important;
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

const EmptyCard: FC = () => null;

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
