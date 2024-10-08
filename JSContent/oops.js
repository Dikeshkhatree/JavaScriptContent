
//classes in js
// Define the Car class
class Car {
    constructor(brand, mileage){ // special method in class is constructor
    console.log("new obj created");
       //this will access the property
       this.brandName = brand; //brandName is property and brand is a parameter
       this.mileage = mileage; //'mileage' is a property, 'mileage' is a parameter
    }
}
// Creating an object through the Car class
let hyundaiCar = new Car("ionic5", 45);
console.log(hyundaiCar);

let BYD = new Car("Aytto3", 55); // constructor invoked or called
console.log(BYD);


//inheritance in js
class person{
    constructor(){
        this.species = "homo sapiens";
    }
     eat(){
        console.log("eat");
     }

      sleep(){
        console.log("sleep");
      }
      work(){
        console.log("working");
      }
      
    }

    class Engineer extends person{ // engineer inherit person properties & methods.
        work(){
            console.log("i work hard");
        }
    }  

    let personObj = new person(); // constructor invoked
    console.log(personObj);
    personObj.eat();

    let dikeshObj = new Engineer();
    console.log(dikeshObj);
    dikeshObj.eat();
    dikeshObj.sleep();



// super keyword
{
    class Man {
        constructor(name) {
          this.species = "homo sapiens";  // A common property for all objects of Man class
          this.name = name;               // Name is assigned from the argument passed
        }
      }
      
      class Engineer extends Man {
        constructor(personName) {
          super(personName);  // Calls the constructor of the parent class (Man)
          this.profession = "Engineer"; // Adds a new property specific to Engineer class
        }
      }
      
      let engObj = new Engineer("Dikesh Khatri"); // calls the constructor of engineer class
      console.log(engObj);
      
}

//practice question.
class User {
    constructor(name, email){
      this.name = name; // name is a property here
      this.email = email;
    }
    viewData(){
        console.log("data viewed");
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        console.log("data edited");
    }
}

let student1 = new User("dk", "dk@gmail.com");
console.log(student1); // Prints student1 object
student1.viewData();   // Calls viewData() method

let student2 = new User("rk", "rk@gmail.com");
console.log(student2); // Prints student2 object
student2.viewData();   // Calls viewData() method

let adminObj = new Admin("admin", "admin@gmail.com");
console.log(adminObj);  // Prints adminObj object
adminObj.viewData();    // Inherited from User class, prints "data viewed"
adminObj.editData();    // Calls editData() method, prints "data edited"
