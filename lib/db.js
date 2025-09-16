import mongoose from "mongoose";

const MONGODB_URI = process.env.DB;

if (!MONGODB_URI) {
  throw new Error("Please define the DB environment variable inside .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection");

    cached.promise = mongoose.connect(MONGODB_URI)
      .then((mongoose) => {
        console.log("MongoDB Connected successfully to", MONGODB_URI);
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    console.error("MongoDB connection failed:", err);
    throw err;
  }

  return cached.conn;
}

export default dbConnect;