import { AppContainer } from "@expressots/core";
import { AuthenticationModule } from "@useCases/authentication/auth.module";
import { NoteModule } from "@useCases/notes/note.module";
import { TicketModule } from "@useCases/tickets/ticket.module";
import { Container } from "inversify";

const appContainer = new AppContainer();

export const container: Container = appContainer.create([
    AuthenticationModule,
    TicketModule,
    NoteModule,
]);
