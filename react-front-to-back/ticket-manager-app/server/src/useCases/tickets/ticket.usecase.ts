import { Report, StatusCode } from "@expressots/core";
import { AuthRepository } from "@repositories/authentication/auth.repository";
import { TicketRepository } from "@repositories/tickets/ticket.repository";
import { Request } from "express";
import { provide } from "inversify-binding-decorators";
import { ERROR_MESSAGE } from "utils/constant";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    GetTicketDTO,
    ICreateTicketResponse,
    IGetTicketsResponse,
    UpdateTicketDTO,
    UpdateTicketParam,
} from "./ticket.dto";

@provide(TicketUseCase)
class TicketUseCase {
    constructor(
        private ticketRepository: TicketRepository,
        private authRepository: AuthRepository,
        private report: Report,
    ) {}

    async getTickets(req: Request): Promise<IGetTicketsResponse[] | null> {
        try {
            const tickets = await this.ticketRepository.getList(
                {
                    user: req.userId,
                },
                { sort: { date: -1 } },
            );

            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async getTicket(
        payload: GetTicketDTO,
        req: Request,
    ): Promise<IGetTicketsResponse | null> {
        try {
            const ticket = await this.ticketRepository.getById(
                payload.ticketId,
            );

            if (!ticket) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async createTicket(
        createTicketInput: CreateTicketDTO,
        req: Request,
    ): Promise<ICreateTicketResponse | null> {
        try {
            const user = req.userId;
            const isUserExist = await this.authRepository.getById(user);

            if (!isUserExist) {
                throw this.report.error(
                    ERROR_MESSAGE.USER_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            const newTicket = await this.ticketRepository.create({
                user,
                ...createTicketInput,
            });
            return newTicket;
        } catch (error) {
            throw error;
        }
    }

    async updateTicket(
        param: UpdateTicketParam,
        payload: UpdateTicketDTO,
        req: Request,
    ) {
        try {
            const { ticketId } = param;
            const { product, description, status } = payload;
            const conditions: any = {};

            const isTicketExist = await this.ticketRepository.getById(ticketId);
            if (!isTicketExist) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (String(isTicketExist.user) !== String(req.userId)) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Forbidden,
                );
            }

            if (product) {
                conditions.product = product;
            }

            if (description) {
                conditions.description = description;
            }

            if (status) {
                conditions.status = status;
            }

            return await this.ticketRepository.updateOne(
                { _id: ticketId },
                conditions,
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

            if (String(isTicketExist.user) !== String(req.userId)) {
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
