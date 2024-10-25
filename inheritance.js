// Parent class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model); // Call the parent constructor
        this.doors = doors;
    }

    honk() {
        console.log(`${this.make} ${this.model} is honking!`);
    }
}

// Usage
const myCar = new Car('Toyota', 'Corolla', 4);
myCar.start(); // "Toyota Corolla is starting."
myCar.honk();  // "Toyota Corolla is honking!"


