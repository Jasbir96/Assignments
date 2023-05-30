# Title:
call By Ref call By value


## Description:
**Find output of the following:**
```javascript
 function modifier(a, b) {
    console.log(a, b)
    a = 10;
    b = 20;
    console.log(a, b)
}

let p = [4, 7, 9]
let q = [3, 6, 8]


modifier(p, q)
console.log(p, q)
```
## Options: 
a.) [4,7,9] [3,6,8]
    10 20
    10 20

b.) error
c.) None of the above
d.) [4,7,9] [3,6,8]
    10 20
    [4,7,9] [3,6,8]