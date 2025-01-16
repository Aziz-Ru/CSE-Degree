const express = require("express");
const jobs = {};
const app = express();

updateJob = (jobId) => {
  if (jobs[jobId] < 100) {
    jobs[jobId] += 10;
    setTimeout(() => {
      updateJob(jobId);
    }, 5000);
  }
};
app.post("/submit", (req, res) => {
  const jobId = `job-${new Date().toDateString()}`;
  jobs[jobId] = 0;
  console.log(jobId);
  updateJob(jobId);
  res.send("\n\n" + jobId + "\n\n");
});

app.get("/status/:jobId", (req, res) => {
  console.log(jobs[req.params.jobId]);
  res.send(`\n\n${jobs[req.params.jobId]}%\n\n`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
