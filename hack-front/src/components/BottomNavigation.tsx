import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';

import { BottomNavigation as MuiBottomNav, BottomNavigationAction } from '@material-ui/core';
import { FormatListNumbered, Map, Person, PhotoCamera } from '@material-ui/icons';

import { setNavigation } from 'models';
import { selectCurrentNav } from 'models/selectors';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledMuiBottomNav = styled(MuiBottomNav)`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const NavMap: Record<string, ReactNode> = {
  Map: <Map />,
  Camera: <PhotoCamera />,
  Leaderboard: <FormatListNumbered />,
  Profile: <Person />,
};

const BottomNavigation: FC = () => {
  const dispatch = useDispatch();
  const currentNav = useSelector(selectCurrentNav);

  const onSelect = useCallback(
    (event: ChangeEvent<{}>, value: number) => {
      dispatch(setNavigation(value));
    },
    [dispatch],
  );

  return (
    <StyledMuiBottomNav showLabels onChange={onSelect} value={currentNav}>
      {Object.entries(NavMap).map(([label, icon]) => (
        <BottomNavigationAction key={`BottomNav-${label}`} label={label} icon={icon} />
      ))}
    </StyledMuiBottomNav>
  );
};

export default BottomNavigation;
