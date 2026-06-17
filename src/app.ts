import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes.js";
import { logger } from "./middlewares/logger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    nombre: "Lista de Compra API",
    endpoints: {
      obtener: "GET /api/items",
      crear: "POST /api/items",
      actualizar: "PUT /api/items/:id",
      eliminar: "DELETE /api/items/:id",
    },
  });
});

app.use("/api/items", itemRoutes);

export default app;