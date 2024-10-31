console.log("Hello World");

let num: number;
let str: string;
let bl: boolean;
let arr: string[] = [];
arr.push("likie");
let strNum: (number | string)[] = [];

let obj: object = {};

const myfun: Function = (name: string, age: number = 10) => {
  console.log(age);
  console.log("myFun");
};

console.log(myfun());

const country = ["india", "nepal", "pak"];
country.push("usa ");
function mult(a: number, b: number) {
  return a * b;
}

console.log(mult(10, 20));
