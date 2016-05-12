import { extractWithRegex } from './util';
import { hostRegex, protocolRegex } from './regex';

export const extractHost = extractWithRegex(hostRegex());

export const extractProtocol = extractWithRegex(protocolRegex());
