"use strict";
class Person {
    name;
    get userName() {
        return this.name;
    }
    set userName(name) {
        this.name = name;
    }
}
var person = new Person();
person.userName = "mike";
console.log(person.userName);
