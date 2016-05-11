import urlRegex from 'url-regex';
import hostRegex from './hostHelper';

export const isValidUrl = url => urlRegex({ exact: true }).test(url);

export const extractHost = url => {
  const match = url.match(hostRegex());
  if (match.length > 1) { return match[1]; }
  return '';
};
