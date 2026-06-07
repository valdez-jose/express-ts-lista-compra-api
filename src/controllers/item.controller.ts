
import { Request, Response } from "express";
import {
  crearItemService,
  obtenerItemsService,
  actualizarItemService,
  eliminarItemService,
} from "../services/item.service.js";

// Crear un nuevo item
export const crearItem = async (req: Request, res: Response) => {
  try {
    const item = await crearItemService(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al crear item" });
  }
};

// Obtener todos los items
export const obtenerItems = async (_req: Request, res: Response) => {
  const items = await obtenerItemsService();
  res.json(items);
};

// Actualizar un item por ID
export const actualizarItem = async (req: Request, res: Response) => {
  try {
    const item = await actualizarItemService(req.params.id as string, req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar item" });
  }
};

// Eliminar un item por ID
export const eliminarItem = async (req: Request, res: Response) => {
  try {
    const item = await eliminarItemService(req.params.id as string);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar item" });
  }
};