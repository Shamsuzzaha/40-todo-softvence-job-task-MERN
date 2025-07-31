import express from 'express';
import {loginUserCon, logoutController, registerUserCon} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
    createTaskController, deleteTaskByIdController,
    getAllTasksController,
    getTaskByIdController,
    updateTaskByIdController
} from "../controllers/task.controller.js";

const router = express.Router();


// ========User authentication=========
router.post('/register', registerUserCon );
router.post('/login', loginUserCon );
router.delete('/logout',authMiddleware, logoutController );


// ==========isLogin===========
router.get('/auth/check', authMiddleware, (req, res) => {
    return res.status(200).json({ isLogin: true });
});

// ============Task API==============
router.post("/create-task",authMiddleware, createTaskController);
router.get("/tasks/:category/:status",authMiddleware, getAllTasksController);
router.get("/task/:id",authMiddleware, getTaskByIdController);
router.put("/task/:id",authMiddleware, updateTaskByIdController);
router.delete("/task/:id",authMiddleware, deleteTaskByIdController);



export default router;
