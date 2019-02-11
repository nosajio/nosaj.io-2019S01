const { REACT_APP_CDN_URL: CDN_URL } = process.env;
export const cdnURL = (path: string): string => `${CDN_URL}/${String(path)}`;
