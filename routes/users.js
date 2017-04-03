var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //debugger

  fetch("https://raw.githubusercontent.com/SCSU-CSC-Department/201701-csc-443-01/master/course.json")
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
