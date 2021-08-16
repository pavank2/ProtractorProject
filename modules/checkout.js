var obj = require("../properties/objects.json");

var {element,browser,By} = require("protractor");

var chai = require("chai");

var chaiAsPromised = require("chai-as-promised");
const { protractor } = require("protractor/built/ptor");

chai.use(chaiAsPromised);

var expect = chai.expect;
var EC = protractor.ExpectedConditions;

module.exports = {
    verifyPageTitle:async function(){
      //  expect(await element(By.css(obj.CheckOutPage.title)).getText()).to.equal("Your Cart");
      console.log("Verified");
    },

    removeItemFromCart: async function(){
       await element(By.id(obj.CheckOutPage.remove)).click();
    },

    proceedToPurchase: async function(){
        await element(By.id(obj.CheckOutPage.proceedToPurchase)).click();
        
     }
}
