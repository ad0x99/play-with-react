import { CreateModule } from "@expressots/core";
import { TicketController } from "./ticket.controller";

const TicketModule = CreateModule([TicketController]);

export { TicketModule };
