/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { RunButtonType } from './Types';

const { exec } = require('child_process');

const RunButton = (props: RunButtonType) => {
  const { file } = props;

  const handleRunButton = () => {
    exec(
      `"${file.pythonExe}" "${file.path}"`,
      (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  };

  return (
    <Button className="file-run-button" onClick={handleRunButton}>
      Run
    </Button>
  );
};

export default RunButton;
