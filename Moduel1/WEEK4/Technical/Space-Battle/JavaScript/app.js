//Define an array six Aliens
const alienArray = [];
//Count the number of Aliens
let alienCount = 0;
//Define an actor class for the game
class Blockchain {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      // alienCount++;
    }
    attack() {
      if (alienCount >= 6) {
        $('#game-text').append('');
        $('#game-text').append(`<div class="action">You won! ${spaceShip.name} has defeated the aliens!<br></div>`);
      } else {
        if (Math.random() < spaceShip.accuracy) {
          alienArray[alienCount].hull = alienArray[alienCount].hull - spaceShip.firepower;
          if (alienArray[alienCount].hull <= 0) {
            $('#game-text').append(`<div class="action">${alienArray[alienCount].name} ${alienCount + 1} is destroyed<br></div>`);
            i++;
          } else {
            alienAttack();
          }
        } else {
          $('#game-text').append(`<div class="action">${spaceShip.name} has missed...<br></div>`);
          alienAttack();
        }
      }
    }
    retreat() {
      $('#game-text').append(`<div class="action">${this.name} has retreated! Game over!</div>`);
      let alienCount = 0;
    }
  }
  //Define alien attack function
function alienAttack() {
  $('#game-text').append(`<div class="action">${alienArray[alienCount].name} ${alienCount + 1}'s health is ${alienArray[alienCount].hull}<br></div>`);
  setTimeout(function () {
    $('#game-text').append(`<div class="action">${alienArray[alienCount].name} ${i + 1} is launching an attack...<br></div>`);
    if (Math.random() < alienArray[alienCount].accuracy) {
      spaceShip.hull = spaceShip.hull - alienArray[alienCount].firepower;
      setTimeout(function () {
        $('#game-text').append(`<div class="action">${spaceShip.name} has been hit! Health is now at ${spaceShip.hull}<br></div>`);
      }, 3000);
    } else {
      $('#game-text').append(`<div class="action">${alienArray[alienCount].name} ${i + 1} has missed...<br></div>`);
    }
  }, 2000);
  if (spaceShip.hull <= 0) {
    $('#game-text').append(`${spaceShip.name} is dead! Game Over`);
  }
}
//Define six aliens

function getRand(lowerlimit, upperlimit) {
  return Math.floor(Math.random() * (upperlimit- lowerlimit + 1)) + lowerlimit;
}

for (let i = 0; i < 6; i++) {
  let alien = new Blockchain(
    'Alien',
    getRand(3, 7),
    getRand(2, 4),
    getRand(60, 80) * 0.01
    // Number(getRandomDec(0.6, 0.8).toFixed(1)),
  );
  alienArray.push(alien);
}
console.log(alienArray);