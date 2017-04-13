var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

var baseUrl
if (true == true) {
  baseUrl = "http://localhost:3003"
} else {
  baseUrl = "https://southernct-443-robots-api.herokuapp.com"
}

/* INDEX/LIST */

router.get('/robots', function(req, res, next) {
  const url = `${baseUrl}/api/robots.json`

  fetch(url)
    .then(function(response) {
      response.json()
        .then(function(json){
          console.log("LISTING ROBOTS", json)
          res.render('robots/index', {robots: json, title: "Robots List"});
        })
    })
});

/* CREATE */

router.get('/robots/new', function(req, res, next) {
  const url = `${baseUrl}/api/robots.json`



})

/* SHOW */

router.get('/robots/:id', function(req, res, next) {
  const robotId = req.params.id;
  const errorMessage = `OOPS - COULDN'T FIND ROBOT ${robotId}`
  const url = `${baseUrl}/api/robots/${robotId}.json`

  fetch(url)
    .then(function(response) {
      response.json()
        .then(function(json){
          console.log("SHOWING ROBOT", json)
          res.render('robots/show', {robot: json, title: `Robot ${robotId}`});
        })
    })
})



module.exports = router
