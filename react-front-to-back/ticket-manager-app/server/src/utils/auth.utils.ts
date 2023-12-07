import { provide } from "inversify-binding-decorators";
import { Report } from "@expressots/core";
import bcrypt from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { Auth, AuthModel } from "@entities/auth.entity";
import { ModelType } from "@typegoose/typegoose/lib/types";

@provide(AuthUtils)
class AuthUtils {
    protected auth: ModelType<Auth>;

    constructor(private report: Report) {
        this.auth = AuthModel;
    }

    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(+process.env.SALT_NUMBER!);
        const hashedPassword = bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async isValidPassword(password: string, currentUser: Auth) {
        const isValidPassword = await bcrypt.compare(
            password,
            currentUser.password,
        );

        if (!isValidPassword) {
            throw this.report.error(
                "Your email or password is not correct, please try again!",
            );
        }

        return isValidPassword;
    }

    tokenGenerator(auth: Auth): string {
        const token: string = sign(
            { _id: auth._id, email: auth.email },
            process.env.SECRET_TOKEN as string,
            {
                expiresIn: +process.env.ACCESS_TOKEN_EXP!,
            },
        );
        return token;
    }

    verifyToken(token: string) {
        return verify(token, process.env.SECRET_TOKEN as string);
    }
}

export { AuthUtils };
