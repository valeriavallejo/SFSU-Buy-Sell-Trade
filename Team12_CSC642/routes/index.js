/*
  @author: ManTing Weng (Sabrina)
  @date: 
  @description: handle router for all pages
 */

var express = require('express');
var router = express.Router();

/* GET page. */

router.get('/', function(req, res, next) {
  res.render('HomePage');
});

router.get('/ResultsPage', function(req, res, next) {
  res.render('ResultsPage');
});

router.get('/LogIn', function(req, res, next) {
  res.render('LogIn');
});

router.get('/SignUp', function(req, res, next) {
  res.render('Registration');
});

router.get('/Post', function(req, res, next) {
  res.render('Post');
});

router.get('/ProductPage', function(req, res, next) {
  res.render('ProductPage');
});


module.exports = router;
