
import { Request, Response } from "express";
import Product from "../models/Product.model";


class ProductController {

    async index(request: Request, response: Response) {

        try {

            const limit = Number(request.query['limit']) || 10;
            const page = Number(request.query['page']) || 1;

            const skip = (page - 1) * limit;

            const products = await Product.find().limit(limit).skip(skip).populate('categories');

            const count = await Product.find().count();

            return response.status(200).json({
                total: count,
                page: page,
                products
            });

        } catch (error) {

            response.status(500).json({
                message: "erro interno no servidor!",
                error: error
            });
        }


    }

    async store(request: Request, response: Response) {

        const { name, categories, qty, price } = request.body;


        if(name === null || name === ""){
            return response.status(400).json({
                message: "Campo name é obrigatório!"
            });
        }

        if(categories?.length === 0 || categories === ""){
            return response.status(400).json({
                message: "Campo categories é obrigatório!"
            });
        }

        if(qty === null || qty === ""){
            return response.status(400).json({
                message: "Campo qty é obrigatório!"
            });
        }

        if(price === null || price === ""){
            return response.status(400).json({
                message: "Campo price é obrigatório!"
            });
        }

        try {

            const product = await Product.create({
                name, categories, qty, price
            });

            return response.status(200).json({
                product
            });
        } catch (error) {

            response.status(500).json({
                message: "erro interno no servidor!",
                error: error
            });
        }

    }

    async show(request: Request, response: Response) {

        const id = request.params?.id;

        try {

            const product = await Product.findOne({ _id: id }).populate('categories');

            if (!product) {
                return response.status(404).json({
                    message: "produto não encontrado!"
                });
            }

            return response.status(200).json({
                message: "Produto cadastrado com sucesso!",
                product
            });

        } catch (error) {
            response.status(500).json({
                message: "erro interno no servidor!",
                error: error
            });
        }
    }

    async update(request: Request, response: Response) {

        const id = request.params?.id;
        const { name, price, qty, categories } = request.body;

        try {

            const product = await Product.findByIdAndUpdate(
                { _id: id },
                { name, qty, price, categories }
            );

            if (!product) {
                return response.status(404).json({
                    message: "produto não encontrado!"
                });
            }

            return response.status(200).json({
                message: "produto atualizado com sucesso!",
                product
            });

        } catch (error) {
            response.status(500).json({
                message: "erro interno no servidor!",
                error: error
            });
        }
    }

    async destroy(request: Request, response: Response) {

        const id = request.params?.id;

        try {

            const product = await Product.findById({ _id: id });

            if (!product) {
                return response.status(404).json({
                    message: "produto não encontrado!"
                });
            }

            product.deleteOne();

            return response.status(200).json({
                message: "produto deletado com sucesso!"
            });

        } catch (error) {
            response.status(500).json({
                message: "erro interno no servidor!",
                error: error
            });
        }
    }
}



export default new ProductController;