/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RunButton from './RunButton';
import RemoveButton from './RemoveButton';
import { ClickableFileRowType } from './Types';
import icon from '../../assets/python.png';
import * as common from '../common';

const Store = require('electron-store');

const store = new Store();

const ClickableFileRow = (props: ClickableFileRowType) => {
  const { height, width, file, setFiles } = props;
  const history = useHistory();
  const inputRef = useRef(null);

  const handlePythonExeChange = (e: any) => {
    if (!e.target.files.length) {
      return;
    }

    const key = common.parseKeyFromFilePath(file.path);
    const newFile = file;
    const newPython = e.target.files[0].path;
    newFile.pythonExe = newPython;
    store.set(key, newFile);
    setFiles(store.store);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Object is possibly 'null'.
    inputRef.current.value = '';
  };

  return (
    <Row className="file-row">
      <Col sm={1} className="file-icon-col">
        <label htmlFor={`clickable-row-${file.id}`}>
          <Image
            className="interactive-icon file-icon"
            src={icon}
            width={width}
            height={height}
            alt="icon"
          />
        </label>
        <input
          id={`clickable-row-${file.id}`}
          className="file-upload"
          type="file"
          name="py"
          onChange={handlePythonExeChange}
          ref={inputRef}
        />
      </Col>
      <Col sm={8} className="file-name-col">
        <Button
          className="clickable-file-name btn btn-secondary"
          onClick={() => history.push('/File', { file })}
          title={file.path}
        >
          <h1 className="file-name">{file.name}</h1>
        </Button>
      </Col>
      <Col md={1} className="file-row-run-button-col">
        <RunButton file={file} />
      </Col>
      <Col md={2} className="file-row-remove-button-col">
        <RemoveButton file={file} setFiles={setFiles} />
      </Col>
    </Row>
  );
};

export default ClickableFileRow;
