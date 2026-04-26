const mongoose = require('mongoose');
const {Schema}=mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema=new Schema({
    item:String,
    price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});

customerSchema.pre("findOneAndDelete",async ()=>{
    console.log("Pre middleware");
});

customerSchema.post("findOneAndDelete",async ()=>{
    console.log("Post middleware");
});


const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

const findCustomer=async()=>{
    // let cust1=new Customer({
    //     name:"Rahul Kumar",
    // });
    // let order1=await Order.findOne({item:"Chips"});
    // let order2=await Order.findOne({item:"Chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);
     
    let result=await Customer.find({}).populate("orders");
    console.log(result[0]);
};

// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:"Samosa",price:12},
//         {item:"Chips",price:10},
//         {item:"Chocalate",price:40}
//     ]);
//     console.log(res);
// }

main()
  .then(async () => {  
    await delCust();
  });


const addCustomer=async()=>{
    let newCust=new Customer({
        name:"karanaujla"
    });

    let newOrder=new Order({
        item:"Puchka",
        price:250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
}

const delCust=async()=>{
   let data= await Customer.findByIdAndDelete("699b277b7f68ebe1da500f75");
   console.log(data);
}

// addCustomer();
delCust();
