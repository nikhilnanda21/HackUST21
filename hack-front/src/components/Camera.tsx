import React, { FC, useLayoutEffect, useRef } from 'react';

import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: 'environment' },
};

const Camera: FC = () => {
  const camRef = useRef<Webcam>(null);

  useLayoutEffect(() => {
    if (camRef.current) {
      const imageSrc = camRef.current.getScreenshot();
    }
  }, []);
  return (
    <Webcam
      audio={false}
      height="100%"
      width="100%"
      ref={camRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      onUserMediaError={(e) => console.log({ error: e })}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default Camera;
