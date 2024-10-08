// creating an object "student" and accessing value
const student ={
age: 20,
cgpa: 8.2,
isPass: true
};
student["age"] = student["age"] + 1;
console.log(student["age"]); 

console.log(student["cgpa"]); // u can use either of these
console.log(student.isPass);

//project
const product = {
    name: "Parker",  // key value pair
    rating: 4,       // key is name and value is parker.
    offer: 8,
    price: 100
};
console.log(product);
console.log(product.rating);