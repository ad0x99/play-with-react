import { BaseController, StatusCode, ValidateDTO } from "@expressots/core";
import { SignUpUserCase } from "./sign-up.usecase";
import { ISignUpUserResponseDTO, SignUpDTO } from "./sign-up.dto";
import { Post, body, controller, response } from "@expressots/adapter-express";
import { Response } from "express";

@controller("/sign-up")
class SignUpController extends BaseController {
    constructor(private signUpUserCase: SignUpUserCase) {
        super();
    }

    @Post("/", ValidateDTO(SignUpDTO))
    async signIn(
        @body()
        payload: SignUpDTO,
        @response() res: Response,
    ): Promise<ISignUpUserResponseDTO | void> {
        return this.callUseCaseAsync(
            this.signUpUserCase.signUp(payload),
            res,
            StatusCode.Created,
        );
    }
}

export { SignUpController };
