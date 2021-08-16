var {Given,When,Then} = require("cucumber");
const { element,by } = require("protractor");
const homePage = require("../modules/homePage.js");

Given('User is on Home Page',{timeout:60*1000},async function(){

    homePage.checkHomePageBanner();
});

Then('Select items on Page',{timeout:60*1000}, async function(){ 
   
   homePage.addItemsToCart();
});

Then('Proceed to CheckOut Page',{timeout:60*1000},async function(){
    homePage.clickOnCheckOut();
});