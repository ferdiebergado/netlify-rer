// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { NextFunction, Request, Response } from 'express';
import express, { Router } from 'express';
import generate from './generator';

const server = express();
const router = Router();

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  console.error(err.stack);
  res.status(500).send({ error: 'Operation failed.' });
}

router.use(express.urlencoded({ extended: true }));

router.post('/generate', async (req, res) => {
  const region = req.body.region;
  const plate = await generate(region);

  res.json(plate);
});

router.use(errorHandler);

server.disable('x-powered-by');
server.use('/api/', router);

export default server;
