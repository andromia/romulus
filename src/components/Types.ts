/* eslint-disable @typescript-eslint/no-explicit-any */
export type FileObjectType = {
  name: string;
  preview: string;
  raw: string;
};

export type ClickableUploadIconType = {
  width: string; // "100px"
  height: string; // "100px"
  files: Array<FileObjectType>;
  updateFiles: any; // TODO: type of this?
};

export type ClickableFileType = {
  key: string;
  width: string; // "100px"
  height: string; // "100px"
  name: string;
};
