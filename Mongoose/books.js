const mongoose = require("mongoose");

main().then(() => {

    console.log("connections successful");
}).catch((error) => {

    console.log(error);
});

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookschema = new mongoose.Schema({

    bookname: String,
    author: String,
    publishingyear: Number,
    price: Number,
});
const laptopschema = new mongoose.Schema({

    laptopName: {
        type: String,
        required: true,
    },
    modelnum: {
        type: Number,
        required: true
    },
    weight: Number,
    cost: Number,
    company: String
});

let book1 = mongoose.model("book1", bookschema);

// book1.insertMany([

//     {
//         bookname: "bhagvadgita",
//         author: "shrikrishna",
//         publishingyear: Infinity,
//         price: null
//     }, {

//         bookname: "the power of subconcious mind",
//         author: "joseph murphy",
//         publishingyear: 1927,
//         price: 200

//     },
//     {
//         bookname: "atomic habits",
//         author: "James clear",
//         publishingyear: 2002,
//         price: 250
//     }
// ]);

// book1.find({}).then((data) => {

//     console.log(data);
// }).catch((error) => {

//     console.log(error);
// })

let laptop1 = mongoose.model("laptop1", laptopschema);


// laptop1.insertMany([

//     {
//         laptopName: "hp ryzen 5 5500u",
//         modelnum: 3214,
//         weight: 1.69,
//         cost: 42500,
//         company: "hewlett packard"
//     },
//     {
//         laptopName: "dell inspiron 15",
//         modelnum: 3215,
//         weight: 1.8,
//         cost: 55500,
//         company: "DELL Technologies"
//     }, {

//         laptopName: "asus rog strix 17",
//         modelnum: 4500,
//         weight: 2.5,
//         cost: 77000,
//         company: "asus"
//     }
// ]).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

