class Person {
    name!: string;
    get userName() {
        return this.name;
    }
    set userName(name: string) {
        this.name = name;
    }
}
var person = new Person();
person.userName = "mike";
console.log(person.userName);