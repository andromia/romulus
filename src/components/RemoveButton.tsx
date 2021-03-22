/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { RemoveButtonType } from './Types';

const Store = require('electron-store');

const store = new Store();

const RemoveButton = (props: RemoveButtonType) => {
  const { setFiles, file } = props;
  const fileKey: string = file.path.slice(0, file.path.length - 3);

  const handleRemoveButton = () => {
    store.delete(fileKey);
    setFiles(store.store);
  };

  return (
    <Button className="file-remove-button" onClick={handleRemoveButton}>
      Remove
    </Button>
  );
};

export default RemoveButton;
