let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    specs: ['suites/*.js'],
    jasmineNodeOpts: {defaultTimeoutInterval: 600000},
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        }
    },
    onPrepare: function () {
        const config = require('./my_config')
        require('jasmine-expect');
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        })
        )
    }
}
