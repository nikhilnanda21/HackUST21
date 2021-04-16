import React, { FC, ReactNode } from 'react';

import { selectCurrentNav } from 'models/selectors';
import { useSelector } from 'react-redux';

import Map from './Map';
import ViewContainer from './styled/ViewContainer';

const NavComponentMap: Record<number | 'default', ReactNode> = {
  0: <Map />,
  default: null,
};

const NavSwitch: FC = () => {
  const currentNav = useSelector(selectCurrentNav);

  return (
    <ViewContainer>
      {NavComponentMap?.[currentNav as number] ?? NavComponentMap.default}
    </ViewContainer>
  );
};

export default NavSwitch;
