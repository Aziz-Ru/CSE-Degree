function addAsync(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 100);
  callback(a + b);
}
console.log("Before");
addAsync(10, 19, (res) => {
  console.log(res);
});

console.log("After");
// addAsync();
