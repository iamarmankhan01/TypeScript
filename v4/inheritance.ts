//=================================inheritance========================================

// interface Animal {
//     name: string;
// }

// interface Dog extends Animal {
//     breed: string;
// }

// const dog: Dog = {
//     name: "Buddy",
//     breed: "Golden Retriever"
// };

// console.log(dog.name);
// console.log(dog.breed);

//=================================Multiple inheritance=================================

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Flyable, Swimmable {
  quack(): void;
}
 const duck:Duck={
    fly() {
        console.log("flying......");
        
    },
    swim() {
        console.log("Swimming.......");
        
    },
    quack() {
        console.log("Quack.......");
        
    },
 }
 duck.fly();
 duck.swim();
 duck.quack();