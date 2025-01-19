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
app.use(express.json());
//Get request is used to read the data
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
//Post request is used to add the data
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({ healthy: isHealthy });
  res.json({
    message: "Done!",
  });
});
//Put reguest is used to update the data
app.put("/", function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({
    message: "Done!",
  });
});
//Delete request is used to delete the data
//Delete the unhealthy kidney
//If there is no unhealthy kidney then it should not delete any kidney, it shoulf return a 411 (Wrong Input) status code with a message "No unhealthy kidney to delete"
app.delete("/", function (req, res) {
  if (isUnhealthy()) {
    const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    user[0].kidneys = newKidneys;
    res.json({
      message: "Done!",
    });
  } else {
    res.status(411).json({
      message: "No unhealthy kidney found",
    });
  }
});
function isUnhealthy() {
  let isUnhealthy = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      isUnhealthy = true;
    }
  }
  return isUnhealthy;
}
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
