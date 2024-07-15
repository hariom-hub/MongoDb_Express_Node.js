const express = require("express");
const app = express();
const port = 4040;
const mongoose = require("mongoose");

main().then(() => {

    console.log("connection successful");
}).catch((error) => {

    console.log(error);
})

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/MongoProject');
}


app.get('/', (req, res) => {

    res.send("you are on the root path.");
});

app.listen(port, () => {

    console.log(`server is listening to port : ${port}`);
})