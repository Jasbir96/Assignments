# Q1: Create a fn flatten that takes an array and returns a single flatten array of values , regardless of how many nested arrays are  in the input array
## Input
```javascript
let arr=[1,2,3,[4,5],[6,7,8,[9,10,11]]];
``` 
## output

```javascript
[1,2,3,4,5,6,7,8,9,10,11];
```

```javascript
function flatten(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Array.isArray(element)) {
            let parentArr = flatten(element);
            newArr = [...newArr, ...parentArr]
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(flatten([1,2,[3,4,[5]]]);
