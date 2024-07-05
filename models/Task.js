const { Schema, model } = require('mongoose');

const TaskSchema = Schema({ 

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: false
    },
    columnId: {
        type: String,
        required: true
    }

});

module.exports = model('Task', TaskSchema);