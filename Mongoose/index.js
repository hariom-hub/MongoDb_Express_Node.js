
const mongoose = require("mongoose");

main().then(() => {

    console.log("connection successful");
}).catch((error) => {

    console.log(error);
})

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
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

const uesr1 = new user({

    name: "hariom singh thakur",
    age: 20,
    degree: "b.tech",
    rollNo: 2404488
});


const user2 = new user({

    name: "gaurisha singh thakur",
    age: 19,
    degree: "bca",
    rollNo: 240438
});

const user3 = new user({

    name: "shreesha singh thakur",
    age: 23,
    degree: "gds",
    rollNo: 2303354
});

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

user.insertMany(
    [
    { name: "sundar pichai", age: 54, degree: "b.tech,ms,mba" },
    { name: "satya nadella", age: 56, degree: "b.tech,m.tech,mba" },
    { name: "arjuna", age: 4000, degree: "vedas,upanishads", rollNo: 1 },
    { name: "aacharya prashant", age: 45, degree: "b.tech,mba", rollNo: 1.1 },
    ]
).then((result) => {
    console.log(result);
}).catch((error) => {

    console.log(error);
})