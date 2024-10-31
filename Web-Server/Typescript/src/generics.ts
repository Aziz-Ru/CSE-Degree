// Suppose you need to develop a function that returns a random number in an array of numbers.

function getRandom1Element(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// To get a random element of an array, you need to:

// Find the random index first.
// Get the random element based on the random index.

let numbers = [1, 5, 7, 4, 2, 9];
let colors = ["red", "green", "blue"];
console.log(getRandom1Element(colors));
console.log(getRandom1Element(numbers));
// The getRandomNumberElement function receives an array of numbers and returns a random number from the array.

// TypeScript generics come to the rescue

// The following shows a generic function that returns the random element from an array of type T

// SOlve

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers1 = [1, 5, 7, 4, 2, 9];
let colors1 = ["red", "green", "blue", "yellow", "orange", "purple"];
console.log(getRandomElement<string>(colors1));
console.log(getRandomElement<number>(numbers1));
