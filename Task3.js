// Convert product prices from USD to INR
let pricesUSD = [10, 25, 50, 100]; 
let conversionRate = 83;
let pricesINR = pricesUSD.map(function(prices){
    return prices * conversionRate;
});
console.log("price in USD:",pricesUSD);
console.log("price in INR:",pricesINR);
// Extract username from user objects
let users = [ 

  { id: 1, name: "Amit" }, 

  { id: 2, name: "Sneha" }, 

  { id: 3, name: "Ravi" } 

]; 
let username= users.map(function(user){
    return user.name
});
console.log(username);
//  Format numbers with "+91-"
 let phones = ["9876543210", "9123456789"]; 
let formatnumber= phones.map(function(phone){
    return "+91 -"+phone;
});
console.log(formatnumber);
// // Filter - Get students who passed(passing nummber should be greater than 40)
  let mark = [35, 50, 28, 80, 60]; 
 let passoutmarked = mark.filter(function(marks){
    return marks >40;
 })
 console.log("Student how passed:",passoutmarked);
// // //  Find employees working in IT departement
 let employees = [ 

  { name: "Raj", dept: "IT" }, 

  { name: "Pooja", dept: "HR" }, 

  { name: "Vikas", dept: "IT" } 

]; 
let itemployees = employees.filter(function(emp){
    return emp.dept==="IT";
});
console.log("Employees in IT department",itemployees);
// // // Find out expired products
 let products = [ 

  { name: "Milk", expired: true }, 

  { name: "Bread", expired: false }, 

  { name: "Eggs", expired: false } 

]; 
let expiredproducts = products.filter(function(product){
  return product.expired ===true;
});
 console.log("Expired product is:",expiredproducts);
// // // Reduce - Find total cart value
let cart = [200, 450, 120, 50];
let totalvalue = cart.reduce(function(total,price){
    return total + price;
},0);
console.log("Total cart value:",totalvalue);
// // // Merege multiple arrays into one
let arrays = [[1, 2], [3, 4], [5, 6]]; 
let Meregearray = arrays.flat();
console.log("Merege Array:",Meregearray);
let marks = [70, 85, 90, 60, 95];
let total = marks.reduce(function(sum, mark) {
  return sum + mark;
}, 0);
let average = total / marks.length;
console.log("Average marks:", average);
