# Rogers Angular5+ Component Library

## !!!!! THIS IS SUPPOSED TO BE PRIVATE PACKAGE !!!!!!

Common components that used by Retail, Consumer, and all Angular5 applications.

It follows [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview#).

## Getting Started
```
$ npm install rci-components

import {AgentHeaderModule, AgentFooterModule} from 'rci-components'; 
```

##  Commands

  - `npm start` to start test application for all modules
  - `npm run build` to build library and test application for production
  - `npm test` to run tests
  - `npm run test:coverage` to see the coverage report
  - `npm run lint` to run code linting
  - `npm run doc` to generate documentation

## Directory Structure

```
.
├── demo  # application to test all components
│   ├── codecept.json
│   ├── my-first-codecept-test.js
│   ├── index.html
│   └── src
├── src   # angular modules
│   ├── index.ts      
│   ├── jest-setup.ts
│   ├── agent-header
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── src
│   └── module-two
│       ├── index.ts
│       ├── package.json     # to build a separate bundle
│       └── src
├── package.json
├── tsconfg.json
└── tslint.json
```

## Tech. Stack
  - Jest for unit test
  - CodeceptJS for acceptptance
  - ng-packagr for module packaging

### Why Jest for unit test, instead of Mocha/Karma?
  - Test runner built-in
  - Less configuration
  - Faster test running
  - Test coverage built-in
  - Spies/Mocks(including timers) built-in
  - Snapshot testing
  - Simple/easy conding style

### Why CodeceptJS for acceptance test, instead of WebDriver or Nightmare?

  - Automatic sync/wait handling
  - Business-friendly test language(Scenario Driven).
  - Expandalbe to more specific tests()
  - Easy to write test using interactive shell
  - Easy to write/read/maintain test scenarios even for business people.
  - Changable back-end tech stack.(WebdriverIO, Progractor, Puppeteer, etc)
  - Docker-ready
  - Full-stack test ready(REST api test, File system test)

