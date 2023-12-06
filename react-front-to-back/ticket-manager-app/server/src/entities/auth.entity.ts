import { provide } from "inversify-binding-decorators";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

@provide(Auth)
export class Auth {
    readonly _id: ObjectId;

    @prop({ required: true })
    public name: string;

    @prop({ required: true })
    public email: string;

    @prop({ required: true })
    public password: string;
}

export const AuthModel = getModelForClass(Auth, {
    schemaOptions: { timestamps: true, versionKey: false },
});
