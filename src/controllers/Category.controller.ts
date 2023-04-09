
import { Request, Response } from "express";
import Category from "../models/Category.models";


class CategoryController {

    async index(request: Request, response: Response) {

        try {

            const limit = Number(request.query['limit']) || 10;

            const count = await Category.find().count()

            const categories = await Category.find().limit(limit);


            return response.status(200).json({
                total: count,
                categories
            });

        } catch (error) {
            response.status(500).json({
                message: "Erro interno no servidor!"
            });
        }

    }


}



export default new CategoryController;