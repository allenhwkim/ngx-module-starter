# starter package to build Angular5+ libraries

## Tech. Stack
- Jest for unit test
- CodeceptJS for acceptptance
- ng-packagr for module packaging

## Directory Structure
```
.
├── app                  # acceptance test application
│   ├── codecept.json
│   ├── index.html
│   ├── package.json
│   ├── src                  
│   └── tsconfig.json
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
│   ├── package-lock.json
│   └── package.json
├── package.json
└── tslint.json
```

##  Commands
* `npm start` to start the test application
* `npm build` to build modules into a single package
* `npm test` to run module tests and app tests