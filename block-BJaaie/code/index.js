function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

Animal.prototype = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`);
    },

    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },

    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    },
};

function Dog(name, color) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}

Dog.prototype = {
    bark: function() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
};

function Cat(name, colorOfEyes) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

Cat.prototype = {
    meow: function() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },
};

//Class

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }

    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }

    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

class Dog extends Animal {

    super(location, numberOfLegs)
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

class Cat {
    constructor(name, colorOfEyes) {
        super(location, numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }

}