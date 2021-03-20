/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ClickableScriptIconType } from './Types';

const ClickableScriptIcon = (props: ClickableScriptIconType) => {
  const { height, width, name } = props;

  return (
    <Row className="justify-content-md-center">
      <Col sm={2}>
        <Image
          className="interactive-icon script-icon"
          src="../assets/python.png"
          width={width}
          height={height}
          alt="icon"
        />
      </Col>
      <Col sm={10}>
        <h1 className="script-name">{name}</h1>
      </Col>
    </Row>
  );
};

export default ClickableScriptIcon;
