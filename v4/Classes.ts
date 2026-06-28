// class Person {
//     name: string; //instance or non-static variable
//     constructor(name: string){
//         this.name = name;
//     }
//     greet():void{
//         console.log(this.name);

//     }
// }

// var person = new Person("mike");
// person.greet();

//********************************************************** */
//===============================public(default)==============================

// class Person {
//     public name: string;  //instance or non-static variable can access anywhere
//     constructor(name: string){
//         this.name = name;
//     }
//     greet():void{
//         console.log(this.name);

//     }
// }

// var person = new Person("mike");
// person.greet();
// console.log(person.name); //Correct

//===============================private========================================

// class Person {
//     private name: string; //instance or non-static variable can access anywhere
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet(): void {
//         console.log(this.name);

//     }
// }

// var person = new Person("Raim");
// person.greet();
// //*console.log(person.name); //In correct

//===============================Protected========================================


// class Person {
//     protected name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Employee extends Person {
//     display() {
//         console.log(this.name); // ✅ Allowed
//     }
// }

// const e = new Employee("Ram ");
// e.display();

// //console.log(e.name); // ❌ Error

/*
//-------------------------------------------------------------------------------------------
class Example {
    public a = 1;
    protected b = 2;
    private c = 3;
}

class Child extends Example {
    test() {
        console.log(this.a); // ✅
        console.log(this.b); // ✅
        console.log(this.c); // ❌
    }
}

const obj = new Example();

console.log(obj.a); // ✅
console.log(obj.b); // ❌
console.log(obj.c); // ❌
//-----------------------------------------------------------------------------------------------
*/