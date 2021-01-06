 let sum;
sum = theSum(10,10); // test
function theSum(x,y) {
    return x+y;
};
console.log(sum); 

///////

 function oddEven(x) {
    if(x%2 == 0)
    return "even";
    else {
        return "odd"
    }
};
console.log(oddEven(-14)); 

//////

 var se = 30;

function printX() {
    var x = 3;
    console.log("x "+x);
    console.log("y "+printY());

    function printY() {
        var y = 5;
        console.log("y "+y);
        return y;
    }
    return x;
}

console.log("se"+se);
console.log("x"+printX());
//console.log("y"+printY());


// Homework 1

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. 
 function maxOfTwoNumbers(a,b){
    if (a > b) {
      return a;
    } else {
      return b;
  }
}
  maxOfTwoNumbers(4,5);
console.log(maxOfTwoNumbers(4,5)); 

// Homework 2
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
 function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
maxOfThree(100, 40, 500);
console.log(maxOfThree(100, 40, 500)); 

// Homework 3
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
// check back
 let isCharacterAVowel = letter => {

    let vowels = ["a", "e", "i", "o", "u"];
    
    for(let i of vowels){
    
        if(letter === i){
            return true;
        }
    }
    return false;
    };
    
    isCharacterAVowel("a");
    console.log(isCharacterAVowel("a")); 

/////

  function isCharacterAvowel(character) {
    let vowels = "aeiuo";
    if(character === vowels) {
        return true;
    } else {
        return false;
    }
}
console.log(isCharacterAvowel("o")); 

// Write a function vowelCount that takes a String and returns the number of vowels in the String.
// add a check for the string to be of 10 or less characteers

 const vowelCount = str => Array.from(str) // usind array function
    .filter(letter => 'aeiou'.includes(letter)).length;

  console.log(vowelCount('abcdefghijklmnopqrstuvwxyz')); // 5
  console.log(vowelCount('test')); // 1
  console.log(vowelCount('ddd')); // 0
  
  /////

   function vowelCount(str) {
     let arr_vowel_list = 'aeiouAEIOU'.split(''); 
     let count = 0;
     str.split('').forEach(function(e){
     if(arr_vowel_list.indexOf(e) !== -1){
     count++;
     console.log(count);
    }
    });
   }
   vowelCount("World Of Programming");
   console.log(vowelCount); 

// Write a function charCount that takes a string and returns the length of the string.

 function charCount(str) {
    return [...str].length;
}

console.log(charCount("I will become a Blockchain Developer/Engineer"));

// expected output 45



// Homework 4 part 1
// Define a function sumArray that sums all the numbers in an array of numbers.
// sumArray([1,2,3,4]) should return 10.

   function sumArray(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// print out the total to the console
console.log(sumArray([5,10,15,20])); 

// Homework 4 part 2
// Define a function multiplyArray that multiplies all the numbers in an array of numbers.
// Example multiplyArray([1,2,3,4]) should return 24.

  function multiplyArray(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

// Print out the total to the console
console.log(multiplyArray([100,2,3,4]));  

// Homework 5
// Write a function that returns the number of arguments passed to the function when called.
    function child() {
    return arguments.length;
}
console.log(child("Determine", "open minded", "Athlete", "Hungry Lion", "Sleep"));
// expected output 5 

// Homework 6
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

 function reverseString(string) {
    var length = string.length;
    var reversed = [];
    var joined = ("");
    for (var i = length; i > 0; i--){
        reversed.push(string.charAt(i-1));
    }
    for (i = 0; i < (length) ; i++){
        joined += (reversed[i]);
}
return joined;
}
console.log(reverseString("TECHNOLOGY")); 

////

 function reverseString(string) {
    if (string === "")
    return "";
      else
    return reverseString(string.substr(1)) + string.charAt(0);
}
console.log(reverseString("AFRICA")); 

// Homework 7
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  
   function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }

   console.log(findLongestWord(["bloomburg", "hello"]));
   console.log(findLongestWord(["boop", "software", "helloooooooooo"]));


// Homework 8
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

   function filterLongWord(complete, i) {
     let word = [];
     for(let z=0; z < complete.length; z++){
         if( complete[z].length > i) {
            word.push(complete[z]);
         }
     }
     return word;
 }

 console.log(filterLongWord(["tennesse", "cameroon", "chelsea", "camouflage", "house"],7))
 

 //Homework bonus 1
 // Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

 function reverseString() {
    let word = "";
    for(let i=this.length-1; i>=0; i--) {
        word+=this[i];
    }
    return word;
}
String.prototype.reverseString= reverseString
console.log("Per Scholas".reverseString()); 


// Homework bonus 2
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case

 function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency("School")); 

//////

 function getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  
  console.log(getFrequency('test')); 