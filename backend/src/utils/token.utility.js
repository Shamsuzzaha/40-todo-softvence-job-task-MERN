import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '24h';

// Check if JWT_SECRET is available
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

// Generate Token
export const generateToken = (payload) => {
    try {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    }catch(err) {
        return null
    }
};

// Verify Token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }catch (e) {
        return null
    }
};
