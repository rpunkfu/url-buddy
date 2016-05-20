export const extractWithRegex = regex => (url) => {
  const match = url.match(regex);
  return match && match.length > 1 ? match[1] : '';
};
