const articles = [
  {
    title: "Hello",
    upvote: 10,
    date: "2010-01-23",
  },
  {
    title: "lo",
    upvote: 5,
    date: "2029-01-23",
  },
  {
    title: "Hlo",
    upvote: 30,
    date: "2020-01-23",
  },
];

const a = articles.sort((a, b) => b.upvote - a.upvote);
const b = articles.sort((a, b) => b.date.localeCompare(a.date));
console.log(a);
console.log(b);
