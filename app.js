const express = require("express");

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Welcome to the app!");
});

app.get("/polish", (req, res) => {
  res.send("Czesc, Witamy w aplikacji!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
