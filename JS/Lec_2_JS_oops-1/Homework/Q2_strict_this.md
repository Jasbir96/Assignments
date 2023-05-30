// const cap = {
//     name: "Steve",
//     sayHi:  function(){
//         console.log("53", this.name);
//         function iAmInner(){
//             console.log("55", this.name);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


let cap={
    name:"Steve",
    sayHi:function(){
        console.log("Hi from ", this.name);
    }
}

cap.sayHi();
let sayHiAdd=cap.sayHi;
sayHiAdd();
