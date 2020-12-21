 class Person {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  }
  const jean = new Person("Chelsea", 2012, "blue", "champion league");
  console.log(jean);
  jean.setHair("pink")
  console.log(jean); 

  //const you = new Person('Matt', 36, 'blue', 'blonde');
  //console.log(you);
  //you.setHair('red');
  //console.log(you);



  // Morning Lab
  // vending machine

  // When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

 class Snacks {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
let chips = new Snacks("Candy", 5);
let chip = new Snacks("lays", 3);
let chipist = new Snacks("doritoes", 2);
let food = [chips, chip, chipist];

 class VendingMachine {
    constructor(snacks) {
      this.snacks = snacks;
    }
    vend(x) {
      return this.snacks[x]
    }
}
 vendingMachine = new VendingMachine(food);
console.log(vendingMachine.vend(1)); 

 class vendingMachine {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  vend(x) {
    return `You bought ${this.name[x]}` + ` for ${this.price[x]}.`;
  }
}
vendingMachine = new vendingMachine(['Candy', 'Pop', 'chips'], [2,4,3]);
console.log(vendingMachine.vend(0));

//***********************

// Homework

  class Circle {
  constructor(radius) {
    this.radius = radius;
  } 
  circle_area() {
     // return this.radius * this.radius * 3.14;
     return Math.pow(this.radius,3)*3.14
    }
  }
  const smallCircle = new Circle(15);
  console.log(smallCircle.circle_area());


  // Second way

  class Circle{
    constructor(radius){
      this.radius = radius;
    }
    circle_area(){
      return (Math.PI * Math.pow(this.radius,2));
    }
    total_sides(){
      console.log("Total sides of Circle: 0");
    }
  }

let circle = new Circle(5);
console.log(circle.circle_area()); 

//////////


 let hotelCalifornia = {
  name: 'Hotel California',
  location: 'California',
  rating: 4,
  vacancies: true,
  tags: ['pink champagne', 'wine', 'lovely', 'can\'t leave'],
  rooms: [{

    'roomNumber': 102,
    'size': 'Queen Double',
    'price': 55,
    'booked': true
},
{
    'roomNumber': 202,
    'size': 'King Suite',
    'price': 68,
    'booked': false
},
{
    'roomNumber': 404,
    'size': 'Queen Double',
    'booked': false
}
  ]
}; 

/////

class Person {
  constructor() {
    this.firstName = "Orion",
    this.lastName = "Sirus"
  }
  getFullName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
  }
  greet(otherPerson) {
    console.log(`hi ${otherPerson}`)
  }
}

const me = new Person();
console.log(me);
