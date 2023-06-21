## Problem Description
Write the code fetch content of two files using  fetchByCb() method serially 
You will be getting names of two files 


## Solution
```javascript
console.log("Before");
// async function 
// let content = fetchByCb("f1.txt");
// callback hell
console.log("F1 read sent");
fs.readFile("../f1.txt", cb1);
// your work is completed
function cb1(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
        console.log("F3 read sent");
        // start next task
        fs.fetchByCb("../f3.txt", cb2);
    }
}
function cb2(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
        console.log("F4 read sent");
    }
}

console.log("After");