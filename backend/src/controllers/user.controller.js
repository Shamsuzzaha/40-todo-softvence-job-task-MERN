import {
    registrationService,
    loginService
} from '../services/user.service.js';

// Register Controller
export const registerUserCon = async (req, res) => {
    try {
        const result = await registrationService(req);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login Controller
export const loginUserCon = async (req, res) => {
    try {
        const result = await loginService(req, res);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

// logout controller
export const logoutController = async (req, res) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(400).json({
                status: "fail",
                message: "No token found in cookies",
            });
        }

        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
        });

        return res.status(200).json({
            status: "success",
            message: "Logged out",
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};