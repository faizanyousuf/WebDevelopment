let btnIcr = document.getElementById("increment");
let count = document.getElementById("counter")
let counter = 0;
btnIcr.onclick = ()=>{
//   alert("button cliked!");
if(counter == 10){
    alert("counter reset to zero!");
    counter = 0;
    count.innerText = counter;
}else{
      counter++;
      count.innerText= counter;
}

}


let btnDecr = document.getElementById('decrement');

btnDecr.onclick = ()=>{
    if(counter == 0){
        alert("negative not allowed!")
    }else{
        counter--;
        count.innerText = counter;
    }
}