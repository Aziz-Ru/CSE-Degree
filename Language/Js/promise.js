// Fetch data from JSONPlaceholder
function fetchPosts() {
  return new Promise((resolve, reject) => {
    console.log("Wait 1 second");
    resolve("Good Boy");
  }, 2000);
}

const promise1 = new Promise((res, rej) => {
  res("Hi");
});

const promise2 = new Promise((res, rej) => {
  res("Good");
});

const promise3 = new Promise((res, rej) => {
  res("Boy");
});

const promise4 = new Promise((res, rej) => {
  rej("Error");
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json(); // Parse JSON data
//     })
//     .catch((error) => {
//       console.error("Error fetching posts:", error);
//     });

// Use the fetchPosts function
// fetchPosts().then((data) => {
//   if (data) {
//     console.log("Fetched posts:", data); // Log the fetched data
//   }
// });
