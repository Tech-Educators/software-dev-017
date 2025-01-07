//This is what a server tends to look like (at this stage in the course)

import express from "express";
import cors from "cors";
//You need to install cors and import it!
const app = express();

app.use(express.json());

app.use(cors());
//You need to tell your app to USE cors!

//This is where we create our server endpoint!
app.post("/messages", function (req, res) {
  console.log("This is the req.body", req.body);
  //This console log will show me what data was sent from the client in the body of the fetch request!
  res.json({ status: "Message Received" });
  //This part is the reponse that is sent from the server once it receives a request!

  // this data will end up being saved in a database... eventually.
});

//We need to write the following to have our server running and listening for interactions!
app.listen(8080, function () {
  console.log("Server good. Ug. 8080 good.");
});
