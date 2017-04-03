var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //debugger

  var url = "https://react-robots.herokuapp.com/api/robots"

  fetch(url)
    .then(function(response) {
      console.log("GOT A RESPONSE:", response)

      response.json()
        .then(function(json){
          console.log("GOT SOME DATA:", json)
          // DO SOMETHING WITH THE DATA HERE!

          res.send(json);
        })
    })
    .catch(function(err){
      console.log("GOT AN ERROR:", err)
      res.send({error:"OOPS"});
    }) // handle errors

});

/* POST users listing. */
router.get('/new', function(req, res, next) {
  //debugger

  var url = "https://react-robots.herokuapp.com/api/robots"
  var requestOptions = {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({robotName:"My bot 123", robotDescription:"makes the things"})
  }

  fetch(url, requestOptions)
    .then(function(response) {
      console.log("GOT A RESPONSE:", response)

      response.json()
        .then(function(json){
          console.log("GOT SOME DATA:", json)
          // DO SOMETHING WITH THE DATA HERE!

          res.send(json);
        })
    })
    .catch(function(err){
      console.log("GOT AN ERROR:", err)
      res.send({error:"OOPS"});
    }) // handle errors



});

module.exports = router;
