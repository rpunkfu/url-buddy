import _ from 'lodash';
import { describe } from 'ava-spec';
import { queryParam } from '../src';

describe('queryParam =>', (it) => {
  it('returns filled object when called with proper `url`', async (t) => {
    t.true(_.isObject(queryParam()));
    t.false(_.isEmpty(queryParam('https://github.com')));
  });
});

describe('queryParam . hash =>', (it) => {
  it('returns hosts for valid urls', async (t) => {
    t.is(queryParam('https://google.de#Hey-oo!').hash, 'Hey-oo!');
    t.is(queryParam('http://133.12.43.23#foo?bar=baz').hash, 'foo');
    t.is(queryParam('ftp://133.12.4.23#').hash, '');
  });
});

describe('queryParam . host =>', (it) => {
  it('returns hosts for valid urls', async (t) => {
    t.is(queryParam('https://google.de:32000').host, 'google.de:32000');
    t.is(queryParam('http://133.12.43.23:222').host, '133.12.43.23:222');
    t.is(queryParam('ftp://133.12.4.23:19000').host, '133.12.4.23:19000');
  });
});

describe('queryParam . hostname =>', (it) => {
  it('returns hostnames for valid urls', async (t) => {
    t.is(queryParam('https://google.de:32000').hostname, 'google.de');
    t.is(queryParam('http://133.12.43.23:222').hostname, '133.12.43.23');
    t.is(queryParam('ftp://133.12.4.23:19000').hostname, '133.12.4.23');
  });
});

describe('queryParam . pathname =>', (it) => {
  it('returns pathname for urls', async (t) => {
    t.is(queryParam('https://github.com:100/rpunkfu#hi').pathname, '/rpunkfu');
    t.is(queryParam('http://fb.com/user/likes?a=b#c').pathname, '/user/likes');
    t.is(queryParam('ftp://11.12.42.23/api/users/1').pathname, '/api/users/1');
  });
});

describe('queryParam . port =>', (it) => {
  it('returns port for valid urls', async (t) => {
    t.is(queryParam('https://google.de:32000').port, '32000');
    t.is(queryParam('http://133.12.43.23:222').port, '222');
    t.is(queryParam('ftp://133.12.4.23:19000').port, '19000');
  });
});

describe('queryParam . protocol =>', (it) => {
  it('returns protocol for valid urls', async (t) => {
    t.is(queryParam('https://google.de').protocol, 'https');
    t.is(queryParam('http://github.com').protocol, 'http');
    t.is(queryParam('ftp://133.12.4.23').protocol, 'ftp');
  });
});

describe('queryParam . query =>', (it) => {
  it('returns query as an object for passed url', async (t) => {
    t.deepEqual(queryParam('https://google.com/?user1=morty#admin').query,
      { user1: 'morty', admin: true });
    t.deepEqual(queryParam('https://github.com/tj?tab=repositories').query,
      { tab: 'repositories' });
    t.deepEqual(queryParam('https://facebook.com?').query, {});
  });
});

describe('queryParam . url =>', (it) => {
  it('returns exactly the same url as passed to queryParam', async (t) => {
    t.is(queryParam('https://github.com').url, 'https://github.com');
    t.is(queryParam('https://google.com').url, 'https://google.com');
    t.is(queryParam('https://nodejs.org').url, 'https://nodejs.org');
  });
});

describe('queryParam . valid =>', (it) => {
  it('returns true for valid urls', async (t) => {
    t.true(queryParam('https://github.com').valid);
    t.true(queryParam('https://google.com').valid);
    t.true(queryParam('https://nodejs.org').valid);
  });

  it('returns false for invalid urls', async (t) => {
    t.false(queryParam('obviously I am invalid...').valid);
    t.false(queryParam('https://dude--do-you-even').valid);
  });
});
