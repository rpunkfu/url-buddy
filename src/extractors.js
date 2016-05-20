import { extractWithRegex } from './util';
import {
  hashRegex,
  hostnameRegex,
  pathnameRegex,
  portRegex,
  protocolRegex,
} from './regex';

export const extractHash = extractWithRegex(hashRegex());

export const extractHostname = extractWithRegex(hostnameRegex());

export const extractPathname = extractWithRegex(pathnameRegex());

export const extractPort = extractWithRegex(portRegex());

export const extractProtocol = extractWithRegex(protocolRegex());

export const extractQuery = (url) => {
  if (url.split('?').length !== 2) { return {}; }
  return url.split('?')[1]
    .split('#')
    .filter(pair => !!pair)
    .map(pair => pair.split('='))
    .reduce((query, [key, value]) =>
      Object.assign({}, query, { [key]: value || true }), {});
};
