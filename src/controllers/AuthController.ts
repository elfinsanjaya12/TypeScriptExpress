import { Request, Response } from "express";
const db = require("../db/models");
import PasswordHash from '../utils/PasswordHash';

class UserController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    const createUser = await db.user.create({
      username,
      password: hashedPassword
    });
    return res.send(createUser);
  }
  login(req: Request, res: Response): Response {
    return res.send("succes tambah data");
  }

}

export default new UserController();