
import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes.js";
import { logger } from "./middlewares/logger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("API funcionando ");
});

app.use("/api/items", itemRoutes);

export default app;