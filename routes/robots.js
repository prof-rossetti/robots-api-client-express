var express = require('express');
var router = express.Router();

var myRobots = [
  {
    "_id":"58e487ad32ac2000f07acc4c",
    "updated_at":"2017-04-05T05:59:09.694Z",
    "created_at":"2017-04-05T05:59:09.694Z",
    "name":"r2d2",
    "description":"holds a secret message",
    "in_stock":100,
    "__v":0
  },
  {
    "_id":"58e487ad32ac2000f07acc4d",
    "updated_at":"2017-04-05T05:59:09.696Z",
    "created_at":"2017-04-05T05:59:09.696Z",
    "name":"bb8",
    "description":"rolls around",
    "in_stock":75,
    "__v":0
  },
  {
    "_id":"58e487ad32ac2000f07acc4b",
    "updated_at":"2017-04-05T05:59:09.687Z",
    "created_at":"2017-04-05T05:59:09.687Z",
    "name":"c3po",
    "description":"specializes in language translation",
    "in_stock":50,
    "__v":0
  }
] // use example data

/* List Robots */

router.get('/robots', function(req, res, next) {
  console.log("LISTING ROBOTS", myRobots)
  res.render('robots/index', {robots: myRobots, title: "All Robots"});
});

/* Show Robot */

router.get('/robots/:id', function(req, res, next) {
  var robotId = req.params.id;
  var robot = myRobots.find(function(robot){ return robot._id == robotId }) // use static hard-coded data for now

  if (robot) {
    console.log("SHOWING ROBOT", robot)
    res.render('robots/show', {robot: robot, title: `Robot ${robotId}`});
  } else {
    var errorMessage = `OOPS - COULDN'T FIND ROBOT ${robotId}`
    console.log(errorMessage)
    res.send(errorMessage)
  }
});

module.exports = router;
