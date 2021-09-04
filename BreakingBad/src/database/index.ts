import { createConnection, getManager } from "typeorm";

export async function initConnection() {
    try {
        await createConnection();
        console.log("Conexion creada");
    } catch (error) {
        console.log("Conexion no establecida debido a:", error);
        process.exit(0);
    }
}