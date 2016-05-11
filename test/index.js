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

describe('query-param . valid =>', (it) => {
  it('returns true for valid urls', async (t) => {
    t.true(queryParam('https://github.com').valid);
    t.true(queryParam('https://google.com').valid);
    t.true(queryParam('https://nodejs.org').valid);
  });

  it('returns false for invalid urls', async (t) => {
    t.false(queryParam('obviously I am invalid...').valid);
    t.false(queryParam('https://dude--do-you-even').valid);
    t.false(queryParam('foo https://google.combar').valid);
  });
});
