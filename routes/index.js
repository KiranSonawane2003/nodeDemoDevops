var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'node devops testing' });
 // res.sendStatus(200)
});

module.exports = router;
