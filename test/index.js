import { describe } from 'ava-spec';
import { queryParam } from '../src';

describe('query-param =>', (it) => {
  it('is a constructor', async (t) => {
    t.is(typeof queryParam, 'function');
  });

  it('returns object when called with `url` property on it', async (t) => {
    t.is(typeof queryParam(), 'object');
    t.is(typeof queryParam().url, 'undefined');
    t.is(typeof queryParam('https://github.com').url, 'string');
  });
});
