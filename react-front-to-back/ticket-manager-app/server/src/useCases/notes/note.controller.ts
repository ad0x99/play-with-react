import {
    Get,
    Post,
    body,
    controller,
    param,
    request,
    response,
} from "@expressots/adapter-express";
import { BaseController, StatusCode } from "@expressots/core";
import { Request, Response } from "express";
import { isAuthenticate } from "middlewares/auth.middlewares";
import { NoteUseCase } from "./note.usecase";
import { CreateNoteDTO, CreateNoteParams, GetNoteParams } from "./note.dto";
import { ObjectId } from "mongoose";

@controller("/tickets/:ticketId/notes")
class NoteController extends BaseController {
    constructor(private noteUseCase: NoteUseCase) {
        super();
    }

    @Get("/", isAuthenticate)
    async getNotes(
        @param() params: GetNoteParams,
        @response() res: Response,
        @request() req: Request,
    ) {
        return this.callUseCaseAsync(
            this.noteUseCase.getNotes(req, params),
            res,
            StatusCode.OK,
        );
    }

    @Post("/", isAuthenticate)
    async createNote(
        @param() params: CreateNoteParams,
        @body() payload: CreateNoteDTO,
        @response() res: Response,
        @request() req: Request,
    ) {
        return this.callUseCaseAsync(
            this.noteUseCase.createNote(req, params, payload),
            res,
            StatusCode.Created,
        );
    }
}

export default NoteController;
