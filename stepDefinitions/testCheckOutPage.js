var {Given,When,Then} = require("cucumber");
const checkOut = require("../modules/checkout.js");


Given('User is on Checkout Page',{timeout:60*1000},async function(){

   checkOut.verifyPageTitle();
});


Then('Remove item from Cart',{timeout:60*1000},async function(){

    checkOut.removeItemFromCart();
 });

 Then('Checkout',{timeout:60*1000},async function(){

    checkOut.proceedToPurchase();
 });