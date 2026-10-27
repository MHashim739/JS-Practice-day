let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.send('<h2>you see home page</h2>');
    res.send('<p>in this home page</p>')
})
module.exports=router;