import { AuthRepository } from "@repositories/authentication/auth.repository";
import { provide } from "inversify-binding-decorators";
import { ISignInUserResponseDTO, SignInDTO } from "./sign-in.dto";
import { Report } from "@expressots/core";
import { AuthUtils } from "utils/auth.utils";

@provide(SignInUseCase)
class SignInUseCase {
    constructor(
        private authRepository: AuthRepository,
        private report: Report,
        private authUtils: AuthUtils,
    ) {}

    async signIn(payload: SignInDTO): Promise<ISignInUserResponseDTO | null> {
        try {
            const { email, password } = payload;

            const user = await this.authRepository.findOne({
                email,
            });

            if (
                !user ||
                !(await this.authUtils.isValidPassword(password, user))
            ) {
                throw this.report.error(
                    `Email or password are incorrect, please try again`,
                );
            }

            const token = await this.authUtils.tokenGenerator(user);
            return {
                name: user.name,
                email: user.email,
                accessToken: token,
            };
        } catch (error: any) {
            throw error;
        }
    }
}

export { SignInUseCase };
