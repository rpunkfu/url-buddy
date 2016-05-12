export const extractWithRegex = regex => (url) => {
  const match = url.match(regex);
  return match.length > 1 ? match[1] : '';
};
