function solve(num){

  return function power(number){
        return number ** num;
    }
}

let ans = solve(3);
// console.log(ans(2));
let final = ans(4);
console.log(final);