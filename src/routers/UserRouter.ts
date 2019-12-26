import BaseRouter from "./BaseRouter";

// controller
import UserController from "../controllers/UsersController";
import { auth } from "../middlewares/AuthMiddleware";

class UserRouter extends BaseRouter {

  public routes(): void {
    this.router.get("/", auth, UserController.index);
    this.router.post("/", UserController.create);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  }
}

export default new UserRouter().router;

