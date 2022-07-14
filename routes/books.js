var express = require('express');
var router = express.Router();

/**
 *  Route for books.
 */ 
router.get('/', function(req, res, next) {
  res.send('books');
});

/**
 * Route for searching a book. 
 */
router.get('/search', function(req, res, next) {
  res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"});
});

/**
 * Route for add book page
 */
router.get('/add', function(req, res, next) {
  res.render('addbook', { title: 'book add' });
});

/**
 * Add book using POST method
 */
router.post('/added', async (req, res, next) => {
  console.info(req.body);
  res.render('addedbook', { title: "Added book"});
});

/**
 * Add book using GET method
 */
router.get('/added', async (req, res, next) => {
  console.log(req.query);
  res.render('addedbook', { title: "Added book"});
});

/**
 * Find a book
 */
router.get('/find/:id', function(req, res, next) {
  const {id} = req.params
  console.info(id);
  res.status(200).json({ message: "Book found"});
});


module.exports = router;
