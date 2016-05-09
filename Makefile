AVA="node_modules/ava/cli.js"
BABEL="node_modules/babel-cli/bin/babel.js"
CODECOV="node_modules/codecov/bin/codecov"
ESLINT="node_modules/eslint/bin/eslint.js"
NYC="./node_modules/.bin/nyc"
SEMANTIC_RELEASE="node_modules/semantic-release/bin/semantic-release.js"

SRC_DIR="src/"
LIB_DIR="lib/"

AVA_FLAGS="--verbose"

ava:
	@$(AVA) $(AVA_FLAGS)

ava-watch:
	@$(AVA) $(AVA_FLAGS) --watch

babel-build:
	@$(BABEL) $(SRC_DIR) --out-dir $(LIB_DIR)

babel-watch:
	@$(BABEL) $(SRC_DIR) --out-dir $(LIB_DIR) --watch

coverage:
	@$(NYC) $(AVA)

coverage-report-html: coverage
	@$(NYC) report --reporter=html

coverage-report-lcov: coverage
	@$(NYC) report --reporter=text-lcov

coverage-report-codecov: coverage
	@make coverage-report-lcov > coverage.lcov && $(CODECOV) -e $TRAVIS_NODE_VERSION

lint:
	@$(ESLINT) $(SRC_DIR)

run-test: lint ava

semantic-release:
	@$(SEMANTIC_RELEASE) pre && npm publish && $(SEMANTIC_RELEASE) post
