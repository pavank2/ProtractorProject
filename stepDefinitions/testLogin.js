var {Given,Then,When,And} = require("cucumber");
const loginModule = require("../modules/login.js");

Given('Navigate to specified url',{timeout: 60*1000}, async function(){
    await loginModule.navigateToURL("http://www.saucedemo.com");
});

Then('Verify the title in the navigated page',{timeout: 60*1000},async function(){
    await loginModule.verifyTitle("Swag Labs");
});

Then('Enter credentials',{timeout:60*1000},async function(){
    await loginModule.enterCredentials("standard_user","secret_sauce");
});

Then('Click on Login', {timeout:60*1000},async function() {
     await loginModule.clickOnLogin();
  });

Then('Verify Title of Home Page',{timeout:60*1000},async function(){
    await loginModule.verifyTitle();
});

