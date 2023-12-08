import { Ticket, TicketModel } from "@entities/ticket.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(TicketRepository)
class TicketRepository extends BaseRepository<Ticket> {
    constructor() {
        super();
        this.resources = TicketModel;
    }
}

export { TicketRepository };
