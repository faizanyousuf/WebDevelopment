let arr  = [2,352.23,'faizan',true,'mahkana',23];
console.log(typeof(arr[2]) == 'string');
 let x = arr.filter((x)=>{
    if(typeof(x) == 'string'){
        return true;
    }
})

let x1 = arr.filter((x)=>{
    if(typeof(x) === 'boolean'){
        return true;
    }
    
})

let li = [29,29,10,120,20];
let sum = 0;
li.forEach((x)=>{
    sum+= x;
})
console.log(sum);
console.log(x1);
console.log(x);

li.sort();
console.log(li);

li.sort((a,b)=>{
    if(a > b){
        return 1;
    }else{
        return -1;
    }
})
console.log(li);