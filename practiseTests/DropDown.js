const { browser, element, by } = require("protractor")

describe ('DropDown', function(){

    function calc(a,b,c){
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");

    element.all(by.tagName("option")).each(function(item){
        item.getAttribute("value").then(function(oper){
            
           if (oper == c){
            console.log(c);
            item.click();
           }
            
        })
    })

    element(by.id("gobutton")).click();

    }
   

    it ('protractor demo function', function(){

      browser.get("https://juliemr.github.io/protractor-demo/");
      calc(3,5,'MULTIPLICATION');
      calc(3,5,'ADDITION');

    
      })
    
    })
    