import React from 'react';

type AudioTypeProps = {
  src: string;
  height?: number;
  width?: number;
};

export const AudioType = ({ src, ...props }: AudioTypeProps): JSX.Element => {
  return <audio {...props} controls muted src={src} />;
};
