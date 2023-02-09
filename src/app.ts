import express, { Application, Request, Response } from "express";
import { pinoHttp } from "pino-http";

const app: Application = express();
const PORT = process.env.PORT || 3000;

const logger = pinoHttp({
  useLevel: 'info'
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  logger(req, res);

  req.log.info('Hello World')
  res.json({ status: "API is running" });
});

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
