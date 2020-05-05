-- DROP DATABASE IF EXISTS auth_project;
-- CREATE DATABASE auth_project;

-- \c auth_project;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);

DROP TABLE IF EXISTS pets;
CREATE TABLE pets
(
    id SERIAL PRIMARY KEY,
    name VARCHAR, 
    owner_id VARCHAR REFERENCES users(id) ON DELETE SET NULL
);

