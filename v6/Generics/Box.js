"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
        console.log(value);
    }
}
const stringBox = new Box("Hello");
var numberBox = new Box(123);
