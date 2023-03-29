import { config } from "../../config/config.js"
import mongoose from "mongoose";
import { logInfo, logError } from "../../logs/logger.js";

export class MongoClient {
    constructor() {
        this.client = mongoose
        this.URL = config.DB_MONGO
    }

    async connect() {
        try {
            this.client.set('strictQuery', false)
            await this.client.connect(this.URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            logInfo.info("Conexión exitosa a MongoDB")
        } catch (error) {
            logError.error(`Hubo un error al conectarse a MongoDB ${error}`)
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()
            logInfo.info("Se ha desconectado exitosamente de MongoDB")
        } catch (error) {
            logError.error(`Hubo un error al desconectarse de MongoDB ${error}`)
        }
    }
}