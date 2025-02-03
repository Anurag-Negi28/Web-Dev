//There are three ways we can input in the runtime one is from qury parameter, second is from header and third is from body

const express = require("express");
const app = express();

app.get("/healthyKidney", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Anurag" && password != "0000") {
    res.json({
      msg: "You are not authorized",
    });
    return;
  }

  if (kidneyId != "1" && kidneyId != "2") {
    res.json({
      msg: "You are not fucking authorized",
    });
    return;
  }

  res.status(200).json({
    msg: "You are authorized",
  });
});
app.listen(3001);
