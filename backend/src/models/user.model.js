import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
}, {
    timestamps: true, versionKey: false
});

const UserModel = mongoose.model('users', userSchema);
export default UserModel;
