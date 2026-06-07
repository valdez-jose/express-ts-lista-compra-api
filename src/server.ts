
import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(); 

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error al iniciar:", error);
    process.exit(1);
  }
};

startServer();
//Para  correr el servidor, usa el comando: npm run dev
// testear usar el comando npm test 
