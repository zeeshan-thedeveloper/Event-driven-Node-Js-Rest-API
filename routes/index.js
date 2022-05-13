var express = require('express');
var router = express.Router();
var emiter = require('../Events/Emiter')
/* GET home page. */
router.post('/', function(req, res, next) {
  const {eventName}=req.body;
  emiter.emit(`${eventName}`);
  res.status(200).send({responseText:`${eventName}`})
});

module.exports = router;
