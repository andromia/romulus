/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: any

export const parseKeyFromFilePath = (path: string) => {
  const key = path.slice(0, path.length - 3);

  return key;
};

export const sortStore = (store: any) => {
  const keys = Object.keys(store);
  let data = keys.map((key: string) => [key, store[key].id]);

  data = data.sort((a: any, b: any) => {
    return a[1] - b[1];
  });

  const sortedStore = {};

  for (let j = 0; j < data.length; j += 1) {
    const key: any = data[j][0];
    (sortedStore as any)[key] = store[key];
  }

  return sortedStore;
};
