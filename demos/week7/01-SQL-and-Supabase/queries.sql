--I want to create a table to store my biscuits data with the following columns: biscuit_name, src, description, crunchiness.

CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT
);

-- I want to insert data into my biscuits database
INSERT INTO biscuits (biscuit_name, src, description, crunchiness)
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of chocolate heaven', 6 ),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

-- I want to select all the data in the table.
SELECT * FROM biscuits;

--I want to select all the data in the table with crunchiness 6.
SELECT * FROM biscuits WHERE crunchiness = 6;

-- I want to select the biscuit_name and the description of all the data in the table.
SELECT biscuit_name, description FROM biscuits;

-- I want to select the biscuit_name and the crunchiness in the table only when the crunchiness is 4.
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4;

-- I want to select the biscuit_name and the crunchiness in the table only when the crunchiness is 4 or 6.
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 OR crunchiness = 6;

-- I want to select the biscuit_name and the crunchiness in the table only when the crunchiness is 4 or 6. I also want to order them alphabetically (ASC, DESC).
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 OR crunchiness = 6 ORDER BY biscuit_name ASC;
-- I want to select the biscuit_name and the crunchiness in the table only when the crunchiness is 4. I also want to limit the entries to 2.
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 LIMIT 2;
-- I want to select the biscuit_name and the crunchiness in the table only when the crunchiness is 4. I also want to order them alphabetically and limit the entries to 2.
SELECT biscuit_name, crunchiness FROM biscuits WHERE crunchiness = 4 ORDER BY biscuit_name ASC LIMIT 2;
-- I want to select the biscuit_name and the description, but I want to rename the columns to be more user-friendly and informative (AS).
SELECT biscuit_name AS "biscuit name", description AS "biscuit description" FROM biscuits;

--The SELECT query NEVER changes the data in the table or the columns in the table.

-- When we update or delete data, we do it one row at a time!

-- I want to update the crunchiness value of the bourbon biscuit.
-- Make sure you are ONLY updating one entry by using a unique identifier (id)
UPDATE biscuits SET crunchiness = 3 WHERE id = 1;

-- I want to delete a specific entry, in this case, I want delete the chocolate cookies.
DELETE FROM biscuits WHERE biscuit_name = 'Chocolate Cookies';

