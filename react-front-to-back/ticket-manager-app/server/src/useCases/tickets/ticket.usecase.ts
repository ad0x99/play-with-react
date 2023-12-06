import { TicketRepository } from "@repositories/tickets/ticket.repository";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    UpdateTicketDTO,
} from "./ticket.dto";
import { Report } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { AuthRepository } from "@repositories/authentication/auth.repository";

@provide(TicketUseCase)
class TicketUseCase {
    constructor(
        private ticketRepository: TicketRepository,
        private authRepository: AuthRepository,
        private report: Report,
    ) {}

    async getTickets() {
        try {
            const ticket = await this.ticketRepository.getTickets();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async createTicket(createTicketInput: CreateTicketDTO) {
        try {
            const { user } = createTicketInput;

            const isUserExist = await this.authRepository.getById(user);

            if (!isUserExist) {
                throw this.report.error("User does not exist", 404);
            }

            const newTicket = await this.ticketRepository.createTicket(
                createTicketInput,
            );
            return newTicket;
        } catch (error) {
            throw error;
        }
    }

    async updateTicket(updateTicketDTO: UpdateTicketDTO) {
        try {
            const { ticket, user } = updateTicketDTO;

            const isTicketExist = await this.ticketRepository.getById(
                ticket._id,
            );

            if (!isTicketExist) {
                throw this.report.error("Ticket does not exist", 404);
            }

            if (isTicketExist.user !== user) {
                throw this.report.error(
                    "You don't have permission to update this ticket",
                    403,
                );
            }

            return await this.ticketRepository.updateTicket(updateTicketDTO);
        } catch (error) {
            throw error;
        }
    }

    async deleteTicket(deleteTicketDTO: DeleteTicketDTO) {
        try {
            const { ticketId } = deleteTicketDTO;

            const isTicketExist = await this.ticketRepository.getById(ticketId);

            if (!isTicketExist) {
                throw this.report.error("Ticket does not exist", 404);
            }

            return await this.ticketRepository.deleteTicket(ticketId);
        } catch (error) {
            throw error;
        }
    }
}

export { TicketUseCase };
