// arithmetic oprators
let a = 5;
let b = 2;
let c = a + b;
console.log("c = " , c);
console.log("a * b = " , a * b);

// for modulus operators
 let x = a % b;
 let y = a / b;
 console.log("x = " , x); // ans is always remainder
 console.log("y = " , y); 

// for exponent operators
let z = a ** b;
console.log("z = " , z);

// for unary operators i.e increment & decrement
a++; //6
b--; //1
console.log("a = " , a);
console.log("b = " , b);

// asignment operators
let d = 6;
let e = 2;

d += 3;
e -= 1;
console.log("d = " , d);
console.log("e = " , e);

//comparison operators
let f = 5;
let g = 3; // equal to
console.log("5 == 3", f == g); // false
console.log("5 != 3", f != g); //true


let h = 5; // number
let i = "5"; // string
console.log("5 == 5", h == i); // true

//using strict version which checks strictly i.e ===
console.log("5 === 5", h === i); //false
console.log("5 !== 5", h !== i); //true

console.log("h > i is ", h > i); //false

// logical operators
let j = 10;
let k =5;
// logical AND operator
let cond1 = j > k; //true
let cond2 =  j === 10; //true
console.log("cond1 && cond2 = ", cond1 && cond2);

//logical OR operator
let cond3 = j > k; //true
let cond4 = k == 10; //false
console.log("cond3 || cond4 = ", cond3 || cond4);


//logical NOT
console.log("logical NOT ! ", !(j>k));


// conditional statements => if statements
let age = 17;
if (age >= 18){
    console.log("Can vote");   
}

if(age < 18 ){
    console.log("Cannot vote");
}


let mode = "light";
let color;

if (mode === "light"){
    color = "white";
}
if (mode === "dark"){
    color = "black";
}
console.log(color);


let ram = 70;
if(ram >= 80){
    console.log("Distinction");   
}
else{
    console.log("First-Division");
}

let colour;
let modes = "dark";
if (modes ==="light"){
    colour = "white";
}
else{
colour = "black";
}
console.log(colour);

let price = 300;
if (price >= 200){
    console.log("U can buy");
}
else{
    console.log("U can't buy");
}

let marks = 40;
let Ram;
if(marks === 40){
    Ram = "Pass";
}
else{
    Ram = "Fail";
}
console.log(Ram);


let temperature;
let degree = 34;
if (degree >=35){
    temperature = "Hot";
}
else{
    temperature = "cold";
}
console.log(temperature);


//odd & even.
let num = 10;
if (num%2 === 0){
    console.log("Even num");
}
else{
    console.log("Odd num");
}

let grade = "C"; //user got C grade in exam
if (grade === "A"){
    console.log("Distinction");
}
else if (grade === "B"){
    console.log("First");
}
else{
    console.log("Second");
}

// Ternary operators
let ages = 16;
let xyz = ages >= 18 ? "adult" : "teenage"; // condition
console.log(xyz);
 
//practice question
//check if the no. is multiple of 5 or not.
//prompt is used to take input from user
let number = prompt("enter the number");
if (number % 5 === 0){
    console.log(number,"is multiple of 5");
}
    else {
        console.log(number,"is not multiple of 5");
    }

// grades to student based on their scores
let score = prompt("Enter the marks");
if (score >=80 && score <= 100){
    console.log("He got grade A");
}
else if (score >=70 && score <=79){
    console.log("He got grade B");
}
else {
    console.log("He got grade C");
}

//OR Another method
{
let score = prompt("Enter the marks");
let grades;
if (score >=80 && score <= 100){
   grades = "A";
}
else if (score >=70 && score <=79){
   grades = "B";
}
else {
   grades = "c";

}
console.log(grades);
}