import urlRegex from 'url-regex';

const isValidUrl = url => urlRegex({ exact: true }).test(url);

export const queryParam = url => ({
  url,
  valid: isValidUrl(url),
});
