
let marks = [98, 76, 57, 87];
console.log(marks); //all
console.log(marks[2]); // index 2 value = 57
console.log(marks.length);

let name = ["DK", "DV", "DZ", "Dx"];
console.log(name); 
console.log(name[1]); //DV

let arr = [23, 31, 33, 34, 35];
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("loop stopped");


//questions

 let mark = [85, 97, 44, 37, 76, 60];
 let sum = 0;
for (let i = 0; i<mark.length; i++){
  sum = sum + mark[i];
}
console.log(sum);
let average = sum / mark.length;
console.log(average);


// Questions
let price = [250, 645, 300, 900, 50];
for(let i = 0; i < price.length; i++){
    let offer = price[i] / 10;
    let finalprice = price[i] - offer;
    console.log(finalprice);
}

//array to string
let answer = ["hey", "yes", "no"];
console.log(answer);
console.log(answer.toString());
