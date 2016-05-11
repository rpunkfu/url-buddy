import { extractHost, isValidUrl } from './util';

const getAllProperties = url => ({
  host: extractHost(url),
  url,
  valid: isValidUrl(url),
});

export const queryParam = url => {
  if (!isValidUrl(url)) { return { url, valid: false }; }
  return getAllProperties(url);
};
