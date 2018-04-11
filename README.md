# Seed project to build Angular5+ modules

Angular 5 library starter application to create Angular5+ package with multiple modules which makes to import modules from pakcages. e.g. `import {MyModuleOne, MyModuleTwo} from 'my-package';` 

It has two main directories;
1. `app` - to test all of your modules
2. `modules` - each module goes here.

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
├── modules              # angular modules  directory 
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

command                    | main directory  | each module directory
-------------------------- | --------------- | ---------------------
npm start                  | x               |  
npm run build              | x               |  
npm test                   | x               |  x
npm run test:unit          | x               |  
npm run test:acceptance    | x               |  
npm run lint               | x               |  

## Build output example
```
modules/dist
├── README.md
├── bundles
│   ├── my-package-modules-module-one.umd.js
│   ├── my-package-modules-module-one.umd.min.js
│   ├── my-package-modules-module-two.umd.js
│   ├── my-package-modules-module-two.umd.min.js
│   ├── my-package.umd.js
│   └── my-package.umd.min.js
├── esm2015
│   ├── my-package-modules-module-one.js
│   ├── my-package-modules-module-two.js
│   └── my-package.js
├── esm5
│   ├── my-package-modules-module-one.js
│   ├── my-package-modules-module-two.js
│   └── my-package.js
├── index.d.ts
├── module-one
│   ├── index.d.ts
│   └── src
├── module-two
│   ├── index.d.ts
│   └── src
├── modules
│   ├── module-one
│   │   ├── index.d.ts
│   │   ├── my-package-modules-module-one.d.ts
│   │   ├── my-package-modules-module-one.metadata.json
│   │   ├── package.json
│   │   └── src
│   ├── module-one.tgz
│   ├── module-two
│   │   ├── index.d.ts
│   │   ├── my-package-modules-module-two.d.ts
│   │   ├── my-package-modules-module-two.metadata.json
│   │   ├── package.json
│   │   └── src
│   └── module-two.tgz
├── my-package.d.ts
├── my-package.metadata.json
└── package.json
```
