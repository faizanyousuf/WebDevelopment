 let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

 let item = companies.shift();

 console.log(item);

//  console.log(companies[0]);
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
  let name = "faizan"
function greet(name){
    console.log("hello "+ name);
}
greet(name);

companies.map(item =>{
    console.log(item.toUpperCase());
})


function numVowels(str){
      let count = 0;
      let vowels = "aeiou";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str.toLowerCase().charAt(i))){
            count++;
        }
    }
    return count;
}

let string = "faizna yousf";

console.log(numVowels(string));



let arr = [2,3,5,3,5,24,9,2];

 arr.forEach(val=>{
     console.log(val**2);
})

// console.log(result);
console.log(arr);

