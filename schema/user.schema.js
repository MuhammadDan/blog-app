import Password from "antd/es/input/Password";
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

const UserSchema = mongoose.model('User',userSchema) // collecion ka nam hojyega "User"
export default UserSchema