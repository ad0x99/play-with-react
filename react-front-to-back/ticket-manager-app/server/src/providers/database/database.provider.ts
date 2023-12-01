import { ServerEnvironment } from "@expressots/adapter-express";
import { Report, provideSingleton } from "@expressots/core";
import { mongoose } from "@typegoose/typegoose";
import { ConnectOptions } from "mongoose";

@provideSingleton(MongoDB)
class MongoDB {
    private report!: Report;

    /**
     * The function connects to a MongoDB database using the provided environment variables.
     */
    public async connectMongoDB() {
        const connection = `${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

        try {
            const conn = await mongoose.connect(connection, {
                maxPoolSize: 10, // set maximum pool size is 10
            } as ConnectOptions);

            console.group([
                `DB Connection URL: ${
                    process.env.ENVIRONMENT === ServerEnvironment.Development
                        ? connection
                        : "null"
                }`,
                `Connected to ${conn.connection.db.databaseName} database!`,
            ]);
        } catch (error: any) {
            console.group([
                `DB Connection FAILED: ${
                    process.env.ENVIRONMENT === ServerEnvironment.Development
                        ? connection
                        : "null"
                }`,
            ]);
            this.report.error(error.message, undefined, "MongoDB");
        }
    }
}

const mongoInstance = new MongoDB();

export { mongoInstance as MongoDB };
