let express=require('express');
let form=require('./routes/form')
let login=require('./routes/login')
let home=require('./routes/home')
let app=express();
app.use((req,res,next)=>{
     console.log(req.url)
    //  console.log(res.url);
     
    next()  
}
)
app.use('/form',form)
app.use('/user/login',login)
app.use(home);
app.use('/data',login)
app.listen(5000,()=>{
    console.log('server is  running',5000);
})