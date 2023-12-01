import "reflect-metadata";

import { ServerEnvironment } from "@expressots/adapter-express";
import { AppFactory } from "@expressots/core";
import { App } from "@providers/application/application.provider";
import { container } from "./app.container";
import { MongoDB } from "@providers/database/database.provider";
import ENV from "env";

async function bootstrap() {
    const app = await AppFactory.create(container, App);

    await MongoDB.connectMongoDB();
    await app.listen(ENV.Application.PORT, ServerEnvironment.Development);
}

bootstrap();
