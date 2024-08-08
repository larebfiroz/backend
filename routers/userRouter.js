const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    
    res.send('response from user add');
});
// get all 
router.get('/all', (req, res) => {
    res.send('response from userall');
}

);

// update
router.get('/update', (req, res) => {
    res.send('response from userupdate');
}

);
// getbyid
router.get('/getbyid:id', (req, res) => {
    console.log(req.params.id);
    
    res.send('response from user getbyid');
}

);
// delete
router.get('/ delete', (req, res) => {
    res.send('response from user delete');
}

);

module.exports = router;