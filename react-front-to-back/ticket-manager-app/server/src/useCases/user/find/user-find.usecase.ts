import { Report } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { UserFindRequestDTO } from "./user-find.dto";

@provide(UserFindUseCase)
export class UserFindUseCase {
    constructor(private report: Report) {}

    execute(payload: UserFindRequestDTO) {}
}
