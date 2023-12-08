import { TicketRepository } from "@repositories/tickets/ticket.repository";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    ICreateTicketDTO,
    IGetTicketsDTO,
    UpdateTicketDTO,
} from "./ticket.dto";
import { Report, StatusCode } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { AuthRepository } from "@repositories/authentication/auth.repository";
import { ERROR_MESSAGE } from "utils/constant";
import { Request } from "express";

@provide(TicketUseCase)
class TicketUseCase {
    constructor(
        private ticketRepository: TicketRepository,
        private authRepository: AuthRepository,
        private report: Report,
    ) {}

    async getTickets(): Promise<IGetTicketsDTO[] | null> {
        try {
            const ticket = await this.ticketRepository.getList();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async createTicket(
        createTicketInput: CreateTicketDTO,
    ): Promise<ICreateTicketDTO | null> {
        try {
            const { user } = createTicketInput;

            const isUserExist = await this.authRepository.getById(user);

            if (!isUserExist) {
                throw this.report.error(
                    ERROR_MESSAGE.USER_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            const newTicket = await this.ticketRepository.create(
                createTicketInput,
            );
            return newTicket;
        } catch (error) {
            throw error;
        }
    }

    async updateTicket(updateTicketDTO: UpdateTicketDTO, req: Request) {
        try {
            const { ticket, user, product, description, status } =
                updateTicketDTO;

            const isTicketExist = await this.ticketRepository.getById(ticket);
            if (!isTicketExist) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (isTicketExist.user !== req.userId) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Forbidden,
                );
            }

            return await this.ticketRepository.updateOne(
                { _id: ticket },
                {
                    user,
                    product,
                    description,
                    status,
                },
                { new: true },
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteTicket(
        deleteTicketDTO: DeleteTicketDTO,
        req: Request,
    ): Promise<boolean | null> {
        try {
            const { ticketId } = deleteTicketDTO;

            const isTicketExist = await this.ticketRepository.getById(ticketId);

            if (!isTicketExist) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (isTicketExist.user !== req.userId) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Forbidden,
                );
            }

            return await this.ticketRepository.deleteOne({ _id: ticketId });
        } catch (error) {
            throw error;
        }
    }
}

export { TicketUseCase };
