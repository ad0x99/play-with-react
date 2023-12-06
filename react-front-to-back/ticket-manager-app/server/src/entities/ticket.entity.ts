import { provide } from "inversify-binding-decorators";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

export enum ProductType {
    IPHONE = "iPhone",
    MACBOOK = "MacBook Pro",
    IMAC = "iMac",
    IPAD = "iPad",
}

export enum Status {
    NEW = "new",
    OPEN = "open",
    CLOSED = "closed",
}

@provide(Ticket)
export class Ticket {
    readonly _id: ObjectId;

    @prop({ required: true, ref: "Auth" })
    public user: ObjectId;

    @prop({ required: true, enum: ProductType })
    public product: ProductType;

    @prop({ required: true })
    public description: string;

    @prop({ required: true, enum: Status, default: Status.NEW })
    public status: Status;
}

export const TicketModel = getModelForClass(Ticket, {
    schemaOptions: { timestamps: true, versionKey: false },
});
