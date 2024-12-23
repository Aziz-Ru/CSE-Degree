function worker(a, b, callback) {
  callback(a, b);
}

function main() {
  worker(10, 11, (a, b) => {
    console.log(a + b);
  });
  worker(10, 11, (a, b) => {
    console.log(a - b);
  });
  worker(10, 11, (a, b) => {
    console.log(a * b);
  });
}

main();
