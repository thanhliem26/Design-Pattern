//Observer Pattern (Mô hình người quan sát)

class Observer {
    constructor(name) {
        this.namePick = name;
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.namePick}:::PING:::${JSON.stringify(location)}`)
    }
}

class Subject {
    constructor() {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    notify(location) {
        this.observerList.forEach((observer) => observer.updateStatus(location))
    }
}

const subject = new Subject();

//your pick
const Yorn = new Observer('Yorn');
const Zip = new Observer('Zip');
const Dirak = new Observer('Dirak');

//add yorn and zip to team
subject.addObserver(Yorn);
subject.addObserver(Zip);
subject.addObserver(Dirak);

subject.notify({long: 123, leat: 245})