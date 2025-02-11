# Introduction 
This project is taken form ...

Testing Components:
- How they render
- How they respond to user action

    - Slower
    + more confidence
    + more robust

Test Must be:
- maintainable
- robust
- trust worthy

No test > Bad Tests

Testing behavior not implementation


# Use [Istanbul](https://istanbul.js.org) coverage collection with [Playwright Test](https://playwright.dev/docs/test-intro)

This example demonstrates how to use [vite-plugin-istanbul](https://github.com/ifaxity/vite-plugin-istanbul) to collect coverage data during runtime with your end-to-end tests which will be stored on the filesystem. When applying the shown parts, you are able to view the coverage report e.g. as HTML, or convert it to the `lcov`

## Prerequisites

- The web application which you are using needs to have [`vite-plugin-istanbul`](https://github.com/ifaxity/vite-plugin-istanbul) configured during the build process.

## Usage

- Place `baseFixureCoverage.ts` into your test directory. Instead of requiring `@playwright/test` to get the test object, use `baseFixureCoverage.ts`.
- This will collect the corresponding coverage files into the `.nyc_output` directory which can be used from the [Istanbul CLI](https://github.com/istanbuljs/nyc).
- For an example test, see [App.test.ts](/test/checkCount.spec.ts)

## Coverage formats

Helpful commands are the following:

- `npx nyc report --reporter=html` -> Writes an HTML report to `coverage/index.html`.
- `npx nyc report --reporter=lcov` -> commonly used to upload to Coveralls or [Codecov](https://about.codecov.io/).
- `npx nyc report --reporter=text` -> CLI output how the current code coverage per file and statement will look like.

## Used tools

- [vite](https://vitejs.dev/) - tooling and bundling for React
- [vite-plugin-istanbul](https://github.com/ifaxity/vite-plugin-istanbul) - to add coverage information
- [nyc](https://github.com/istanbuljs/nyc) - Istanbul CLI to generate lcov coverage
