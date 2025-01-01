const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;
let left = 0;
let right = arr.length - 1;
let mid;

const interval = setInterval(() => {
  mid = Math.floor((left + right) / 2);
  console.log(mid);
  if (arr[mid] === target) {
    console.log("Target found at index: " + mid);
    clearInterval(interval);
  } else if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  if (left > right) {
    console.log("Target not found");
    clearInterval(interval);
  }
}, 1000);
