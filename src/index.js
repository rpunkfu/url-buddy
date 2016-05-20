import {
  extractHash,
  extractHostname,
  extractPathname,
  extractPort,
  extractProtocol,
  extractQuery,
} from './extractors';
import { isValidUrl } from './validators';

const getBaseProperties = ({ url, valid }) => ({ url, valid });

const getExtractedProperties = (url) => ({
  hash: extractHash(url),
  host: extractHostname(url) + (extractPort(url) ? `:${extractPort(url)}` : ''),
  hostname: extractHostname(url),
  pathname: extractPathname(url),
  port: extractPort(url),
  protocol: extractProtocol(url),
  query: extractQuery(url),
  ...getBaseProperties({ url, valid: true }),
});

export default (url) => {
  if (!isValidUrl(url)) { return getBaseProperties({ url, valid: false }); }
  return getExtractedProperties(url);
};
