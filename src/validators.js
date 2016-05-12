import urlRegex from 'url-regex';

export const isValidUrl = url => urlRegex({ exact: true }).test(url);
