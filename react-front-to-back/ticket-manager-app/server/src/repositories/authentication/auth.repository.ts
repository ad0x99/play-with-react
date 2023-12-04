import { Auth, AuthModel } from "@entities/auth.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(AuthRepository)
class AuthRepository extends BaseRepository<Auth> {
    constructor() {
        super();
        this.resources = AuthModel;
    }

    async signUp(auth: Partial<Auth>): Promise<Auth | null> {
        return this.create(auth);
    }
}

export { AuthRepository };
