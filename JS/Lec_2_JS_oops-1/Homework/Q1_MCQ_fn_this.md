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
Q : Output of this question
const cap = {
    name: "Steve",
    sayHi: function () {
        console.log("53", this.name);
    const iAmInner=()=> {
            console.log("55", this.name);
        }
        iAmInner();
    }
}
// arrow does not bother about it's  
cap.sayHi();
