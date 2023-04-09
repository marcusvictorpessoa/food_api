
import { Request, Response } from "express";
import User from "../models/User.models";
import jwt from "jsonwebtoken";
import { env } from "../environment";

class AuthController {

    async login(request: Request, response: Response) {

        const { email, password } = request.body;

        if(email === null || email === ""){
            return response.status(400).json({
                message: "Campo email é obrigatório!"
            });
        }

        if(password === null || password === ""){
            return response.status(400).json({
                message: "Campo password é obrigatório!"
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return response.status(404).json({
                    message: "Usuário não encontrado!"
                });
            }

            if (!user.compare(password)) {
                return response.status(400).json({
                    message: "Senha incorreta!"
                });
            }

            const tkn = jwt.sign({ id: user.id }, env.SECRET, { expiresIn: env.TOKEN_EXPIRATION});

            return response.status(200).json({
                token: tkn
            });

        } catch (error) {
            response.status(500).json({
                message: "Erro interno no servidor!",
                error: error
            });

        }

    }

}

export default new AuthController;