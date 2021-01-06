//Prompt with set timeout of 4 seconds. Intended for urgency.
setTimeout(function() {
    alert(
      "There's no time to wait !!! Our fate is in your Hands !!!"
    );
  }, 4000);
//Starts the game
console.log(" Alright, time to get started!")
//class blueprint for both captain and aliens
class spaceModel {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//creates captain as an extension of spaceModel
let Captain = new spaceModel('captain', 20, 5, .7)
console.log(Captain);
//creates Alien Spaceships by looping through an array
const aliensArray = []
for(let i = 1; i <= 6; i++){
    let alienHull = Math.floor(Math.random() * 6) + 3;
    let alienFirePower = Math.floor(Math.random() * 4) + 2; 
    let alienAccuracy = Math.floor(Math.random() * .8) + .6; 
    let Alien = new spaceModel('alien', alienHull, alienFirePower, alienAccuracy)
    aliensArray.push(Alien);
};
console.log(aliensArray);
//Loops through the battle  
while (aliensArray.length > 0) {
    let aliensLeft = aliensArray.pop();
    if (Math.random() < aliensLeft.accuracy) {
      console.log("We've been hit!");
      Captain.hull = Captain.hull - aliensLeft.firepower;
      console.log(Captain.hull);
    } else if (Math.random() > aliensLeft.accuracy) {
      console.log(`Direct hit! ${Captain.firepower} damage!`);
      console.log(aliensLeft.hull - Captain.firepower);
    } console.log("Target down!");
    if (Captain.hull <= 0) {
      console.log("We've Lost");
      break;
    }; 
//Ends game when captain wins
if (Captain.hull > 0 && aliensArray.length == 0) {
    console.log("We're Saved!!!!!!!!!!!!");
} 
}