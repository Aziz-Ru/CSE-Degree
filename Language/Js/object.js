// Object Literal:An object literal is a straightforward way to define an object in JavaScript using curly braces {} with key-value pairs.
// Object Constructor

const obj = {
  name: "Aziz",
  age: 10,
  l: {
    k: "ii",
  },
};

Object.entries(obj).map((k) => {
  console.log(k);
});
