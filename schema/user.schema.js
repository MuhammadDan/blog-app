import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

// const UserSchema = mongoose.model('User',userSchema) 
const UserSchema = mongoose.models.User || mongoose.model('User',userSchema) 
export default UserSchema