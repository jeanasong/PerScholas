// // /*1- What is an efficient way to create an array for first 50 integers?*/

var array=[];
for (var i = 0; i <=50; i++) {

console.log(array.push(i));

}

// // /*2- You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin.
// //  Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

console.log(shoppingList.push("Hendricks gin"));
// // /*******************************************/
// // /*3- Use the force, or in this case the reverse method to help
// Yoda make some sense with his motivational talk to the young Jedi interns.*/
//
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
//
//
console.log(yoda.reverse());
// // /****************************************/
// //
// // /*4- People been lining up for hours to get the newest iphone release.
// //  Help manage the unruly crowd of privileged customers
// //  by serving them one at a time and assiging it
// //  to a variable named `nowServing`.
// //   Console.log this new variable as well as the waitList.*/
// /***************solution 1 ***********/
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
for (var i = 0; i < waitList.length; i++) {

      nowServing = waitList[i];
      console.log("Now serving =  " + nowServing);
// // // }/******** solutiion 2 ****************/
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
waitList = waitList.reverse();
for (var i = 0; i < 5; i++) {
           nowServing = waitList.pop();
           console.log(nowServing);
           console.log(waitList);
}

console.log("done");
// // /******************* solution 3 ************************/
// //
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";

for (var i = 0; i < 5; i++) {

     nowServing = waitList.shift(); //removes first elements of array
     console.log(nowServing); //in for loop each time will print person who is nowServing
     console.log(waitList);  //remaining waitlist will print without person who is serving. length-1;

}
console.log("Waiting List is Empty");

//
// /*************************************/
// /*5 -Help Nike sell more overpriced sneakers by changing their slogan from an
// array into a string. Convert the shoe array and assign
// it to a variable named `shoeString`. Console.log this new variable.*/

var shoe = ["just", "do", "it"];
var shoeString  = shoe.toString();

console.log(shoeString);
/***** solution 2**/

var shoe = ["just", "do", "it"];
var shoeString = "";
//First log will print initial array ["just", "do", "it"]
console.log(shoe);
//Second log will print var shoeString's initial value " "
console.log(shoeString);
shoeString = shoe.join(" ");
console.log(shoeString);
//
//
//
// /***************/
//
//
let array = [];
for (var i = 0; i < 10; i++) {
  array[i] = i;
} console.log(array);
/*1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong
 in this class of Hall Of Famers. Remove this imposter immediately
  and assign it to a new variable named `notHof`
  Console.log this new variable as well as the original list.*/

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = hof.pop();  // pop removes elements and change the array
console.log(hof);
console.log(notHof);


/*2. As head of McDonald's New Product Division, your job is to test
 and approve all new menu items. In the testMenu array below,
 all the items are approved except for "McLinguine" and
  "McChar-Siu Bau".Remove these items from the list and
   console.log the updated testMenu.*/

var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];
console.log(testMenu.splice(2,2));
console.log(testMenu);
//splice will remove elements from array on indicated index(2) and (second)(number of items- 2) number of element then printed updated array

// /*3. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide
//      and eastSide rappers into a new array called `oneLove`. Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];



var oneLove = westSide.concat(eastSide);//joins two arrays in new array. concatenated it

console.log(oneLove);

/*4.

Some drama between you and the Kardashian's went down
during last Saturday's potluck party. You are no longer
on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful
people and assign them to a new variable named `unFriend`. Console.log this new variable.*/

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];

console.log(fbFriends.slice(1,4)); //slice will remove item from 1 to 4, 4 is not included
// The slice() method selects the elements starting at the given start argument, and ends at,
// but does not include, the given end argument.

/*5.  create a user profile using map where following keys. */

var user1 = {

first_name: "Serkan",

last_name: "Sonmez",

company: "Per Scholas",

department: " Software Engineer",

};console.log(user1);

/* CodeSmith Challenge -You are provided with an empty array called objToArray. Using a for... in loop,
fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.-*/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
var x;
/*solution*/

for (const x in checkObj) {  //create for in loop for (variable is const) in object(is checkObj)) statement

  if (checkObj[x] >= 2) { //requirment is print object equal 2 or greater and push to objToArray
    objToArray.push(checkObj[x]) //push each object to array
  }
}
console.log(objToArray);

// #7 This time, use the Object.values() method to return an array of checkObj's
// values, and assign this array to a constant called objToArray. Next, use a for
// loop to iterate through objToArray and determine if any of the numbers are
// divisible by 6. If so, reassign the value of divBy6 to true.
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};
let divBy6 = false;

/*solution*/
const objToArray=Object.values(checkObj);// assign values in objToArray with Object.values
for(var i=0; i<objToArray.length; i++) // create for loop with lenght of array if number is divisible 6 which remainder must be 0
  {
    if (objToArray[i]%6==0)
      divBy6=true;
  }
console.log(objToArray);
