# MongoDb_Express_Node.js
let's integrate backend with mongod.

# Schema

schema defines the shape of the documents within that collection.
const userSchema = new mongoose.Schema({

    name:String,
    age:Number,
    degree:String
})

# Model

model in mongoose is a class with which we construct documents.

const User = mongoose.model("user",userSchema);

# Insert 