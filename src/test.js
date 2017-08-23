// This file is required by karma.conf.js and loads recursively all the .spec and framework files
"use strict";
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/platform-browser-dynamic/testing');
var tags = __karma__.config.args[0];
// Prevent Karma from running prematurely.
__karma__.loaded = function () { };
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// then we find all the tests.
var filterRegExp = (tags) ? new RegExp(tags, 'g') : /\.spec\.ts$/, context = require.context('./', true, /\.spec\.ts$/), specFiles = context.keys().filter(function (path) { return filterRegExp.test(path); });
// and load the modules.
specFiles.map(context);
// finally, start Karma to run the tests.
__karma__.start();
//# sourceMappingURL=test.js.map