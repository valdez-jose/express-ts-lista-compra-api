import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string); // 👈 cambiar aquí
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error DB:", error);
    process.exit(1);
  }
};
