import {
    Get,
    Post,
    body,
    controller,
    response,
} from "@expressots/adapter-express";
import { BaseController, StatusCode, ValidateDTO } from "@expressots/core";
import { Response } from "express";
import { CreateTicketDTO, ICreateTicketDTO } from "./ticket.dto";
import { TicketUseCase } from "./ticket.usecase";
import { isAuthenticate } from "middlewares/auth.middlewares";

@controller("/tickets")
class TicketController extends BaseController {
    constructor(private ticketUseCase: TicketUseCase) {
        super();
    }

    @Get("/", isAuthenticate)
    async getTickets(
        @body()
        payload: null,
        @response() res: Response,
    ): Promise<ICreateTicketDTO | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.getTickets(),
            res,
            StatusCode.OK,
        );
    }

    @Post("/", ValidateDTO(CreateTicketDTO), isAuthenticate)
    async createTicket(
        @body()
        payload: CreateTicketDTO,
        @response() res: Response,
    ): Promise<ICreateTicketDTO | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.createTicket(payload),
            res,
            StatusCode.Created,
        );
    }
}

export { TicketController };
