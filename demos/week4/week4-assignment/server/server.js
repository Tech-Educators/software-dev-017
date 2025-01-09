//import packages
//start or configure packages
//tell server to use JSON
//set up a port for the server by listening...
//set up your database pool
//create a root route

//=============================================
//I need a route to READ data from the database
//I need a route to CREATE new data in the database

app.post("/new-data", async (req, res) => {
  const data = req.body;
  const query = await db.query(
    `INSERT INTO table_name (col, col2, col3) VALUES ($1, $2, $3)`,
    [data.input1, data.input2, data.input3]
  );
  await res.json(query.rows);
});
