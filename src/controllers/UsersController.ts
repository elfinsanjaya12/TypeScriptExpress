import { Request, Response } from "express"
import IController from "./InterfaceController";


// dummy
let data: any[] = [
  {
    id: 1,
    name: "Elfin"
  },
  {
    id: 2,
    name: "ega"
  },
  {
    id: 3,
    name: "Amri"
  }
]
class UserController implements IController {

  index(req: Request, res: Response): Response {
    return res.send(data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({
      id: id,
      name: name
    });
    return res.send("succes tambah data");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params
    // find ambil 1 data berdasarkan id
    let person = data.find(item => item.id == id)
    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find(item => item.id == id);
    person.name = name;

    return res.send("Success Update");
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    let person = data.filter(item => item.id != id);
    return res.send(person);
  }

}

export default new UserController();