// For in
// For in - 1
// const student={
//  name:"John",
//  Age:21,
//  Grade:"A"
// };
// for(let key in student);
//     console.log(student);
    // For in -2
    // const car={
    //     brand:"Tesla",
    //     model:"X",
    //     year:"2023"
    // };
    // let count=0
    // for(let prop in car){
    //     count++;
    // }
    // console.log(count);
    // For of -1
    // let str="hello world";
    // let count=0;
    // let vowels="aeiou";
    // for(let char of str){
    //     if (vowels.includes(char.toLowerCase())){
    //         count++;
    //     }
    // }
    // console.log("Number of vowels:",count);
    // For of -2
    // const array= [10,20,30,40];
    // for(let number of array){
    //     console.log(number);
        
    // }
    // reduce - Multiply all numbers
    // const nums=[2,3,4];
    // const reduce=nums.reduce((multipaly,nums)=>
    // {
    //     return multipaly*nums
    // })
    //  console.log(reduce);
     
    // reduce - find average
    const scores=[80,90,70,60];
    let sum=0;
    for(let score of scores){
        sum+=score;
    }
    let average = sum / scores.length;
    console.log("Average",average);
    // Group items by category
    // const people=[
    //     {name:"Ravi",group:"A"},
    //     {name:"Amit",group:"B"},
    //     {name:"Sara",group:"A"},
    //     {name:"John",group:"B"},
    // ];
    // let grouped={};
    // for(let person of people){
    //     if(!grouped[person.group]){
    //         grouped[person.group]=[];
    //     }
    //     grouped[person.group].push(person.name);
    // }
    // console.log(grouped);
    // reduce - Remove duplicates
    // const nums=[1, 2, 2, 3, 4, 4, 5];
    // let uniqueNums = [...new Set(nums)];
    // console.log(uniqueNums);
    // reduce - count characters in string
    // const str = "banana";
    // let count = {};
    // for (let char of str){
    //     count[char]=(count[char]||0)+1;
    // }
    // console.log(count);
    // reduce - Find the logest word
    // const words = ["Apple","Banana","Kiwi","Strawberry"];
    // let longest = "";
    // for(let word of words){
    //     if(word.length>longest.length){
    //         longest = word ;
    //     }
    // }
    // console.log("Longest owrd is:",longest);
    