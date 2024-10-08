 function myFuction(){ // function definition
    console.log("hello world!");
    console.log("hello!");
 }
 myFuction(); // function call

 function myFunc(msg){  // parameter => input variable
    console.log(msg);
 }
 myFunc("hey there"); //argument=> pass the msg as argument

 //question sum of two number
 function sum(x, y){ // taking two input as parameter : x & y
 console.log("The sum is", x+y); //print
 }
 sum(6, 5); // 11 => pass the value of x & y as argument when function is called.


//  function return
function add(x, y){ 
return x + y; // return value of x + y to where the function is called.
}
let result = add(8, 6); // function called with argument 8 & 6
console.log("The output is", result); // output


//arrow function
//multiploication function

const arrowMultiply = (a,b) =>{
    console.log(a * b);
  };
  arrowMultiply(8, 8); 

  const addition = (c, d) =>{
    return c + d;
  };
  let x = addition(4, 5);
  console.log("The result is", x);


  // practice question
//create a function takes a string as argument & returns no. of vowels in string.

function countVowels(str){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
    count++;
    }
}
return count;
}

let vowelnum = countVowels("dikesh khatri"); 
console.log(vowelnum);

// OR Another method
//using for of loop
{
function countVowels(str) {
let count = 0;
for(let char of str){
if((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")){
  count++;
}
}
return count;
}

let num = countVowels("mynameisdk");
console.log(num);
}

//using arrow functions but return consonant
{
const countConsonant = (str) =>{
let count = 0;
for (let char of str){
  if (!(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")){
    count++;
  }
}
return count;
};
let num = countConsonant("ilovecoding");
console.log(num);
}

// print the no. whose marks is above 90 using array
let marks = [97, 64, 32, 49, 99, 96];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 90){
  console.log(marks[i]); // 97 99 96
}
}

