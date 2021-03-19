import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';

import { remote, BrowserWindow } from 'electron';

const minimize = (appWindow: BrowserWindow) => {
  appWindow.minimize();
};

const maximize = (appWindow: BrowserWindow) => {
  if (!appWindow.isMaximized()) {
    appWindow.maximize();
  } else {
    appWindow.unmaximize();
  }
};

const close = (appWindow: BrowserWindow) => {
  appWindow.close();
};

const TitleBar = (): ReactElement => {
  const appWindow = remote.getCurrentWindow();

  return (
    <div id="title-bar">
      <div id="title">Romulus</div>
      <div id="title-bar-btns">
        <Button className="min-btn" onClick={() => minimize(appWindow)} />
        <Button className="max-btn" onClick={() => maximize(appWindow)} />
        <Button className="close-btn" onClick={() => close(appWindow)} />
      </div>
    </div>
  );
};

export default TitleBar;
