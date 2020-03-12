import mongoose, { Schema } from 'mongoose';

// Define movie schema
const userSchema = new Schema({
    userID: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
        unique: false,
    },
    lastName: {
        type: String,
        unique: false,
    },
    auiID: {
        type: Number,
        unique: false,
    },
    balance: {
        type: Number,
        unique: false,
    }
});

// Export Mongoose model
export default mongoose.model('user', userSchema);