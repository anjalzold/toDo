import mongoose, { Schema } from "mongoose";

const TaskModel = new Schema ({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

    }
    )

    const Task = mongoose.models.Task || mongoose.model('Task',TaskModel)


    export default Task;