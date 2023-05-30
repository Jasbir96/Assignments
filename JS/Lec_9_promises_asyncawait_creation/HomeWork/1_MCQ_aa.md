## Description
Que Find output:

```javascript
async function getData() {
 return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);
```

 ## Option
 a. "I made it!"
 b. Promise {<resolved>: "I made it!"}
 c. Promise {<pending>}
 d. undefined