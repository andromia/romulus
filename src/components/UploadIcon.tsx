/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { ClickableUploadIconType } from './Types';
import icon from '../../assets/upload.svg';

const Store = require('electron-store');

const store = new Store();

const ClickableUploadIcon = (props: ClickableUploadIconType) => {
  const { setFiles, height, width } = props;
  const inputRef = useRef(null);

  const handleChange = (e: any) => {
    if (!e.target.files.length) {
      return;
    }

    for (let i = 0; i < e.target.files.length; i += 1) {
      console.log(e.target.files[i]);
      if (!e.target.files[i].path.endsWith('.py')) {
        return; // TODO: notification?
      }

      const { name, path } = e.target.files[i];
      store.set(path.slice(0, path.length - 3), { name, path, type: 'py' });

      // reverse ordering for most recent add at top of store
      let keys: Array<string> = Object.keys(store.store);
      keys = keys.reverse();
      const orderedStore = {};

      for (let j = 0; j < keys.length; j += 1) {
        (orderedStore as any)[keys[j]] = store.store[keys[j]];
      }

      setFiles(orderedStore);
    }

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
