//Ludo

let diceCount = new Map();                            //Declare Mapping

for (let i = 1; i < 7; i++) {
    diceCount.set(i, 0);                                 //Set the values 1-6;                   
}
    
let cont = true, num = 0;

while (cont) {
    num = (Math.floor((Math.random()*10)%6)+1);                      //Get the Random values
    count = diceCount.get(num) + 1;                              //count for dices
    diceCount.set(num, count);                                   //set the dices
    if (count == 10)                                            //Game Won
        cont = false;
}

let min = num;                                                        //Initialize Minimum

console.log("Ludo Key Values");

for (let [key, value] of diceCount) {                                   

    console.log(key + " " + value);                                        //Print the values

    if (value < diceCount.get(min))
        min = key;                                                              
}
console.log("Winner Digit : " + num);                              


console.log("Loser Digit : " + min);






//BirthDate

let birthMonth = new Map();

for (var i = 0; i <12; i++) {
    birthMonth.set(i, 0);
}

for (var i = 0; i < 50; i++) {
    monthUser = (Math.floor(Math.random() * 110) % 12) + 1;
    count = birthMonth.get(monthUser) + 1;
    birthMonth.set(monthUser, count);
}

for (let [key, value] of birthMonth) {
    if (birthMonth.get(value) > 1) {
        console.log("Number of people in "+key + " Month is " + value);
    }
}
