// Multi-line String
const str = 'In Es6 '+ 'Multi-Line String is Okay';
console.log(str);

const str2 = ` In ES6
                Multi-Line is Okay
            `;
console.log(str2);

//Expression interpolation
const firstname = "Narachai";
const lastname = "Phetjarumas";
const date = new Date();
const great = `Hello ${firstname + ' ' + lastname}, is date ${date}`;
console.log(great);