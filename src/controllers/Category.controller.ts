
import { Request, Response } from "express";
import Category from "../models/Category.models";


class CategoryController {

    async index(request: Request, response: Response) {

        try {

            const limit = Number(request.query['limit']) || 10;
            const page = Number(request.query['page']) || 1;

            const skip = (page - 1) * limit;

            const count = await Category.find().count()

            const categories = await Category.find().populate('parent').limit(limit).skip(skip);


            return response.status(200).json({
                total: count,
                page: page,
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