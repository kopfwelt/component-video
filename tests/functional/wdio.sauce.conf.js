exports.config = {

    /**
     * server configurations
     */
    // host: '0.0.0.0',
    // port: 4444,

    host: 'ondemand.saucelabs.com',
    port: 80,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    /**
     * specify test files
     */
    specs: [
        './tests/functional/specs/**/*.test.js'
    ],
    exclude: [],

    /**
     * capabilities
     */
    // capabilities: [{
    //     browserName: 'firefox'
    // }],

    capabilities: [{
        browserName: 'chrome',
        version: '27',
        platform: 'XP',
        tags: ['examples'],
        name: 'This is an example test'
    }],


    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://kopfwelt.local:9000/',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporter: 'dot',
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }

};