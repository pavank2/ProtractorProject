var {element, browser, By} = require("protractor");
//const { protractor } = require("protractor/built/ptor");
var obj = require("../properties/objects.json");

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

var EC = protractor.ExpectedConditions;

module.exports = {

    navigateToURL:async function(site){
       await browser.get(site);
       await browser.sleep(2000);
       await browser.driver.manage().window().maximize();
    },

    verifyTitle: async function(){
        await browser.sleep(2000);
        var title = document.title;
        expect(title).to.equal('Swag Labs');
      // expect(title).to.eventually.equal(expectedTitle);
    },

    enterCredentials: async function(user,pass){
        await browser.sleep(2000);
        await element(By.name(obj.LoginPage.username)).sendKeys(user);
        await element(By.name(obj.LoginPage.password)).sendKeys(pass);
        
      console.log("Flow was here");

    },

    clickOnLogin: async function(){
        await element(By.name(obj.LoginPage.login)).click().then(function(){
             browser.sleep(5000);
        });
    },

    verifyTitleOfHomePage: async function(){
      let str1 = document.title;
      console.log("Title:"+str1);
      expect(str1).to.equal('Swag Labs');

    }   


}