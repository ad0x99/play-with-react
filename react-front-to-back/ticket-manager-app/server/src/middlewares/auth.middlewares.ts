import { Auth } from "@entities/auth.entity";
import { Report, StatusCode } from "@expressots/core";
import { AuthRepository } from "@repositories/authentication/auth.repository";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { AuthUtils } from "utils/auth.utils";
import { ERROR_MESSAGE } from "utils/constant";

export interface JwtPayload {
    _id: string;
    email: string;
}

export const isAuthenticate = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const report: Report = new Report();
    const auth: AuthUtils = new AuthUtils(report);
    const user: AuthRepository = new AuthRepository();

    try {
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // Get user token
            const token = req.headers.authorization.split(" ")[1];

            // Verify token
            const isValidToken = auth.verifyToken(token) as JwtPayload;

            // Verify user info
            const userData = await user.findOne({ _id: isValidToken._id });
            if (!userData) {
                throw report.error(new Error());
            }

            req.userId = userData._id;
            next();
        } else {
            report.error(ERROR_MESSAGE.MISSING_AUTHORIZATION);
            return res.status(StatusCode.Forbidden).json({
                errorCode: StatusCode.Forbidden,
                errorMessage: ERROR_MESSAGE.MISSING_AUTHORIZATION,
            });
        }
    } catch (error: any) {
        report.error(error);
        return res.status(StatusCode.BadRequest).json({
            errorCode: StatusCode.BadRequest,
            errorMessage: ERROR_MESSAGE.INVALID_TOKEN,
        });
    }
};
