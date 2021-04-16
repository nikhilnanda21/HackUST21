import React, { FC } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  LinearProgress,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

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

const StyledCardContent = styled(CardContent)`
  display: flex;
  height: 120px;
  position: relative;
  padding: 0 !important;
`;

const AchievementItem = styled.div`
  flex: 0 0 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AchievementCard: FC = () => (
  <StyledCard elevation={5}>
    <CardHeader title="Achievements" />
    <StyledCardContent>
      <AchievementItem>
        <Typography variant="h6">50</Typography>
        <Typography variant="caption" style={{ textAlign: 'center' }}>
          Plastic Items Recycled
        </Typography>
      </AchievementItem>
      <Divider flexItem orientation="vertical" />
      <AchievementItem>
        <Typography variant="h6">24</Typography>
        <Typography variant="caption">Cans Recycled</Typography>
      </AchievementItem>
      <Divider flexItem orientation="vertical" />
      <AchievementItem>
        <Typography variant="h6">74</Typography>
        <Typography variant="caption">Items Recycled</Typography>
      </AchievementItem>
    </StyledCardContent>
  </StyledCard>
);

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const DateHistory = styled(Typography)`
  flex: 0 0 100px;
`;

const RecycledItem = styled(Typography)`
  flex: 0 0 150px;
`;

const RecyclingHistory: FC = () => (
  <StyledCard elevation={5} style={{ height: 230 }}>
    <CardHeader title="Recycling History" />
    <List>
      <ListItem button>
        <DateHistory variant="body2">Today</DateHistory>
        <RecycledItem variant="body2">Metal Can</RecycledItem>
        <Chip label="+ 3pt" variant="outlined" />
      </ListItem>
      <ListItem button>
        <DateHistory variant="body2">Yesterday</DateHistory>
        <RecycledItem variant="body2">Plastic Button</RecycledItem>
        <Chip label="+ 5pt" variant="outlined" />
      </ListItem>
    </List>
    <StyledCardActions>
      <Button variant="outlined">See More</Button>
    </StyledCardActions>
  </StyledCard>
);

const Profile: FC = () => {
  const currentNav = useSelector(selectCurrentNav);
  return (
    <ProfileContainer>
      <StyledAvatar />
      <Typography variant="h6" style={{ marginTop: 8 }}>
        Dale
      </Typography>
      <Typography variant="body1">dale@cubicide.com</Typography>
      <LevelProgress />
      <AchievementCard />
      <RecyclingHistory />
    </ProfileContainer>
  );
};

export default Profile;
