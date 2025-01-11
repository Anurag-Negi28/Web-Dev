//Express is a framework which allows to expose your application to the web using HTTP methods
//Express is not a default express mudule, so we need to install it using npm install express

const express = require("express"); //Importing express library

//Creating an instance of the express module
const app = express();

//Creating the function
function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}

//Exposing the functiomality in a route
app.get("/", function (req, res) {
  let n = req.query.n;
  let sum = calculateSum(n);
  res.send("The sum of the " + n + " natural numbers is " + sum);
});

app.listen(3000); //Listening to the port 3000
