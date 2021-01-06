// work challange

// challange 1
// Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
// for loop
 const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if(timesTenIfOverFive[i]>=5){
    timesTenIfOverFive[i]=timesTenIfOverFive[i]*10;
    }
}
console.log(timesTenIfOverFive); // result [230, 90, 110, 2, 100, 60]

// You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum.
// If it exists, reassign the value of found to 1.
//for... in loop

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let found = 0;
  // ADD CODE HERE
  
  for (let prop in checkObj) {
    // compare with the property name
    if(prop === 'foundNum') {
      // if found then update the boolean value
      found = 1;
      // you can now break the for loop since property already found
      break;
    } 
  }
  
  // based on the boolean value show your message
  console.log( found ? 'Found' : 'Not found');

// challange 2
// use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray.
// Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6.
// If so, reassign the value of divBy6 to true.

  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;

 // ADD CODE HERE

 const objToArray = Object.values(checkObj);
console.log(objToArray, `objToArray`);

for (let i = 0; i < objToArray.length; i += 1) {
  if (objToArray[i]  % 6 === 0) {
    divBy6 = true;
  }
}
console.log(`divBy6 is ${divBy6}`); 
// expected output
[['loop0', 0], ['loop1', 1], ['loop2', 2], ['loop3', 3], ['loop4', 4]] [['loop0', 0], ['loop1', 1], ['loop2', 2], ['loop3', 3], ['loop4', 4]]

// challange 3
// You are provided with an array, possibleIterable.
// Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three.
// The value of each key should be the array index at which that key can be found in possibleIterable.

 const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i < possibleIterable.length; i++) {
   if (possibleIterable[i] % 3 === 0){
     divByThree[possibleIterable[i]] = i
   }
};

console.log(divByThree)
// expected output
// {3: 1, 6: 3, 9: 2 }


// challange 3
// You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0.
// Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.

 const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 15;
  // ADD CODE HERE
  for(sumMe in total)
    if(sumMe === total){
  }
  console.log(total)
  // expected output
  // 15 

 // Challenge 4
// Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface').
// Then console.log fourthItem to see the output.

 const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
// ADD CODE HERE
let fourthItem = 'Ghostface';

// Write a console.log statement below to check your work!
console.log(fourthItem);
// expected output 
// 'Ghostface' 

// Challange 5
// Use a built-in JavaScript method to add another show to the netflixShows array.
// Then log your updated array to the console.

 const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("Black Panter")

// Write a console.log statement below to check your work!
console.log(netflixShows)
// expected output
// ['Orange is the New Black', 'Black Mirror', 'Chewing Gum', 'Black Panter'] 

// Challange

// 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.
// 2. Use a second for loop to iterate through the greetings and console.log() each greetings.

 const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++) {
  let newString = "Have a "+ synonyms[i] + " day!";
  greetings.push(newString);
}

console.log(greetings);

// expexted output
['Have a fantastic day!', 'Have a wonderful day!', 'Have a great day!']

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// ADD CODE HERE
for (let i = 0; i < greetings.length; i++) {
  console.log(greetings)
} 

// expected output below.

// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'


// Challange 3

// You are given an array of five numbers called increaseByTwo.
// Use a for loop to iterate through the array and increase each number by two.

 const increaseByTwo = [1, 2, 3, 4, 5];
for (let i = 0; i < increaseByTwo.length; i++){ 

  increaseByTwo[i] = increaseByTwo[i] + 2;     //increaseByTwo[i] += 2;
}
console.log(increaseByTwo);
// expected output [3, 4, 5, 6, 7] 

// Challange
// Use a while loop to increment count by 2 on each repetition of the block of code.
// Run the code block of your while loop until count is 8.

 let count = 2;
while(count<=6){
  count +=2;
};
console.log(count); // expected output 8


// Challange
// For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// ADD CODE HERE
for (let i =0; i<firstNames.length; i++){
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}