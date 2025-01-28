CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  username VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  post_name VARCHAR(255),
  --the foreign key REFERENCES the value of the PRIMARY KEY in the first table
  user_id INT REFERENCES users(id)
);

INSERT INTO users (first_name, last_name, username)
VALUES ('Manny', 'Gonzalez', 'MannyG'), ('Joe', 'Venton', 'RealGUppercut');

--we need to insert data into the foreign key column. It's not automatically generated
INSERT INTO posts (post_name, user_id)
VALUES ('Amazing Post', 1), ('Great Post', 2), ('Super Post', 2), ('Fantastic Post', 1);

-- I want to select the username from the users table and the post_name from the posts table.
-- I need to tell my SQL that those columns belong to two different tables --> we are going to use dot notation
-- I cannot select two tables at the same time, but I can select one table and JOIN the second table.
-- We can add any extras at the end of the query (WHERE, ORDER BY, LIMIT)
SELECT users.username, posts.post_name FROM users
JOIN posts ON posts.user_id = users.id WHERE username = 'MannyG';