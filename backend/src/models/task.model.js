import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    email: String,

    category: {
        type: String,
        required: true,
    },

    role: {
        type: String,
    },

    status: {
        type: String,
    },

    endDate: {
        type: Date,
        required: true,
    },
},
    {timestamps: true, versionKey: false});

const TaskModel = mongoose.model('tasks', taskSchema);
export default TaskModel;
