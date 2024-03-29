import { Post, body, controller, response } from "@expressots/adapter-express";
import { BaseController, StatusCode, ValidateDTO } from "@expressots/core";
import { Response } from "express";
import { SignInDTO } from "./sign-in.dto";
import { SignInUseCase } from "./sign-in.usecase";

@controller("/sign-in")
class SignInController extends BaseController {
    constructor(private signInUseCase: SignInUseCase) {
        super();
    }

    @Post("/", ValidateDTO(SignInDTO))
    signIn(
        @body() payload: SignInDTO,
        @response() res: Response,
    ): Promise<SignInDTO | null> {
        return this.callUseCaseAsync(
            this.signInUseCase.signIn(payload),
            res,
            StatusCode.OK,
        );
    }
}

export { SignInController };
