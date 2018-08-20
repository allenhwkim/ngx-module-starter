#!/usr/bin/env node
if (parseFloat(process.version.substr(1)) < 10.4) {
  throw Error('Node version must be greater than 9.4');
}

