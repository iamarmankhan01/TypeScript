interface Vehicle {
    start(): void;
}

class Car implements Vehicle {
    start() {
        console.log("Car started....");
    }
}

var car = new Car();
car.start();