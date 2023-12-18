import { Report, StatusCode } from "@expressots/core";
import { NoteRepository } from "@repositories/notes/note.repository";
import { Request } from "express";
import { provide } from "inversify-binding-decorators";
import {
    CreateNoteDTO,
    CreateNoteParams,
    GetNoteParams,
    ICreateNoteResponse,
    IGetNoteResponse,
} from "./note.dto";
import { TicketRepository } from "@repositories/tickets/ticket.repository";
import { ERROR_MESSAGE } from "utils/constant";

@provide(NoteUseCase)
class NoteUseCase {
    constructor(
        private noteRepository: NoteRepository,
        private ticketRepository: TicketRepository,
        private report: Report,
    ) {}

    async getNotes(
        req: Request,
        params: GetNoteParams,
    ): Promise<IGetNoteResponse | null> {
        try {
            const ticket = await this.ticketRepository.getById(params.ticketId);

            if (!ticket) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (String(ticket.user) !== String(req.userId)) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Forbidden,
                );
            }

            return await this.noteRepository.findOne({
                ticket: params.ticketId,
            });
        } catch (error) {
            throw error;
        }
    }

    async createNote(
        req: Request,
        params: CreateNoteParams,
        payload: CreateNoteDTO,
    ): Promise<ICreateNoteResponse | null> {
        try {
            const ticket = await this.ticketRepository.getById(params.ticketId);

            if (!ticket) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_NOT_EXIST,
                    StatusCode.NotFound,
                );
            }

            if (String(ticket.user) !== String(req.userId)) {
                throw this.report.error(
                    ERROR_MESSAGE.TICKET_PERMISSION_ERROR,
                    StatusCode.Unauthorized,
                );
            }

            return await this.noteRepository.create({
                text: payload.text,
                ticket: params.ticketId,
                user: req.userId,
                isStaff: false,
            });
        } catch (error) {
            throw error;
        }
    }
}

export { NoteUseCase };
