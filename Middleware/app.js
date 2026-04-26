const express= require("express");
const app=express();
const ExpressError=require("./ExpressError");

//middleware -> response rend

// app.use((req,res,next)=>{
//     console.log("Hi i am 1st middleware!");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi i am 2nd middleware!");
//     next();
// });

//logger-morgan
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path , req.time);
//     next();
// })

const checkToken =(req,res,next) => {
    let {token}=req.query;
    if(token === "giveaccess"){
        return next();
    }
   throw new ExpressError(401,"Access denied!");
};

app.get("/api", checkToken , (req,res)=>{
    res.send("data");
})

app.get("/", (req,res)=>{
    res.send("Hi i am root");

});

app.get("/random", (req,res)=>{
    res.send("This is a random page");
})

app.get("/err",(req,res)=>{
   abcd=abcd;
})

app.get("/admin", (req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbiden");
})

app.use((err,req,res,next)=>{
    let {status=500,message}=err;
    res.status(status).send(message);
});

//404
app.use((req,res)=>{
    res.send("Page not found!")
})
app.listen(8070, ()=>{
    console.log("server listening to port 8070");
});