import * as regex from './regex'

const extractRegex = regex => (url) => {
  const match = url.match(regex)
  return match && match.length > 1 ? match[1] : ''
}

export const hash = extractRegex(regex.hash)
export const port = extractRegex(regex.port)
export const hostname = extractRegex(regex.hostname)
export const pathname = extractRegex(regex.pathname)
export const protocol = extractRegex(regex.protocol)

export const host = (url) => {
  const port = extractRegex(regex.port)(url)
  const hostname = extractRegex(regex.hostname)(url)

  return hostname + (port ? `:${port}` : '')
}

export const query = (url) => {
  if (url.split('?').length !== 2) { return {} }
  return url.split('?')[1]
    .split('#')
    .filter(pair => !!pair)
    .map(pair => pair.split('='))
    .reduce((query, [key, value]) =>
      Object.assign({}, query, { [key]: value || true }), {})
}
