//Spread Operators
function add(x, y, z){
    return x+y+z;
}

const sum1 = add(1,2,3);
console.log('1|', sum1);

const numbers = [2,4,6];
const sum2 = add(...numbers);
console.log(...numbers);

//Spread Object
var obj1 = {foo : "bar", x:42};
var obj2 = {foo : "baz", y:13};

var cloneObj = {...obj1, ...obj2};
console.log(cloneObj);

var {foo, x, y} = obj1;
console.log(foo, x, y);

