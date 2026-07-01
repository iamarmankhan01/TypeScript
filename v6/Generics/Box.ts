class Box<T> {
    constructor(public value: T) {
        console.log(value);
    }
}

const stringBox = new Box<string>("Hello");
var numberBox = new Box<number>(123);