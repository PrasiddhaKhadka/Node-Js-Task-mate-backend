const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        // validating the name with a message
        required: [true,'Must Provide a task name'],
        // trim to remove spaces
        trim: true,
        // max length
        maxlength: [100,'Can not be more than 100 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
});


module.exports = mongoose.model('Task', TaskSchema);