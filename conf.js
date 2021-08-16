var fs = require('fs');
var path = require('path');

var {setDefaultTimeout} = require('cucumber');

//setDefaultTimeout(60 * 1000);


exports.config= {

    directConnect: true,
    specs: ['features/*.feature'],
     framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    getPageTimeout: 600000,
    allScriptsTimeout: 500000,

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: async () => {

       await browser.waitForAngularEnabled(false);
      
    
      
    },

    cucumberOpts: {
        require: 'stepDefinitions/*.js',
        tags: false,
        profile: false,
        'no-source': true
      }

}