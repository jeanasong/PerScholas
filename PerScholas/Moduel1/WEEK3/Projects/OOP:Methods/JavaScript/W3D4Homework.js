// Create a function that accepts two inputs (name and age)
// and returns an object. Let's call this function makePerson. This function will:
// Create an empty object
// Add a name property to the newly created object with its value being
// the name argument passed into the function
// Add an age property to the newly created object with its
// value being the "age" argument passed into the function
// Return the object

  function makePerson(name, age) {//added name property and age property
    return {
      name : name,
      age : age,
    }
  }
  const vicky = makePerson('Vicky', 24);
  console.log(vicky.name);
  console.log(vicky.age);
  
  /*******************************/
  // Inside personStore object, create a property greet
  //  where the value is a function that logs "hello".
  
  const personStore = {
    greet(){  //greet is property of personStore object
    return console.log('hello');
  }
  };
  
  personStore.greet();
  
  /*******************************/
  //Create a function personFromPersonStore that takes as input a
  // name and an age. When called, the function will create person objects
  // using the Object.create method on the personStore object.
  
  const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  function personFromPersonStore(name, age) {
  
    const person = Object.create(personStore);//Object.create method on personStore. personStore is proto
       person.name = name; //takes name and age as input
       person.age = age;
         return person; //returns person
     }
  
  const sandra = personFromPersonStore('Sandra', 26);
  console.log(sandra.name);
  console.log(sandra.age);
  sandra.greet();
  /****************************/
  // Without editing the code you've already written, add an
  // introduce method to the personStore object that
  // logs "Hi, my name is [name]".
  
  const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
    personStore.introduce = function () { // introduce method added to personStore and
     console.log(`Hi, my name is ${this.name}`);//function prints  `hi ${this.name}`
    }
  sandra.introduce();
  
  /********************************************/
  // Create a function PersonConstructor that uses the this
  // keyword to save a single property onto its scope called greet.
  // greet should be a function that logs the string "hello".
  
  function PersonConstructor(greet) {
  
   this.greet = function(){ //create this.greet and function property print hello
     console.log("hello");// rewrite this.greet = () = > { console.log('hello') }
   }
  }
  const simon = new PersonConstructor();
  
  simon.greet();
  /********************************************/
  // Create a function personFromConstructor that takes as
  // input a name and an age. When called, the function will
  // create person objects using the new keyword instead
  //  of the Object.create method.
  
  function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  function personFromConstructor(name, age) {
  
    const name1 = new PersonConstructor(name,age);//created new object takes name and age
    name1.name = name;
    name1.age = age;
    return name1;
  }
  const mike = personFromConstructor('Mike', 30);
  
  console.log(mike.name);
  console.log(mike.age);
  mike.greet();
  /********************************************/
  // Without editing the code you've already written,
  //  add an introduce method to the PersonConstructor function
  //   that logs "Hi, my name is [name]".
  
  function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
  }
  
  const mike = personFromConstructor('Mike', 30);
  
  PersonConstructor.prototype.introduce = function (){//added introduce function to PersonConstructor. prototype helps us to do that
  
    console.log(`Hi, my name is ${this.name}`);
  }
  
  mike.introduce();
  /********************************************/
  // Create a class PersonClass. PersonClass should have
  // a constructor that is passed an input of name and saves
  // it to a property by the same name. PersonClass should also
  // have a method called greet that logs the string "hello".
  
  class PersonClass {
      constructor(name) { //name attribute added with same name
        this.name = name;
      }
      greet(){ //greet method added prints hello
      console.log('hello')
    }
  }
  const george = new PersonClass('George');
  
  george.greet();
  
  /********************************************/
  // Create a class DeveloperClass that creates objects
  // by extending the PersonClass class. In addition to having
  // a name property and greet method, DeveloperClass should have an
  // introduce method. When called, introduce should log the
  // string "Hello World, my name is [name]".
  class PersonClass {
      constructor(name) {
      this.name = name;
      }
      greet() {
      console.log('hello');
    }
  }
  class DeveloperClass extends PersonClass { //created a DeveloperClass class. used extends 'keyword'. create a class that is a child of another class.
      constructor(name) {
          super(name); // The super keyword used to call functions on a parent object.
      }
      introduce() {
          console.log(`Hello World, my name is ${this.name}`);
      }
  }
  
  const thai = new DeveloperClass('Thai', 32);
  
  console.log(thai.name);
  thai.introduce();