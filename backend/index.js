import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/db.config.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to DB, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
});
