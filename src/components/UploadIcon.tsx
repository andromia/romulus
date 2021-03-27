/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'react-bootstrap/Image';
import icon from '../../assets/upload.svg';
import {
  ClickableUploadIconType,
  parseKeyFromFilePath,
  sortStore,
} from '../common';

const { dialog } = require('electron').remote;

const Store = require('electron-store');

const store = new Store();

const ClickableUploadIcon = (props: ClickableUploadIconType) => {
  const { setFiles, height, width } = props;

  const handleUploadClick = () => {
    // create unique id for uploaded files
    let k = 0;
    const ids = Object.keys(store.store).map((key) => store.store[key].id);

    if (ids.length > 0) {
      k = Math.max(...ids) + 1;
    }

    dialog
      .showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        filters: [{ name: 'Python Files', extensions: ['py'] }],
      })
      .then((result: { canceled: any; filePaths: any }) => {
        // eslint-disable-next-line promise/always-return
        for (let i = 0; i < result.filePaths.length; i += 1) {
          const path = result.filePaths[i];

          // eslint-disable-next-line no-useless-escape
          const name = path.replace(/^.*[\\\/]/, '');
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
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div className="upload-icon-div">
      <Image
        className="interactive-icon upload-icon"
        src={icon}
        width={width}
        height={height}
        alt="icon"
        onClick={handleUploadClick}
      />
    </div>
  );
};

export default ClickableUploadIcon;
