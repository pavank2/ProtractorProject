const { browser, element, by } = require("protractor")

describe ('Chain Selectors demo', function(){
    it ('protractor demo function', function(){

    browser.get("https://juliemr.github.io/protractor-demo/");
    browser.sleep(10);
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();

    element(by.model("first")).sendKeys("2");
    element(by.model("second")).sendKeys("7");
    element(by.id("gobutton")).click();

    element(by.model("first")).sendKeys("4");
    element(by.model("second")).sendKeys("1");
    element(by.id("gobutton")).click();

// element.all(by.repeater("result in memory")).count().then(function(text){
//     console.log(text);
// })

element.all(by.repeater("result in memory")).each(function(item){
  item.element(By.css("td:nth-child(3)")).getText().then(function(text){
    console.log(text);
     })
   })

  })
})