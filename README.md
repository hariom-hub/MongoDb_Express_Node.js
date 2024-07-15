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

user.find({ age: { $lt: 30 } }).then((data) => {
    console.log(data);
}).catch((error) => {

    console.log(error);
});

mongoose.connection.close();


user.findById("6692cdc5a717597c9cb99fab").then((data) => {
    console.log(data);
}).catch((error) => {

    console.log(error);
});
console.log("-----------------------------------");
user.findOne({ age: { $lt: 25 } }).then((data) => {

    console.log(data);
}).catch((error) => {
    console.log(error);
})

update data

user.updateOne({ age: 56 }, { $set: { name: "satya nadella ceo" } });

user.find({}).then((data) => {

    console.log(data);
}).catch((error) => {

    console.log(error);
})
user.updateOne({age:{$gt:50}},{$set:{experience:"master"}}).then(()=>{
    console.log("data updated successfully");
})


user.updateMany({ age: { $gt: 50 } },{degree:"padhai"}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


user.findOneAndUpdate({ name: "sundar pichai" }, { age: 53 }, { new: true }).then((data) => {

    console.log(data);
}).catch((error) => {

    console.log(error);
});


# Schema Validations

(Just like in SQL, we have to define the column(schema) name, data type of column and some constraints like 'not null, default val, unique etc.)

In the same way we can also define some set of rules for the mongodb.


Basically, Rules for Schema

const bookSchema = mongoose.Schema({

    title:{
        type: String,
        required: true;
    }

})