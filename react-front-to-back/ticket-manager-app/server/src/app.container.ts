import { AppContainer } from "@expressots/core";
import { AuthenticationModule } from "@useCases/authentication/auth.module";
import { Container } from "inversify";

const appContainer = new AppContainer();

export const container: Container = appContainer.create([AuthenticationModule]);
