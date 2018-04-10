# starter package to build Angular5+ libraries

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

