import urlRegex from 'url-regex';
import hostRegex from './hostHelper';
import protocolRegex from './protocolRegex';

export const isValidUrl = url => urlRegex({ exact: true }).test(url);

export const extractWithRegex = (regex) => (url) => {
  const match = url.match(regex);
  if (match.length > 1) { return match[1]; }
  return '';
};

export const extractHost = extractWithRegex(hostRegex());

export const extractProtocol = extractWithRegex(protocolRegex());
