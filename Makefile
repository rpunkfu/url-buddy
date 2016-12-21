NYC		  = node_modules/.bin/nyc
AVA			= node_modules/ava/cli.js
BABEL		= node_modules/babel-cli/bin/babel.js
ESLINT	= node_modules/eslint/bin/eslint.js
CODECOV	= node_modules/codecov/bin/codecov

SRC_DIR = src/
LIB_DIR = lib/

build:
	@$(BABEL) $(SRC_DIR) --out-dir $(LIB_DIR)

start:
	@$(BABEL) $(SRC_DIR) --out-dir $(LIB_DIR) --watch

test:
	@$(AVA) --verbose

lint:
	@$(ESLINT) $(SRC_DIR)

coverage:
	@$(NYC) $(AVA)

codecov: coverage
	@$(NYC) report --reporter=text-lcov > \
		coverage.lcov && $(CODECOV) -e $TRAVIS_NODE_VERSION

.PHONY: build start test lint coverage codecov
