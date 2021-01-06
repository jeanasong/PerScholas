 let Jesus = (arr) => {
    let len = arr.length;
    let changed;
    do {
        changed = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i +1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                changed = true;
            }
        }
    } while (changed);
}
console.log(Jesus(["90", "40", "0", "50", "5.6", "0.3", "4.5", "1"])) 


// method two

  let bubbleSort = (Arr) => { // create the bubble sort function
    let len = Arr.length; //creating a length variable
    let swapped; // creating a variable to keep track of the amount of times the arrays are swapped
    do {
        swapped = false; //this is false if there were no swaps made in the array
        for (let i = 0; i < len; i++) {
            if (Arr[i] > Arr[i + 1]) { // checks to see if the index at i is greater than the index immediately to the rigth
                let tmp = Arr[i]; // creating a temporary variable for the index at i
                Arr[i] = Arr[i + 1]; // if [i+1] is true copy the value into the i index
                Arr[i + 1] = tmp; // copy what was in index i into the index of [i+1] this finishes the swap
                swapped = true; //the variable swap will be true, which allows the loop to continue
            }
        }
    } while (swapped); //this while loop allows for 1 verification before the code stops. making it more efficient
    return Arr;
};

console.log(bubbleSort([5, 3, 8, 4, 6])); 

// linear Search
 var num = 5;
var arr = [1,2,3,4,6,7,8];
var found = false;
for(var i=0; i<arr.length; i++){
  if(arr[i]==num){
    console.log("Found");
    found = true;
  }
}
if (found == false){
 console.log("Not Found");
}


// Binary Search
// Binary is a Yes or No setuitation. 1 or 0.
var toFind = -11;
var arr = [1,2,3,4,5,6,7,8,9,10];
var firstIndex = 0;
var lastIndex = arr.length-1; // last index of an array = array length - 1
var midIndex = 0;
var found = false;
while (firstIndex <= lastIndex){
  midIndex = parseInt((firstIndex+lastIndex)/2);
  if(arr[midIndex] == toFind){
    found = true;
    console.log("Found");
    break;
  } else if(arr[midIndex] < toFind){
    firstIndex = ++midIndex;
    console.log("firstIndex" + firstIndex); //test
  } else {
    lastIndex = --midIndex;
    console.log("lastIndex"+lastIndex); //test
  }
}
if(found == false){
console.log("Not Found");
}