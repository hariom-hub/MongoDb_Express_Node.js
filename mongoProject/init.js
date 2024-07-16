const mongoose = require("mongoose");
const chats = require("./models/chats");

//inserting data into db

main().then(() => {

    console.log("connection successful");
}).catch((error) => {

    console.log(error);
});

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/MongoProject');
}

let allchats = [

    {
        from: "satya nadella",
        to: "sundar pichai",
        msg: "hey sundar! what's going on buddy",
        createdAt: new Date()
    },
    {

        from: "prabhakar raghavan",
        to: "aparna pappu",
        msg: "let's make google search better",
        createdAt: new Date()
    },
    {

        from: "sam altman",
        to: "satya nadella",
        msg: "let's integrate copilot",
        createdAt: new Date()
    }, {

        from: "aravind shr.inivas",
        to: "demis hassabis",
        msg: "I will buy deep mind one day",
        createdAt: new Date()
    }
]

chats.insertMany(allchats);
chats.find({}).then((data) => {

    console.log(data);
}).catch((error) => {
    console.log(error);
})