const mongoose = require("mongoose");

//defining the format of the data to be inserted.

const chatSchema = new mongoose.Schema({

    from: {

        type: String,
        required: true,
    },
    to: {

        type: String
    },
    msg: {
        type: String,
        maxLength: 500,
    },
    createdAt: {
        type: Date
    }
});

const chat = mongoose.model("chat",chatSchema);

module.exports = chat;
