// Morning lab
//1-  Create a class called Fish
//1-a Define a method Swim()

 class Fish {
    swim (){
      console.log("The sailfish is the fastest fish in the world – able to swim at a speed of 68mph");
    }
  }
  const fish = new Fish (2);
  fish.swim();
  console.log(fish);

// 1-b Create a class Nemo that inherits from Fish
// Define an attribute color
// 1-c Create a Nemo object. Can it swim?

class Nemo  {
    constructor(color) {
    this.color = color;
    }
    swim(){
      console.log("The sailfish is the fastest fish in the world – able to swim at a speed of 68mph");
    }
    canItSwim(){
      this.swim = true;
      }
    }

    const nemo = new Nemo("blue");
    nemo.swim();
    nemo.canItSwim("");
    console.log(nemo); 

// 2- Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?
//Interfaces can't have any concrete implementations.Abstract base classes can

// ***************************
// Afternoon lab
//1- Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class

  class Animal {//created animal class with 5 attribute
    constructor(name,age, color, legs, superPower) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
      this.superPower = superPower;
    }
    userSuperPower(){
      return `${this.name} can ${this.superPower}`;//three method created
    }
    breed(){
     return `Breed is not available`;
    }
    runningPower(){
      return `${this.name} runs 5 mph`;
  }
  }
  var animal = new Animal ("Cow",3,"blue",4,"speak");
  console.log(animal.userSuperPower());
  console.log(animal.runningPower());
  console.log(animal.breed());
  console.log(animal);
  
  var animal1 = new Animal ("Donkey",4,"grey", 7, "swim")
  console.log(animal1.userSuperPower());
  console.log(animal1.runningPower());
  console.log(animal1.breed());
  console.log(animal1);
  
  var animal2 = new Animal ("Monkey",8,"black",9,"fly")
  console.log(animal2.userSuperPower());
  console.log(animal2.runningPower());
  console.log(animal2.breed());
  console.log(animal2); 

// 2-Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class

 class User {
    constructor(firstName, lastName, department) {//3 attributes
      this.firstName =  firstName;
      this.lastName = lastName;
      this.department = department;
    }
    changeDepartment(){//method name
     return `${this.firstName} ${this.lastName} used to work at ${this.department} department`
    }
  }
  
  var user = new User ('Serkan','Sonmez','Finance');//instances //instantination
  console.log(user.changeDepartment());
  var user1 = new User ('Ashleigh', 'Wray','Fire')
  console.log(user1.changeDepartment());
  new user2 = new User ('George','Orwell','Public Service') 


  /////////******** 

  class Animal {
    constructor(name, age, color, legs, superPower) {
      this.name = name,
      this.age = age,
      this.color = color,
      this.legs = legs,
      this.superPower = superPower;
    }

    userSuperPower(){
      console.log('my supe power is: ' + this.superPower);
    }
    sleep() {
      console.log(this.name + ' needs some sleep!');
    }
    play() {
      console.log(this.name + ' needs to play');
    }
  }

  const cat = new Animal('cat', 2, 'brown', 4, 'fight');
  console.log(cat);
  cat.userSuperPower();


  const dog = new Animal()
  console.log(dog);
  cat.userSuperPower();
  dog.sleep();
  dog.play();

////////


class User{
  constructor(FirstName, lastName, department) {
    this.FirstName = FirstName,
    this.lastName = lastName,
    this.department = department;
  }
  changeDepartment(newDepartment){
    this.newDepartment = newDepartment;

  }
}

const userA = new User('uA_FN', 'uA_LN', 'HR');
console.log(userA)
userA.changeDepartment('PD')
console.log(userA)

const userB = new User('uA_FN', 'uA_LN', 'PD');
console.log(userB);
userA.changeDepartment('CEO')
console.log(userB);
userA.changeDepartment('PH')

const userC = new User('uA_FN', 'uA_LN', 'CEO');
console.log(userC);
userA.changeDepartment('HR')
console.log(userC);