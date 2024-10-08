//synchronous programming
console.log("one");
console.log("two");
console.log("three");

//asynchronous programming
console.log("one");
console.log("two");

setTimeout(() => { //function
console.log("hello");
}, 4000);

console.log("three");
console.log("four");

//promises
let promise = new Promise((resolve, reject) => { // two handlers & both functions
console.log("This is promise");
resolve("success!");
})
 console.log(promise);



 {
 const getPromise = () => {
   return new Promise (( resolve, reject) => { // return new promise
        console.log("This promise");
        resolve("success!");
    });
 };

 let promise = getPromise(); //promise returned here from above
 promise.then((res) => {
console.log("promise fulfilled", res); // success is passed here from above
 });

 promise.catch((err) => { //error is passed here from above
    console.log("promise rejected", err);
 }); 
}

{

// promise chain
function asyncFunc1() {
    return new Promise((resolve, reject) => { //return new promise
      setTimeout(() => {
       console.log("return data1");
       resolve("success");
      }, 3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => { //return new promise
      setTimeout(() => {
       console.log("return data2");
       resolve("success");
      }, 3000);
    });
}
function asyncFunc3() {
    return new Promise((resolve, reject) => { //return new promise
      setTimeout(() => {
       console.log("return data3");
       resolve("success");
      }, 3000);
    });
}

console.log("fetching data1....") //getting data1
let p1 = asyncFunc1(); //call promise
p1.then((res) => { //promise resolve => success

console.log("fetching data2....") 
let p2 = asyncFunc2();
p2.then((res) => {

console.log("fetching data3....") 
let p3 = asyncFunc3();
p3.then((res) => {  
});
});
});
}

//async await is better than all above.
function getData(dataId) {
    return new Promise((resolve, reject) => { //return promise
        setTimeout(() => {
        console.log("weather data", dataId);
        resolve("success");
        }, 2000);
    });
}

async function getAllData(){ //create function
console.log("getting data1...");
//call function getData & await for 2sec and execute sequently
await getData(1); // await is keyword
console.log("getting data2...");
await getData(2);  // await for 2 sec
console.log("getting data3...");
await getData(3);  // await for 2 sec
}
 //call getAllData
 getAllData(); 