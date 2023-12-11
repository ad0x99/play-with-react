import { ProductType, Status, Ticket } from "@entities/ticket.entity";
import {
    IsEnum,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    MaxLength,
    MinLength,
} from "class-validator";
import { ObjectId } from "mongoose";

class GetTicketDTO {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

class CreateTicketDTO {
    @IsNotEmpty()
    @IsEnum(ProductType)
    product: ProductType;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(200)
    description: string;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;
}

class UpdateTicketParam {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

class UpdateTicketDTO {
    @IsOptional()
    @IsEnum(ProductType)
    product?: ProductType;

    @IsOptional()
    @MinLength(5)
    @MaxLength(200)
    description?: string;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;
}

class DeleteTicketDTO {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

interface IGetTicketsResponse {
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

interface ICreateTicketResponse {
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

interface IUpdateTicketResponse {
    ticket: Ticket;
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

export {
    IGetTicketsResponse,
    GetTicketDTO,
    CreateTicketDTO,
    UpdateTicketParam,
    UpdateTicketDTO,
    DeleteTicketDTO,
    ICreateTicketResponse,
    IUpdateTicketResponse,
};
