import mongoose from "mongoose";

export const connectDB = async (MONGODB_URL) => {
    try {
    const con = await mongoose.connect(MONGODB_URL)
    console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
}