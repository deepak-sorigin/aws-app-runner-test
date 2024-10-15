const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Got REquest");
  res.status(200).json({ health: true });
});

app.listen(8080, () => {
  console.log("Server Started at 8080");
});
