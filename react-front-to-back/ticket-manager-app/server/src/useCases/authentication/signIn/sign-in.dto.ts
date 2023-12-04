import { IsEmail, IsNotEmpty } from "class-validator";

class SignInDTO {
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;
}

interface ISignInUserResponseDTO {
    email: string;
    name: string;
    accessToken: string;
}

export { ISignInUserResponseDTO, SignInDTO };
