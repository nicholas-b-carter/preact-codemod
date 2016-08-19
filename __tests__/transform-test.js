jest.autoMockOff();

const path = require('path');
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(__dirname, 'transforms/import-declarations', null, 'import-declarations-component');
defineTest(__dirname, 'transforms/import-declarations', null, 'import-declarations-render');
defineTest(__dirname, 'transforms/import-declarations', null, 'import-declarations');
defineTest(__dirname, 'transforms/es6-class', null, 'es6-class');
defineTest(__dirname, 'transforms/props', null, 'props');
defineTest(__dirname, 'transforms/state', null, 'state');

defineTest(__dirname, 'transform', null, 'transform');
defineTest(__dirname, 'transform', null, 'nested');
