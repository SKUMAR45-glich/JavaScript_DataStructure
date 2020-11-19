//2nd Highest and 2nd Lowest in Array

let a = [];

for (var i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 900)+100;

}

let min = Math.min(...a);
let max = Math.max(...a);

let secondMin = 999;
let secondMax = 100;

for (var i = 0; i < 10; i++) {

    if (a[i] < secondMin && a[i] > min) {
        secondMin = a[i];
    }

    if (a[i] > secondMax && a[i] < max) {
        secondMax = a[i];
    }
}

console.log(secondMax + " " + secondMin);



//Sort

let temp;

for (var i = 0; i < 10; i++) {
    if (a[i] > a[i + 1]) {
        temp = a[i];
        a[i + 1] = a[i];
        a[i] = temp;
    }
}

console.log("Second Min:"+ a[1]);
console.log("Second Max:" + a[8]);



//Prime Factors of a Number

let nPF = Math.floor(Math.random() * 100);

function primeFactors(n) {

    while (n % 2 == 0) {
        console.log(2 + " ");
    }

    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i == 0) {
            console.log(i + " ");
            n /= i;
        }
    }

    if (n > 2) {
        console.log(n);
    }
}

primeFactors(nPF);



//Sum of 3 numbers 0

var x = prompt("Enter first value");
var y = prompt("Enter second value");
var z = prompt("Enter third value");

var num1 = parseInt(x);
var num2 = parseInt(y);
var num3 = parseInt(z);

if (num1 + num2 + num3 == 0) {

    console.log(num1 + " " + num2 + " " + num3);
}



//Repeated Values

let startRange = (Math.floor(Math.random() * 900))+10;
let endRange = (Math.floor(Math.random() * 900)) + 10;

let numberRange;
let remainder = 0;

for (var i = startRange; i <= endRange; i++) {
    let reverse = 0;
    numberRange = i;
    if ((i / 10) > 0) {
        remainder = i % 10;
        reverse = reverse*10 + remainder;
    }
    reverse = reverse * 10 + remainder;

    if (numberRange == reverse) {
        console.log(reverse);
    }
}