const express = require("express");
const jobs = {};
const app = express();

updateJob = (jobId) => {
  if (jobs[jobId] < 100) {
    jobs[jobId] += 10;
    console.log(jobs[jobId]);
    setTimeout(() => {
      updateJob(jobId);
    }, 2000);
  }
};
app.post("/submit", (req, res) => {
  const jobId = `job-${new Date().toDateString()}`;
  jobs[jobId] = 0;
  console.log(jobId);
  updateJob(jobId);
  res.send("\n\n" + jobId + "\n\n");
});

app.get("/status/:jobId", async (req, res) => {
  while ((await checkJobComplete(req.params.jobId)) === false);
  res.send(`\n\n${jobs[req.params.jobId]}%\n\n`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

const checkJobComplete = (jobId) => {
  return new Promise((res, rej) => {
    if (jobs[jobId] < 100) {
      setTimeout(() => {
        res(false);
      }, 1000);
    } else res(true);
  });
};
