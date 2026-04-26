const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express= require("express");
const app= express();

const path= require("path");
const methodOverride= require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '3july2004'
});

//Inserting new data into the table
  // let q="Insert into user (id,username,email,password) values ?";
// let user=["123","123_newuser","abc@gmailcom","abc"];

let getRandomUser= () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// let data=[];
// for(let i=1;i<=100;i++){
//   data.push(getRandomUser()); // 100 fake users
// }

//Hone Page
app.get("/",(req,res)=>{
  let q=`Select count(*) from user`;
try{
connection.query(q, (err, result) =>{
    if(err) throw err;
    let count=result[0][`count(*)`];
    res.render("home.ejs", { count});
});}
catch(err){
    console.log(err);
    res.send("Some error in database");
}
});

//show route
app.get("/user", (req,res)=>{
  let q=`Select * from user`;
  try{
connection.query(q, (err, users) =>{
    if(err) throw err;
   // console.log(users);
  //  res.send(result);
  res.render("showuser.ejs",{users});
});
}
catch(err){
    console.log(err);
    res.send("Some error in database");
}

});

//edit route
app.get("/user/:id/edit", (req,res)=>{
  let {id}=req.params;
  let q=`Select * from user where id='${id}'`;

  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user=result[0];
    console.log(user);
    res.render("edit.ejs",{user});
  });}
  catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//update (db) route
app.patch("/user/:id",(req,res)=> {
  let { id }= req.params;
  let {password: formPassword, username:newUsername}=req.body;
  let q=`Select * from user where id='${id}'`;

  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user=result[0];
    if(formPassword != user.password){
      res.send("Password incorrect");
    }
    else{
     let q2=`Update user SET username='${newUsername}' where id='${id}'`;
     connection.query(q2, (err, result) =>{
      if(err) throw err;
      res.redirect("/user");
    });
    }
  });
}
  catch(err){
    console.log(err);
    res.send("Some error in database");
  }
  });


//delete user route
app.get("/user/:id/delete",(req,res)=> {
  let { id }= req.params;
  let q=`Delete from user where id='${id}'`;
   try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user=result[0];
    res.render("delete.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

app.listen(3000,() => {
  console.log("Server is listing to port 3000");
});

// try{
// connection.query(q,[data], (err, result) =>{
//     if(err) throw err;
//     console.log(result);
// });}
// catch(err){
//     console.log(err);
// }
// connection.end();