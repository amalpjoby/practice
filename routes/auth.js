var express = require('express');
var router = express.Router();

/**
 * auth page
 */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Login page
 */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Amal', username: 'amal' });
});

/**
 * POST login data
 */
router.post('/logged', async (req, res, next) => {
  console.log(req.body);
  res.render('loggedin', {title: 'logged'});
});

module.exports = router;
