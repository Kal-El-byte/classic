const mongoose = require('mongoose');
const validator = require('validator')

const MongoClient = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(MongoClient, {
    useUnifiedTopology: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0, 
        validate(value) {
            if(value < 0) {
                throw new Error ('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes('password')) {
                throw new Error ('Invalid Password')
            }
        }
    }
});

// const me = new User({
//     name: 'Sasuke',
//     email: 'Sasuke_uchiha@gmail.com',
//     password: 'uchiha_sasuke',
//     age: 17
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Data can not be saved!', error)
// });



// task collection
const Task = mongoose.model('Task', {
    subject: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

//creating an instance
const task = new Task({
    subject: 'Weed the garden',
    // completed: true
});

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Unable to save task')
});