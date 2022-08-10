import React from 'react';

type VideoTypeProps = {
  src: string;
  height?: number;
  width?: number;
};

export const VideoType = ({ src, ...props }: VideoTypeProps): JSX.Element => {
  return <video {...props} controls muted autoPlay src={src} />;
};
