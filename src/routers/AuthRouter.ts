import BaseRouter from "./BaseRouter";
// controller
import AuthController from "../controllers/AuthController";
import validate from "../middlewares/AuthValidator";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRouter().router;

