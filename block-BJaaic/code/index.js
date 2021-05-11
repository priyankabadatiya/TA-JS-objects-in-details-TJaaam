let animalMethods = {
    eat: function() {
        console.log(`I live in ${this.location} and i can eat`);
    },
    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function() {
        console.log(`I live in ${this.location} and i have ${this.numberOfLegs}`);
    },
};


function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}

function createDog(location, numberOfLegs, name, color) {
    let obj = createAnimal(location, numberOfLegs)
    Object.setPrototypeOf(obj, dogsMethods)
    obj.name = name;
    obj.color = color;
    return obj;
}
let dogsMethods = {
    bark() {
        alert(`I am ${this.name} and i can bark 🐶`)
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and i am of ${this.color} color.i can also bark`
    }
}
Object.setPrototypeOf(dogsMethods, animalMethods);

function createDog(location, numberOfLegs, name, colorOfEyes) {
    let obj = createAnimal(location, numberOfLegs)
    Object.setPrototypeOf(obj, catsMethods)
    obj.name = name;
    obj.color = colorOfEyes;
    return obj;
}
let catsMethods = {
    bark() {
        alert(`I am ${this.name} and i can bark 🐶`)
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColor(newColor) {
        this.colorOfEyes = newColor;
        return this.colorofEyes;
    },
    summary() {
        return `I am ${this.name} and i am of ${this.color} color.i can also bark`
    }
}
Object.setPrototypeOf(catsMethods, animalMethods);