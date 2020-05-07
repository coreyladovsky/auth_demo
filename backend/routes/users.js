const users = require("express").Router();
const { createUser, fetchAllUsers } = require('../queries/users');

const { checkFirebaseToken } = require("../middleware/auth");

users.get("/", checkFirebaseToken, fetchAllUsers);
users.post("/", createUser);

module.exports = users;
