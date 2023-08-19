// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {  useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

   const db = client.db(databaseName);
//    const collection = db.collection('tasks')
   const collection1 = db.collection('users')

//    db.collection('users').findOne({ _id : new ObjectID('64dc18df7f133f3e009c7dd7')}, (error, user) => {
//     if(error){
//         return console.log ('Unable to find user');
//     };

//     console.log(user)
//    });

// db.collection('tasks').find({ completed: false }).toArray((error, task) => {
//     console.log(task)
// });

// db.collection('users').updateOne({
//     _id: new ObjectID('64dc18b410786e298c359f41')
// }, {
//     $set: {
//         name: 'Itachi'
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// });

// collection.updateMany({
//     completed : false
// }, {
//     $set: {
//         completed: true
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// });
// collection1.deleteMany({
//     age: 29
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

db.collection('tasks').deleteOne({
    description : 'Take the car to the car wash'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
});