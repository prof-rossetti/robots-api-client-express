var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

var baseUrl
if (true == true) {
  baseUrl = "http://localhost:3003"
} else {
  baseUrl = "https://southernct-443-robots-api.herokuapp.com"
}

/* LIST */

router.get('/robots', function(req, res, next) {
  const robotsEndpoint = `${baseUrl}/api/robots.json`

  fetch(robotsEndpoint).then(function(response) {
    response.json().then(function(json){
      console.log("LISTING ROBOTS", json)

      res.render('robots/index', {robots: json, title: "Robots List"});
    })
  })
});

/* NEW */

router.get('/robots/new', function(req, res, next) {
  res.render('robots/new', {baseUrl: baseUrl, title: "New Robot"});
})

/* SHOW */

router.get('/robots/:id', function(req, res, next) {
  const robotId = req.params.id
  const url = `${baseUrl}/api/robots/${robotId}.json`

  fetch(url).then(function(response) {
    response.json().then(function(json){
      console.log("SHOWING ROBOT", json)
      res.render('robots/show', {robot: json, title: `Robot ${robotId}`})
    })
  })
})



module.exports = router
