const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from  product  add');
});
// get all 
router.get('/all', (req, res) => {
    res.send('response from product all');
}

);

// update
router.get('/update', (req, res) => {
    res.send('response from product  update');
}

);
// getbyid
router.get('/getbyid', (req, res) => {
    res.send('response from product   getbyid');
}

);
// delete
router.get('/ delete', (req, res) => {
    res.send('response from product  delete');
}

);

module.exports = router;