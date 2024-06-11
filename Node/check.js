const currentY = new Date().getFullYear();
const currentD = new Date().getDate();
const currentM = new Date().getMonth();
// const currentY = new Date().getDay();
console.log(new Date().toLocaleTimeString());
console.log(new Date().toDateString());
console.log(`${currentD}-${currentM}-${currentY}`);
console.log(typeof currentD);
