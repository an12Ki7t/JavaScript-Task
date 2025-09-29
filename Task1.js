// // 1: Variables of all Data Type Using Typeof
// let mystring="Welcome To JS";
// console.log(mystring );
// console.log(typeof mystring);
// let myNumber = 42;
// console.log(myNumber); 
// console.log(typeof myNumber);
// let myboolean=true;
// console.log(myboolean);
// console.log(typeof myboolean);
// let myundefined
// console.log(myundefined);
// console.log(typeof myundefined);
// let mynull=null;
// console.log(mynull);
// console.log(typeof mynull);
// let myobject= { name: "Riya"}
// console.log(myobject);
// console.log(typeof myobject);
// let mysymbool=Symbol("AB");
// console.log(mysymbool);
// console.log(typeof mysymbool);
// let mybigint=123456789098776654433n;
// console.log(mybigint);
// console.log(typeof mybigint);
// // Swap two number without using third variable.
// let a =65;
// let b = 23;
// a=a+b;
// console.log("a=",a );
// // if a given number is even or odd using variable
// const num=65;
// if(num %2==0){
//   console.log(num + "is Even");
//     } else{
//         console.log(num+ "is odd");
        
//     }
//     // function that takes a number and returns square
//     function square(s){
//         return s*s;
//     }
    // console.log(square(25));
//     let customer={
//         Name: "Rahul",
//         Age:28,
//         City:"Pune"
//     };
// function greet(){
//      console.log("Hello, my name is "+ customer.Name);
// };
// greet();
// console.log(customer.Name);
// console.log(customer.Age);
// console.log(customer.City);
// A car object with properties and methods (start, stop, drive). Call the methods. 
let car={
    Brand:"maruti-suzuki",
    Model:"celerio",
    color:"Sliver",
 start: function() {
    console.log(`${this.Brand} ${this.Model} is starting...`);
  },

  drive: function() {
    console.log(`${this.Brand} ${this.Model} is driving...`);
  },

  stop: function() {
    console.log(`${this.Brand} ${this.Model} has stopped.`);
  },
};


car.start();  
car.drive();  
car.stop(); 