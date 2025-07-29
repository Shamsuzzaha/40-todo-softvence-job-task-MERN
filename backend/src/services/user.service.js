import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';
import { generateToken } from '../utils/token.utility.js';
import isValidEmail from "../utils/email.validator.js";

// Registration Service
export const registrationService = async (req) => {
    const { fullName, email, password } = req.body;

    if (!isValidEmail(email)) {
        return {
            status: 'fail',
            message: 'Please enter a valid email',
        };
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
       return  {status: "fail", message: 'User already exists' };
    }

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[ -~]{6,}$/.test(password);

    if (!isValidPassword) {
        return {
            status: 'fail',
            message: 'Password must be at least 6 characters long and include a letter, a number, and a special character @ $ ! % * # ? &.',
        };
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        fullName,
        email,
        password: hashedPassword
    });

    return {
        status: "success",
        message: 'Registration successful'
    };
};




// loginService.js
export const loginService = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return { status: "fail", message: 'User not found' };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { status: "fail", message: 'Incorrect password' };
    }

    const token = generateToken({
        userID: user.email
    });

    if (token){
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none", // frontend  hosted in different host
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
    }

    return {
        status: "success",
        message: 'Login successful'
    };
};