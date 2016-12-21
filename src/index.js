import * as extract from './extractors'
import { isValidUrl } from './validators'

const getBaseProperties = ({ url, valid }) => ({ url, valid })

const getExtractedProperties = (url) => ({
  hash: extract.hash(url),
  port: extract.port(url),
  host: extract.host(url),
  query: extract.query(url),
  hostname: extract.hostname(url),
  pathname: extract.pathname(url),
  protocol: extract.protocol(url),
  ...getBaseProperties({ url, valid: true })
})

export default (url) => {
  if (!isValidUrl(url)) { return getBaseProperties({ url, valid: false }) }
  return getExtractedProperties(url)
}
