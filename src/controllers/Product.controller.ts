
import { Request, Response } from "express";


class ProductController {

    async index(request: Request, response: Response) {

        return response.status(200).json({
            message: "index"
        });
    }

    async store(request: Request, response: Response) {

        return response.status(200).json({
            message: "store"
        });
    }

    async show(request: Request, response: Response) {

        return response.status(200).json({
            message: "show"
        });
    }

    async update(request: Request, response: Response) {

        return response.status(200).json({
            message: "update"
        });
    }

    async destroy(request: Request, response: Response) {

        return response.status(200).json({
            message: "destroy"
        });
    }
}



export default new ProductController;