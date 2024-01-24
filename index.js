// app.js
const express = require("express");
const moment = require("moment");
const members = require("./members");
const users = require("./users");
const app = express();

// const Server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', )
// })

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  const response = {
    Status: "success",
    Message: "response success",
    Description: "Exercise #03",
    Date: moment().format(),
    Data: members.getMembers(),
  };

  res.json(response);
});

app.get("/users", async (req, res) => {
  try {
    const usersData = await users.getUsers();
    res.json(usersData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
