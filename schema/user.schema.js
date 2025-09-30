import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: 1
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

userSchema.pre("save",async function(next){
      const encrypted = await bcrypt.hash(this.password.toString(),12)
      this.password = encrypted
      next()
    // console.log(this.password)
})
// const UserSchema = mongoose.model('User',userSchema) 
const UserSchema = mongoose.models.User || mongoose.model('User',userSchema) 
export default UserSchema

// hum nai userschema mai pre save ordinary funcion banai gai next ko receive or agai barhai gai or console kar wa rahai hai jo bhi password hoga.