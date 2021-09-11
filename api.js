const express  = require('express');
const router = express.Router();

// test

router.get('/', (req, res) => {
    console.log(req);
    res.json([{message : req.headers}, {message2: req.rawHeaders}]);
});

module.exports = router;
