const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.json({ message: "This is Express backend" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
