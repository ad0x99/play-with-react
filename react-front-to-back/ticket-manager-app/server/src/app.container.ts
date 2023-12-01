import { AppContainer } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { AuthenticationModule } from "@useCases/authentication/auth.module";
import { Container } from "inversify";

const appContainer = new AppContainer();

export const container: Container = appContainer.create([
    // Add your modules here
    AppModule,
    AuthenticationModule,
]);
