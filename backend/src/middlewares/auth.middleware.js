import { verifyToken } from "../utils/token.utility.js";

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.headers['token'];

    if (!token) {
        return res.status(401).json({ status: "fail", message: "Unauthorized: No token provided" });
    }

    //  Decode token
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ status: "fail", message: "Unauthorized: Invalid token" });
    }

    //  Attach info to request
    req.headers.userID = decoded.userID;

    next();
};

export default authMiddleware;
