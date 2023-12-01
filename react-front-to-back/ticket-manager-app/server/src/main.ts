import "reflect-metadata";

import { ServerEnvironment } from "@expressots/adapter-express";
import { AppFactory } from "@expressots/core";
import { App } from "@providers/application/application.provider";
import { container } from "./app.container";
import { MongoDB } from "@providers/database/database.provider";

async function bootstrap() {
    const app = await AppFactory.create(container, App);

    await MongoDB.connectMongoDB();
    await app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
