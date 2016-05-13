import { extractHost, extractProtocol } from './extractors';
import { isValidUrl } from './validators';

const getBaseProperties = ({ url, valid }) => ({ url, valid });

const getExtractedProperties = (url) => ({
  host: extractHost(url),
  protocol: extractProtocol(url),
  ...getBaseProperties({ url, valid: true }),
});

export const queryParam = (url) => {
  if (!isValidUrl(url)) { return getBaseProperties({ url, valid: false }); }
  return getExtractedProperties(url);
};
