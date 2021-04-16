import React, { FC, ReactNode } from 'react';

import { selectCurrentNav } from 'models/selectors';
import { useSelector } from 'react-redux';

import Camera from './Camera';
import Leaderboard from './Leaderboard';
import Map from './Map';
import Notification from './Notification';
import Profile from './Profile';
import ViewContainer from './styled/ViewContainer';

const NavComponentMap: Record<number | 'default', ReactNode> = {
  0: <Map />,
  1: <Camera />,
  2: <Leaderboard />,
  3: <Profile />,
  default: null,
};

const NavSwitch: FC = () => {
  const currentNav = useSelector(selectCurrentNav);

  return (
    <ViewContainer>
      {NavComponentMap?.[currentNav as number] ?? NavComponentMap.default}
      <Notification />
    </ViewContainer>
  );
};

export default NavSwitch;
