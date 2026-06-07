
import { Router } from "express";
import {
  crearItem,
  obtenerItems,
  actualizarItem,
  eliminarItem,
} from "../controllers/item.controller.js";

const router = Router();

router.get("/", obtenerItems);
router.post("/", crearItem);
router.put("/:id", actualizarItem);
router.delete("/:id", eliminarItem);

export default router;
