const users = require("express").Router();
const { createUser, fetchAllUsers } = require('../queries/users');

users.get("/", fetchAllUsers);
users.post("/", createUser);

module.exports = users;
