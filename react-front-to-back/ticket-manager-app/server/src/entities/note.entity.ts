import { provide } from "inversify-binding-decorators";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

@provide(Note)
export class Note {
    readonly _id: ObjectId;

    @prop({ required: true, ref: "Auth" })
    public user: ObjectId;

    @prop({ required: true, ref: "Ticket" })
    public ticket: ObjectId;

    @prop({ required: true })
    public text: string;

    @prop({ required: true })
    public isStaff: boolean;

    @prop({ default: null })
    public staffId?: string;
}

export const NoteModel = getModelForClass(Note, {
    schemaOptions: { timestamps: true, versionKey: false },
});
