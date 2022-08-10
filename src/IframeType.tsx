import React from 'react';

type IframeTypeProps = {
  src: string;
  height?: number;
  width?: number;
};

export const IframeType = ({ src, ...props }: IframeTypeProps): JSX.Element => {
  return (
    <iframe
      {...props}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
