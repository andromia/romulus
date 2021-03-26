/* eslint-disable @typescript-eslint/no-explicit-any */
export type FileObjectType = {
  id: number;
  name: string;
  path: string;
  pythonExe: string;
};

export type ClickableUploadIconType = {
  width: string; // "100px"
  height: string; // "100px"
  setFiles: any;
};

export type ClickableFileRowType = {
  key: string;
  width: string; // "100px"
  height: string; // "100px"
  file: FileObjectType;
  setFiles: any;
};

export type RunButtonType = {
  file: FileObjectType;
};

export type RemoveButtonType = {
  file: FileObjectType;
  setFiles: any;
};
