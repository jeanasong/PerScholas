 for(let count = 0; count < 7; count++) {
    for(let i = 0; i <= count; i++) {
        process.stdout.write("#");
    }
    console.log();
} 

// write a for loop that count down from 10-1

 let i = 10

for (let i = 10; i > 0; i--) {
    console.log(i);
} 

// for loop
 for(i = 1; i <= 10; i++) {
    console.log(i);
} 

// while loop
 var i = 1;
while(i <= 10) {
    console.log(i);
    i++;
} 

// do.. while loop
 var i = 1;
do {
    console.log(i);
    i++;
}while(i<=10); 

// foreach or forin loop
 let sub = [1, 2, 3];
for(i in sub) {
console.log(sub[i]);
}

/////

let i = 1;

for(i = 1; i <= 10; i++) {
    console.log(i);
}