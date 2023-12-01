import { Report } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { UserDeleteRequestDTO } from "./user-delete.dto";

@provide(UserDeleteUseCase)
export class UserDeleteUseCase {
    constructor(private report: Report) {}

    execute(payload: UserDeleteRequestDTO) {}
}
