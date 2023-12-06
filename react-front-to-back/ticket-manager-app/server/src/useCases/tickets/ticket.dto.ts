import { ProductType, Status, Ticket } from "@entities/ticket.entity";
import {
    IsEnum,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    Length,
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
    ticket: Ticket;

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

interface ICreateTicketDTO {}

export { CreateTicketDTO, UpdateTicketDTO, DeleteTicketDTO, ICreateTicketDTO };
