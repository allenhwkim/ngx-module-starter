#!/usr/bin/env node
if (parseFloat(process.version.substr(1)) < 9.4) {
  console.error('Node version must be greater than 9.4');
  process.exit(1);
}

