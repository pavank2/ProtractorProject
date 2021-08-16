const { browser, element, By, by } = require("protractor")

describe ('Chain Selectors demo', function(){
    it ('protractor demo function', function(){

    browser.get("https://juliemr.github.io/protractor-demo/");
    browser.sleep(10);
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();
    element(by.repeater("result in memory")).element(By.css("td:nth-child(3)")).getText().then(function(text){
          console.log(text);
      })
    })
})