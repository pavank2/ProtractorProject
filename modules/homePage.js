var obj = require("../properties/objects.json");

var {element,browser,By} = require("protractor");

var chai = require("chai");

var chaiAsPromised = require("chai-as-promised");
const { protractor } = require("protractor/built/ptor");

chai.use(chaiAsPromised);

var expect = chai.expect;
var EC = protractor.ExpectedConditions;

module.exports = {

checkHomePageBanner: async function(){
    expect(await element(By.css(obj.HomePage.products)).isPresent()).to.equal(true);
    browser.sleep(5000);
},


addItemsToCart: async function(){
 console.log("start");

 await element(by.id(obj.HomePage.backpack)).click();
 //await element(by.css("button[data-test='add-to-cart-sauce-labs-backpack']")).click();
 await element(by.id(obj.HomePage.bikelight)).click();
 await element(by.id(obj.HomePage.checkout)).click();

    console.log("End");
},

clickOnCheckOut: async function(){
    console.log("Click on checkout");

    await browser.sleep(3000);
  await element(By.id(obj.HomePage.checkout)).click();
}
}