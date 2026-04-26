const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("Connection Sucessful");
})
.catch((err)=>
{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title: 
    {
       type: String,
       required: true,
       maxLength: 20,
    },
    author: 
    {
        type:String,
    },
    price: 
    {
        type: Number,
        min: [1, ,"Price should be atleast 1"],
    },
    discount:
    {
        type: Number,
        default: 0
    },
    category:
    {
        type: String,
        enum:["friction","non-friction"],
    },
    genre:[String]
});

const Book=mongoose.model("Book", bookSchema);


let book1=new Book({
    title: "Mathematics XII",
    author: "R.D. Sharma",
    price: 1200
});

book1.save()
.then((res)=>
{
    console.log(res);
})
.catch((err)=>
{
    comsole.log(err);
});

