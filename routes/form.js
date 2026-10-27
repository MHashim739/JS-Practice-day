let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.send('form')
    // console.log('set form');
    
})
module.exports=router