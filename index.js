const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world hello how are you00000");
});

const users = [
  { id: 1, name: "naim", email: "shafiul.naim@gmail.com", phone: "0156824564" },
  { id: 2, name: "nafi", email: "nafi@gmail.com", phone: "015682364564" },
  { id: 3, name: "adib", email: "adib@gmail.com", phone: "015345364" },
  { id: 4, name: "shuvo", email: "shuvo@gmail.com", phone: "0153454564" },
  { id: 5, name: "nakib", email: "nakib@gmail.com", phone: "015656788564" },
  { id: 6, name: "sakib", email: "ssakib@gmail.com", phone: "056456564" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched)
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  console.log(id);
  // const user = users[id];
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push;
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
