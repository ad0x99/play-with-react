import {
    Delete,
    Get,
    Post,
    Put,
    body,
    controller,
    request,
    response,
} from "@expressots/adapter-express";
import { BaseController, StatusCode, ValidateDTO } from "@expressots/core";
import { Response, Request } from "express";
import { isAuthenticate } from "middlewares/auth.middlewares";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    ICreateTicketDTO,
    IUpdateTicketDTO,
    UpdateTicketDTO,
} from "./ticket.dto";
import { TicketUseCase } from "./ticket.usecase";

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

    @Put("/", ValidateDTO(UpdateTicketDTO), isAuthenticate)
    async updateTicket(
        @body()
        payload: UpdateTicketDTO,
        @response() res: Response,
        @request() req: Request,
    ): Promise<IUpdateTicketDTO | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.updateTicket(payload, req),
            res,
            StatusCode.Created,
        );
    }

    @Delete("/", ValidateDTO(DeleteTicketDTO), isAuthenticate)
    async deleteTicket(
        @body()
        payload: DeleteTicketDTO,
        @response() res: Response,
        @request() req: Request,
    ): Promise<boolean | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.deleteTicket(payload, req),
            res,
            StatusCode.Created,
        );
    }
}

export { TicketController };
