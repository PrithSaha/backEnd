const mongoose = require('mongoose');
const {Schema}=mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {   
            _id:false,
            location:String,
            city:String,
        },
    ],
});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username: "Sherlock Homes",
        addresses:[{
            location:"221B Baker Street",
            city:"London",
        }]
    });

    user1.addresses.push({
        location: "P32 WallStreet",
        city: "London",
    });

    let results=await user1.save();
    console.log(results);
    mongoose.connection.close();
};

main()
.then(async ()=>{console.log("connection successful");
await addUsers();})
.catch(err => console.log(err));