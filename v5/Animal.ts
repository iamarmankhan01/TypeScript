class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
 
   speak() {
    console.log("Barking...");
  }
}

var dog = new Dog();
dog.speak();