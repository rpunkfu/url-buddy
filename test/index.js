import _ from 'lodash';
import { describe } from 'ava-spec';
import urlBuddy from '../src';

describe('urlBuddy\t\t=>', (it) => {
  it('returns filled object when called with proper `url`', async (t) => {
    t.true(_.isObject(urlBuddy()));
    t.false(_.isEmpty(urlBuddy('https://github.com')));
  });
});

describe('urlBuddy . hash\t=>', (it) => {
  it('returns hosts for valid urls', async (t) => {
    t.is(urlBuddy('https://google.de#Hey-oo!').hash, 'Hey-oo!');
    t.is(urlBuddy('http://133.12.43.23#foo?bar=baz').hash, 'foo');
    t.is(urlBuddy('ftp://133.12.4.23#').hash, '');
  });
});

describe('urlBuddy . host\t=>', (it) => {
  it('returns hosts for valid urls', async (t) => {
    t.is(urlBuddy('https://google.de').host, 'google.de');
    t.is(urlBuddy('http://133.12.43.23:222').host, '133.12.43.23:222');
    t.is(urlBuddy('ftp://133.12.4.23:19000').host, '133.12.4.23:19000');
  });
});

describe('urlBuddy . hostname\t=>', (it) => {
  it('returns hostnames for valid urls', async (t) => {
    t.is(urlBuddy('https://google.de:32000').hostname, 'google.de');
    t.is(urlBuddy('http://133.12.43.23:222').hostname, '133.12.43.23');
    t.is(urlBuddy('ftp://133.12.4.23:19000').hostname, '133.12.4.23');
  });
});

describe('urlBuddy . pathname\t=>', (it) => {
  it('returns pathname for urls', async (t) => {
    t.is(urlBuddy('https://github.com:100/rpunkfu#hi').pathname, '/rpunkfu');
    t.is(urlBuddy('http://fb.com/user/likes?a=b#c').pathname, '/user/likes');
    t.is(urlBuddy('ftp://11.12.42.23/api/users/1').pathname, '/api/users/1');
  });
});

describe('urlBuddy . port\t=>', (it) => {
  it('returns port for valid urls', async (t) => {
    t.is(urlBuddy('https://google.de:32000').port, '32000');
    t.is(urlBuddy('http://133.12.43.23:222').port, '222');
    t.is(urlBuddy('ftp://133.12.4.23:19000').port, '19000');
  });
});

describe('urlBuddy . protocol\t=>', (it) => {
  it('returns protocol for valid urls', async (t) => {
    t.is(urlBuddy('https://google.de').protocol, 'https');
    t.is(urlBuddy('http://github.com').protocol, 'http');
    t.is(urlBuddy('ftp://133.12.4.23').protocol, 'ftp');
  });
});

describe('urlBuddy . query\t=>', (it) => {
  it('returns query as an object for passed url', async (t) => {
    t.deepEqual(urlBuddy('https://google.com/?user1=morty#admin').query,
      { user1: 'morty', admin: true });
    t.deepEqual(urlBuddy('https://github.com/tj?tab=repositories').query,
      { tab: 'repositories' });
    t.deepEqual(urlBuddy('https://facebook.com?').query, {});
  });
});

describe('urlBuddy . url\t=>', (it) => {
  it('returns exactly the same url as passed to urlBuddy', async (t) => {
    t.is(urlBuddy('https://github.com').url, 'https://github.com');
    t.is(urlBuddy('https://google.com').url, 'https://google.com');
    t.is(urlBuddy('https://nodejs.org').url, 'https://nodejs.org');
  });
});

describe('urlBuddy . valid\t=>', (it) => {
  it('returns true for valid urls', async (t) => {
    t.true(urlBuddy('https://github.com').valid);
    t.true(urlBuddy('https://google.com').valid);
    t.true(urlBuddy('https://nodejs.org').valid);
  });

  it('returns false for invalid urls', async (t) => {
    t.false(urlBuddy('obviously I am invalid...').valid);
    t.false(urlBuddy('https://dude--do-you-even').valid);
  });
});
