const mongoose = require('mongoose');

const MongoClient = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(MongoClient, {
    useUnifiedTopology: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
});

const me = new User({
    name: 'Sasuke'
});

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Data can not be saved!', error)
})



// task collection
// const Task = mongoose.model('Task', {
//     subject: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// });

// //creating an instance
// const task = new Task({
//     subject: 'Weed the garden',
//     completed: true
// });

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Unable to save task')
// });