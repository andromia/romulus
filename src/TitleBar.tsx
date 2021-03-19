import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';

const TitleBar = (): ReactElement => {
  return (
    <div id="title-bar">
      <div id="title">Romulus</div>
      <div id="title-bar-btns">
        <Button id="min-btn" />
        <Button id="max-btn" />
        <Button id="close-btn" />
      </div>
    </div>
  );
};

export default TitleBar;
