// Week 3 Day 2 Morning lab

// You've been tasked to do this week's grocery shopping.
// As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin.
// Add this to the existing shoppingList and console.log it

 let shoppingList = ["cool ranch doritos", "kings hawaiian sweet bread", "peanut butter oreos", "fruit loops cereal"];
shoppingList.push("bottle of Hendricks gin");
console.log(shoppingList);


// Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.

 let yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// yoda.reverse(["try", "no", "is", "there", "not", "do", "or", "do"])
// One way to do it
yoda = yoda.reverse()
console.log(yoda);


// People been lining up for hours to get the newest iphone release.
// Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`.
// Console.log this new variable as well as the waitList.

 let waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
 let nowServing = "";
// console.log(nowServing);

for(let i = 0; i < 5; i++) {
    nowServing = waitList.pop();
    console.log(nowServing);
    console.log(waitList);
}


// Different way to solve
// let waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
 waitList = waitList.reverse();
  for(let i =0; i <5; i++) {
     nowServing = waitList.shift();
      console.log(nowServing);
      console.log(waitList);
  }
 waitList.forEach(waitList => console.log(nowServing))


// Help Nike sell more overpriced sneakers by changing their slogan from an array into a string.
// Convert the shoe array and assign it to a variable named `shoeString`.
// Console.log this new variable.

 var shoe = ["just do it"];
let shoeString = shoe.toString();
// let shoeString = shoe.join(" ");
console.log(shoeString);



// Exercise

 let numsArray = [];
for(let i = 0; i <= 50; i++) {
    numsArray.push(i);
}
console.log(numsArray); 

 let arr = [];
for(let i = 0; i <10; i++) {
    arr[i] = i
}

console.log(arr); 

// Afternoon lab
// Question 1

 var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
console.log(hof);

let notHof = hof.pop();
console.log(hof);
console.log(notHof);


// Question 2
 var testMenu = ["McPizza Burger", "McFly Burger", "McLinguine", "McChar-Siu Bau", "McChop-Chae", "McPancit"];
testMenu.splice(2,2);
console.log(testMenu);


// Question 3
 var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];
let oneLove = westSide.concat(eastSide);
console.log(oneLove);


// Question 4
 var fbFriends = ["Khalid", "Yeezy", "Kimmy K", "Lamar Odom", "Lebron", "Warren Buffet"];
let unFriends = fbFriends.slice(1,4);
console.log(unFriends);


// Question 5
 user1 = {
    first_name: "Jean Baptiste",
    
    last_name: "Asong",
    
    company: "Per Scolas",
    
    department: " Software Engineer",
    
    };
    console.log(user1);


// challange
 // Challenge: Objects - Iterating with for... in:

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  const objToArray = [];
  // ADD CODE HERE
  for (var i in checkObj) {
    if (checkObj[i]>=2) {
      objToArray.push(checkObj[i]);
    }
  }
  // Challenge: Objects - Iterating with a for loop:
  
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  let divBy6 = false;
  // ADD CODE HERE
  const objToArray=Object.values(checkObj);
  for(var i=0; i<objToArray.length; i++)
    {
      if (objToArray[i]%6==0)
        divBy6=true;
    } 