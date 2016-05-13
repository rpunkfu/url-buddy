import { extractWithRegex } from './util';
import {
  hostRegex,
  portRegex,
  protocolRegex,
} from './regex';

export const extractHost = extractWithRegex(hostRegex());

export const extractPort = extractWithRegex(portRegex());

export const extractProtocol = extractWithRegex(protocolRegex());
