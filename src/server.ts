import express, { Request, Response } from 'express';

import { env } from '@/config/env';
import { errorHandler } from '@/middlewares/errorHandler';

import { BaseError } from './errors/BaseError';

const PORT = env.port;

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: 'User 1',
    age: 10,
  },
  {
    id: 2,
    name: 'User 2',
    age: 20,
  },
  {
    id: 3,
    name: 'User 3',
    age: 30,
  },
];

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Template is ready.' });
});

app.get('/users', (_: Request, res: Response) => {
  res.status(200).json(users);
});

app.get('/users/:id', (request: Request, res: Response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === Number(id));

  if (!user) throw new BaseError(404, 'User Not Found.', 'NotFoundError');

  res.status(200).json(user);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
