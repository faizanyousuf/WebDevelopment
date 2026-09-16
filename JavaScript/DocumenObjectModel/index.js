console.log("hello world")

// let elem = document.getElementById('h2');
// console.log(elem.innerText);

// let ele = document.querySelector('#h2');
// console.log(ele.innerHTML)

// let doc = document.getElementById("h2").innerHTML;

let doc = document.getElementById("h2").textContent

console.log(doc)

let ele = document.createElement('h2')
// ele.id = 'h3'
ele.setAttribute("id",'h3');

console.log(ele);

ele.innerText = "faizan yousuf";

let div = document.getElementById('mydiv')
// console.log(div)


// div.append(ele);
// div.prepend(ele);

div.insertAdjacentElement('beforeEnd',ele);

console.log(div);

let h3 = document.getElementById('h3')
div.removeChild(h3);
