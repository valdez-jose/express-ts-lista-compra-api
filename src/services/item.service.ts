
import Item from "../models/item.model.js";

// Crear item
export const crearItemService = async (data: any) => {
  const item = new Item(data);
  return await item.save();
};

// Obtener items
export const obtenerItemsService = async () => {
  return await Item.find();
};

// Obtener item por ID
export const actualizarItemService = async (id: string, data: any) => {
  return await Item.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar item
export const eliminarItemService = async (id: string) => {
  return await Item.findByIdAndDelete(id);
};