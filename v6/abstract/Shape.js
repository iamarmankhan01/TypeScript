"use strict";
class Shape {
    printArea() {
        console.log(this.area());
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const c = new Circle(5);
c.printArea();
