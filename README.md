# url-buddy

[![Build Status](https://travis-ci.org/rpunkfu/url-buddy.svg?branch=master)](https://travis-ci.org/rpunkfu/url-buddy)
[![codecov.io](https://codecov.io/github/rpunkfu/url-buddy/coverage.svg?branch=master)](https://codecov.io/github/rpunkfu/url-buddy?branch=master)
[![npm version](https://badge.fury.io/js/url-buddy.svg)](https://www.npmjs.com/package/url-buddy)
[![Twitter Follow](https://img.shields.io/twitter/follow/rpunkfu.svg?style=social)](https://twitter.com/rpunkfu)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/rpunkfu/url-buddy) 
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](https://github.com/rpunkfu/url-buddy)

## Install

```bash
$ npm install --save url-buddy
```

## Usage

```js
import urlBuddy from 'url-buddy';

const parsedUrl = urlBuddy('https://github.com:32199/users/tj#foo?bar=baz#qux');

parsedUrl.hash     // 'foo'
parsedUrl.host     // 'github.com:32199'
parsedUrl.hostname // 'github.com'
parsedUrl.pathname // '/users/tj'
parsedUrl.port     // '32199'
parsedUrl.protocol // 'https'
parsedUrl.query    // { bar: 'baz', qux: true }
parsedUrl.url      // 'https://github.com:32199/users/tj#foo?bar=baz#qux'
parsedUrl.valid    // true
```

## License

MIT © [Oskar Cieslik](https://tldrlegal.com/license/mit-license)
