var express = require('express');
var router = express.Router();

var site = 'Dana Breseman';
var divider = ' | ';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: site });
});

router.get('/reading', function(req, res) {
  res.render('reading', { title: 'Reading' + divider + site });
});

router.get('/exploring', function(req, res) {
  res.render('exploring', { title: 'Exploring' + divider + site });
});

router.get('/cooking', function(req, res) {
  res.render('cooking', { title: 'Cooking' + divider + site });
});

router.get('/New_Tab', function(req, res) {
  res.render('New_Tab', { title: 'New Tab' + divider + site });
});
module.exports = router;
