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

class CreateTicketDTO {
    @IsNotEmpty()
    @IsMongoId()
    user: ObjectId;

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

class UpdateTicketDTO {
    @IsNotEmpty()
    @IsMongoId()
    ticket: ObjectId;

    @IsNotEmpty()
    @IsMongoId()
    user: ObjectId;

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

class DeleteTicketDTO {
    @IsNotEmpty()
    @IsMongoId()
    ticketId: ObjectId;
}

interface IGetTicketsDTO {
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

interface ICreateTicketDTO {
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

interface IUpdateTicketDTO {
    ticket: Ticket;
    user: ObjectId;
    product: ProductType;
    description: string;
    status: Status;
}

export {
    IGetTicketsDTO,
    CreateTicketDTO,
    UpdateTicketDTO,
    DeleteTicketDTO,
    ICreateTicketDTO,
    IUpdateTicketDTO,
};
