/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ClickableFileType } from './Types';
import icon from '../../assets/python.png';

const ClickableFileRow = (props: ClickableFileType) => {
  const { height, width, name } = props;
  const history = useHistory();

  return (
    <Row className="file-row">
      <Col sm={1} className="script-icon-col">
        <Image
          className="interactive-icon script-icon"
          src={icon}
          width={width}
          height={height}
          alt="icon"
        />
      </Col>
      <Col sm={7} className="script-name-col">
        <Button
          className="clickable-script-name btn btn-secondary"
          onClick={() => history.push('/File')}
        >
          <h1 className="script-name">{name}</h1>
        </Button>
      </Col>
      <Col sm={2}>
        <Button className="script-run-button">Run</Button>
      </Col>
      <Col sm={2}>
        <Button className="script-remove-button">Remove</Button>
      </Col>
    </Row>
  );
};

export default ClickableFileRow;
