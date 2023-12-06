import { Ticket, TicketModel } from "@entities/ticket.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";
import { ObjectId } from "mongoose";

@provide(TicketRepository)
class TicketRepository extends BaseRepository<Ticket> {
    constructor() {
        super();
        this.resources = TicketModel;
    }

    async getTickets(conditions: any = {}): Promise<Ticket[] | null> {
        return this.getList(conditions);
    }

    async createTicket(ticket: Partial<Ticket>): Promise<Ticket | null> {
        return this.create(ticket);
    }

    async updateTicket(ticket: Partial<Ticket>) {
        return this.updateOne(ticket);
    }

    async deleteTicket(ticketId: ObjectId): Promise<boolean | null> {
        return this.deleteById(ticketId);
    }
}

export { TicketRepository };
