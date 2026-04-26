const mongoose = require('mongoose');

main()
.then(()=>{ console.log("Connection successful");})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User=mongoose.model('User', userSchema);

// User.deleteOne({name: "Eve"}).then((res)=> 
// {
//     console.log(res);
// });

User.deleteMany({age: {$gte: 48}}).then((res)=> 
{
    console.log(res);
});


// User.findByIdAndUpdate("694d5266e7efbe3de8fe35e9", {age: 99}, {new: true})
//  .then((res)=> {
//     console.log(res);
//  })
//  .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age: { $gt: 48}} , {age: 55})
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.find({ age: {$gt: 48}})
// .then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>
// {
//     console.log(err);
// });

// User.insertMany([
// { name: "Tony", email: "tony@gmail.com", age: 50},
// { name: "Peter", esmail: "peter@gmail.com", age: 30},
// { name: "Bruce", email: "bruce@gmailcom", age: 47},  
// ]).then((res)=>{
//     console.log(res);
// });

// const user2= new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48
// });

// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

