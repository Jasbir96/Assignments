Que : What is the output of below code


const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

console.log(sym1 === sym2, sym3 === sym4);


## Options
1: true, true
2: true, false
3: false, true
4: false, false

answer : 3