
export const validateItem = (nombre: string) => {
  if (!nombre || nombre.trim() === "") {
    throw new Error("Nombre requerido");
  }
};