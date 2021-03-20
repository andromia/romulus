/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ClickableFileType } from './Types';

const ClickableFile = (props: ClickableFileType) => {
  const { height, width, name } = props;

  return (
    <Row className="file-row">
      <Col md={1} className="script-icon-col">
        <Image
          className="interactive-icon script-icon"
          src="../assets/python.png"
          width={width}
          height={height}
          alt="icon"
        />
      </Col>
      <Col md={8} className="script-name-col">
        <a href="#" className="script-name-clickable">
          <h1 className="script-name">{name}</h1>
        </a>
      </Col>
    </Row>
  );
};

export default ClickableFile;
