import { Router } from "express";
import AuthController from "../controllers/Auth.controller";
import AuthMiddleware from "../middlewares/Auth.middleware";
import ProductController from "../controllers/Product.controller";
import CategoryController from "../controllers/Category.controller";

const routes: Router = Router();

routes.post("/api/auth/login", AuthController.login);

routes.get("/api/categorys", AuthMiddleware.verifyToken, CategoryController.index);

routes.get("/api/products", AuthMiddleware.verifyToken, ProductController.index);
routes.post("/api/products", AuthMiddleware.verifyToken, ProductController.store);
routes.get("/api/products/:id", AuthMiddleware.verifyToken, ProductController.show);
routes.patch("/api/products/:id", AuthMiddleware.verifyToken, ProductController.update);
routes.delete("/api/products/:id", AuthMiddleware.verifyToken, ProductController.destroy);

export default routes;