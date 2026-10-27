let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.send('<form  action="/data" method ="post"><input type="text" placeholder="enter email"> <br> <button type="submit">submit</button style="margin:20px;"></form> ')
    // res.send('login page')
})
router.post('/',(req,res)=>{
    res.send('data recieved')
    
})
module.exports=router