import {
    createTaskService,
    getAllTasksService,
    getTaskByIdService,
    updateTaskByIdService,
    deleteTaskByIdService
} from "../services/task.service.js";

// Create task controller
export const createTaskController = async (req, res) => {
    try {
        const result = await createTaskService(req);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// Get all tasks controller
export const getAllTasksController = async (req, res) => {
    try {
        const result = await getAllTasksService(req);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// Get task by ID controller
export const getTaskByIdController = async (req, res) => {
    try {
        const result = await getTaskByIdService(req);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// Update task by ID controller
export const updateTaskByIdController = async (req, res) => {
    try {
        const result = await updateTaskByIdService(req);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// Delete task by ID controller
export const deleteTaskByIdController = async (req, res) => {
    try {
        const result = await deleteTaskByIdService(req);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};
