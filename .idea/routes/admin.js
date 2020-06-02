let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin');
});

router.post('/', function(req, res, next) {
    res.render('admin');
});

module.exports = router;
