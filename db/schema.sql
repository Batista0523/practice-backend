\c practice;

DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS books;

CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    city VARCHAR(50),
    stadium VARCHAR(50),
    founded_year VARCHAR(50),
    championships VARCHAR(50),
    image TEXT 
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(200) NOT NULL,
    genre VARCHAR(100),
    available_date DATE,
    image TEXT
);