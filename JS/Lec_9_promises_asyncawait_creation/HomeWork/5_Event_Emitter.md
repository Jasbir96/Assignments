# Topic 
Que : Create a Event Emitter Pollyfill 

class Emitter {
    events = new Map();
    subscribe(event, fn) {
        const eventArray = this.events.get(event) || [];
        eventArray.push(fn);
        this.events.set(event, eventArray);
        return () => this.events.set(event, eventArray.filter(f => f !== fn));
    }
    emit(event, payload) {
        const eventArray = this.events.get(event) || [];
        eventArray.forEach(fn => fn(payload))
    }
}