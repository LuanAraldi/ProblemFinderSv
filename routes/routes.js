var express = require('express');
var router = express.Router();

var ProblemFinder = require('./../bin/problemfinder');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  ProblemFinder.solve(req, res);
});

module.exports = router;
