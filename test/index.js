import _ from 'lodash';
import { describe } from 'ava-spec';
import { queryParam } from '../src';

describe('queryParam =>', (it) => {
  it('returns filled object when called with proper `url`', async (t) => {
    t.true(_.isObject(queryParam()));
    t.false(_.isEmpty(queryParam('https://github.com')));
  });
});

describe('queryParam . host =>', (it) => {
  it('returns hosts for valid urls', async (t) => {
    t.is(queryParam('https://github.com').host, 'github.com');
    t.is(queryParam('https://google.com').host, 'google.com');
    t.is(queryParam('https://nodejs.org').host, 'nodejs.org');
  });

  it('returns undefined for invalid urls', async (t) => {
    t.is(queryParam('obviously I am invalid...').host, undefined);
    t.is(queryParam('https://dude--do-you-even').host, undefined);
  });
});

describe('queryParam . hostname =>', (it) => {
  it('returns hostnames for valid urls', async (t) => {
    t.is(queryParam('https://google.de:32000').hostname, 'google.de:32000');
    t.is(queryParam('http://133.12.43.23:222').hostname, '133.12.43.23:222');
    t.is(queryParam('ftp://133.12.4.23:19000').hostname, '133.12.4.23:19000');
  });

  it('returns undefined for invalid urls', async (t) => {
    t.is(queryParam('obviously I am invalid...').hostname, undefined);
    t.is(queryParam('https://dude--do-you-even').hostname, undefined);
  });
});

describe('queryParam . port =>', (it) => {
  it('returns port for valid urls', async (t) => {
    t.is(queryParam('https://google.de:32000').port, '32000');
    t.is(queryParam('http://133.12.43.23:222').port, '222');
    t.is(queryParam('ftp://133.12.4.23:19000').port, '19000');
  });

  it('returns undefined for invalid urls', async (t) => {
    t.is(queryParam('obviously I am invalid...').port, undefined);
    t.is(queryParam('https://dude--do-you-even').port, undefined);
  });
});

describe('queryParam . protocol =>', (it) => {
  it('returns protocol for valid urls', async (t) => {
    t.is(queryParam('https://google.de').protocol, 'https');
    t.is(queryParam('http://github.com').protocol, 'http');
    t.is(queryParam('ftp://133.12.4.23').protocol, 'ftp');
  });

  it('returns undefined for invalid urls', async (t) => {
    t.is(queryParam('obviously I am invalid...').protocol, undefined);
    t.is(queryParam('https://dude--do-you-even').protocol, undefined);
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
