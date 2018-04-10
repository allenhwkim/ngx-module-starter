# Starter app build a package of Angular5+ libraries

Angular 5 library starter application to create Angular5+ package with multiple modules which makes to import modules from pakcages. e.g. `import {MyModuleOne, MyModuleTwo} from 'my-package';` 

It has two main directories;
1. `app` - to test all of your modules
2. `modules` - each module goes here.

It follows [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview#).

## Tech. Stack
- Jest for unit test
- CodeceptJS for acceptptance
- ng-packagr for module packaging

### Why Jest for unit test, not Mocha/Karma?
- Test runner built-in
- Less configuration
- Faster test running
- Test coverage built-in
- Spies/Mocks(including timers) built-in
- Snapshot testing
- Simple/easy conding style

### Why CodeceptJS for acceptance test, not WebDriver or Nightmare?
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
│   ├── node_modules
│   ├── package.json
│   └── src
├── modules              # angular modules  directory 
│   ├── dist                 # build output directory
│   ├── index.ts      
│   ├── module-one           # module 1
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── src
│   ├── module-two           # module 2
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── src
│   ├── node_modules
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── tslint.json
```

##  Commands

command                    | app directory  | modules directory | each module directory
-------------------------- | -------------- | ----------------- | ---------------------
npm start                  | x              |                   | 
npm run build              | x              | x                 | 
npm test                   | x              | x                 | x
npm test:unit              | x              | x                 | x
npm test:acceptance        | x              |                   | 


## Build output example
```
modules/dist
├── README.md
├── bundles
│   ├── my-library-module-one.umd.js
│   ├── my-library-module-one.umd.min.js
│   ├── my-library-module-two.umd.js
│   ├── my-library-module-two.umd.min.js
│   ├── my-library.umd.js
│   └── my-library.umd.min.js
├── esm2015
│   ├── my-library-module-one.js
│   ├── my-library-module-two.js
│   └── my-library.js
├── esm5
│   ├── my-library-module-one.js
│   ├── my-library-module-two.js
│   └── my-library.js
├── index.d.ts
├── module-one
│   ├── index.d.ts
│   ├── my-library-module-one.d.ts
│   ├── my-library-module-one.metadata.json
│   ├── package.json
│   └── src
│       ├── one.component.d.ts
│       └── one.module.d.ts
├── module-one.tgz
├── module-two
│   ├── index.d.ts
│   ├── my-library-module-two.d.ts
│   ├── my-library-module-two.metadata.json
│   ├── package.json
│   └── src
│       ├── two.component.d.ts
│       └── two.module.d.ts
├── module-two.tgz
├── my-library.d.ts
├── my-library.metadata.json
└── package.json
```
