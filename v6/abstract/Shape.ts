abstract class Shape {
    abstract area(): number;
    printArea() {
        console.log(this.area());
    }
}
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
const c = new Circle(5);
c.printArea();
