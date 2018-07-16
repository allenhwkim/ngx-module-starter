# Angular5+ Library Seed project

Angular 5 library starter application to create Angular5+ package with multiple modules, 
which enablel importing  modules from pakcages. e.g. `import {MyModuleOne, MyModuleTwo} from 'my-package';` 

It has two main directories;
1. `app` - to test all of your modules
2. `lib` - each module goes here.

It follows [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview#).

## Getting Started
```
$ git clone https://github.com/allenhwkim/ngx-module-starter.git <my-package>
$ cd <my-package>
$ rm -rf .git                                  # to remove ngx-module-starter git info
$ vi .angular-cli.json package.json README.md  # edit these files for your package
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

## Directory Structure
```
.
├── app                  # acceptance test application
│   ├── codecept.json
│   ├── index.html
│   └── src
├── codecept.json
├── lib                 # angular modules  directory 
│   ├── index.ts      
│   ├── module-one
│   │   ├── index.ts
│   │   ├── package.json     # to build a separate bundle
│   │   └── src
│   └── module-two
│       ├── index.ts
│       ├── package.json     # to build a separate bundle
│       └── src
├── package.json
├── test                 # test-related setup files
├── tsconfg.json
└── tslint.json
```

##  Commands
* `npm start` to start test application for all modules
* `npm run build` to build library and test application for production
* `npm test` to run tests
* `npm run test:coverage` to see the coverage report
* `npm run lint` to run code linting
* `npm run doc` to generate documentation
