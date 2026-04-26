const express = require('express')
const app = express();

console.dir(app);

const port = 3000
app.get("/", (req, res) => {
  res.send('Hello World!')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req,res) => {
//     // console.log(req);
//     console.log("Request recieved");
//     let code ="<h1>fruits</h1> <ul><li>apple</li><li>orange</li>";
//     res.send(code);
// });
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("hello in am root");
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// }); 

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// }); 

// app.use((req, res) => {
//   res.status(404).send("this page does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// });

app.get("/:username/:id", (req, res) => {
    let {username,id} = req.params;
    let htmlStr=`<h1> Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req,res) => {
  let {q}=req.query;
  //console.log(req.query);
if(!q){
  res.send("<h1>no search query provided</h1>");
  }
  res.send(`<h1>search results of the query : ${q}</h1>`);
  
}); 