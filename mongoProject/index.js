const express = require("express");
const app = express();
const port = 4040;
const mongoose = require("mongoose");
const path = require("path");
const chatData = require("./models/chats");
const methodOverride = require("method-override");
const { rawListeners } = require("process");


//web server interacting with the db

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));


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

//index route

app.get('/chats', async (req, res) => {

    let chats = await chatData.find();

    // console.log(chats);

    res.render("chats.ejs", { chats });

})

// EDIT ROUTE

app.get('/chats/:id/edit', async (req, res) => {

    let { id } = req.params;
    let user = await chatData.findById(id);

    console.log(`user id : ${id}`);
    console.log(user);
    res.render("edit.ejs", { user });
})

//UPDATE ROUTE

app.put('/chats/:id', async (req, res) => {

    let { id } = req.params;
    let { msg: newMsg } = req.body;

    //setting the value of previous message to the newMsg

    let updatedChat = await chatData.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log("updated chat");
    console.log(updatedChat);
    res.redirect("/chats");
})

// DELETE ROUTE

app.delete('/chats/:id', async (req, res) => {

    let { id } = req.params;
    let deletedData = await chatData.findByIdAndDelete(id);
    chatData.findByIdAndDelete(id);
    console.log("delted data");
    console.log(deletedData);
    res.redirect("/chats");
})

app.listen(port, () => {

    console.log(`server is listening to port : ${port}`);
})