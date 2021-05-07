class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
        this.numberOfTimes = 0;
    }
    description() {
        alert(`The square is ${width} x ${height}`);
    }

    calcArea() {
        return this.width * this.height;
    }

    get area() {
        this.numberOfTimes += 1;
        if (this.numberOfTimes >= 4) {
            return this.calcArea();
        }
    }

    set area(val) {
        this.width = Math.sqrt(val);
        this.height = Math.sqrt(val);
    }

    static isEqual(obj1, obj2) {
        return obj1.width * obj1.height === obj2.width * obj2.height;
    }
}

let square1 = new Square(4);
let square2 = new Square(16);

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + this.lastName;
    }
    set fullName(name) {
        if (name.length <= 5) {
            return alert("Full name should be more than 5 characters");
        } else {
            this.firstName = name.split(" ")[0];
            this.lastName = name.split(" ")[1];
        }
    }
    nameContains(str) {
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
}