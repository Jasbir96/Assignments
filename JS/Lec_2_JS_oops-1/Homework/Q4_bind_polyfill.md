Q Implement poyfill of bind custom bind ?

solution 
```javascript 

// bind -> function -> copy predefined this
// polyfill 
Function.prototype.customBind = function(obj) {
    obj.fnRef = this;
    return function (...args) {
        obj.fnRef(...args);
    }
}
let abc = {
    name: "Jasbir"
}

let obj = {
    name: "Steve",
    sayHi: function () {
        console.log(this.name, "say's Hi");
        // let boundFn = sayHi.bind(abc);
        function inner() {
            console.log("inside inner", this.name)
        }
        let boundThisFN = inner.myBind(abc);
        // let boundThisFN = inner.myBind(def);
        boundThisFN();
    }
}
obj.sayHi();

// Ie-> functions 