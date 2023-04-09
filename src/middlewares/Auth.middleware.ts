
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../environment";

class AuthMiddleware {

    verifyToken(request: Request, response: Response, next: NextFunction) {

        const headerToken = request.headers['authorization'];
        const token = headerToken && headerToken.split(" ")[1];


        if (!token) {
            return response.status(401).json({
                message: "Não autorizado!"
            });
        }

        try {
            jwt.verify(token, env.SECRET);

            next();
        } catch (error) {

            // JsonWebTokenError
            if(error.name === "JsonWebTokenError"){
                return response.status(401).json({
                    message: "token inválido!",
                    error: error
                });
            }

            // TokenExpiredError
            if(error.name === "TokenExpiredError"){
                return response.status(400).json({
                    message: "token expirado!",
                    error: error
                });
            }

            return response.status(500).json({
                message: "Erro interno do servidor!",
                error: error
            });
        }
    }

}

export default new AuthMiddleware;