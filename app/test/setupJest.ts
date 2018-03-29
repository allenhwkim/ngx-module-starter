import 'jest-preset-angular';
 
// common rxjs imports
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// ...
 
import './jestGlobalMocks'; // browser mocks globally available for every test

export {MockComponent, MockDirective, MockPipe} from './mock';

Error.stackTraceLimit = 2;
