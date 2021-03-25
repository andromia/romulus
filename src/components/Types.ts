/* eslint-disable @typescript-eslint/no-explicit-any */
export type FileObjectType = {
  name: string;
  preview: string;
  raw: string;
  path: string;
  type: string;
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
  path: string;
};

export type RemoveButtonType = {
  file: FileObjectType;
  setFiles: any;
};
