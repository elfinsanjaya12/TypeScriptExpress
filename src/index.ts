import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

// router
import UserRouter from "./routers/UserRouter";

// class app 
class App {
  public app: Application;

  // function yang dijalan saat kelas ini dipanggil
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    // mengubah data reques menjadi bentuk json
    this.app.use(bodyParser.json());
    // cetak endpoint
    this.app.use(morgan("dev"));
    // mempercepat pengolahan data
    this.app.use(compression());
    // mengamankan header
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    // endpoint method get
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Hallo");
    })

    this.app.use("/users", UserRouter);
  }
}

// setting port
const port: number = 8000;
// class app
const app = new App().app;
// running
app.listen(port, () => {
  console.log(`Server Running di port ${port}`);
})

