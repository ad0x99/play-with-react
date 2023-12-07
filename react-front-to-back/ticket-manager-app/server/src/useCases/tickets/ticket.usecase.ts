import { TicketRepository } from "@repositories/tickets/ticket.repository";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    UpdateTicketDTO,
} from "./ticket.dto";
import { Report, StatusCode } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { AuthRepository } from "@repositories/authentication/auth.repository";
import { ERROR_MESSAGE } from "utils/constant";

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
                throw this.report.error(
                    ERROR_MESSAGE.USER_NOT_EXIST,
                    StatusCode.NotFound,
                );
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
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (isTicketExist.user !== user) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Forbidden,
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
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            return await this.ticketRepository.deleteTicket(ticketId);
        } catch (error) {
            throw error;
        }
    }
}

export { TicketUseCase };
