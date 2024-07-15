
const mongoose = require("mongoose");

main().then(() => {

    console.log("connection successful");
}).catch((error) => {

    console.log(error);
})

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/coder');
}


//defining the schema

const Userschema = new mongoose.Schema({

    name: String,
    age: Number,
    degree: String,
    rollNo: Number
});

const Userdata = new mongoose.Schema({

    name: String,
    height: Number,
    aadharno: Number,
    gender: String
});


const laptop = mongoose.model("laptop", Userschema);
const mobile = mongoose.model("mobile", Userdata);
const user = mongoose.model("user", Userschema);

//inserting into user(inside the class Model by creating it's object (instance))

// const uesr1 = new user({

//     name: "hariom singh thakur",
//     age: 20,
//     degree: "b.tech",
//     rollNo: 2404488
// });


// const user2 = new user({

//     name: "gaurisha singh thakur",
//     age: 19,
//     degree: "bca",
//     rollNo: 240438
// });

// const user3 = new user({

//     name: "shreesha singh thakur",
//     age: 23,
//     degree: "gds",
//     rollNo: 2303354
// });

// user2.save().then((result) => {

//     console.log(result);
// }).catch((error) => {

//     console.log(error);
// })

// user3.save().then((result) => {

//     console.log(result);
// }).catch((error) => {

//     console.log(error);
// });  

// user.insertMany(
//     [
//     { name: "sundar pichai", age: 54, degree: "b.tech,ms,mba" },
//     { name: "satya nadella", age: 56, degree: "b.tech,m.tech,mba" },
//     { name: "arjuna", age: 4000, degree: "vedas,upanishads", rollNo: 1 },
//     { name: "aacharya prashant", age: 45, degree: "b.tech,mba", rollNo: 1.1 },
//     ]
// ).then((result) => {
//     console.log(result);
// }).catch((error) => {

//     console.log(error);
// })

// user.find({ age: { $lt: 30 } }).then((data) => {
//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// });

// mongoose.connection.close();


// user.findById("6692cdc5a717597c9cb99fab").then((data) => {
//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// });
// console.log("-----------------------------------");
// user.findOne({ age: { $lt: 25 } }).then((data) => {

//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// // update data

// user.updateOne({ age: 56 }, { $set: { name: "satya nadella ceo" } });

// user.find({}).then((data) => {

//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// })
// // user.updateOne({age:{$gt:50}},{$set:{experience:"master"}}).then(()=>{
//     console.log("data updated successfully");
// })


// user.updateMany({ age: { $gt: 50 } },{degree:"padhai"}).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// user.findOneAndUpdate({ name: "sundar pichai" }, { age: 53 }, { new: true }).then((data) => {

//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// });

const coderSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true
    },
    domain: {

        type: String,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        runValidators: true,
        min: 20
    },
    timing: {
        type: String,
        enum: ["day shift", "night shift"],
    },

});

const coder = mongoose.model("coder", coderSchema);


// coder.insertMany([{


//     name: "ritansh",
//     domain: "ml and ds",
//     age: 20,
// }
// ]);

// let coder3 = new coder({

//     name: " ali khan",
//     domain: "web dev,android,db,ai&ml,devops",
//     age: 30,
//     timing: "night shift",
//     experience: 10
// }).save().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })


// let coder1 =;new coder({

//     name: "hariom",
//     domain: "web dev",
//     age: 20
// }).save().then((data) => {

//     console.log(data);
// }).catch((error) => {

//     console.log(error);

// })


// let coder2 = new coder({

//     name: "ammu pandey",
//     domain: "machine learning",
//     age: 19,
//     experience: 10
// }).save().then((data) => {

//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// })


// user.findOneAndDelete({ age: { $gt: 50 } }).then((data) => {

//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// let coder3 = new coder({

//     name: "bro coder",
//     domain: "competitive programming",
//     age: 30,
//     experience: 12,
//     timing: "day shift",
// }).save().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

