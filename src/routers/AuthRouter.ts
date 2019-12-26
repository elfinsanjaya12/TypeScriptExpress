import BaseRouter from "./BaseRouter";
// controller
import AuthController from "../controllers/AuthController";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/register", AuthController.index);
    this.router.post("/login", AuthController.create);
  }
}

export default new AuthRouter().router;

