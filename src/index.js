const express = require("express");
const client = require("prom-client");
const requestCount = require("./monitoring/requestCount");
const app = express();
const port = 3000;

app.use(requestCount);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.json({ name: "Chico" });
});

app.post("/user", (req, res) => {
  res.json({ name: "Chico" });
});

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  res.set('Content-Type', client.register.contentType);
  res.end(metrics);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
