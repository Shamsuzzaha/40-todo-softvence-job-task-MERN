import TaskModel from "../models/task.model.js";

// Create task
export const createTaskService = async (req) => {
    const reqBody = req.body;
    const email = req.headers.userID;
    reqBody.email = email;

    const data = await TaskModel.create(reqBody);
    return {
        status: 'success',
        message: 'Task created successfully.'
    };
};

// Get tasks based on category and status filter
export const getAllTasksService = async (req) => {
    const email = req.headers.userID;
    const { category, status } = req.params;

    const matchQuery = { email };

    if (category !== 'all') {
        matchQuery.category = category;
    }

    if (status !== 'all') {
        matchQuery.status = status;
    }

    const data = await TaskModel.find(matchQuery);

    return {
        status: 'success',
        message: 'Tasks fetched successfully.',
        data: data
    };
};


// Get task by task ID
export const getTaskByIdService = async (req) => {
    const { id } = req.params;
    const email = req.headers.userID;

    const data = await TaskModel.findOne({ _id: id, email });

    if (!data) {
        return {
            status: 'fail',
            message: 'Task not found.',
        };
    }

    return {
        status: 'success',
        message: 'Task fetched successfully.',
        data: data
    };
};

// Update task by ID
export const updateTaskByIdService = async (req) => {
    const { id } = req.params;
    const email = req.headers.userID;

    const data = await TaskModel.findOneAndUpdate(
        { _id: id, email },
        req.body,
        { new: true, runValidators: true }
    );

    if (!data) {
        return {
            status: 'fail',
            message: 'Task not found or update failed.',
        };
    }

    return {
        status: 'success',
        message: 'Task updated successfully.',
    };
};

// Delete task by ID
export const deleteTaskByIdService = async (req) => {
    const { id } = req.params;
    const email = req.headers.userID;

    const data = await TaskModel.findOneAndDelete({ _id: id, email });

    if (!data) {
        return {
            status: 'fail',
            message: 'Task not found or deletion failed.',
        };
    }

    return {
        status: 'success',
        message: 'Task deleted successfully.'
    };
};
