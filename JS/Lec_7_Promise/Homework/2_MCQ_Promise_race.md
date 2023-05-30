Q Choose the correct option

```JavaScript
const firstPromise = new Promise((res, rej) => {
 setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
 setTimeout(res, 100, 'two');
});
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

## Options
a. "one"
b. "two"
c. "two" "one"
d. "one" "two"