<!-- added -->
Q There’s a ladder object that allows to go up and down:

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
   
  },
  down() {
    this.step--;
  
  },
  showStep: function() { // shows the current step
    alert(this.step);
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```
Modify the code of up, down and showStep to make the calls chainable, like this:
```javascript
ladder.up().up().down().showStep(); // 1
```
Such approach is widely used across JavaScript libraries.




## solution 
```javsscript
let ladder = {
  step: 0,
  up() {
    this.step++;
   return this;
  },
  down() {
    this.step--;
return this ;
  
  },
  showStep: function() { // shows the current step
    alert(this.step);
return this;
  }
};
```
