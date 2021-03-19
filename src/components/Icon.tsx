import React, { ReactElement } from 'react';
import Image from 'react-bootstrap/Image';

type ImageProperties = {
  id: string;
  className: string;
  width: string; // "100px"
  height: string; // "100px"
  src: string;
};

const Icon = (props: ImageProperties): ReactElement => {
  const { id, className, height, width, src } = props;

  return (
    <Image
      id={id}
      className={className}
      src={src}
      width={width}
      height={height}
      alt="icon"
    />
  );
};

export default Icon;
