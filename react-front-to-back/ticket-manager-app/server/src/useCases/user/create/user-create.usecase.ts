import { User } from "@entities/user.entity";
import { Report } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { CreateUserRequestDTO } from "./user-create.dto";

@provide(CreateUserUseCase)
export class CreateUserUseCase {
    constructor(private user: User, private report: Report) {}

    execute(payload: CreateUserRequestDTO) {
        try {
            console.log("Hello");
        } catch (error: any) {
            throw error;
        }
    }
}
