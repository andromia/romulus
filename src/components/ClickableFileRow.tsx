/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RunButton from './RunButton';
import RemoveButton from './RemoveButton';
import { ClickableFileRowType } from './Types';
import icon from '../../assets/python.png';

const ClickableFileRow = (props: ClickableFileRowType) => {
  const { height, width, file, setFiles } = props;
  const history = useHistory();

  return (
    <Row className="file-row">
      <Col sm={1} className="file-icon-col">
        <Image
          className="interactive-icon file-icon"
          src={icon}
          width={width}
          height={height}
          alt="icon"
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
        <RunButton path={file.path} />
      </Col>
      <Col md={2} className="file-row-remove-button-col">
        <RemoveButton file={file} setFiles={setFiles} />
      </Col>
    </Row>
  );
};

export default ClickableFileRow;
