/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement, useState } from 'react';
import Image from 'react-bootstrap/Image';

type ImageProperties = {
  width: string; // "100px"
  height: string; // "100px"
};

const ClickableUploadIcon = (props: ImageProperties): ReactElement => {
  const { height, width } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState({ preview: '', raw: '' });

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setFile({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div>
      <label htmlFor="clickable-upload">
        <Image
          className="interactive-icon"
          src="../assets/upload.svg"
          width={width}
          height={height}
          alt="icon"
        />
      </label>
      <p>{file.preview}</p>
      <input
        id="clickable-upload"
        className="file-upload"
        type="file"
        name="upload"
        onChange={handleChange}
      />
    </div>
  );
};

export default ClickableUploadIcon;
