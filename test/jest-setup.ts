/**
 * Jest initial setup actions
 *
 * It also enables the following to all Jest tests
 *  . window.localStorage
 *  . window.sessionStorage
 *  . window.getComputedStyle
 *  . document.doctype
 *  . document.body.style.transform
 *  . MockPipe()
 *  . MockComponent()
 *  . MockDirective()
 */
import 'jest-preset-angular';
import 'jest-zone-patch';

// common rxjs imports
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// ...

const nodeVersion = parseFloat(process.version.substr(1));
if (nodeVersion < 9.4) {
  throw Error('Node version must be greater than 9.4');
}

Error.stackTraceLimit = 2;

global['CSS'] = undefined;

const mock = () => {
  let storage = {};

  return {
    getItem: key => key in storage ? storage[key] : undefined,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {}
  };
};

Object.defineProperty(window, 'localStorage', {value: mock()});

Object.defineProperty(window, 'sessionStorage', {value: mock()});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

