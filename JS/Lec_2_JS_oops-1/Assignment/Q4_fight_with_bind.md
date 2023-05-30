// Implement bind method below
// thanos has snapped the finger use bind method in such a way that now iron man should be able to snap the finger again !!
let thanos = {
    name:"THANOS",
    snap : function(){
        console.log(`${this.name} snapped the finger and half of the universe ${this.name == "THANOS" ? "disappeared" : "came back"}`);
    }
}
let ironman = {
    name:"IRON MAN"
}
thanos.snap();

// Solution
// let ironManSnap = thanos.snap.bind(ironman);
// ironManSnap();