import { PrismaClient } from "../lib/generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
// Ese fragmento de código es una configuración típica de Prisma para evitar problemas de hot reload en desarrollo, sobre todo si usas Next.js o cualquier entorno que recargue el servidor varias veces mientras trabajas.
//globalThis es similar a window, su globalThis ya existe, lo reutiliz. si no existe crea un nuevo.