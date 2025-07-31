import { create } from "zustand";
import axios from "axios";

// Get base URL from the environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

const taskAPI = create((set) => ({

    // Create task
    createTaskRequest: async (userData) => {
        try {
            const res = await axios.post(`${baseURL}/create-task`, userData, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            console.error('Task creation failed:', err);
        }
    },

    // Get tasks based on category and status
    getTasksRequest: async (category = 'all', status = 'all') => {
        try {
            const res = await axios.get(`${baseURL}/tasks/${category}/${status}`, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            console.error('Fetching tasks failed:', err);
        }
    },

    // Get task by ID
    getTaskByIdRequest: async (id) => {
        try {
            const res = await axios.get(`${baseURL}/task/${id}`, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            console.error(`Fetching task with ID ${id} failed:`, err);
        }
    },

    // Update task
    updateTaskRequest: async (id, updateData) => {
        try {
            const res = await axios.put(`${baseURL}/task/${id}`, updateData, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            console.error(`Updating task with ID ${id} failed:`, err);
        }
    },

    // Delete task
    deleteTaskRequest: async (id) => {
        try {
            const res = await axios.delete(`${baseURL}/task/${id}`, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            console.error(`Deleting task with ID ${id} failed:`, err);
        }
    }

}));

export default taskAPI;
