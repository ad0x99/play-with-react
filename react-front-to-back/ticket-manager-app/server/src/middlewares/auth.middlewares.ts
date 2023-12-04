import { NextFunction, Request, Response } from "express";

export const protect = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (
            req?.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // Get user token
            const token = req.headers.authorization.split(" ")[1];

            // Verify token

            // Get user info
        }

        next();
    } catch (error) {
        throw error;
    }
};
