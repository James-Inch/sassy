CREATE DATABASE  sassy;
USE sassy;

CREATE TABLE messages (
    id INT(11) NOT NULL AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    body VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,

    PRIMARY KEY(id)
);