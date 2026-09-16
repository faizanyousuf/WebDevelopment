

function farenToCel(far){
 
     let cel =  ((far -32))*(5/9);
     console.log(typeof(cel));
     return cel.toString();
}

console.log(farenToCel(40));

let age = prompt("enter your age: ");