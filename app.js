const express = require("express");
var request = require("request");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  let data = req.query;

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

app.listen(5000, console.log("server started"));
