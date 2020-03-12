var express = require('express');
var router = express.Router();

router.use( (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('test data');
});


module.exports = router;