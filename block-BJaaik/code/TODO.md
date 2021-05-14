## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    return `This method is eat method`;
  }
  sleep() {
    return `This method is sleep method`;
  }
  walk() {
    return `This method is walk method`;
  }
}

class Player extends Person {
  constructor(sportsName, name, age, gender) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `Hi my name is ${this.name} and I play ${this.sportsName}`;
  }
}
class Cricketer extends Player {
  constructor(teamName, sportsName, name, age, gender) {
    super(sportsName, name, age, gender);
    this.teamName = teamName;
  }

  playCricket() {
    return `From Cricketer class`;
  }
}

class Teacher extends Person {
  constructor(instituteName, name, age, gender) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    return `I am teacher in ${this.insituteName}`;
  }
}

class Artist extends Person {
  constructor(kind, name, age, gender) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    return `I am artist`;
  }
}


