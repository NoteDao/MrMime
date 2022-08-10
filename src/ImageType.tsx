import React from 'react';

type ImageTypeProps = {
  src: string;
  height?: number;
  width?: number;
};

export const ImageType = ({ src, ...props }: ImageTypeProps): JSX.Element => {
  return <img {...props} src={src} />;
};
