
var greet1 = function (firstname, lastname){
    return firstname + " " + lastname;
}

console.log(greet1("Narachai", "Phetjarumas"));

var greet2 = (firstname, lastname) => {
    return firstname + " " + lastname;
}
console.log(greet2("Narachai", "Phetjarumas"));

var greet3 = (firstname, lastname) => firstname + " " + lastname; 
console.log(greet3("Narachai", "Phetjarumas"));

var person1 = {
    name : "Luna",

    handleMessage :  (message, handler) => {
        handler(message);
    },

    greet : function () {
        var _this = this;
        this.handleMessage("Hi", function (message) {
            console.log(message + " " + _this.name);
        });
    },

    greet2 : function () {
        this.handleMessage("Hi", (message) => {
            console.log(message + " " + this.name);
        });
    }
};

person1.greet2();