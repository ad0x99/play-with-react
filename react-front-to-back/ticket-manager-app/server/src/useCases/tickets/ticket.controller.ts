import {
    Delete,
    Get,
    Post,
    Put,
    body,
    controller,
    param,
    request,
    response,
} from "@expressots/adapter-express";
import { BaseController, StatusCode, ValidateDTO } from "@expressots/core";
import { Request, Response } from "express";
import { isAuthenticate } from "middlewares/auth.middlewares";
import {
    CreateTicketDTO,
    DeleteTicketDTO,
    GetTicketDTO,
    ICreateTicketResponse,
    IGetTicketsResponse,
    IUpdateTicketResponse,
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
        @response() res: Response,
        @request() req: Request,
    ): Promise<IGetTicketsResponse[] | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.getTickets(req),
            res,
            StatusCode.OK,
        );
    }

    @Get("/:ticketId", isAuthenticate)
    async getTicket(
        @param() payload: GetTicketDTO,
        @response()
        res: Response,
        req: Request,
    ): Promise<IGetTicketsResponse | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.getTicket(payload, req),
            res,
            StatusCode.OK,
        );
    }

    @Post("/", ValidateDTO(CreateTicketDTO), isAuthenticate)
    async createTicket(
        @body()
        payload: CreateTicketDTO,
        @response() res: Response,
        @request() req: Request,
    ): Promise<ICreateTicketResponse | null> {
        return this.callUseCaseAsync(
            this.ticketUseCase.createTicket(payload, req),
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
    ): Promise<IUpdateTicketResponse | null> {
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
