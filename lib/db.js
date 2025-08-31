import mongoose from "mongoose";

const MONGODB_URI = process.env.DB;

if(!MONGODB_URI){
    throw new Error(" Please define the DB environment variable inside ")
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn:null, promise:null};
}

async function dbConnect(){
    if (cached.conn){
        return cached.conn;
    }
    
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose)=>{
            console.log("MongoDB Connected");
            return mongoose;
        })
        }
        try{
            cached.conn = await cached.promise;
        } catch(err){
            cached.promise = null;
            console.error("MongoDB connection error:", err);
            throw err;
        }
        return cached.conn;
    }

// mongoose.connect(process.env.DB)

// .then(()=>console.log("Connected"))

// .catch(()=>console.log("Failed"))

export default dbConnect;
// export default mongoose