function car(){
    this.brand = "BMW";
    this.color = "Red";
    this.engine = "Turbo";

    this.getModel = function(){
        console.log("2021 Model");
    };
};

var c = new car();
c.getModel();