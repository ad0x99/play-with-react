import { Report } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { UserUpdateRequestDTO } from "./user-update.dto";

@provide(UserUpdateUseCase)
export class UserUpdateUseCase {
    constructor(private report: Report) {}

    execute(payload: UserUpdateRequestDTO) {}
}
