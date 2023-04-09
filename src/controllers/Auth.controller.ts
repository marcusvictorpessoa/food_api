
import { Request, Response } from "express";
import User from "../models/User.models";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET || "B7B6E15ED1459F578C31B16DD42FD";

class AuthController {

    async login(request: Request, response: Response) {

        const { email, password } = request.body;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return response.status(404).json({
                    message: "Usuário não encontrado!"
                });
            }

            if (!user.compare(password)) {
                return response.status(401).json({
                    message: "Usuário não autorizado!"
                });
            }

            const tkn = jwt.sign({ id: user.id }, SECRET);
            // { algorithm: "RS256" }

            return response.status(200).json({
                token: tkn
            });

        } catch (error) {
            response.status(500).json({
                message: "Erro interno no servidor!"
            });

        }

    }

}

export default new AuthController;