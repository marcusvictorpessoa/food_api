
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET || "B7B6E15ED1459F578C31B16DD42FD";

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
            const validate = jwt.verify(token, SECRET);

            next();
        } catch (error) {
            response.status(500).json({
                message: "Erro interno do servidor!"
            });
        }
    }

}

export default new AuthMiddleware;