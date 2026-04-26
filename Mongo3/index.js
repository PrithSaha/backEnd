const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Chat=require("./models/chat.js");
const methodOverride=require('method-override');
const ExpressError=require("./ExpressError.js");

app.set('views', path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

main().then(()=>{console.log("Connection sucessful");})
.catch((err)=> {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
} 

//Index Route
app.get("/chats", async (req,res) => {
let chats= await Chat.find();
//console.log(chats);
res.render("index.ejs", {chats});
});

//New Chat Route
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
})

//Create Chat Route
app.post("/chats", (req,res)=>{
    let {from, to, msg}= req.body;
    let newChat=new Chat({
        from: from,
        to:to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
        .save()
        .then((res)=>{
            console.log("Chat was saved");
        })
        .catch((err)=>{
            console.log("Error");
        });

        res.redirect("/chats"); 
});

//Edit Route
app.get("/chats/:id/edit" , async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

//Update Route
app.put("/chats/:id", async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    console.log(newMsg);
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true, new:true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
})

//Delete Route
app.delete("/chats/:id", async (req,res) => {
    let {id}=req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
})

//Show Route
app.get("/chats/:id" , async (req,res,next)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs", { chat});
})

app.get("/", (req,res)=>{
    res.send("root is working");
});

//Error Handing Middleware
app.use((err,req,res,next)=>{
    let {status=500, message="Some error occured"}=err;
    res.status(status).send(message);
})

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch( (err) =>{
            next();
        })
    }
}

//New Show Route
app.get("/chats/:id", async (req,res,next)=>{
    try{
        let { id}=req.params;
    let chat= await Chat.findById(id);
    if(!chat){
       next(new ExpressError(500,"Chat not found"));
    }
    res.render("edit.ejs", { chat});
    }
    catch{
        next(err);
    }
});

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});
