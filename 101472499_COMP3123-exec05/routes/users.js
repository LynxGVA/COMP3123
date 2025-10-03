const express = require('express');
const fs = require('fs');
const routerUser = express.Router();

routerUser.get('/profile', (req, res) => {
  fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.json(JSON.parse(data));
  });
});

routerUser.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send("Server Error");

    const user = JSON.parse(data);

    if (username !== user.username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }
    if (password !== user.password) {
      return res.json({ status: false, message: "Password is invalid" });
    }

    res.json({ status: true, message: "User Is valid" });
  });
});

routerUser.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;
