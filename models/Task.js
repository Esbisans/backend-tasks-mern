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

TaskSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Task', TaskSchema);