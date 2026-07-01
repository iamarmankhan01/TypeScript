"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var person = new Person("mike", 20);
console.log(person.name);
console.log(person.age);
