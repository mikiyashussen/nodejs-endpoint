const express = require("express");

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Welcome to the app!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
