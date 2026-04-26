const express= require("express");
const app = express();
const port = 8080;
const path= require("path");
const {v4 : uuidu4} = require("uuid");
const methodOverride= require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


let posts=[ 
    {
        id: uuidu4(),
        username: "apnacollege",
        content : "Welcome to Apna College",
    },
    {
        id: uuidu4(),
        username: "Prithwi Raj",
        content : "hello world!",
    },
    {
        id: uuidu4(),
        username: "Megan Fox",
        content : "An sex idol to worship",
    }
]
app.get("/post", (req,res)=>
{
    res.render("index.ejs", {posts});
});


app.get("/post/new", (req,res)=>{
    res.render("new.ejs")
})

app.post("/post", (req,res)=>
{
    let { username,content}= req.body;
    let id= uuidu4();
    posts.push({id,username,content});
    res.redirect("/post");
});


app.get("/post/:id", (req,res)=>{
    let {id}= req.params;
    console.log(id);
    let post= posts.find(((post)=> post.id===id));
    res.render("show.ejs",{post});
    // res.send("resposnse working");
});

app.patch("/post/:id", (req,res) => {
    let { id }= req.params;
    let newContent= req.body.content;
    let post= posts.find(((post)=> post.id===id));
    post.content=newContent;
    console.log(post);
    res.redirect("/post");
});

app.get("/post/:id/edit", (req,res)=>{
    let {id}= req.params;
    let post= posts.find(((post)=> post.id===id));
    res.render("edit.ejs",{post});
});

app.delete("/post/:id", (req,res)=> {
    let {id}=req.params;
     posts= posts.filter(((post)=> post.id !==id));
    //res.send("Post deleted");
    res.redirect("/post");
});

app.listen(port ,() =>
{
    console.log(`Listening port : 8080`);
});