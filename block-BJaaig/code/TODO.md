## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); //  Hello John, because whenever a function is called, and it  has this in it then this will ponit to the object to the left of it, here the  username in the object is "John"
console.log(user2.sayHello()); // Hello Arya, because whenever a function is called, and it it has this in it then this will ponit to the object to the left of it, here the  username in the object is "Arya"
console.log(user.sayHello.call(user2)); // Hello Arya, because we are attaching the object user2 with user, by using call that is why when we are calling user.sayHello function it is getting acsess to user2 object value.
console.log(user.sayHello.call(user2, "Hey")); // Hello Arya,Hey because  we are attaching the object user2 with user, by using call and call invokes a function with a given this value and arguments.
console.log(user.sayHello.apply(user2, ["Hey"])); //Hello Arya,Hey because  we are attaching the object user2 with user, by using apply and apply invokes a function and allows us to pass the arguments as an array.
console.log(typeof user.sayHello.bind(user2)); // function , because bind returns a new function allowing us to pass an array and any number of arguments.
console.log(user.sayHello.bind(user2)()); // Hello Arya, because bind returns a new function allowing us to pass an array and any number of arguments, and here we are caling that function so it is returning Hello Arya
console.log(userSayHello()); //  Hello undefined, because whenever we are storing a function inside any variable it loses its own this that is why we are getting undefined
console.log(typeof userSayHello.bind(user2)); // function, because bind returns a new function
console.log(userSayHello.bind(user2)()); // Hello Arya, we are binding user2 object to userSayHello, so it the access to the username of user2.
console.log(user3.sayHello()); //  error , because user3 doesnot have access to sayHello function.
console.log(userSayHello.apply(user3)); // Hello Bran, we are binding user3 object to userSayHello, so the username is Bran
console.log(userSayHello.call(user3)); // Hello Bran ,we are attaching user3 object to userSayHello, so the username is Bran
console.log(typeof new MainUser()); // Object, because new create a new object and returns it.
console.log(typeof new MainUser()); // Object, because new create a new object and returns it.
console.log(new MainUser().sayHello()); // Hello Tyrion, because new creates a new  object with the name  "this" and stores the values inside it and returns it, so here  the username is Tyrion.
console.log(new MainUser().sayHello.call(user2)); // Hello Arya, because we are attaching the value of user2 to MainUser using call
console.log(new MainUser().sayHello.call(user)); // Hello John, because we are attaching the value of user to MainUser using call
console.log(new MainUser().sayHello.apply(user, ["Welcome!"])); // Hello Arya, because we are attaching the value of user2 to MainUser using apply.
```
