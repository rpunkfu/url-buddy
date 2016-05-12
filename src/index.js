import { extractHost, extractProtocol } from './extractors';
import { isValidUrl } from './validators';

const getAllProperties = url => ({
  host: extractHost(url),
  protocol: extractProtocol(url),
  url,
  valid: isValidUrl(url),
});

export const queryParam = url => {
  if (!isValidUrl(url)) { return { url, valid: false }; }
  return getAllProperties(url);
};
