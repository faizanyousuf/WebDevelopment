let object = {
    name : 'faizan',
    age : 25,
    greet: ()=>{
        console.log("hello world");
    }
}

for(let key in object){
    console.log(key);
}
// console.log(object.greet());
// console.log(object.name);

//Array...................

let arr = [2,42,5,13,51,3];
console.log(arr);
console.log(typeof(arr))

let arr1 = new Array(3,42,4);
console.log(arr1)

let arr2 = ['faizan', 23,24.22,[1,2,4]];

console.log(arr2[3][1])

let a = [4];
console.log(a);

let b = new Array(4)
console.log(b);

for(let i = 0; i < b.length; i++){
       console.log(b[i])
}

let list = ['html','css','js','java','python']

console.log(list)

console.log(Array.isArray(list))

// for(var i = 0; i < list.length; i++){
//     console.log(list[i])
// }

// list.forEach(function myfunc(x){
//     console.log(x)
// })

list.push('go')

// list.pop()
list.unshift('c++')
// list.shift()
// list.splice(1,2);
console.log(list.indexOf('html'))
list[3] = 'ReactJs'
console.log(list)

// let sl =  new Array(list.slice(1,4))
// // sl[2] = 'Reactjs'
// // console.log(list)
// console.log(sl)

let li = [10,20,30,40,50];

// let sqli = li.map(function(x){
//     return x*x;
// })

// function name(name){
//     console.log(name);
// }

// name('faizan')

 let greet =  (name)=>{
    console.log("hello" + name);
  }
greet(' faizan ')
// console.log(sqli)

let sqli = li.map((x)=>{
        return x*x*x;
})
console.log(sqli)

let sum = li.map((num)=>{
    return num+10
})

li.map((num,index)=>{
    console.log(`${index} : ${num}`);
})
console.log(sum)