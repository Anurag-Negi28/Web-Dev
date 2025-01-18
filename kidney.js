const express = require("express");
const user = [
  {
    Name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    Name: "Jane",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];
const app = express();
app.get("/", function (req, res) {
  const johnKidney = user[0].kidneys;
  const numberofKidneys = johnKidney.length;
  let healthyKidneys = 0;
  for (let i = 0; i < numberofKidneys; i++) {
    if (johnKidney[i].healthy) {
      healthyKidneys++;
    }
  }
  const unhealthyKidneys = numberofKidneys - healthyKidneys;
  res.json({
    numberofKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.listen(3000);
