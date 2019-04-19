var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.visits = isNaN(req.session.visits) ? 1 : req.session.visits + 1;
  console.log("visits this session: " + req.session.visits);
  res.render('index', { title: 'Express' });
});

module.exports = router;
