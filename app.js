const express = require("express");
var request = require("request");

let app = express();

app.get("/backendData", (req, res) => {
  let data = req.query;

  console.log(JSON.stringify(data));

  var options = {
    method: "POST",
    url: "https://script.google.com/macros/s/AKfycby3FGhp1Y7iX7Mn4X6EPWOisEjZzdhgLR1mD_d6tQLGme9hbiEYUoBc0GiVHBBhJAgq/exec?action=addData",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  async function post(options) {
    await request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  }

  post(options);

  res.send("Successfully Added");
});

app.listen(3001, console.log("Server Started"));
