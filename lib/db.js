import mongoose from "mongoose"
mongoose.connect(process.env.DB)
export default mongoose