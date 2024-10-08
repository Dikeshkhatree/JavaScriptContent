 for (let i = 1; i <= 5; i++)  {
    console.log(i);
 }

 //calculate sum of 1 to 5
 // 1+2+3+4+5 = 15
 let sum = 0;
 for (let i = 1; i <= 5; i++){
    sum = sum + i;
 }
 console.log("sum = ", sum); //15

//Taking input from user
{
let sum = 0;
let n = prompt("Enter the number");
for (let i =1; i <= n; i++){
 sum = sum + i;
}
console.log("sum = ", sum); 
}

//while loop
let i = 1; //initialize
while (i <= 5){  //condition
console.log(i);
 i++;
}

//for-of loop
let str = "Diku"; 
for (let val of str) {
console.log(val);
}

let ch = "PIKUSA";
let size = 0;
for (let i of ch){
    size++;
}
console.log(size);


//for-in loop
let student = {
    name: "Dikesh",
    cgpa: 4,
    age: 23,
    isPass: true
};
for (let i in student){
    console.log("key =", i, "value =", student[i]);
}

//practice questions
// even num from 0 to 100.

for (let num=0; num<=100; num++) {
    if (num%2 === 0){
        console.log(num);
    }
}


//guessing game number

let gameNum = 25;
let userNum = prompt("Guess game no.");
//loop continues until it becomes false.
while(userNum != gameNum){  
 userNum = prompt("u entered wrong num, enter again");
}
console.log("congrats u guessed right num");

                        
//string in JS
let str1 = "DK";
let str2 = "Kamala";

console.log(str1[1]); //k

let a1 = "hey";
console.log(a1.toUpperCase());

let b1 = "     ramesh  dhakal js   ";
console.log(b1.trim()); // removing whitespace but starting & ending only.

let c1 = "Diku";
let c2 = "dahal";
console.log(c1.concat(c2)); //join c1 and c2

let d1 = "ram";
console.log(d1.charAt(2)); //m