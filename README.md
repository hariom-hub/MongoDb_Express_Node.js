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

const user1 = new User({

    name:"hariom",
    age:20,
    degree:"b.tech",
    height:5.8
});

# Find 
Model.find() //returns a query object ( thennable)

*** Mongoose queries are not promises, but they have a .then()

User.find().then((data)=>{
    console.log(data);
})

User.find({age:{$gt:15}}).then((data)=>{
    console.log(data);
})

