const express = require('express');
const Model=require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    
   new Model(req.body).save()
   .then((result) => {
    res.status(200).json(result);
   }).catch((err) => {
    console.log(err);
    
    res.status(500).json(err);
   });
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