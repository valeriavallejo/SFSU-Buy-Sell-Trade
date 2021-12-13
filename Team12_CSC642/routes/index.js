/*
  @author: ManTing Weng (Sabrina)
  @date: 
  @description: handle router for all pages
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HomePage');
});

router.get('/HomeResultsPage', function(req, res, next) {
  res.render('HomeResultsPage');
});

router.get('/Login', function(req, res, next) {
  res.render('Login');
});

router.get('/Post', function(req, res, next) {
  res.render('Post');
});



module.exports = router;