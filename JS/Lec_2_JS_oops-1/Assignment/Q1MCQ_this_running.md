let cap={
    name:"Steve",
    sayHi:function(){
        console.log("Hi from ", this.name);
    }
}

cap.sayHi();
let sayHiAdd=cap.sayHi;
sayHiAdd();


