export const extractWithRegex = regex => (url) => {
  const match = url.match(regex);
  console.log(match);
  return match && match.length > 1 ? match[1] : '';
};
