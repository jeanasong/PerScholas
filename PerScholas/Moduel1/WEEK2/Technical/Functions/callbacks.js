//arrow function

 const bar = (param1) => {
    console.log("callback");
    param1();
}

bar( ()=> {
    console.log("function 1");
});

bar( ()=> {
    console.log("function 2");
}); 

// Write a function that adds three number in ES5

 function theSum(x,y,z){
    return x+y+z
};
    sum=theSum (3,4,5);
console.log(sum)

// Now try converting the code to arrow functions
theSum = (x,y,z) => x+y+z;
console.log(theSum(3,4,5)); 

// Write a function that adds three number and divide the result by 3 in ES5

 function theSum(x,y,z) {
    return x+y+z
};
    sum=theSum (3,4,5);
  console.log(sum/3);

// Now try converting the code to arrow functions
  theSum = (x,y,z) => x+y+z;
  console.log(theSum(3,4,5)/3); 