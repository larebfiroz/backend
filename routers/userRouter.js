const express = require('express');

const router = express.Router();

router.get('/add', (req,res)=>{
    res.send('response from user add');
});
// get all 
router.get('/all',(req,res)=> {
    res.send('response from userall');
}

);

// update
router.get('/ update',(req,res)=> {
    res.send('response from userupdate');
}

);
// getbyid
router.get('/getbyid',(req,res)=> {
    res.send('response from user getbyid');
}

);
// delete
router.get('/ delete',(req,res)=> {
    res.send('response from user delete');
}

);

module.exports=router;