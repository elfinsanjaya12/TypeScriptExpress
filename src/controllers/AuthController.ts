import { Request, Response } from "express"

class UserController {
  index(req: Request, res: Response): Response {
    return res.send("succes tambah data");
  }
  create(req: Request, res: Response): Response {
    return res.send("succes tambah data");
  }

}

export default new UserController();