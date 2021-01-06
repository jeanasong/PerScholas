

var colors = ["blue", "orange", "red", "green"];// assigned colors to the array

let elements = document.getElementsByClassName("gridBox");//gets document by class name
var len = elements.length;

var currentColorIndex = 0;
var colorsLength = colors.length;

function colorChangeOnclik() { //function will change the color of background each time itirates

  console.log("before increment" + currentColorIndex);
  if (currentColorIndex >= colorsLength) {//currentcolor is larger than length of color it will go to index 0
    currentColorIndex = 0;
  } else { //
    for (i = 0; i < len; i++)// click each time
      elements[i].style.backgroundColor = colors[currentColorIndex];//chanage the color
  }
    currentColorIndex++;
}



// this is another way to to it

// const colorChangeOnclik = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16); ///THIS TAKES AN ALMOST INFINITE VALUE TO COMBINE MOST EXISTING COLOR COMBINATIONS
//   // "The maximum value for 6 hexadecimal digits in base 10 is 16,777,215. If you also add #000000 you get 16,777,216 as the total number of possible color combinations.
//   // If we use RGB, the range of colors is 0-255. Meaning there are 256 possible values for each Red, Green and Blue."
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;///// REDIRECTING THE COLOR FUNCTION TO SPECIFIC ID'S (BUBBLES)
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;
//   document.getElementById("gridBox").style.backgroundColor = "#" + randomColor;

//randomColor();
