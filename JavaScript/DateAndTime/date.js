let date = new Date();

console.log(date);

let newDate = new Date('2024-12-20T11:23');
console.log(newDate);
new Date()
newDate = new Date(2023,2,1,10,30);
console.log(newDate)

console.log(newDate.getFullYear());
newDate.setFullYear(2025);
// console.log(newDate.setFullYear(2042));
console.log(newDate.getFullYear());

console.log(newDate.getMonth());
newDate.setMonth(newDate.getMonth() + 2);

console.log(newDate.getMonth());