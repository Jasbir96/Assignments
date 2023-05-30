# Title:
outer scope 


## Description:
**Find output of the following:**

```javascript
var varName = 10;
function b() {
    console.log(varName);
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);
} fn();
```
## Options: 
a.) error
b.) 20 20 
c.) 10 20
d.)  20 10