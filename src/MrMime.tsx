import React, { useEffect, useState } from 'react';


import {
  MimeType3D,
  MimeTypeVideo,
  MimeTypeAudio,
  MimeTypeHtml,
  MimeTypeImage,
} from './MediaMimeTypes';

import { IframeType } from './IframeType';
import { VideoType } from './VideoType';
import { AudioType } from './AudioType';
import { ImageType } from './ImageType';

import ModelType from './3DType';

const fetchMedia = async (src: string): Promise<any> => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();

    return blob;
  } catch (e) {}
};

function MrMime({
  src,
  width = 150,
  height = 150,
}: {
  src: string;
  width: number;
  height: number;
}): JSX.Element | null {
  const [media, setMedia] = useState(null as any);
  console.log(ModelType);
  useEffect(() => {
    fetchMedia(src).then(setMedia);
  }, [src]);

  console.log(media);
  if (!media) {
    return null;
  }
  if (MimeTypeHtml.includes(media.type)) {
    return <IframeType src={src} width={width} height={height} />;
  }
  if (MimeTypeVideo.includes(media.type)) {
    return <VideoType src={src} width={width} height={height} />;
  }
  if (MimeType3D.includes(media.type)) {
    return <ModelType src={src} width={width} height={height} />;
  }
  if (MimeTypeImage.includes(media.type)) {
    return <ImageType src={src} width={width} height={height} />;
  }
  if (MimeTypeAudio.includes(media.type)) {
    return <AudioType src={src} width={width} height={height} />;
  }

  return null;
}

export default MrMime;
