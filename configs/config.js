require('babel-register');
'use strict';

const rmdir = require('rmdir'),
	AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1
    },
    specs: [ '../tests/search.spec.js' ],
	baseUrl: 'https://www.booking.com/',

    directConnect: true,
    allScriptsTimeout: 300000,
    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch() {
        rmdir('./allure-results');
        rmdir('./allure-report');
    },

    onPrepare() {
		browser.manage().timeouts().implicitlyWait(2000);
        jasmine.getEnv().addReporter(new AllureReporter({
        	resultsDir: 'allure-results'
		}));
		jasmine.getEnv().afterEach(async () => {
			await browser.takeScreenshot()
				.then(image => {
				allure.createAttachment('Screenshot', () => new Buffer(image, 'base64'), 'image/png')();
			});
		});
    }
};