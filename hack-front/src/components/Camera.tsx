import React, { FC, useCallback, useLayoutEffect, useRef } from 'react';

import { setNotification } from 'models';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: 'environment' },
};

const Camera: FC = () => {
  const dispatch = useDispatch();
  const camRef = useRef<Webcam>(null);

  const onUserMediaError = useCallback(
    (error: string | DOMException) => {
      dispatch(
        setNotification({
          message: (error as DOMException)?.name ?? 'An unknown error has occurred',
          severity: 'error',
        }),
      );
    },
    [dispatch],
  );

  return (
    <Webcam
      audio={false}
      height="100%"
      width="100%"
      ref={camRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      onUserMediaError={onUserMediaError}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default Camera;
