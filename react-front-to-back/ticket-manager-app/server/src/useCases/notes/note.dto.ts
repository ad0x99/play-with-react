import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";
import { ObjectId } from "mongoose";

class GetNoteParams {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

class CreateNoteParams {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

class CreateNoteDTO {
    @IsNotEmpty()
    text: string;
}

interface IGetNoteResponse {
    user: ObjectId;
    ticket: ObjectId;
    text: string;
    isStaff: boolean;
    staffId?: string;
}

interface ICreateNoteResponse {
    user: ObjectId;
    ticket: ObjectId;
    text: string;
    isStaff: boolean;
    staffId?: string;
}

export {
    GetNoteParams,
    CreateNoteParams,
    CreateNoteDTO,
    IGetNoteResponse,
    ICreateNoteResponse,
};
