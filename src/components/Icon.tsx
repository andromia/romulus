import React, { ReactElement } from 'react';
import Image from 'react-bootstrap/Image';

type ImageProperties = {
  width: string; // "100px"
  height: string; // "100px"
};

const ClickableUploadIcon = (props: ImageProperties): ReactElement => {
  const { height, width } = props;

  return (
    <div>
      <Image
        className="interactive-icon"
        src="../assets/upload.svg"
        width={width}
        height={height}
        alt="icon"
        onClick={() => document.getElementById('clickable-upload')?.click()}
      />
      <input
        id="clickable-upload"
        className="file-upload"
        type="file"
        name="upload"
      />
    </div>
  );
};

export default ClickableUploadIcon;
