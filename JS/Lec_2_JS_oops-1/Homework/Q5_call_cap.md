// Implement call method below 
let bucky = {
    name : "bucky",
    team : "Team Cap",
    fight : function(){
        console.log(`Hello avengers this is ${this.name} from ${this.team} lets fight !`);
    }
}
let peter = {
    name : "peter",
    team: "Team Iron Man",
    fight : function(){
        console.log(`Hello avengers this is ${this.name} from ${this.team} lets fight !`);
    }
}
bucky.fight();
peter.fight();

// Solution =>
// let bucky = {
//     name : "bucky",
//     team : "Team Cap",
// }
// let fight = function(){
//     console.log(`Hello avengers this is ${this.name} from ${this.team} lets fight !`);
// }
// let peter = {
//     name : "peter",
//     team: "Team Iron Man",
// }
// fight.call(bucky);
// fight.call(peter);