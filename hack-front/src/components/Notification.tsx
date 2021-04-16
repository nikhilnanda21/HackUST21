import React, { FC } from 'react';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { setNotification } from 'models';
import { selectCurrentNotif } from 'models/selectors';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledSnackbar = styled(Snackbar)`
  &.MuiSnackbar-anchorOriginBottomLeft {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
`;

const Notification: FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector(selectCurrentNotif);

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    dispatch(setNotification(null));
  };

  if (!notification) return null;
  return (
    <StyledSnackbar
      open={!!notification}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <MuiAlert onClose={handleClose} severity={notification.severity}>
        {notification.message}
      </MuiAlert>
    </StyledSnackbar>
  );
};

export default Notification;
