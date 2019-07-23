//file not transpiled, must use commonJS and ES5

//Register bable to transpile before our test run
require('babel-register')();

//disables webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};

