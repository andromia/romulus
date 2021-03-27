/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import Image from 'react-bootstrap/Image';
import icon from '../../assets/upload.svg';
import {
  ClickableUploadIconType,
  parseKeyFromFilePath,
  sortStore,
} from '../common';

const Store = require('electron-store');

const store = new Store();

const ClickableUploadIcon = (props: ClickableUploadIconType) => {
  const { setFiles, height, width } = props;
  const inputRef = useRef(null);

  const handleChange = (e: any) => {
    if (!e.target.files.length) {
      return;
    }

    // create unique id for uploaded files
    let k = 0;
    const ids = Object.keys(store.store).map((key) => store.store[key].id);

    if (ids.length > 0) {
      k = Math.max(...ids) + 1;
    }

    for (let i = 0; i < e.target.files.length; i += 1) {
      if (!e.target.files[i].path.endsWith('.py')) {
        return; // TODO: notification?
      }

      const { name, path } = e.target.files[i];
      const key = parseKeyFromFilePath(path);
      store.set(key, {
        id: k,
        name,
        path,
        pythonExe: 'python',
      });

      k += 1;
    }

    const sortedStore = sortStore(store.store);
    setFiles(sortedStore);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Object is possibly 'null'.
    inputRef.current.value = '';
  };

  return (
    <div className="upload-icon-div">
      <label htmlFor="clickable-upload">
        <Image
          className="interactive-icon upload-icon"
          src={icon}
          width={width}
          height={height}
          alt="icon"
        />
      </label>
      <input
        id="clickable-upload"
        className="file-upload"
        type="file"
        name="upload"
        onChange={handleChange}
        ref={inputRef}
        multiple
      />
    </div>
  );
};

export default ClickableUploadIcon;
