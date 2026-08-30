let arr = [
    function add(a,b){
        return a+b;
    },
    function mul(a,b){
        return a*b;
    },
    function divide(a,b){
        return a/b;
    },
    function power(a,b){
        return a**b;
    }
]

 let res = arr[0](20,3);
console.log(res);
 
arr.forEach((x)=>{
   let result = x(2,5);
   console.log(result);
})

function f1(){
    let num = 20;
    function f2(){
        console.log(`${num}`);
    }
}
f1();